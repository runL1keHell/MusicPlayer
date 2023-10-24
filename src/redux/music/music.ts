import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios from 'axios';

export type AlbumByGetAlbums = {
    id: number;
    name: string;
    imageUrl: string;
}

export const getAlbums = createAsyncThunk(
    'music/getAlbums',
    async(offset: number ) => {
        try {
            const response = await axios.get(`http://localhost:3000/album/getAll?offset=${offset}&limit=3`);
            return response.data;
        } catch (e) {
            console.error(`Error while getting albums: ${e}`)
        }
    }
);

export const getAlbumById = createAsyncThunk(
    'music/getAlbumById',
    async(albumId: number) => {
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
    async(albumId: number) => {
        try {
            const response = await axios.get(`http://localhost:3000/track/getByAlbumId?albumId=${albumId}`)
            return response.data
        } catch (e) {
            console.log(`Error while getting tracks by albumId: ${e}`)
        }
    }
);

export const getArtistById = createAsyncThunk(
    'music/getArtistById',
    async(artistId: number) => {
        try {
            const response = await axios.get(`http://localhost:3000/artist/getById?id=${artistId}`)
            return response.data;
        } catch (e) {
            console.log(`Error while getting artist by id: ${e}`)
        }
    }
);

export type Album = Track[];

export type Track = {
    id: number;
    name: string;
    imageUrl: string;
    albumId: number;
    artistId: number;
    artistName: string;
    albumName: string;
}

export type AlbumsByArtist = {
    id: number;
    name: string;
    imageUrl: string;
}

export type Artist = {
    id: number;
    name: string;
    profileImageUrl: string | null;
    description: string | null;
    albums: AlbumsByArtist[];
}

export type MusicState = {
    albums: Album[];
    currentAlbum: Album | null;
    currentSong: Track | null;
    currentArtist: Artist | null;
}

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
            .addCase(getAlbums.pending, (state, action) => {
                // state.albums = action.payload
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