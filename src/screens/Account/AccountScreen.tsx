import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Header from './components/Header'
import { DividerCustom, GradientBackground } from '../../components';
import sty from '../../themes/sty';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BoardInfor from './components/BoardInfor';
import ListNavigation from './components/ListNavigation';
import { useNavigation } from '@react-navigation/core';
import { PROFILE_ROUTES, ROOT_ROUTES } from '../../routes';

const AccountScreen = () => {
    const insets = useSafeAreaInsets();
    const navigate = useNavigation<any>();

    return (
        <GradientBackground>
            <Header text='Tài khoản' />
            <DividerCustom styles={sty.mt_12} />
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
                        <TouchableOpacity
                            style={sty.flex_1}
                            activeOpacity={1}
                            onPress={() =>
                                navigate.navigate(ROOT_ROUTES.PROFILE_STACK, {
                                    screen: PROFILE_ROUTES.REVENUA_INFO,
                                })
                            }>
                            <BoardInfor></BoardInfor>
                        </TouchableOpacity>
                        <ListNavigation />
                    </ScrollView>
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </GradientBackground>
    )
}

export default AccountScreen