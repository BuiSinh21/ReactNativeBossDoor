import { View, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useNavigation } from '@react-navigation/native';
import FormInputText2 from '../../../../../components/Form/FormInputText2';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import sty from '../../../../../themes/sty';
interface Props {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    phoneNumber: string,
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>
    cccd: string,
    setCCCD: React.Dispatch<React.SetStateAction<string>>
    address: string;
    setAddress: React.Dispatch<React.SetStateAction<string>>
    setCheck: React.Dispatch<React.SetStateAction<boolean>>
}
const FormEditAccount = (props: Props) => {
    return (
        <View style={[sty.flex_1, styles.form]}>
            <FormInputText2
                title='Họ và tên'
                placeholder='Nhập họ và tên'
                value={props.name}
                onChange={(value: string) => props.setName(value)}
                required={true}
                setCheck={props.setCheck}
            />
            <View style={styles.dashedLine} />
            <FormInputText2
                title='Số điện thoại'
                value={props.phoneNumber}
                required={true}
                type='numeric'
                setCheck={props.setCheck}
                placeholder='Nhập số diện thoại'
                onChange={(value: string) => props.setPhoneNumber(value)}
            />
            <View style={styles.dashedLine} />

            <FormInputText2
                title='Số CCCD'
                required={true}
                placeholder='Nhập số CCCD'
                type='numeric'
                value={props.cccd}
                setCheck={props.setCheck}
                onChange={(value: string) => props.setCCCD(value)}
            />
            <View style={styles.dashedLine} />
            <FormInputText2
                minHeight={100}
                multiline={true}
                title='Địa chỉ'
                setCheck={props.setCheck}
                required={true}
                placeholder='Nhập địa chỉ'
                value={props.address}
                onChange={(value: string) => props.setAddress(value)}
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