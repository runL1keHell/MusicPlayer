export type UserRegistration = {
    data: {
        name: string;
        email: string;
        password: string;
        description: string;
        profileImageUrl: string;
    };
    onSuccess: () => void;
    onFailure: (errorMessage: string) => void;
}

export type RegistrateUserResponse = "";

export type RegistrateUserError = {
    message: string;
    statusCode: number;
};

export type UserLogin = {
    data: {
        email: string;
        password: string;
    };
    onSuccess: (data: UserLoginResponse) => void;
    onFailure: (error: UserLoginError) => void;
};

export type UserLoginResponse = {
    access_token: string;
    refresh_token: string;
};

export type UserLoginError = {
    message: string;
    data: {
        user_id: number;
        email: string;
    }
};

export type SendVerificationMail = {
    email: string;
    user_id: number;
    return_url: string;
};

export type VerificateMail = {
    data: {
        user_id: number;
        token: string;
    };
    onSuccess: () => void;
    onFailure: () => void;
}

export type UserInfoResponse = {
    sub: number;
    username: string;
    iat: number;
    exp: number;
}

export type UserInfo = {
    access_token: string;
}

export type UserState = {
    name: string | null;
    email: string | null;
    profileImageUrl: string | null;
    id: number | null;
    access_token: string | null;
    refresh_token: string | null;
    status: string | null;
    error: string | null;
}

export type Song = {
    id: number;
    name: string;
    imageUrl: string;
    albumId: number;
    artistId: number;
    artistName: string;
    albumName: string;
}

export type AlbumSongs = Song[];

export type Album = {
    id: number;
    name: string;
    imageUrl: string;
}

export type Artist = {
    id: number;
    name: string;
    profileImageUrl: string | null;
    description: string | null;
    albums: Album[];
}


export type MusicState = {
    albums: Album[] | [];
    currentAlbum: AlbumSongs | null;
    currentSong: Song | null;
    currentArtist: Artist | null;
}