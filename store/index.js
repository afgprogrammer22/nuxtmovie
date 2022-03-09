import axios from 'axios';
const store = {
    state() {
        return {
            movies: [],
        }
    },

    actions: {
        getAllMovies({commit}, state) {
            try {
                axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=2b0f5d1408bdc2867a97540c54783be9`).then((res) => {
                    console.log(res.data.results);
                    
                    commit('setMovies', res.data.results);
                });
            } catch (error) {
                console.log(error);
            }
        }
    },

    mutations: {
        setMovies(state, movies) {
            state.movies = movies;
        }
    },

    getters: {
        getMovies(state) {
            return state.movies
        }
    }
};

export default store;
