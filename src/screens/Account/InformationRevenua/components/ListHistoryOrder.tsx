import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../../../redux/hooks';
import sty from '../../../../themes/sty';
import { TextDisplay } from '../../../../components';
import { appColor } from '../../../../constant/appColor';
import { formatPrice } from '../../../../utils/helpers';

const ListHistoryOrder = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigation<any>();
    const listExample = [
        {
            date: "06:45 - 14/07/2025",
            content: "Mã đơn hàng: DV-F9S8H3. Dịch vụ sửa chữa cửa cuốn",
            amount: 400000
        },
        {
            date: "06:45 - 14/07/2025",
            content: "Mã đơn hàng: DV-F9S8H3. Dịch vụ sửa chữa cửa cuốn",
            amount: 400000
        },
        {
            date: "06:45 - 14/07/2025",
            content: "Mã đơn hàng: DV-F9S8H3. Dịch vụ sửa chữa cửa cuốn",
            amount: 400000
        },
        {
            date: "06:45 - 14/07/2025",
            content: "Mã đơn hàng: DV-F9S8H3. Dịch vụ sửa chữa cửa cuốn",
            amount: 400000
        },
    ]
    return (

        <View style={[sty.flex_1]}>
            <TextDisplay text={"Lịch sử đơn hàng"} color={appColor.textBlack} />
            {listExample.map((item: any) =>
                <View style={styles.box} >
                    <TextDisplay text={item.date} lineHeight={30}></TextDisplay>
                    <View style={[sty.flexRow, sty.gap_8]}>
                        <View style={sty.flex_2}>
                            <TextDisplay text={item.content}></TextDisplay>
                        </View>
                        <TextDisplay styles={[sty.flex_1, { textAlign: 'right' }]} text={formatPrice(item.amount) + " đ"} color={appColor.primary} fontWeight='semibold' fontSize={16}>
                        </TextDisplay>
                    </View>
                </View>
            )}
        </View >
    )
}

export default ListHistoryOrder;
const styles = StyleSheet.create({
    box: {
        backgroundColor: "#FAFBFC",
        marginVertical: 7,
        borderColor: '#EDEFF2',
        borderWidth: 1,
        padding: 10,
        borderRadius: 15
    }
})