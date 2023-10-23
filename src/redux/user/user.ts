import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios from 'axios';

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
    async({onSuccess, onFailure, data}: {
        onSuccess(): void;
        onFailure(data: any): void;
        data: UserLogin;
    }) => {
        try {
            const response = await axios.post(
                'http://localhost:3000/auth/sign_in',
                data
            );
            onSuccess();
            return response.data;
        } catch (e) {
            if (e.response.data.message === 'email_not_confirmed') {
                onFailure(e.response);
            };
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

export const getUserInfo = createAsyncThunk(
    'user/getUserInfo',
    async(access_token : string) => {
        try {
            const response = await axios.get(
                'http://localhost:3000/auth/profile',
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
            });
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