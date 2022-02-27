import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

function Home() {
  const movieText = "Harry";

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?i=tt3896198&apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((error) => {
          console.log("error", error.response);
        });
      console.log("The response from API", response);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}

export default Home;