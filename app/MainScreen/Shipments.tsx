import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React, { ReactElement, useState } from 'react';
import ListItem, { ListItemProps } from '@/components/ListItem/ListItem';
import { ShipmentItem } from '@/types/Shipment';
import useRandomData from '@/hooks/useRandomData';
import { COLORS } from '@/themes/colors';

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
    <SafeAreaView style={{ padding: 15, backgroundColor: 'white' }}>
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
