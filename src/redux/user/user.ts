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
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 400) {
                    return rejectWithValue(error.response.data.message);
                } else {
                    return rejectWithValue('An error occurred while processing your request.');
                }
            } else {
                return rejectWithValue('An unexpected error occurred.');
            }
        }
    }
);

type UserLogin = Pick<UserRegistration, 'email' & 'password' >;

// export const loginUser = createAsyncThunk(
//     'user/loginUser',
//     async (data: UserLogin) => {
//         try {
//             const response = await axios.post(
//                 'http://localhost:3000/auth/sign_in',
//                 data,
//             );
//             alert(response.data)
//
//             // if (response.status === 400) {
//             //     alert(response.data)
//             //     if (response.data.message = "email_not_confirmed") {
//             //         alert('beattch')
//             //     } else {
//             //         throw new Error('An unexpected error occured.');
//             //     }
//             // }
//         } catch (e) {
//             console.log(e.response)
//             if (e.response.data.message === 'email_not_confirmed') {
//                 return e.response
//             };
//             return null;
//         }
//
//     }
// );

type MailVerification = {
    email: string;
    user_id: number;
    return_url: string;
}

export const sendVerificationMail = createAsyncThunk(
 'user/sendVerificationMail',
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
            console.log(response)
            return response.data;
        } catch (e) {
            if (e.response.data.message === 'email_not_confirmed') {
                onFailure(e.response);
            }
            return null
        }
    }
);

type UserState = {
    name: string | null;
    email: string | null;
    accessToken: string | null;
    profileImageUrl: string | null;
    id: number | null;
}

const initialState: UserState = {
    name: null,
    email: null,
    accessToken: null,
    profileImageUrl: null,
    id: null,
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
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                // state.id = action.payload.data.data.user_id
                // state.email = action.payload.data.data.email
            });
    }
})

// export const {  } = userSlice.actions;

export const selectUser = (store: RootState) => store.user;

export default userSlice.reducer;