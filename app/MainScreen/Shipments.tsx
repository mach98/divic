import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { ReactElement, useState } from 'react';
import ListItem, { ListItemProps } from '@/components/ListItem/ListItem';
import { ShipmentItem } from '@/types/Shipment';
import useRandomData from '@/hooks/useRandomData';
import { COLORS } from '@/themes/colors';
import { Ionicons } from '@expo/vector-icons';
import { ScanIcon } from '@/themes/icons';
import Checkbox from 'expo-checkbox';

const Shipments = () => {
  const [isChecked, setIsChecked] = useState(false);
  const data: ShipmentItem[] = useRandomData(20);

  const renderShipments = ({ item }: { item: ListItemProps }): ReactElement => {
    return <ListItem item={item} />;
  };

  const renderSeparator = () => {
    return <View style={{ height: 15 }} />;
  };
  return (
    <SafeAreaView
      style={{ padding: 15, backgroundColor: COLORS.primaryBackgroundColor }}
    >
      <Text style={{ fontSize: 20, marginBottom: 5 }}>Hello,</Text>
      <Text style={{ fontWeight: '700', fontSize: 25, marginBottom: 10 }}>
        Williams Bolade
      </Text>
      <View
        style={{
          backgroundColor: COLORS.listItemBackgroundColor,
          padding: 15,
          marginBottom: 15,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Ionicons name='search' size={25} color={COLORS.searchIconColor} />
        <TextInput
          placeholder='Search'
          placeholderTextColor={COLORS.searchIconColor}
          style={{ fontSize: 20, marginLeft: 10 }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
            backgroundColor: COLORS.listItemBackgroundColor,
            borderRadius: 10,
            width: '48%',
            justifyContent: 'space-evenly',
          }}
        >
          <Ionicons name='filter' size={25} color={COLORS.canceledText} />
          <Text style={{ fontSize: 20 }}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
            backgroundColor: COLORS.primary,
            borderRadius: 10,
            width: '48%',
            justifyContent: 'space-evenly',
          }}
        >
          <ScanIcon color={COLORS.listItemBackgroundColor} />
          <Text style={{ color: COLORS.listItemBackgroundColor, fontSize: 20 }}>
            Add Scan
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}
      >
        <Text style={{ fontWeight: '700', fontSize: 20 }}>Shipments</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}
        >
          <Checkbox style={{ marginRight: 7 }} />
          <Text style={{ fontSize: 20, color: COLORS.primary }}>Mark All</Text>
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderShipments}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
};

export default Shipments;
