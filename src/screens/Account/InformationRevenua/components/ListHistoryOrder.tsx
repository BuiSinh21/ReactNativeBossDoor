import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import sty from '../../../../themes/sty';
import { TextDisplay } from '../../../../components';
import { appColor } from '../../../../constant/appColor';
import { formatPrice } from '../../../../utils/helpers';
import { DetailOrder } from '../../../../interfaces/auth';
import moment from 'moment';

const ListHistoryOrder = () => {
    const dispatch = useAppDispatch();
    const { detailTechnician } = useAppSelector(state => state.technician);
    const { userDisplay } = useAppSelector(state => state.auth);
    const route = useRoute();
    const { data } = route.params as { data: { check: boolean } };
    return (

        <View style={[sty.flex_1]}>
            <TextDisplay text={"Lịch sử đơn hàng"} color={appColor.textBlack} />
            {data.check == true ?
                <>
                    {userDisplay?.lich_su_don_hang?.data.map((item: DetailOrder) =>
                        <View  key={"key_"+ item.order_id} style={styles.box} >
                            <TextDisplay text={moment(item.order_date).format("HH:mm - DD/MM/YYYY")} lineHeight={30}></TextDisplay>
                            <View style={[sty.flexRow, sty.gap_8]}>
                                <View style={sty.flex_2}>
                                    <TextDisplay fontSize={13} text={"Mã đơn hàng: " + item.order_code + "."}></TextDisplay>
                                </View>
                                <TextDisplay styles={[sty.flex_1, { textAlign: 'right' }]} text={formatPrice(Number(item.tong_tien)) + " đ"} color={appColor.primary} fontWeight='semibold' fontSize={16}>
                                </TextDisplay>
                            </View>
                        </View>
                    )}
                </> :
                <>
                    {detailTechnician?.lich_su_don_hang?.data.map((item: DetailOrder) =>
                        <View key={"key_"+ item.order_id} style={styles.box} >
                            <TextDisplay text={moment(item.order_date).format("HH:mm - DD/MM/YYYY")} lineHeight={30}></TextDisplay>
                            <View style={[sty.flexRow, sty.gap_8]}>
                                <View style={sty.flex_2}>
                                    <TextDisplay fontSize={13} text={"Mã đơn hàng: " + item.order_code + "."}></TextDisplay>
                                </View>
                                <TextDisplay styles={[sty.flex_1, { textAlign: 'right' }]} text={formatPrice(Number(item.tong_tien)) + " đ"} color={appColor.primary} fontWeight='semibold' fontSize={16}>
                                </TextDisplay>
                            </View>
                        </View>
                    )}
                </>
            }
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