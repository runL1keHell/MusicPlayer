import axios, {AxiosError, AxiosResponse} from "axios";
import {Album} from "../@types/ReduxTypes.ts";

enum SEARCH_API {
    ALBUMS = 'http://localhost:3000/album/findByName?name=',
    SONGS = 'http://localhost:3000/track/findByName?name=',
}

export const searchAlbumsByName = async (
    albumName: string,
) => {
    try {
        const baseURL = SEARCH_API.ALBUMS;
        const searchUrl: string = (baseURL + albumName).replaceAll(' ', '%20');
        const response: Album[] = await axios.get(searchUrl);
        return response;
    } catch (error) {
        const axiosError = error as AxiosError;
        return axiosError.response;
    }
}

export type SearchSongsByNameType = {
    id: number;
    name: string;
    imageUrl: string;
}[] | [];

export const searchSongsByName = async (
    songName: string,
) => {
    try {
        const baseURL = SEARCH_API.SONGS;
        const searchUrl: string = (baseURL + songName).replaceAll(' ', '%20');
        const response: AxiosResponse<SearchSongsByNameType> = await axios.get(searchUrl);
        return response;
    } catch (error) {
        const axiosError = error as AxiosError;
        return axiosError.response;
    }
}
