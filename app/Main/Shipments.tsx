import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import React, {
  ReactElement,
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react';
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
  const data: ShipmentItem[] = useRandomData(20);
  const [isChecked, setIsChecked] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );
  const [shipments, setShipments] = useState<ShipmentItem[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [markAll, setMarkAll] = useState(false);
  const [selectedShipmentStatus, setSelectedShipmentStatus] = useState<
    string[]
  >([]);
  const filterMenuRef = useRef<BottomSheet>(null);

  const handleCheckboxChange = (index: number) => {
    const updatedCheckedItems = [...isChecked];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setIsChecked(updatedCheckedItems);
  };

  const handleMarkAll = () => {
    const allChecked = !markAll;
    setMarkAll(allChecked);
    setIsChecked(new Array(data.length).fill(allChecked));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setShipments(data);
      setRefreshing(false);
    }, 2000);
  }, [data]);

  const renderShipments = ({
    item,
    index,
  }: {
    item: ListItemProps;
    index: number;
  }): ReactElement => {
    return (
      <ListItem
        item={item}
        isChecked={isChecked[index]}
        onCheck={() => handleCheckboxChange(index)}
      />
    );
  };

  const renderSeparator = () => {
    return <View style={{ height: 15 }} />;
  };
  const openFilterMenu = () => {
    filterMenuRef.current?.expand();
  };

  useEffect(() => {
    setShipments(data);
  }, [data]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Hello,</Text>
      <Text style={styles.profileText}>Williams Bolade</Text>
      <View style={styles.searchBar}>
        <Ionicons name='search' size={25} color={COLORS.searchIconColor} />
        <TextInput
          placeholder='Search'
          placeholderTextColor={COLORS.searchIconColor}
          style={styles.searchInput}
        />
      </View>
      <View style={styles.buttonSection}>
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
      <View style={styles.shipmentSubheader}>
        <Text style={styles.shipmentText}>Shipments</Text>
        <View style={styles.markAllSection}>
          <Checkbox
            style={{ marginRight: 7 }}
            value={markAll}
            onValueChange={handleMarkAll}
            color={markAll ? COLORS.primary : undefined}
          />
          <Text style={styles.markAllText}>Mark All</Text>
        </View>
      </View>
      <FlatList
        style={{ height: '80%' }}
        data={shipments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderShipments}
        ItemSeparatorComponent={renderSeparator}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <FilterMenu
        ref={filterMenuRef}
        selectedShipmentStatus={selectedShipmentStatus}
        setSelectedShipmentStatus={setSelectedShipmentStatus}
      />
    </SafeAreaView>
  );
};

export default Shipments;

const styles = StyleSheet.create({
  container: { padding: 15, backgroundColor: COLORS.primaryBackgroundColor },
  welcomeText: { fontSize: 20, marginBottom: 5 },
  profileText: { fontWeight: '700', fontSize: 25, marginBottom: 10 },
  searchBar: {
    backgroundColor: COLORS.listItemBackgroundColor,
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: { fontSize: 20, marginLeft: 10 },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  shipmentSubheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  shipmentText: { fontWeight: '700', fontSize: 20 },
  markAllSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  markAllText: { fontSize: 18, color: COLORS.primary },
});
