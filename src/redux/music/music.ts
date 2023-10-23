import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios from 'axios';


export const getAlbums = createAsyncThunk(
    'music/getAlbums',
    async( ) => {
        try {
            const response = axios.get('/aboba');
            return response.data;
        } catch (e) {
            console.error(`Error while getting albums: ${e}`)
        }
    }
)

export const getArtistInfoById = createAsyncThunk(
    'music/getArtistInfoById',
    async (id: number) => {
        try {
            const response = axios.get(`http://localhost:3000/artist/getById/${id}`)
            return response.data;
        } catch (e) {
            console.error(`Error while getting artist info by id: ${e}`)
        }
    }
)

interface Album {
    id: string;
    title: string;
    songs: Song[];
}

interface Song {
    id: string;
    title: string;
}

interface MusicState {
    albums: Album[];
    currentAlbum: Album | null;
    currentSong: Song | null;
}

const initialState: MusicState = {
    albums: [],
    currentAlbum: null,
    currentSong: null,
};

export const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        // login: (state, action) => {
        //     state = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArtistInfoById.pending, (state) => {
    //
    //         })
            .addCase(getArtistInfoById.fulfilled, (state, action) => {

            })
            .addCase(getArtistInfoById.rejected, (state, action) => {
                if (action.payload === "user_exist") {
                    state.error = 'User with this email already exists'
                }
            });
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

export const selectMusic = (store: RootState) => store.music;

export default musicSlice.reducer;