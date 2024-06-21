import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, { ReactElement, useState, useRef } from 'react';
import ListItem, { ListItemProps } from '@/components/ListItem/ListItem';
import { ShipmentItem } from '@/types/Shipment';
import useRandomData from '@/hooks/useRandomData';
import { COLORS } from '@/themes/colors';
import { Ionicons } from '@expo/vector-icons';
import { ScanIcon } from '@/themes/icons';
import Checkbox from 'expo-checkbox';
import SButtonWithIcon from '@/components/Button/SButtonWithIcon';
import BottomSheet from '@gorhom/bottom-sheet';
import { FilterMenu } from '@/components/Menus/FilterMenu';

const Shipments = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedShipmentStatus, setSelectedShipmentStatus] = useState([]);
  const filterMenuRef = useRef<BottomSheet>(null);
  const data: ShipmentItem[] = useRandomData(20);

  const renderShipments = ({ item }: { item: ListItemProps }): ReactElement => {
    return <ListItem item={item} />;
  };

  const renderSeparator = () => {
    return <View style={{ height: 15 }} />;
  };
  const openFilterMenu = () => {
    filterMenuRef.current?.expand();
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
        <SButtonWithIcon
          title='Filters'
          onPress={openFilterMenu}
          buttonColor={COLORS.listItemBackgroundColor}
          fontColor={COLORS.canceledText}
          style={{ width: '48%' }}
        >
          <Ionicons name='filter' size={25} color={COLORS.canceledText} />
        </SButtonWithIcon>
        <SButtonWithIcon
          title='Add Scan'
          onPress={() => {}}
          style={{ width: '48%' }}
        >
          <ScanIcon color={COLORS.listItemBackgroundColor} />
        </SButtonWithIcon>
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
        style={{ height: '80%' }}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderShipments}
        ItemSeparatorComponent={renderSeparator}
      />
      <FilterMenu ref={filterMenuRef} />
    </SafeAreaView>
  );
};

export default Shipments;
