import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useAppDispatch } from '../../../../redux/hooks';
import { useNavigation } from '@react-navigation/core';
import IMAGES from '../../../../assets/images';
import sty from '../../../../themes/sty';
import { TextDisplay } from '../../../../components';
import { appColor } from '../../../../constant/appColor';
import LineRow from '../../../../components/LineRow';
import { formatPrice } from '../../../../utils/helpers';
import { IconStar } from '../../../../components/Icons';

const InformationDetail = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigation<any>();
    const [startOfCustomer, setStartOfCustomer] = useState<number | undefined>(undefined);
    const [startOfEmployee, setStartOfEmployee] = useState<number | undefined>(undefined);
    const list =
    {
        code: "FH984HG0",
        status: 0,
        title: "Dịch vụ sửa chữa cửa cuốn",
        name: 'Nguyễn Văn A',
        phone: "0941.523.644",
        img: IMAGES.ACCOUNT.listTechnician,
        address: "123 Đường Lê Duẩn, Phường Khâm Thiên, Quận Đống Đa, Hà Nội, Việt Nam",
        date: "09:00 - 12/05/2025",
        amount: "400000"
    }


    return (
        <View>
            <View style={[styles.sectionToach]}>
                <TextDisplay fontWeight='bold' lineHeight={30} fontSize={16} color={appColor.textBlack} text={list?.title} />
                <View style={[sty.flexRow, sty.gap_16, sty.mt_12]}>
                    <Image source={IMAGES.ORDER.locationdefault} style={{ height: 18, width: 14 }} />
                    <View>
                        <View style={[sty.flexRow, sty.gap_16, sty.mb_8]}>
                            <TextDisplay fontSize={15} color={appColor.textBlack} text={list.name} />
                            <TextDisplay text={list.phone} />
                        </View>
                        <TextDisplay lineHeight={25} text={list.address} />
                    </View>
                </View>
                {/*  */}
                <LineRow />
                <View style={[sty.flexRow, sty.justifyBetween]}>
                    <TextDisplay fontSize={13} color={appColor.textGray} text={"Sửa chữa cánh cửa:"} />
                    <TextDisplay fontSize={14} color={appColor.textBlack} text={formatPrice(Number(list.amount)) + " đ"} />
                </View>
                <View style={[sty.flexRow, sty.justifyBetween]}>
                    <TextDisplay fontSize={13} color={appColor.textGray} text={"Sửa bộ điều khiển:"} />
                    <TextDisplay fontSize={14} color={appColor.textBlack} text={formatPrice(Number(list.amount)) + " đ"} />
                </View>
                <LineRow style={{ marginTop: 20, marginBottom: 10 }} />
                {/*  */}
                <View style={[sty.flexRow, sty.justifyBetween]}>
                    <TextDisplay fontSize={14} color={appColor.textGray} text={"Thành tiền: "} />
                    <TextDisplay fontSize={16} fontWeight='bold' color={appColor.primary} text={formatPrice(Number(397000)) + " đ"} />
                </View>
            </View>

            <View style={[styles.sectionToach]}>
                <TextDisplay fontWeight='bold' lineHeight={30} fontSize={16} color={appColor.textBlack} text={"Đánh giá từ khách hàng"} />
                <View style={[sty.flexRow, sty.gap_24, sty.mt_12, sty.mb_12]}>
                    {[...Array(5)].map((_, index) => (
                        <TouchableOpacity key={index} onPress={() => setStartOfCustomer(index)}>
                            <IconStar choose={startOfCustomer != undefined && startOfCustomer >= 0 && startOfCustomer >= index} key={index} />
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.boxInforSelf}>
                    <TextDisplay color={appColor.textGray} text={"Nhận xét"} />
                    <TextDisplay color={appColor.textBlack} styles={{ marginTop: 10 }} text={"Nhân viên tay nghề cao, sửa nhanh nhưng hơi thái độ"} />
                </View>
            </View>
            {/* Đánh giá khách hàng */}
            <View style={[styles.sectionToach]}>
                <TextDisplay fontWeight='bold' lineHeight={30} fontSize={16} color={appColor.textBlack} text={"Đánh giá khách hàng"} />
                <View style={[sty.flexRow, sty.gap_24, sty.mt_12, sty.mb_12]}>
                    {[...Array(5)].map((_, index) => (
                        <TouchableOpacity key={index} onPress={() => setStartOfEmployee(index)}>
                            <IconStar choose={startOfEmployee != undefined && startOfEmployee >= 0 && startOfEmployee >= index} key={index} />
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.boxInforSelf}>
                    <TextDisplay color={appColor.textGray} text={"Nhận xét"} />
                    <TextDisplay color={appColor.textBlack} styles={{ marginTop: 10 }} text={"Nhân viên tay nghề cao, sửa nhanh nhưng hơi thái độ"} />
                </View>
            </View>
        </View>
    )
}

export default InformationDetail;
const styles = StyleSheet.create({
    img: {
        width: 36,
        height: 36
    },

    sectionToach: {
        backgroundColor: "#fff",
        borderWidth: 1,
        width: "100%",
        borderColor: '#EDEFF2',
        borderRadius: 15,
        padding: 15,
        paddingRight: 15,
        marginBottom: 15
    },
    flexRow: {
        width: "100%",
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignSelf: 'flex-start',
        marginBottom: 10
    },
    boxInforSelf: {
        padding: 15,
        backgroundColor: "#FAFBFC",
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#EDEFF2',
        marginTop: 10,
    },
})