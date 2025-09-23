import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  TextInputProps,
  KeyboardType,
} from 'react-native';
import React, { ReactNode, useState } from 'react';
import { Touchable } from 'react-native';
import { appColor } from '../../constant/appColor';
import { FONT_FAMILY } from '../../themes/fontFamily';
import TextDisplay from '../TextDisplay';
// import {EyeSlash} from 'iconsax-react-native';
// import {appColors} from '../constants/appColors';
// import {globalStyles} from '../styles/globalStyles';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
  title?: string,
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  isPassword?: boolean;
  allowClear?: boolean;
  multiline?: boolean;
  type?: KeyboardType;
  onEnd?: () => void;
  minHeight?: number;
  required?: boolean;
}

const FormInputText2 = (props: Props) => {
  const {
    value,
    onChange,
    title,
    placeholder,
    isPassword,
    type,
    minHeight,
    multiline,
    onEnd,
    required
  } = props;

  const [isShowPass, setIsShowPass] = useState(isPassword ?? false);
  const [error, setError] = useState<string | null>(null);
  const handleEndEditing = () => {
    if (required && !value.trim()) {
      setError(`${title} không được để trống`);
    } else {
      setError(null);
    }
    onEnd && onEnd();
  };
  return (
    <>
      {title &&
        <TextDisplay text={title} fontSize={14} styles={{ marginBottom: 10 }}>
        </TextDisplay>
      }
      <View style={[styles.inputContainer, { marginBottom: error ? 0 : 15 }]}>
        <TextInput
          style={[styles.input, { minHeight: minHeight || 50, paddingTop: multiline ? 10 : 0 }]}
          value={value}
          placeholder={placeholder ?? ''}
          onChangeText={val => onChange(val)}
          secureTextEntry={isShowPass}
          placeholderTextColor={'#747688'}
          keyboardType={type ?? 'default'}
          autoCapitalize="none"
          onEndEditing={handleEndEditing}
          multiline={multiline || false}
        />
      </View>
      {error && <Text style={{ color: 'red', paddingLeft: 10, marginTop: 5 }}>{error}</Text>}
    </>
  );
};

export default FormInputText2;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: appColor.colorBorder,
    width: '100%',

    // shadow Android
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,

  },

  input: {
    margin: 0,
    color: appColor.textBlack,
    fontFamily: FONT_FAMILY.BeVietnamPro_Medium,
    fontWeight: '500',
    flex: 1
  },
});