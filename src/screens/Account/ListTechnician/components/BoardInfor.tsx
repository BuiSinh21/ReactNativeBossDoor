import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TextDisplay } from '../../../../components';
import sty from '../../../../themes/sty';
import IMAGES from '../../../../assets/images';
import { appColor } from '../../../../constant/appColor';
import { useAppSelector } from '../../../../redux/hooks';

const BoardInfor = () => {
    const { result: listTechnician } = useAppSelector(state => state.technician);
    console.log(11111,listTechnician);
    
    return (
        <View style={styles.background}>
            <View style={[sty.flexRow, { padding: 2, }]}>
                <View style={[styles.box, { flex: 1 }]}>
                    <Image source={IMAGES.ACCOUNT.order_completed} style={styles.imageBoard} />
                    <TextDisplay styles={[sty.pb_8, sty.pt_12]} text={"Số đơn hoàn thành"} color={appColor.textBlack} />
                    <TextDisplay fontWeight='semibold' fontSize={18} text={"60"} color={appColor.primary} />
                </View>
                <View style={[styles.box, { flex: 1 }]}>
                    <Image source={IMAGES.ACCOUNT.revenue_img} style={styles.imageBoard} />
                    <TextDisplay styles={[sty.pb_8, sty.pt_12]} text={"Doanh thu"} color={appColor.textBlack} />
                    <TextDisplay fontWeight='semibold' fontSize={18} text={"25,000,000"} color={appColor.primary} />
                </View>
            </View>
        </View>
    )
}

export default BoardInfor;

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#F5F6F7",
        borderRadius: 25,
        borderColor: '#EDEFF2',
        borderWidth: 1,

        // paddingHorizontal: 20,
        // paddingVertical: 10
    },
    box: {
        backgroundColor: "#fff",
        margin: 3,
        borderRadius: 20,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
    },
    imageBoard: {
        height: 48,
        width: 48,
    },
    textsty: {
        color: appColor.textBlack,
        fontWeight: 700
    },

});