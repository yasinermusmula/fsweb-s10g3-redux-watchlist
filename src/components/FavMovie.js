import { removeFavorite } from "../store/actions/favoriteAction";
import { restoreMovie } from "../store/actions/movieAction";
import { useDispatch } from "react-redux";

export default function FavMovie({ movie }) {
  const dispatch = useDispatch();
  function removeFromList() {
    dispatch(removeFavorite(movie));
    dispatch(restoreMovie(movie));
  }

  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1">{movie.title}</div>
      <button
        onClick={removeFromList}
        className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100"
      >
        Çıkar
      </button>
    </div>
  );
}
