import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Toast from "react-native-toast-message";
import { getUserProfile } from "../../apis/technician";
import { appColor } from "../../constant/appColor";
// First, create the thunk
export const fetchUserProfile = createAsyncThunk(
    "debt/fetchUserProfile",
    async () => {
        try {
            console.log(333333);
            const response = await getUserProfile();
            console.log(22222,response.data);
            return response.data;
        } catch (error: any) {
            console.log(11111,error);
            
                Toast.show({
                    type: "error",
                    text1: "Lỗi tải dữ liệu",
                    text2: "Không thể lấy thông tin tài khoản, vui lòng thử lại sau 🚨",
                    text2Style: { color: appColor.textBlack }
                });
        }
    }
);
interface DebtState {
    result: any[]
    resultHistory: any[]
    isFetching: boolean,
    pagination: any,
}

const initialState: DebtState = {
    isFetching: true,
    result: [],
    resultHistory: [],
    pagination: {
        total: 0,
        per_page: 10,
        current_page: 1,
        last_page: 1,
    },
};

export const debtSlice = createSlice({
    name: "debtSlice",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserProfile.pending, (state) => {
            state.isFetching = true;
        });

        builder.addCase(fetchUserProfile.rejected, (state) => {
            state.isFetching = false;
        });

        builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
            state.isFetching = false;
            state.result = action.payload?.data;
            state.pagination = action.payload?.pagination;
        });
        // builder.addCase(fetchListHistoryOperation.fulfilled, (state, action) => {
        //     state.isFetching = false;
        //     state.resultHistory = action.payload?.data;
        // });
    },
});

export const { } = debtSlice.actions;

export default debtSlice.reducer;