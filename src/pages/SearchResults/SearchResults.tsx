import React, {useEffect, useState} from "react";
import {searchAlbumsByName, searchSongsByName, SearchSongsByNameType} from "../../API/search.ts";
import {Search, useParams} from "react-router";
import {Album} from "../../@types/ReduxTypes.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {SearchFilterButton} from "../../components/UI/SearchFilterButton/SearchFilterButton.tsx";

type SearchQueryType = 'mixed' | 'songs' | 'albums' | 'artists' | null;

export const SearchResults:React.FC = () => {
    const [searchingFor, setSearchingFor] = useState<SearchQueryType>(null);
    const [searchResults, setSearchResults] = useState<SearchSongsByNameType>([]);
    const { searchText } = useParams();

    useEffect(() => {
        (async () => {
            let result;
            if (searchingFor === 'songs') {
                result = await searchSongsByName(searchText);
            } else if (searchingFor === 'albums') {
                result = await searchAlbumsByName(searchText);
            }
           setSearchResults(result.data);
        })()
    }, [searchingFor]);

    return (
        <>
            <SearchFilterButton name='Songs' className='mt-[20px] ml-[20px]' onClick={() => {setSearchingFor('songs')}} />
            <SearchFilterButton name='Albums' className='mt-[20px] ml-[20px]' onClick={() => {setSearchingFor('albums')}} />
            <SearchFilterButton name='Artists' className='mt-[20px] ml-[20px]' onClick={() => {setSearchingFor('artists')}} />
            <div className='flex flex-col mt-[30px]'>
                {searchResults && searchResults.map((song, index) => (
                    <div key={song.id} className='w-[95%] mb-[20px] text-white flex items-center justify-evenly hover:bg-gray-800 rounded-md transition-all duration-400 ease-linear'>
                        <div className='w-[50%] flex items-center'>
                            <span className='w-[3%] flex justify-center text-2xl mx-[15px]'>{index+1}</span>
                            <div className='w-[45px] h-[45px] bg-white mr-[15px]'></div>
                            <div className='flex flex-col'>
                                <span className=''>{song.name}</span>
                                <span className='cursor-pointer'>Author Name</span>
                            </div>
                        </div>
                        <div className='w-[30%]'>
                            <span className='w-fit cursor-pointer'>
                                Album Name
                            </span>
                        </div>
                        <div className='w-[7%] flex items-center justify-between'>
                            <FontAwesomeIcon icon={faHeart} className='cursor-pointer' />
                            <span>3:02</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}