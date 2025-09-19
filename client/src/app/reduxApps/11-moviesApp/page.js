"use client";

import { useSelector, useDispatch } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  clearFavorites,
} from "@/lib/redux/slices/moviesSlice";

export default function MoviesPage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);

  // Sample movie list
  const movies = [
    { id: 1, title: "Chhakka panja", year: 2070 },
    { id: 2, title: "Chor", year: 2071 },
    { id: 3, title: "Sikari", year: 2072 },
    { id: 4, title: "Chino", year: 2053 },
    { id: 5, title: "Sanskar", year: 2058 },
  ];

  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-slate-600 h-screen w-screen text-black">
      <div className="flex flex-col gap-2 justify-center items-center bg-yellow-300 p-4 min-h-1/2 w-1/2 rounded-lg">
        <div>
          <h1 className="text-4xl"> Favorite Movies App</h1>
          <hr className="border-1 border-black" />
        </div>
        {/* Movies List */}
        <h2>Movies</h2>
        <div className="flex  gap-2">
          {movies.map((movie) => (
            <button
              key={movie.id}
              onClick={() => dispatch(addFavorite(movie))}
              className="bg-green-400 hover:bg-green-500  flex gap-2 text-sm px-4 rounded-sm"
              title={`add ${movie.title}`}
            >
              {movie.title}
            </button>
          ))}
        </div>
        {/* Favorites List */}
        <h2 className="text-2x font-bold">
          Favorite Movies <hr className="border-black" />
        </h2>
        {favorites.length === 0 ? (
          <p>No favorite movies yet.</p>
        ) : (
          <ul className="flex gap-2 flex-col font-mono">
            {favorites.map((movie) => (
              <li
                key={movie.id}
                className=" flex  justify-between items-center gap-12"
              >
                <span className="inline-block">
                  {movie.title} :({movie.year})
                </span>
                <button
                  onClick={() => dispatch(removeFavorite(movie.id))}
                  className="text-sm bg-red-400 hover:bg-red-500 px-4 rounded-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        {favorites.length > 0 && (
          <button
            onClick={() => dispatch(clearFavorites())}
            className="mt-4 px-4 py-2 bg-gray-600 hover:bg-gray-800 text-white rounded"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}
