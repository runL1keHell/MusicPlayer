import {AsyncThunk, createAsyncThunk, createSlice} from '@reduxjs/toolkit'
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
    name: string;
    email: string;
    password: string;
    description: string;
    profileImageUrl: string;
}

type RegistrateUserResponse = "";
type RegistrateUserError = {
    message: string;
    statusCode: number;
} | "";

export const registrateUser: AsyncThunk<RegistrateUserResponse, UserRegistration, {}> = createAsyncThunk(
    'user/registrateUser',
    async (data: UserRegistration, { rejectWithValue }) => {
        try {
            const response: AxiosResponse<RegistrateUserResponse> = await axios.post(USER_API.REGISTRATE_USER, data);
            return response.data;
        } catch (error: AxiosError<RegistrateUserError>) {
            console.log(error);
            return rejectWithValue(error.response.data.message);
        }
    }
);

type UserLogin = Pick<UserRegistration, 'email' | 'password'>;
type UserLoginResponse = {
    access_token: string;
    refresh_token: string;
}
type UserLoginError = {
    message: string;
    data: {
        user_id: number;
        email: "" | null;
    }
};

export const loginUser: AsyncThunk<UserLoginResponse, UserLogin, any> = createAsyncThunk(
    'user/loginUser',
    async({onSuccess, onFailure, data, rejectWithValue}: {
        onSuccess(data: UserLoginResponse): void;
        onFailure(data: UserLoginResponse): void;
        data: UserLogin;
        rejectWithValue(data: any): void;
    }) => {
        try {
            const response = await axios.post(
                USER_API.LOGIN_USER,
                data
            );
            onSuccess(response.data);
            return response.data;
        } catch (e) {
            if (axios.isAxiosError(e)) {
                const axiosError = e as AxiosError<UserLoginError>;
                const response = axiosError.response;
                if (response) {
                    const message = response.data.message;
                    if (message === 'email_not_confirmed') {
                        onFailure(response);
                    } else if (message === 'password_incorrect') {
                        return rejectWithValue(response);
                    }
                }
            }
        }
    }
);

type MailVerification = {
    email: string;
    user_id: number;
    return_url: string;
}

export const getVerificationMail = createAsyncThunk(
 'user/getVerificationMail',
 async(data: MailVerification) => {
     try {
         const response = await axios.post(
             USER_API.GET_VERIFICATION_MAIL,
             data
         );
         return response.data;
    } catch (e) {
         console.error(e)
   }
 }
)

export type VerifyMail = {
    user_id: number;
    token: string;
}

export const mailVerification = createAsyncThunk(
    'user/mailVerification',
    async(data: VerifyMail) => {
        try {
            const response = await axios.post(
                USER_API.MAIL_VERIFICATION,
                data,
            );
            return response.data
        } catch (e) {
            console.error(`Mail verification went wrong: ${e}`)
        }
    }
)

export const getUserInfo = createAsyncThunk(
    'user/getUserInfo',
    async(access_token : string) => {
        try {
            const response = await axios.get(
                USER_API.GET_USER_INFO,
                {headers: {"Authorization" : `Bearer ${access_token}`}}
            );
            return response.data;
        } catch (error) {
            console.error('Error during getting user info')
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
            .addCase(registrateUser.pending, (state) => {

            })
            .addCase(registrateUser.fulfilled, (state, action) => {
                state.error = null;
            })
            .addCase(registrateUser.rejected, (state, action) => {
                if (action.payload === "user_exist") {
                    state.error = 'User with this email already exists'
                }
            });
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                // state.id = action.payload.data.data.user_id
                state.refresh_token = action.payload.refresh_token;
                state.access_token = action.payload.access_token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                // console.log(action.payload)
                //     state.error = 'Password for this user is incorrect'
            })
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