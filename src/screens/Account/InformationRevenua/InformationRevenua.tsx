import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';
import ListHistoryOrder from './components/ListHistoryOrder';
import { DividerCustom, GradientBackground, HeaderBack, TextDisplay } from '../../../components';
import sty from '../../../themes/sty';
import { appColor } from '../../../constant/appColor';
import IMAGES from '../../../assets/images';
import { useAppSelector } from '../../../redux/hooks';
import { formatPhoneNumber } from '../../../common/until';
import BoardInforRevenua from './components/BoardInforRevenua';

const RevenuaInformation = () => {
    const insets = useSafeAreaInsets();
    const navigate = useNavigation<any>();
    const { detailTechnician } = useAppSelector(state => state.technician);
    const { user, userDisplay } = useAppSelector(state => state.auth);
    const route = useRoute();
    const { data } = route.params as { data: { check: boolean } };

    return (
        <GradientBackground>
            <HeaderBack title='Thông tin doanh thu' />
            <DividerCustom styles={sty.mt_12} height={18} color={appColor.bgGray} />
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
                            sty.gap_24,
                            { paddingBottom: insets.bottom + 16 },
                        ]}
                        showsVerticalScrollIndicator={false}>
                        {data && data.check == true ? <></> :
                            <View style={styles.box} >
                                <View style={[sty.flexRow, sty.selfCenter, sty.gap_8]}>
                                    <Image style={{ width: 52, height: 52 }}
                                        source={
                                            detailTechnician && detailTechnician.technician?.avatar
                                                ? { uri: detailTechnician?.technician?.avatar }
                                                : IMAGES.PROFILE.avatar_default
                                        }
                                    ></Image>
                                    <View style={[sty.flex_2, sty.selfCenter]}>
                                        <TextDisplay color={appColor.textBlack} text={detailTechnician?.technician?.full_name}></TextDisplay>
                                        <TextDisplay text={formatPhoneNumber(detailTechnician?.technician?.phone)}></TextDisplay>
                                    </View>
                                </View>

                            </View>
                        }


                        <BoardInforRevenua></BoardInforRevenua>
                        <ListHistoryOrder />
                    </ScrollView>
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </GradientBackground>
    )
}

export default RevenuaInformation

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

})