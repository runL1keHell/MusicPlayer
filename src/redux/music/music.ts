import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios, { AxiosError } from 'axios';
import {Album, Artist, GetAlbumsResponse, MusicState} from "../../@types/ReduxTypes.ts";

export const getAlbums = createAsyncThunk<GetAlbumsResponse, number, {rejectValue: string}>(
    'music/getAlbums',
    async(offset, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:3000/album/getAll?offset=${offset}&limit=3`);
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            rejectWithValue(axiosError.message);
        }
    }
);

export const getAlbumById = createAsyncThunk<Album, number, {rejectValue: string}>(
    'music/getAlbumById',
    async(albumId) => {
        try {
            const response = await axios.get(`http://localhost:3000/album/getById?albumId=${albumId}`);
            return response.data;
        } catch (e) {
            console.error(`Error while getting album by its id: ${e}`);
        }
    }
)

export const getTracksByAlbum = createAsyncThunk(
    'music/getTracksByAlbum',
    async(albumId) => {
        try {
            const response = await axios.get(`http://localhost:3000/track/getByAlbumId?albumId=${albumId}`)
            return response.data
        } catch (e) {
            console.log(`Error while getting tracks by albumId: ${e}`)
        }
    }
);

export const getArtistById = createAsyncThunk<Artist, number, {rejectValue: string}>(
    'music/getArtistById',
    async(artistId) => {
        try {
            const response = await axios.get(`http://localhost:3000/artist/getById?id=${artistId}`)
            return response.data;
        } catch (e) {
            console.log(`Error while getting artist by id: ${e}`)
        }
    }
);

const initialState: MusicState = {
    albums: [],
    currentAlbum: null,
    currentSong: null,
    currentArtist: null,
};

export const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        clearAlbums: (state) => {
            state.albums = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAlbums.fulfilled, (state, action) => {
                // state.albums = [...state.albums, ...action.payload]
                // state.albums = action.payload;
                const newAlbums = action.payload.filter((album) => {
                    return !state.albums.some((existingAlbum) => existingAlbum.id === album.id);
                });
                state.albums = [...state.albums, ...newAlbums];
            })
        builder
            .addCase(getTracksByAlbum.fulfilled, (state, action) => {
                state.currentAlbum = action.payload;
            })
        builder.addCase(getArtistById.fulfilled, (state, action) => {
            state.currentArtist = action.payload;
        })
    }
})

export const { clearAlbums } = musicSlice.actions;

export const selectAlbums = (store: RootState) => store.music.albums;
export const selectMusic = (store: RootState) => store.music;
export const selectAlbum = (store:RootState) => store.music.currentAlbum;

export const selectArtist = (store:RootState) => store.music.currentArtist;

export default musicSlice.reducer;