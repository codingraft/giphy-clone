/* eslint-disable react-hooks/exhaustive-deps */
import {  useEffect } from "react";
import { GifState } from "../context/context";
import banner from "../assets/banner.gif";
import Gif from "../components/Gif";
import FilterGif from "../components/FilterGif";

const Home = () => {
  const { gf, gifs, filter, setGifs } = GifState();

  const fetchTrendingGifs = async () => {
    const { data } = await gf.trending({
      limit: 20,
      type: filter,
      raring: "g",
    });
    setGifs(data);
  };
  useEffect(() => {
    fetchTrendingGifs();
  }, [filter]);
  return (
    <div>
      <img src={banner} alt="Gif" className="mt-3 rounded w-full" />

    <FilterGif />

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gifs.map((gif) => {
          return <Gif gif={gif} key={gif.title} />;
        })}
      </div>
    </div>
  );
};

export default Home;
