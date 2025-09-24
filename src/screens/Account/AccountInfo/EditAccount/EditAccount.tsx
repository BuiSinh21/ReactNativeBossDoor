import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FormEditAccount from './components/FormEditAccount';
import { GradientBackground, HeaderBack, DividerCustom, ButtonLoadMore } from '../../../../components';
import sty from '../../../../themes/sty';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { updateTechnician } from '../../../../apis/technician';
import { setModalLoading } from '../../../../redux/slices/commonSlice';
import { handleErrorMessage } from '../../../../utils/helpers';
import { UserAccount } from '../../../../interfaces/auth';

const EditAccount = () => {
    const insets = useSafeAreaInsets();
    const { user } = useAppSelector(state => state.auth);
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("")
    const [cccd, setCCCD] = useState("")
    const [address, setAddress] = useState("")
    const [data, setData] = useState<UserAccount | undefined>(undefined)
    const dispatch = useAppDispatch()
    const [check, setCheck] = useState<boolean>(true);
    useEffect(() => {
        if (user) {
            setName(user.full_name);
            setPhoneNumber(user.phone)
            setCCCD(user.cccd)
            setAddress(user.address)
            setData(user);
        }
    }, [user])
    const handleSave = async () => {
        try {
            dispatch(setModalLoading(true));
            if (check == true) {
              const customdata = {
                ...data,
                address: address,
                full_name: name,
                cccd: cccd,
                phone: phoneNumber
            };
            console.log(customdata);
            
                const res = await updateTechnician(customdata)
                if (res.status == 200) {
                }
            }
        } catch (error) {
            dispatch(setModalLoading(false));
            handleErrorMessage(error);
        }
    }
    return (
        <GradientBackground >
            <HeaderBack title='Chỉnh sửa thông tin' />
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
                        <FormEditAccount
                            name={name}
                            setName={setName}
                            phoneNumber={phoneNumber}
                            setPhoneNumber={setPhoneNumber}
                            cccd={cccd}
                            setCCCD={setCCCD}
                            address={address}
                            setAddress={setAddress}
                            setCheck={setCheck}
                        />
                    </ScrollView>
                </TouchableOpacity>
                <DividerCustom styles={[sty.mt_12]} height={1} color={"#F4F5F8"} />
                <View style={styles.footer}>
                    <ButtonLoadMore style={{ width: "85%", borderRadius: 20, paddingHorizontal: 20 }} fontText={16} color='#fff' height={50} onPress={() => handleSave()} bgColor='#3683F7' title='Lưu' />
                </View>
            </KeyboardAvoidingView>
        </GradientBackground>
    )
}

export default EditAccount

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