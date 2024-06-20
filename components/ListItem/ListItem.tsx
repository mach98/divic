import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import Checkbox from 'expo-checkbox';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Box } from '@/themes/images';
import { COLORS } from '@/themes/colors';

export type ListItemProps = {
  title: string;
  trackingNumber: number;
  origin: string;
  originAddress?: string;
  destination: string;
  destinationAddress?: string;
  tag: 'RECEIVED' | 'ERROR' | 'DELIVERED' | 'CANCELLED' | 'ON HOLD';
  isSelected: boolean;
  setIsSelected: () => void;
};

const getColorByTag = (tag: string) => {
  switch (tag) {
    case 'RECEIVED':
      return { text: COLORS.receivedText, color: COLORS.receivedColor };
    case 'ERROR':
      return { text: COLORS.errorText, color: COLORS.errorColor };
    case 'DELIVERED':
      return { text: COLORS.deliveredText, color: COLORS.deliveredColor };
    case 'CANCELLED':
      return { text: COLORS.canceledText, color: COLORS.canceledColor };
    case 'ON HOLD':
      return { text: COLORS.onHoldText, color: COLORS.onHoldColor };
    default:
      return { text: 'black', background: 'white' };
  }
};

const ListItem: FC<{ item: ListItemProps }> = ({ item }) => {
  const { text: textColor, background: backgroundColor } = getColorByTag(
    item.tag
  );
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: COLORS.listItemBackgroundColor,
        borderRadius: 10,
        justifyContent: 'space-between',
      }}
    >
      <Checkbox value={item.isSelected} onValueChange={item.setIsSelected} />
      <Image
        source={Box}
        style={{ width: 30, height: 30, marginHorizontal: 10 }}
      />
      <View>
        <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
        <Text>{item.trackingNumber}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginRight: 5 }}>{item.origin}</Text>
          <AntDesign name='arrowright' size={10} />
          <Text style={{ marginLeft: 5 }}>{item.destination}</Text>
        </View>
      </View>
      <Text
        style={{
          color: textColor,
          backgroundColor: backgroundColor,
          padding: 5,
          borderRadius: 3,
        }}
      >
        {item.tag}
      </Text>
      <MaterialCommunityIcons
        name='arrow-expand'
        size={20}
        style={{ backgroundColor: 'white', borderRadius: 50, padding: 10 }}
      />
    </TouchableOpacity>
  );
};

export default ListItem;
