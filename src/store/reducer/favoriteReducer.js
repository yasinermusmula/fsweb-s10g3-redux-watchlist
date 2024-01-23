import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoriteAction";

const initialState = {
  favorites: [
    // {
    //   id: 49,
    //   title: "The Truman Show",
    //   year: "1998",
    //   runtime: "103",
    //   genres: ["Comedy", "Drama", "Sci-Fi"],
    //   director: "Peter Weir",
    //   actors: "Jim Carrey, Laura Linney, Noah Emmerich, Natascha McElhone",
    //   plot: "An insurance salesman/adjuster discovers his entire life is actually a television show.",
    //   posterUrl:
    //     "https://images-na.ssl-images-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    // },
  ], // movies dizisini bir objede "movies" key'i ile tuttum
};

// Ve bir reducer fonksiyonu olmalı. genel olarak reducer fonksiyonu belli şablonda yazılıyor.

function favoriteReducer(state = initialState, action) {
  switch (
    action.type // Gelen actionun tipine göre bir condition yazdık
  ) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.id !== action.payload
        ),
      };
  }
}

export default favoriteReducer;
