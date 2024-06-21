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
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Box } from '@/themes/images';
import { COLORS } from '@/themes/colors';
import ListItemCollapsibleContainer from './ListItemCollapsibleContainer';
import { styles } from './ListItem.styles';
import SButtonWithIcon from '../Button/SButtonWithIcon';

export type ListItemProps = {
  title: string;
  trackingNumber: number;
  origin: string;
  originAddress?: string;
  destination: string;
  destinationAddress?: string;
  tag: 'RECEIVED' | 'ERROR' | 'DELIVERED' | 'CANCELLED' | 'ON HOLD';
};

interface ListItemInterface {
  item: ListItemProps;
  isChecked: boolean;
  onCheck: () => void;
}

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

const ListItem: FC<ListItemInterface> = ({ item, isChecked, onCheck }) => {
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
        <Checkbox
          value={isChecked}
          onValueChange={onCheck}
          color={isChecked ? COLORS.primary : undefined}
        />
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
          <View style={styles.locationDetailsSection}>
            <View>
              <Text style={styles.locationHeader}>Origin</Text>
              <Text style={styles.locationDetail}>{item.origin}</Text>
              <Text style={styles.locationAddress}>{item.originAddress}</Text>
            </View>
            <AntDesign name='arrowright' size={30} color={COLORS.primary} />
            <View>
              <Text style={styles.locationHeader}>Destination</Text>
              <Text style={styles.locationDetail}>{item.destination}</Text>
              <Text style={styles.locationAddress}>
                {item.destinationAddress}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <SButtonWithIcon
              title='Call'
              onPress={() => {}}
              borderRadius={10}
              buttonColor={COLORS.callButtonColor}
            >
              <Ionicons
                name='call'
                color={COLORS.primaryBackgroundColor}
                size={25}
              />
            </SButtonWithIcon>
            <SButtonWithIcon
              title='Whatsapp'
              onPress={() => {}}
              buttonColor={COLORS.whatsappButtonColor}
              borderRadius={10}
            >
              <Ionicons
                name='logo-whatsapp'
                color={COLORS.primaryBackgroundColor}
                size={25}
              />
            </SButtonWithIcon>
          </View>
        </View>
      </ListItemCollapsibleContainer>
    </View>
  );
};

export default ListItem;
