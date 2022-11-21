import React from 'react';
import MovieListing from "../movieListing/MovieListing";
import {useDispatch} from "react-redux";
import {fetchAsyncMovies, fetchAsyncShows} from "../../features/movies/ movieSlice";


const Home = () => {
    const dispatch = useDispatch();
    const movieText = "Harry";
    const ShowText = "Friends";
    React.useEffect(() => {
       dispatch(fetchAsyncMovies(movieText))
       dispatch(fetchAsyncShows(ShowText))
    },[dispatch])
    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing/>
        </div>
    );
};

export default Home;