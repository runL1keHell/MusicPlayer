import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios from 'axios';
import {get} from "react-hook-form";

// Define a type for the slice state
type UserRegistration = {
    name: string;
    email: string;
    password: string;
    description: string;
    profileImageUrl: string;
}

export const registrateUser = createAsyncThunk(
    'user/registrateUser',
    async (data: UserRegistration, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3000/auth/sign_up', data);

            if (response.status !== 200) throw new Error('Unexpected status code');

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

type UserLogin = Pick<UserRegistration, 'email' & 'password'>;

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async({onFailure, data}: {
        onFailure(data: any): void;
        data: UserLogin;
    }) => {
        try {
            const response = await axios.post(
                'http://localhost:3000/auth/sign_in',
                data
            );
            localStorage.setItem('access_token', response.data.refresh_token);
            return response.data;
        } catch (e) {
            if (e.response.data.message === 'email_not_confirmed') {
                onFailure(e.response);
            }
            return null
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
             'http://localhost:3000/auth/sendVerificationMail',
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
                'http://localhost:3000/auth/verificateEmail',
                data,
            );
            return response.data
        } catch (e) {
            console.error(`Mail verification went wrong: ${e}`)
        }
    }
)

type getUserInfo = {
    access_token: string;
}

export const getUserInfo = createAsyncThunk(
    'user/getUserInfo',
    async({access_token} : getUserInfo) => {
        try {
            const response = await axios.get(
                'http://localhost:3000/auth/profile',
                {headers: {"Authorization" : `Bearer ${access_token}`}}
            );
            return response.data
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
    status: string | null;
    error: string | null;
}

const initialState: UserState = {
    name: null,
    email: null,
    profileImageUrl: null,
    id: null,
    access_token: null,
    status: null,
    error: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // login: (state, action) => {
        //     state = action.payload;
        // },
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
                // state.email = action.payload.data.data.email
                state.access_token = action.payload.access_token;
            });
        builder
            .addCase(getUserInfo.fulfilled, (state, action) => {
            })
    }
})

// export const {  } = userSlice.actions;

export const selectUser = (store: RootState) => store.user;

export default userSlice.reducer;