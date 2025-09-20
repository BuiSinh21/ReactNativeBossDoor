import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Header from './components/Header'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import BoardInfor from './components/BoardInfor';
import { DividerCustom, GradientBackground, HeaderBack } from '../../../components';
import sty from '../../../themes/sty';
import { appColor } from '../../../constant/appColor';
import ListTechnicianDisplay from './components/ListTechnicianDisplay';

const ListTechnician = () => {
    const insets = useSafeAreaInsets();
    const navigate = useNavigation<any>();
    return (
        <GradientBackground>
            <HeaderBack title='Thông tin doanh thu' />
            <DividerCustom styles={sty.mt_12} height={18}  color={appColor.bgGray}/>
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
                        <BoardInfor></BoardInfor>
                        <ListTechnicianDisplay />
                    </ScrollView>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </GradientBackground>
    )
}

export default ListTechnician