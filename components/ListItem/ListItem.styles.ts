import { COLORS } from '@/themes/colors';
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  wrap: {
    backgroundColor: COLORS.listItemBackgroundColor,
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
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
  locationHeader: { color: COLORS.primary },
  locationDetail: { fontSize: 20 },
  locationAddress: { fontSize: 18 },
  locationDetailsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
