import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import MyCard from '../myCard';

function MovieDetails() {

    const param = useParams();
    console.log(param);
    const id = param.id;

    const [details, setDetails] = useState({})
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1c61f7854caf371b34a23ef611f0efed`)
            .then((res) => setDetails(res.data))
            .catch((err) => console.log(err))
    })

    return (
        <div>
            <h1 className=" text-center" style={{ color: '#AA398F' }}>Movie Details</h1>
            <div className="container">
                <MyCard
                    logo={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                    num={details.vote_count}
                    desc={details.overview}
                    name={details.title}
                    de={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}

                />
            </div>
        </div>
    );
}

export default MovieDetails;
