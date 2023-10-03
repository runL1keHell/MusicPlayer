import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios from 'axios';

// Define a type for the slice state
type UserRegistration = {
    username: string;
    email: string;
    password: string;
}

export const registrateUser = createAsyncThunk(
    'user/registrateUser',
    async (data: UserRegistration) => {
        const response = await axios.post(
            'https://studapi.teachmeskills.by/auth/users/',
            data
        );
        return response.data;
    }
);

type UserLogin = Omit<UserRegistration, 'username'>;

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async({onSuccess, data}: {
        onSuccess(data: any): void;
        data: UserLogin;
    }) => {
        const response = await axios.post(
            'https://studapi.teachmeskills.by/auth/jwt/create/',
            data
        );
        // if (!response.data || response.status !== 200) return;
        onSuccess(response.data)
    }
);

type UserState = {
    username: string | null;
    email: string | null;
    accessToken: string | null;
}

const initialState: UserState = {
    username: null,
    email: null,
    accessToken: null,
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
        //     .addCase(registrateUser.pending, (state) => {
        //
        //     })
        //     .addCase(registrateUser.fulfilled, (state, action) => {
        //
        //     })
        //     .addCase(registrateUser.rejected, (state, action) => {
        //
        //     });
    }
})

export const { login } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (store: RootState) => store.user;

export default userSlice.reducer;