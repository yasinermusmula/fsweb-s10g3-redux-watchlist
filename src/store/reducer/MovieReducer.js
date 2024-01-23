import {
  NEXT,
  PREV,
  REMOVE_MOVIE,
  RESTORE_MOVIE,
} from "../actions/movieAction";
import { movies } from "../../movies"; // Movies dosyasını bir üst dizinden import ettik
// MovieReducer için bana ne lazım ?
// Const bir initial state olmalı
const initialState = {
  movies: movies, // movies dizisini bir objede "movies" key'i ile tuttum
  sira: 0,
  disabledNav: "PREV",
};

// Ve bir reducer fonksiyonu olmalı. genel olarak reducer fonksiyonu belli şablonda yazılıyor.

function movieReducer(state = initialState, action) {
  switch (
    action.type // Gelen actionun tipine göre bir condition yazdık
  ) {
    case NEXT:
      if (state.sira === state.movies.length - 2) {
        return {
          ...state,
          sira: state.sira + 1,
          disabledNav: "NEXT",
        };
      } else {
        return {
          ...state,
          sira: state.sira + 1,
          disabledNav: "NONE",
        };
      }
    case PREV:
      if (state.sira === 1) {
        return {
          ...state,
          sira: state.sira - 1,
          disabledNav: "PREV",
        };
      } else {
        return {
          ...state,
          sira: state.sira - 1,
          disabledNav: "NONE",
        };
      }
    case REMOVE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload.id),
        sira: state.sira === 0 ? 0 : state.sira - 1,
      };
    case RESTORE_MOVIE:
      return { ...state, movies: [...state.movies, action.payload] };
    default:
      return state;
  }
}

export default movieReducer;
