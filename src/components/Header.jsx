import { Link } from "react-router-dom";
import logo1 from "../assets/giphy1.svg";
import logo2 from "../assets/giphy2.svg";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { useState, useEffect } from "react";
import { GifState } from "../context/context";
import GifSearch from "./GifSearch";

const Header = () => {
  const [categories, setcategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const { gf, favourites } = GifState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchGifCategories = async () => {
    const { data } = await gf.categories();
    setcategories(data);
  };

  useEffect(() => {
    fetchGifCategories();
  }, [fetchGifCategories]);

  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to="/" className="flex gap-2">
          <img src={logo1} className="w-8" alt="logo" />
          <img src={logo2} alt="logo" className="logo" />
        </Link>

        <div className="text-md font-bold flex gap-2 items-center">
          {/* categories */}

          {categories?.slice(0, 5)?.map((category) => (
            <>
              <Link
                key={category.name}
                to={`/${category.name_encoded}`}
                className="px-4 py-1 hover:gradient border-b-4 hidden lg:block"
              >
                {category.name}
              </Link>
            </>
          ))}

          <button onClick={() => setShowCategories(!showCategories)}>
            <HiEllipsisVertical
              size={35}
              className={`py-0.5 hover:gradient ${
                showCategories ? "gradient" : ""
              } border-b-4 hidden lg:block`}
            />
          </button>
          <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
            <Link to="/favourites">Favourite GIFs</Link>
          </div>

          <button>
            <HiMiniBars3BottomRight
              size={30}
              className="text-sky-400 block lg:hidden "
            />
          </button>
        </div>
        {showCategories && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
            <span className="text-3xl font-extrabold">Categories</span>
            <hr className="bg-gray-100 opacity-50 my-5"/>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-col-6 gap-4">
            {categories?.map((category) => (
            <>
              <Link
                key={category.name}
                to={`/${category.name_encoded}`}
                className="font-bold"
              >
                {category.name}
              </Link>
            </>
          ))}
              {/* <Link to="/" >
                Reactions
              </Link> */}
            </div>
          </div>
        )}
      </div>

        {/* Search */}

        <GifSearch />

    </nav>
  );
};

export default Header;
