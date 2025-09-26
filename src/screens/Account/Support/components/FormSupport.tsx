import { View, StyleSheet, Image, Text } from 'react-native'
import React, { use, useState } from 'react'

import { useNavigation } from '@react-navigation/native';
import FormInputText2 from '../../../../components/Form/FormInputText2';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import sty from '../../../../themes/sty';
import { IconAddress, IconGmail, IconPhone } from '../../../../components/Icons';
import { TextDisplay } from '../../../../components';
import { appColor } from '../../../../constant/appColor';
import IMAGES from '../../../../assets/images';
import { formatPhoneNumber } from '../../../../common/until';

const FormSupport = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigation<any>()
    const { user } = useAppSelector(state => state.auth);
    return (
        <View style={[styles.form]}>
            <View style={[sty.flexRow, sty.itemsCenter, sty.mb_12]}>
                <View style={styles.icon}>
                    <Image style={{ width: 20, height: 20 }} source={IMAGES.ACCOUNT.phone}></Image>
                </View>
                <View >
                    <TextDisplay lineHeight={30} text={"Hotline"}></TextDisplay>
                    <TextDisplay text={formatPhoneNumber(user?.phone)} color={appColor.primary} fontSize={16}></TextDisplay>
                </View>
            </View>
            <View style={styles.dashedLine} />
            <View style={[sty.flexRow, sty.itemsCenter, sty.mb_12]}>
                <View style={styles.icon}>
                    <Image style={{ width: 24, height: 20 }} source={IMAGES.ACCOUNT.gmail}></Image>
                </View>
                <View >
                    <TextDisplay lineHeight={30} text={"Gmail"}></TextDisplay>
                    <TextDisplay text={"Giaiphapcua@gmail.com"} color={appColor.primary} fontSize={16}></TextDisplay>
                </View>
            </View>
            <View style={styles.dashedLine} />

            <View style={[sty.flexRow, sty.itemsCenter, sty.mb_12]}>
                <View style={styles.icon}>
                    <Image style={{ width: 20, height: 24 }} source={IMAGES.ACCOUNT.address}></Image>
                </View>
                <View style={{ flex: 1 }} >
                    <TextDisplay lineHeight={30} text={"Địa chỉ"}></TextDisplay>
                    <Text numberOfLines={2} style={{ color: appColor.primary, fontSize: 16, fontWeight: '600' }} >
                        {user?.address}
                    </Text>
                </View>
            </View>

        </View >
    )
}

export default FormSupport;
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
        paddingBottom: 15,
        paddingRight: 15,
        paddingHorizontal: 15,
        borderRadius: 20
    },
    icon: {
        padding: 15,
        display: "flex",
        backgroundColor: "#E1ECFE",
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginRight: 15,
        width: 60,
        height: 60
    }
})