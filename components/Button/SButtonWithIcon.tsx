import { View, Text, TouchableOpacity } from 'react-native';
import React, { ReactNode } from 'react';
import { SButtonProps } from './SButton';
import { styles } from './Button.style';
import { COLORS } from '@/themes/colors';

export interface SButtonWithIconProps extends SButtonProps {
  children: ReactNode;
}

const SButtonWithIcon: React.FC<SButtonWithIconProps> = ({
  children,
  title,
  onPress,
  fontColor = COLORS.primaryBackgroundColor,
  buttonColor = COLORS.primary,
  buttonTitleWeight = 'normal',
  borderColor = COLORS.primaryBackgroundColor,
  titleSize = 18,
  borderThickness = 1,
  borderRadius = 7,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.SButtonWithIcon,
        {
          backgroundColor: buttonColor,
          borderColor: borderColor,
          borderWidth: borderThickness,
          borderRadius: borderRadius,
        },
        style,
      ]}
    >
      <View style={styles.SButtonIconContainer}>{children}</View>
      <Text
        style={{
          color: fontColor,
          fontWeight: buttonTitleWeight,
          fontSize: titleSize,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SButtonWithIcon;
