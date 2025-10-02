import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import sty from '../../themes/sty';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IMAGES from '../../assets/images';
import {
  ButtonCustom,
  GradientBackground,
  TextDisplay,
  TextGradient,
} from '../../components';
import { FONT_FAMILY } from '../../themes/fontFamily';
import stylesComponent from '../../themes/styComponents';
import { useAppDispatch } from '../../redux/hooks';
import { setModalLoading, setToast, setToastNoti } from '../../redux/slices/commonSlice';
// import {loginAPI, saveFcmToken} from '../../apis/auth';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { BOTTOM_TAB_ROUTES, ROOT_ROUTES } from '../../routes';
import {
  setAccessToken,
  setRefreshToken,
  setUser,
} from '../../redux/slices/authSlice';
import { handleErrorMessage } from '../../utils/helpers';
import { loginAPI } from '../../apis/auth';

const Login = () => {
  const navigate = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);

  // const handleSavefcmToken = async () => {
  //   try {
  //     const fcmToken = await messaging().getToken();
  //     if (fcmToken) {
  //       dispatch(setFcmToken(fcmToken));
  //       await saveFcmToken({
  //         fcm_token: fcmToken,
  //       });
  //     } else {
  //       showUnknownError(
  //         'Có lỗi xảy ra khi cấp quyền thông báo. Vui lòng thử lại.',
  //       );
  //     }
  //   } catch (error) {
  //     handleErrorMessage(
  //       error,
  //       undefined,
  //       'Có lỗi xảy ra khi cấp quyền thông báo. Vui lòng thử lại.',
  //     );
  //   }
  // };

  const handleLogin = async () => {
    try {
      if (name?.trim()?.length <= 0) {
        return dispatch(
          setToast({
            open: true,
            title: 'Tên tài khoản là bắt buộc',
          }),
        );
      }
      if (pass?.trim()?.length <= 0) {
        return dispatch(
          setToast({
            open: true,
            title: 'Mật khẩu là bắt buộc',
          }),
        );
      }
      dispatch(setModalLoading(true));

      const res = await loginAPI({
        username: name,
        password: pass,
      });
      if (res.status == 200) {
        dispatch(setAccessToken(res?.data?.data?.access_token));
        dispatch(setRefreshToken(res?.data?.data?.refresh_token));
        dispatch(setUser(res?.data?.data?.technician))
        navigate.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: ROOT_ROUTES.BOTTOM_TAB_STACK,
                params: {
                  screen: BOTTOM_TAB_ROUTES.HOME,
                },
              },
            ],
          }),
        );
      }
      dispatch(setModalLoading(false));
    } catch (error) {
      dispatch(setModalLoading(false));
      handleErrorMessage(error, {
        400: 'Tài khoản hoặc mật khẩu không chính xác.',
        401: 'Tài khoản hoặc mật khẩu không chính xác.',
        404: 'Tài khoản hoặc mật khẩu không chính xác.',
        405: 'Tài khoản của bạn chưa được kích hoạt.',
        422: 'Tài khoản hoặc mật khẩu không chính xác.',
      });
    }
  };
  return (

    <GradientBackground colors={['#1268EA', '#1268EA']}>
      <ImageBackground
        source={IMAGES.LOGIN.bg_image}
        style={sty.flex_1}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          style={sty.flex_1}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableOpacity
            style={sty.flex_1}
            activeOpacity={1}
            onPress={Keyboard.dismiss}>
            <ScrollView
              contentContainerStyle={[
                sty.p_16,
                { paddingBottom: insets.bottom + 160 },
              ]}
              showsVerticalScrollIndicator={false}>

              <View
                style={[
                  sty.gap_8,
                  sty.itemsCenter,
                  {
                    paddingTop: insets.top + 24,
                  },
                ]}>
                <Text style={styles.Text}>Đăng nhập</Text>
              </View>
              <View
                style={[
                  sty.gap_8,
                  sty.itemsCenter,
                  {
                    paddingTop: insets.top - 5,
                  },
                ]}>
                <Image source={IMAGES.LOGIN.logo} style={styles.Logo} />
              </View>
              <View style={styles.FormCover}>
                <TextDisplay text={"Chào mừng đến với"} color='#535862' styles={{ fontWeight: '500' }}  ></TextDisplay>
                <TextGradient
                  startColor="#3683F7"
                  endColor="#3FBFFF"
                  fontSize={20}
                  textAnchor='end'
                  text={"Giải pháp Cửa"}
                  fontWeight={'bold'}
                />
                <TouchableOpacity style={styles.FormLogin} activeOpacity={1}>
                  <View style={styles.InputPassword}>
                    <TextInput
                      style={styles.Input}
                      placeholder="Nhập tên tài khoản"
                      placeholderTextColor="#838C97"
                      value={name}
                      onChangeText={value => setName(value)}
                    />
                    {name?.length > 0 && (
                      <TouchableOpacity
                        style={styles.ButtonPassword}
                        activeOpacity={0.8}
                        onPress={() => setName('')}>
                        <Image
                          source={IMAGES.FORM.icon_clear_value}
                          style={[sty.w_24, sty.h_24, sty.objectScaleDown]}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                  <View style={styles.InputPassword}>
                    <TextInput
                      style={styles.Input}
                      placeholder="Nhập mật khẩu"
                      placeholderTextColor="#838C97"
                      value={pass}
                      secureTextEntry={!show}
                      onChangeText={value => setPass(value)}
                    />
                    <TouchableOpacity
                      style={styles.ButtonPassword}
                      activeOpacity={0.8}
                      onPress={() => setShow(!show)}>
                      <Image
                        source={
                          show
                            ? IMAGES.LOGIN.icon_display_pass
                            : IMAGES.LOGIN.icon_hidden_pass
                        }
                        style={[sty.w_24, sty.h_24, sty.objectScaleDown]}
                      />
                    </TouchableOpacity>
                  </View>
                  <TextDisplay text={"Quên mật khẩu?"} color='#3683F7' styles={{ fontWeight: '500' }}  ></TextDisplay>
                  <ButtonCustom text="Đăng nhập"
                    lineHeight={30}
                    onPress={() => handleLogin()}
                  />

                </TouchableOpacity>
              </View>
            </ScrollView>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
    </GradientBackground >
  );
};

export default Login;

const styles = StyleSheet.create({
  Logo: {
    width: 200,
    height: 200,
    objectFit: 'scale-down',
  },
  HeadingApp: {
    fontSize: 26,
    lineHeight: 34,
  },
  FormLogin: {
    marginVertical: 12,
    gap: 14,
  },
  InputPassword: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#dbdfe5',
    paddingHorizontal: 12,
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  Input: {
    flex: 1,
    height: 42,
    fontSize: 16,
    color: '#435869',
    fontFamily: FONT_FAMILY.BeVietnamPro_Medium
  },
  ButtonPassword: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  BackgroundLogin: {
    flex: 1
  },
  Text: {
    fontWeight: '700',
    color: '#FFF',
    fontSize: 25,
    lineHeight: 28,
    fontFamily: FONT_FAMILY.BeVietnamPro_Medium
  },
  FormCover: {
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 30
  },
});
