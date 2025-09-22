import { View,  StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import IMAGES from '../../../assets/images'
import { useNavigation } from '@react-navigation/native';
import { TextDisplay } from '../../../components'
import sty from '../../../themes/sty'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { setModalLoading } from '../../../redux/slices/commonSlice'
import { resetAuthState } from '../../../redux/slices/authSlice'
import { formatPrice, handleErrorMessage } from '../../../utils/helpers';
import { PROFILE_ROUTES, ROOT_ROUTES } from '../../../routes';
import { logoutAPI } from '../../../apis/auth';
import Tag from '../../../components/Tag';
import { appColor } from '../../../constant/appColor';
import LineRow from '../../../components/LineRow';

const ListOrderScreen = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigation<any>();
    const { user, employee, fcmToken } = useAppSelector(state => state.auth);
    const list = [

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
        },
        {
            code: "FH984HG0",
            status: 1,
            title: "Dịch vụ sửa chữa cửa cuốn",
            name: 'Nguyễn Văn A',
            phone: "0941.523.644",
            img: IMAGES.ACCOUNT.listTechnician,
            address: "123 Đường Lê Duẩn, Phường Khâm Thiên, Quận Đống Đa, Hà Nội, Việt Nam",
            date: "09:00 - 12/05/2025",
            amount: "400000"
        },
    ]



    const handleLogout = async () => {
        try {
            dispatch(setModalLoading(true));
            await logoutAPI({ fcm_token: fcmToken as string });
            dispatch(resetAuthState());
            navigate.reset({
                index: 0,
                routes: [{ name: ROOT_ROUTES.AUTH_STACK }],
            });
            dispatch(setModalLoading(false));
        } catch (error) {
            dispatch(setModalLoading(false));
            handleErrorMessage(error);
        }
    };

    return (
        <View>
            {list.map((item: any, index: number) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={0.8}
                    onPress={() =>
                        navigate.navigate(ROOT_ROUTES.PROFILE_STACK, {
                            screen: PROFILE_ROUTES.DETAIL_ORDER,
                        })
                    }
                >
                    <View style={[styles.sectionToach]}>
                        <View style={[styles.flexRow]}>
                            <View style={[sty.flexRow]}>
                                <TextDisplay text={"Đơn hàng:"} />
                                <TextDisplay fontWeight='bold' color={appColor.textBlack} text={" #" + item.code} />
                            </View>
                            <Tag bgColor={item.status == 1 ?appColor.bgGreen: appColor.bgOrange} label={item.status == 1 ?"Hoàn thành" :"Đang xử lý"} color={item.status == 1 ? appColor.textGreen : appColor.textOrange}></Tag>
                        </View>
                        <TextDisplay fontWeight='bold' lineHeight={30} fontSize={16} color={appColor.textBlack} text={item?.title} />

                        <View style={[sty.flexRow, sty.gap_16, sty.mt_12]}>
                            <Image source={IMAGES.ORDER.locationdefault} style={{ height: 18, width: 14 }} />
                            <View>
                                <View style={[sty.flexRow, sty.gap_16, sty.mb_8]}>
                                    <TextDisplay fontSize={15} color={appColor.textBlack} text={item.name} />
                                    <TextDisplay text={item.phone} />
                                </View>
                                <TextDisplay lineHeight={25} text={item.address} />
                            </View>
                        </View>
                        <LineRow />

                        <View style={[sty.flexRow, sty.justifyBetween]}>
                            <View style={[sty.flexRow, sty.gap_16, sty.itemsCenter]}>
                                <Image style={{ height: 16, width: 16 }} source={IMAGES.ORDER.date} />
                                <TextDisplay fontSize={13} color={appColor.textBlack} text={item.date} />
                            </View>
                            <TextDisplay fontSize={16} fontWeight='bold' color={appColor.primary} text={formatPrice(Number(item.amount)) + " đ"} />
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default ListOrderScreen;
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
        marginBottom: 20
    },
    flexRow: {
        width: "100%",
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        alignSelf: 'flex-start',
        marginBottom: 10
    }
})