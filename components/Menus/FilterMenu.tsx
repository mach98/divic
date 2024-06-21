import React, { forwardRef, useMemo, FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { COLORS } from '@/themes/colors';
import { SHIPMENT_STATUS } from '@/data';

interface FilterMenuProps {
  selectedShipmentStatus: string;
  setSelectedShipmentStatus: () => void;
  onPress: () => void;
}

type Ref = BottomSheet;

export const FilterMenu: FC<FilterMenuProps> = forwardRef<Ref, FilterMenuProps>(
  (props, ref) => {
    const snapPoints = useMemo(() => ['45%'], []);

    return (
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <View style={styles.contentContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  color: COLORS.primary,
                  fontSize: 20,
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>Filters</Text>
            <TouchableOpacity>
              <Text style={{ color: COLORS.primary, fontSize: 20 }}>Done</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 10,
              borderBottomWidth: 3,
              width: '100%',
              borderColor: COLORS.listItemBackgroundColor,
            }}
          />
          <Text
            style={{
              alignSelf: 'flex-start',
              marginTop: 10,
              color: COLORS.canceledText,
              fontWeight: '600',
              fontSize: 15,
            }}
          >
            SHIPMENT STATUS
          </Text>
          <FlatList
            data={SHIPMENT_STATUS}
            style={{ marginTop: 10, width: '100%' }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  padding: 10,
                  paddingHorizontal: 15,
                  backgroundColor: COLORS.listItemBackgroundColor,
                  margin: 5,
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: COLORS.canceledText, fontSize: 20 }}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
            numColumns={3}
          />
        </View>
      </BottomSheet>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
  },
});

export default FilterMenu;
