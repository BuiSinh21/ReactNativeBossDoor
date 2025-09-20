import { View, StyleSheet, Image, Text } from 'react-native'
import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native';
import FormInputText2 from '../../../../components/Form/FormInputText2';
import { useAppDispatch } from '../../../../redux/hooks';
import sty from '../../../../themes/sty';
import { IconAddress, IconGmail, IconPhone } from '../../../../components/Icons';
import { TextDisplay } from '../../../../components';
import { appColor } from '../../../../constant/appColor';
import IMAGES from '../../../../assets/images';
import LineRow from '../../../../components/LineRow';
import ImagePickerComponent from '../../../../components/Image';
const FormRequestSupport = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigation<any>();
    const [debcribe, setDebcribe] = useState("")
    return (
        <View style={[sty.flex_1, styles.form]}>
            <FormInputText2
                minHeight={100}
                multiline={true}
                title='Mô tả hỗ trơ'
                required={true}
                placeholder='Nhập mô tả'
                value={debcribe}
                onChange={(value: string) => setDebcribe(value)}
            />
            <View style={styles.dashedLine} />
            <TextDisplay fontSize={14} text={"Hình ảnh"} styles={{marginBottom:10}} />
            <ImagePickerComponent />
        </View >
    )
}

export default FormRequestSupport;
const styles = StyleSheet.create({
    dashedLine: {
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#EDEFF2',
        marginVertical: 8,
        marginBottom: 19,
        borderRadius: 1,

    },
    form: {
        backgroundColor: "#fff",
        marginTop: 10,
        paddingTop: 15,
        paddingHorizontal: 15,
        borderRadius: 20,
        paddingBottom: 19,

    },
    icon: {
        padding: 15,
        display: "flex",
        backgroundColor: "#E1ECFE",
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginRight: 15,
        width: 60,
        height: 60
    }
})