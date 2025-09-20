import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import Header from './components/Header'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import BoardInfor from './components/BoardInfor';
import ListHistoryOrder from './components/ListHistoryOrder';
import { DividerCustom, GradientBackground, HeaderBack, TextDisplay } from '../../../components';
import sty from '../../../themes/sty';
import { appColor } from '../../../constant/appColor';
import IMAGES from '../../../assets/images';
import { IconArrowRight } from '../../../components/Icons';

const RevenuaInformation = () => {
    const insets = useSafeAreaInsets();
    const navigate = useNavigation<any>();
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
                        <View style={styles.box} >
                            <View style={[sty.flexRow, sty.selfCenter, sty.gap_8]}>
                                <Image style={{ width: 52, height: 52 }} source={IMAGES.ACCOUNT.imageTest}></Image>
                                <View style={[sty.flex_2, sty.selfCenter]}>
                                    <TextDisplay color={appColor.textBlack} text={"Nguyễn Đức B"}></TextDisplay>
                                    <TextDisplay text={"0987147414"}></TextDisplay>
                                </View>
                            </View>
                        </View>


                        <BoardInfor></BoardInfor>
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