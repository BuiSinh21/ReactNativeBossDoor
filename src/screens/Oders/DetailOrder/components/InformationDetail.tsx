import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
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
import FormInputText2 from '../../../../components/Form/FormInputText2';
import PagerView from "react-native-pager-view";
import { Text } from 'react-native-svg';
const { width } = Dimensions.get("window");

const InformationDetail = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigation<any>();
    const [startOfCustomer, setStartOfCustomer] = useState<number | undefined>(undefined);
    const [startOfEmployee, setStartOfEmployee] = useState<number | undefined>(undefined);
    const [comment, setComment] = useState<string>("");
    const [page, setPage] = useState(0);
    const [page2, setPage2] = useState(0);
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

    const images = [
        "https://cdn.pixabay.com/photo/2025/09/12/16/42/dog-9830813_1280.jpg",
        "https://cdn.pixabay.com/photo/2025/02/05/08/07/man-9383629_1280.jpg",
        "https://cdn.pixabay.com/photo/2021/12/28/16/11/cathedral-6899648_1280.jpg",
    ];
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
                <View style={[sty.flexRow, sty.gap_24, sty.mt_12, sty.mb_16]}>
                    {[...Array(5)].map((_, index) => (
                        <TouchableOpacity key={index} onPress={() => setStartOfEmployee(index)}>
                            <IconStar choose={startOfEmployee != undefined && startOfEmployee >= 0 && startOfEmployee >= index} key={index} />
                        </TouchableOpacity>
                    ))}
                </View>
                <FormInputText2 onChange={(e) => setComment(e)} value={comment} placeholder='Nhận xét về khách hàng...' multiline minHeight={100} />

            </View>

            {/* Tình trạng cửa trước khi sửa */}

            <View style={[styles.sectionToach]}>
                <View style={styles.container}>
                    <TextDisplay styles={{ marginBottom: 15 }} text={"Tình trạng cửa trước khi sửa"} color={appColor.textBlack} fontWeight='bold' fontSize={16}></TextDisplay>
                    <PagerView
                        style={styles.pager}
                        initialPage={0}
                        onPageSelected={(e) => setPage(e.nativeEvent.position)}
                    >
                        {images.map((uri, index) => (
                            <View key={index} style={styles.page}>
                                <Image source={{ uri }} style={styles.image} />
                            </View>
                        ))}
                    </PagerView>

                    {/* indicator */}
                    <View style={styles.dotContainer}>
                        {images.map((_, i) => (
                            <View
                                key={i}
                                style={[
                                    styles.dot,
                                    { backgroundColor: i === page ? "#007bff" : "#ccc" },
                                ]}
                            />
                        ))}
                    </View>
                </View>
            </View>
            {/* Tình trạng sau khi sửa */}
            <View style={[styles.sectionToach]}>
                <View style={styles.container}>
                    <TextDisplay styles={{ marginBottom: 15 }} text={"Tình trạng cửa trước khi sửa"} color={appColor.textBlack} fontWeight='bold' fontSize={16}></TextDisplay>
                    <PagerView
                        style={styles.pager}
                        initialPage={0}
                        onPageSelected={(e) => setPage2(e.nativeEvent.position)}
                    >
                        {images.map((uri, index) => (
                            <View key={index} style={styles.page}>
                                <Image source={{ uri }} style={styles.image} />
                            </View>
                        ))}
                    </PagerView>

                    {/* indicator */}
                    <View style={styles.dotContainer}>
                        {images.map((_, i) => (
                            <View
                                key={i}
                                style={[
                                    styles.dot,
                                    { backgroundColor: i === page ? "#007bff" : "#ccc" },
                                ]}
                            />
                        ))}
                    </View>
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
    container: { flex: 1 },
    title: { fontSize: 16, fontWeight: "600", marginBottom: 8 },
    pager: { width: "100%", height: 200 }, // Sửa lại width
    page: { justifyContent: "center", alignItems: "center", width: "100%", height: 200 }, // Thêm width, height
    image: { width: "100%", height: 200, borderRadius: 8 }, // Sửa lại height cố định
    dotContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
})