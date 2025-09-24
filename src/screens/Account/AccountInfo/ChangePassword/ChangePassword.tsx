import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FormChangePassword from './components/FormChangePassword';
import { GradientBackground, HeaderBack, DividerCustom, ButtonLoadMore } from '../../../../components';
import { useAppDispatch } from '../../../../redux/hooks';
import { setToast } from '../../../../redux/slices/commonSlice';
import sty from '../../../../themes/sty';
import { resetPassword } from '../../../../apis/technician';
const ChangePassword = () => {
    const insets = useSafeAreaInsets();
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("")
    const [rePassword, setRepassword] = useState("")
    const dispatch = useAppDispatch();

    const onChangePassword = async () => {
        try {
            if (oldPassword && newPassword && rePassword && oldPassword != "" && newPassword != "" && rePassword != "") {
                if (newPassword != rePassword) {
                    return dispatch(
                        setToast({
                            open: true,
                            title: 'Mật khẩu mới chưa trùng khớp',
                        }),
                    );
                }
                else {
                    // const res = await resetPassword({})
                    // if (res.status == 200) {
                    // }
                }
            }
            else {
                return dispatch(
                    setToast({
                        open: true,
                        title: 'Bạn hãy nhập đủ đủ 3 trường',
                    }),
                );
            }
        } catch (error) {

        }

    }
    return (
        <GradientBackground >
            <HeaderBack title='Đổi mật khẩu' />
            <KeyboardAvoidingView
                style={[sty.flex_1, { backgroundColor: "#F4F5F8" }]}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableOpacity
                    style={sty.flex_1}
                    activeOpacity={1}
                    onPress={Keyboard.dismiss}>
                    <ScrollView
                        contentContainerStyle={[
                            sty.p_16,
                            sty.gap_24,

                            { paddingBottom: insets.bottom + 16 },
                        ]}
                        showsVerticalScrollIndicator={false}>
                        <FormChangePassword
                            oldPassword={oldPassword}
                            newPassword={newPassword}
                            rePassword={rePassword}
                            setOldPassword={setOldPassword}
                            setNewPassword={setNewPassword}
                            setRepassword={setRepassword}
                        />
                    </ScrollView>
                </TouchableOpacity>
                <DividerCustom styles={[sty.mt_12]} height={1} color={"#F4F5F8"} />
                <View style={styles.footer}>
                    <ButtonLoadMore style={{ width: "85%", borderRadius: 20, paddingHorizontal: 20 }} fontText={16} color='#fff' height={50} onPress={() => onChangePassword()} bgColor='#3683F7' title='Lưu' />
                </View>
            </KeyboardAvoidingView>
        </GradientBackground>
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    Avatar: {
        width: 56,
        height: 56,
        objectFit: 'cover',
        borderWidth: 2,
        borderColor: '#1354D4',
        borderRadius: 9999,
    },
    bg_white: {
        backgroundColor: "#fff"
    },
    footer: {
        minHeight: 100,
        width: "100%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
    }
})