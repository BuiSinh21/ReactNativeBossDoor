import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native';
import FormInputText2 from '../../../../../components/Form/FormInputText2';
import { useAppDispatch } from '../../../../../redux/hooks';
import sty from '../../../../../themes/sty';

const FormEditAccount = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigation<any>();
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("")
    const [cccd, setCCCD] = useState("")
    const [address, setAddress] = useState("")
    return (
        <View style={[sty.flex_1, styles.form]}>
            <FormInputText2
                title='Họ và tên'
                placeholder='Nhập họ và tên'
                value={name}
                onChange={(value: string) => setName(value)}
                required={true}
            />
            <View style={styles.dashedLine} />
            <FormInputText2
                title='Số điện thoại'
                value={phoneNumber}
                required={true}
                placeholder='Nhập số diện thoại'
                onChange={(value: string) => setPhoneNumber(value)}
            />
            <View style={styles.dashedLine} />

            <FormInputText2
                title='Số CCCD'
                required={true}
                placeholder='Nhập số CCCD'
                value={cccd}
                onChange={(value: string) => setCCCD(value)}
            />
            <View style={styles.dashedLine} />
            <FormInputText2
                minHeight={100}
                multiline={true}
                title='Địa chỉ'
                required={true}
                placeholder='Nhập địa chỉ'
                value={address}
                onChange={(value: string) => setAddress(value)}
            />
        </View >
    )
}

export default FormEditAccount;
const styles = StyleSheet.create({
    dashedLine: {
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#EDEFF2',
        marginVertical: 8,
        marginBottom: 19,
        borderRadius: 1,
    },
    form: {
        backgroundColor: "#fff",
        marginTop: 10,
        paddingTop: 15,
        paddingHorizontal: 15,
        borderRadius: 20
    }
})