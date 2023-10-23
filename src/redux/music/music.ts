import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios from 'axios';
import {get} from "react-hook-form";



export const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        // login: (state, action) => {
        //     state = action.payload;
        // },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(registrateUser.pending, (state) => {
    //
    //         })
    //         .addCase(registrateUser.fulfilled, (state, action) => {
    //             state.error = null;
    //         })
    //         .addCase(registrateUser.rejected, (state, action) => {
    //             if (action.payload === "user_exist") {
    //                 state.error = 'User with this email already exists'
    //             }
    //         });
    //     builder
    //         .addCase(loginUser.fulfilled, (state, action) => {
    //             // state.id = action.payload.data.data.user_id
    //             // state.email = action.payload.data.data.email
    //             state.access_token = action.payload.access_token;
    //         });
    //     builder
    //         .addCase(getUserInfo.fulfilled, (state, action) => {
    //         })
    // }
})

export const {  } = musicSlice.actions;

export const selectAlbums = (store: RootState) => store.album;

export default musicSlice.reducer;