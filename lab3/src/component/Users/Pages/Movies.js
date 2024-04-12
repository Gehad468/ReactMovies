import axios from 'axios';
import { useEffect, useState } from 'react';
import MyCard from '../myCard';
import { useHistory } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import { MDBInputGroup, MDBInput } from 'mdb-react-ui-kit';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(3);
    const [searchQuery, setSearchQuery] = useState('');
    const history = useHistory();

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular', {
            params: {
                api_key: '1c61f7854caf371b34a23ef611f0efed',
            }
        })
            .then((res) => {
                setMovies(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleMovieClick = (movieId) => {
        history.push(`/MovieDetails/${movieId}`);
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div>
            <h1 className="text-center" style={{ color: '#AA398F' }}>Movies</h1>
            <div className="row mb-4">
                <MDBInputGroup>
                    <MDBInput
                        label=' '
                        placeholder='Search...'
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                </MDBInputGroup>
            </div>
            <div className="row">
                {currentMovies.map((movie, index) => (
                    <div className="col-md-4" key={movie.id}>
                        <div onClick={() => handleMovieClick(movie.id)}>
                            <MyCard
                                logo={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                num={movie.vote_count}
                                desc={movie.overview}
                                name={movie.title}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <Pagination className="mt-4">
                {Array.from({ length: Math.ceil(filteredMovies.length / moviesPerPage) }).map((_, index) => (
                    <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => paginate(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </div>
    );
}

export default Movies;
