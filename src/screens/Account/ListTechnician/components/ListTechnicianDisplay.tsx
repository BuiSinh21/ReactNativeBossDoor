import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import sty from '../../../../themes/sty';
import { TextDisplay } from '../../../../components';
import { appColor } from '../../../../constant/appColor';
import { formatPrice, handleErrorMessage } from '../../../../utils/helpers';
import IMAGES from '../../../../assets/images';
import { IconArrowRight } from '../../../../components/Icons';
import { PROFILE_ROUTES, ROOT_ROUTES } from '../../../../routes';
import { showTechniciant } from '../../../../apis/technician';
import { UserAccount } from '../../../../interfaces/auth';
import { setDetailTechnician } from '../../../../redux/slices/technician';
import { formatPhoneNumber } from '../../../../common/until';

const ListTechnicianDisplay = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigation<any>();
    const { result: listTechnician } = useAppSelector(state => state.technician);
    const getDetailTechnician = async (id: number) => {
        try {
            if (id) {
                const res = await showTechniciant(id);
                if (res.status == 200) {
                    const data = res.data?.data
                    dispatch(setDetailTechnician(data));
                    navigate.navigate(ROOT_ROUTES.PROFILE_STACK, {
                        screen: PROFILE_ROUTES.REVENUA_INFO,
                        params: { data: { check: false } },
                    })
                }
            }
        } catch (error) {
            handleErrorMessage(error)
        }
    }
    return (

        <View style={[sty.flex_1]}>
            <TextDisplay text={"Danh sách kỹ thuật viên"} color={appColor.textBlack} />
            {listTechnician.map((item, index: number) =>
                <View key={"key_" + index} style={styles.box} >
                    <TouchableOpacity style={{ width: "100%" }} onPress={() =>
                        getDetailTechnician(item.id)
                    }>
                        <View style={[sty.flexRow, sty.selfCenter, sty.gap_8]}>
                            <Image source={
                                item && item.avatar
                                    ? { uri: item.avatar }
                                    : IMAGES.PROFILE.avatar_default
                            } style={{ width: 52, height: 52 }} ></Image>
                            <View style={[sty.flex_2, sty.selfCenter]}>
                                <TextDisplay color={appColor.textBlack} text={item.full_name}></TextDisplay>
                                <TextDisplay text={formatPhoneNumber(item.phone)}></TextDisplay>
                            </View>
                            <View style={[styles.around, sty.flexRow, sty.selfCenter]}>
                                <IconArrowRight />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        </View >
    )
}

export default ListTechnicianDisplay;
const styles = StyleSheet.create({
    box: {
        display: "flex",
        alignSelf: 'center',
        backgroundColor: "#FAFBFC",
        marginVertical: 7,
        borderColor: '#EDEFF2',
        borderWidth: 1,
        padding: 10,
        borderRadius: 15
    },
    around: {
        backgroundColor: "#E6E7EA",
        padding: 8,
        borderRadius: '100%'
    }
})