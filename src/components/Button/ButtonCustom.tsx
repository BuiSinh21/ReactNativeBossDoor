import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import sty from '../../themes/sty';
import TextDisplay from '../TextDisplay';

interface ButtonCustomProps {
  text: string;
  color?: string;
  fontSize?: number;
  fontWeight?: 'bold' | 'semibold' | 'medium' | 'regular' | 'light';
  lineHeight?: number;
  style?: StyleProp<ViewStyle>;
  onPress: any;
  activeOpacity?: number;
  textAlign?: 'left' | 'center' | 'right' | 'justify' | undefined;
  disabled?: boolean;
  backgroundColor?: string;
  borderColor?: string;
}

const ButtonCustom = ({
  text,
  fontSize,
  color,
  lineHeight,
  fontWeight,
  style,
  onPress,
  activeOpacity,
  textAlign,
  disabled,
  backgroundColor,
  borderColor,
}: ButtonCustomProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={activeOpacity || 0.5}
      style={[
        sty.w_full,
        sty.p_8,
        sty.rounded_16,
        {
          backgroundColor: backgroundColor || '#3683F7',
          borderColor: borderColor || backgroundColor || '#3683F7',
        },
        sty.border_1,
        style,
      ]}>
      <TextDisplay
        text={text}
        color={color || '#fff'}
        lineHeight={lineHeight || 24}
        fontSize={fontSize || 16}
        fontWeight={fontWeight || 'semibold'}
        styles={{
          textAlign: textAlign || 'center',
        }}
      />
    </TouchableOpacity>
  );
};

export default ButtonCustom;
