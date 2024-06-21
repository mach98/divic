import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  LayoutChangeEvent,
  TouchableOpacity,
} from 'react-native';
import React, { FC, useState } from 'react';
import Checkbox from 'expo-checkbox';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Box } from '@/themes/images';
import { COLORS } from '@/themes/colors';
import ListItemCollapsibleContainer from './ListItemCollapsibleContainer';

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
  const [expanded, setExpanded] = useState(false);
  const { text: textColor, background: backgroundColor } = getColorByTag(
    item.tag
  );
  const onItemPress = () => {
    setExpanded(!expanded);
  };
  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        <Checkbox value={item.isSelected} onValueChange={item.setIsSelected} />
        <Image source={Box} style={styles.boxImg} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.trackingNumber}</Text>
          <View style={styles.locationSection}>
            <Text style={styles.origin}>{item.origin}</Text>
            <AntDesign name='arrowright' size={10} />
            <Text style={styles.destination}>{item.destination}</Text>
          </View>
        </View>
        <Text
          style={[
            styles.tag,
            { color: textColor, backgroundColor: backgroundColor },
          ]}
        >
          {item.tag}
        </Text>
        <TouchableOpacity onPress={onItemPress}>
          <MaterialCommunityIcons
            name='arrow-expand'
            size={20}
            style={styles.expandButton}
          />
        </TouchableOpacity>
      </View>
      <ListItemCollapsibleContainer expanded={expanded}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View>
              <Text style={{ color: COLORS.primary }}>Origin</Text>
              <Text style={{ fontSize: 20 }}>{item.origin}</Text>
              <Text style={{ fontSize: 18 }}>{item.originAddress}</Text>
            </View>
            <AntDesign name='arrowright' size={30} color={COLORS.primary} />
            <View>
              <Text style={{ color: COLORS.primary }}>Destination</Text>
              <Text style={{ fontSize: 20 }}>{item.destination}</Text>
              <Text style={{ fontSize: 18 }}>{item.destinationAddress}</Text>
            </View>
          </View>
        </View>
      </ListItemCollapsibleContainer>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: COLORS.listItemBackgroundColor,
    borderRadius: 10,
    padding: 15,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  boxImg: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  locationSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  origin: {
    marginRight: 5,
  },
  destination: {
    marginLeft: 5,
  },
  tag: {
    padding: 5,
    borderRadius: 3,
  },
  expandButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
  },
});
