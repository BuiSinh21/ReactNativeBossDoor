import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../../../redux/hooks';
import sty from '../../../../themes/sty';
import { TextDisplay } from '../../../../components';
import { appColor } from '../../../../constant/appColor';
import { formatPrice } from '../../../../utils/helpers';
import IMAGES from '../../../../assets/images';
import { IconArrowRight } from '../../../../components/Icons';
import { PROFILE_ROUTES, ROOT_ROUTES } from '../../../../routes';

const ListTechnicianDisplay = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigation<any>();
    const listUser = [
        {
            image: '',
            name: "Nguyễn Đức Bảo",
            phone: "0964425636"
        },
        {
            image: '',
            name: "Nguyễn Đức Mạnh",
            phone: "0964425636"
        },
        {
            image: '',
            name: "Nguyễn Hoài Nam",
            phone: "0964425636"
        },
        ,
    ]
    return (

        <View style={[sty.flex_1]}>
            <TextDisplay text={"Danh sách kỹ thuật viên"} color={appColor.textBlack} />
            {listUser.map((item: any,index:number) =>
                <View key={"key_"+index} style={styles.box} >
                    <TouchableOpacity style={{ width: "100%" }} onPress={() =>
                        navigate.navigate(ROOT_ROUTES.PROFILE_STACK, {
                            screen: PROFILE_ROUTES.REVENUA_INFO,
                        })
                    }>
                        <View style={[sty.flexRow, sty.selfCenter, sty.gap_8]}>
                            <Image style={{ width: 52, height: 52 }} source={IMAGES.ACCOUNT.imageTest}></Image>
                            <View style={[sty.flex_2, sty.selfCenter]}>
                                <TextDisplay color={appColor.textBlack} text={item.name}></TextDisplay>
                                <TextDisplay text={item.phone}></TextDisplay>
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