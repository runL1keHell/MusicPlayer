import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios, { AxiosResponse, AxiosError } from 'axios';

export enum USER_API {
    REGISTRATE_USER = 'http://localhost:3000/auth/sign_up',
    LOGIN_USER = 'http://localhost:3000/auth/sign_in',
    GET_VERIFICATION_MAIL = 'http://localhost:3000/auth/sendVerificationMail',
    MAIL_VERIFICATION = 'http://localhost:3000/auth/verificateEmail',
    GET_USER_INFO = 'http://localhost:3000/auth/profile',
}

type UserRegistration = {
    data: {
        name: string;
        email: string;
        password: string;
        description: string;
        profileImageUrl: string;
    };
    onSuccess: () => void;
    onFailure: (errorMessage: string) => void;
}

type RegistrateUserResponse = "";

type RegistrateUserError = {
    message: string;
    statusCode: number;
};

export const registrateUser = createAsyncThunk<RegistrateUserResponse, UserRegistration, {rejectValue: string}>(
    'user/registrateUser',
    async ({data, onSuccess, onFailure}, { rejectWithValue }) => {
        try {
            const response: AxiosResponse<RegistrateUserResponse> = await axios.post(USER_API.REGISTRATE_USER, data);
            onSuccess();
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError<RegistrateUserError>;
            const errorMessage: string = axiosError.response ? axiosError.response.data.message : "";
            onFailure(errorMessage);
            return rejectWithValue(errorMessage);
        }
    }
);

type UserLogin = {
    data: {
        email: string;
        password: string;
    };
    onSuccess: (data: UserLoginResponse) => void;
    onFailure: (error: UserLoginError) => void;
};
type UserLoginResponse = {
    access_token: string;
    refresh_token: string;
}
type UserLoginError = {
    message: string;
    data: {
        user_id: number;
        email: string;
    }
};

export const loginUser = createAsyncThunk<UserLoginResponse, UserLogin, {rejectValue: string}>(
    'user/loginUser',
    async({onSuccess, onFailure, data }, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                USER_API.LOGIN_USER,
                data
            );
            onSuccess(response.data);
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError<UserLoginError>;
            if (axiosError.response) {
                onFailure(axiosError.response.data);
                return  rejectWithValue(axiosError.response.data.message);
            }
        }
    }
);


type sendVerificationMail = {
    email: string;
    user_id: number;
    return_url: string;
}

export const sendVerificationMail = createAsyncThunk<"", sendVerificationMail, {rejectValue: string}>(
 'user/getVerificationMail',
 async(data, {rejectWithValue}) => {
     try {
         const response = await axios.post(
             USER_API.GET_VERIFICATION_MAIL,
             data
         );
         return response.data;
    } catch (error) {
         const axiosError = error as AxiosError;
         return rejectWithValue(axiosError.message);
   }
 }
)

export type VerificateMail = {
    data: {
        user_id: number;
        token: string;
    };
    onSuccess: () => void;
    onFailure: () => void;
}

export const verificateEmail = createAsyncThunk<"", VerificateMail, {rejectValue: string}>(
    'user/mailVerification',
    async({data, onSuccess, onFailure}, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                USER_API.MAIL_VERIFICATION,
                data,
            );
            onSuccess();
            return response.data
        } catch (error) {
            const axiosError = error as AxiosError;
            onFailure();
            return rejectWithValue(axiosError.message);
        }
    }
)

type UserInfoResponse = {
    sub: number;
    username: string;
    iat: number;
    exp: number;
}

type UserInfo = {
    access_token: string;
}

export const getUserInfo = createAsyncThunk<UserInfoResponse, UserInfo, {rejectValue: string}>(
    'user/getUserInfo',
    async({access_token}, {rejectWithValue}) => {
        try {
            const response = await axios.get(
                USER_API.GET_USER_INFO,
                {headers: {"Authorization" : `Bearer ${access_token}`}}
            );
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            rejectWithValue(axiosError.message);
        }
    }
)

type UserState = {
    name: string | null;
    email: string | null;
    profileImageUrl: string | null;
    id: number | null;
    access_token: string | null;
    refresh_token: string | null;
    status: string | null;
    error: string | null;
}

const initialState: UserState = {
    name: null,
    email: null,
    profileImageUrl: null,
    id: null,
    access_token: null,
    refresh_token: null,
    status: null,
    error: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logOut: (state) => {
                state.name = null;
                state.email = null;
                state.profileImageUrl = null;
                state.id = null;
                state.access_token = null;
                state.status = null;
                state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // .addCase(registrateUser.pending, (state) => {
            //
            // })
            // .addCase(registrateUser.fulfilled, (state, action) => {
            // })
            .addCase(registrateUser.rejected, (state, action) => {
                    state.error = action.payload;
            });
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                // state.id = action.payload.data.data.user_id
                state.refresh_token = action.payload.refresh_token;
                state.access_token = action.payload.access_token;
            })
            // .addCase(loginUser.rejected, (state, action) => {
                // console.log(action.payload)
                //     state.error = 'Password for this user is incorrect'
            // })
        builder
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.name = action.payload.username;
                state.id = action.payload.sub;
            })
    }
})

export const { logOut } = userSlice.actions;

export const selectUser = (store: RootState) => store.user;

export default userSlice.reducer;