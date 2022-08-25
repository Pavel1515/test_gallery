import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchListImage } from "../redux/Slices/homeSlice";
import { NavLink } from "react-router-dom";
import { seUrlFull } from "../redux/Slices/homeSlice";
import Header from "./Header";

const Home = () => {
  const dispatch = useDispatch();
  const { listPhoto } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchListImage());
  }, []);

  console.log(listPhoto);

  return (
    <>
      <Header />
      {listPhoto.map((obj) => (
        <>
          <div
            className="flex justify-between  m-4 border border-black"
            key={obj.id}
          >
            <NavLink to={"/image"}>
              <img
                className="h-24 w-24"
                onClick={() => {
                  dispatch(seUrlFull(obj.urls.full));
                }}
                src={obj.urls.small_s3}
                alt=""
              />
            </NavLink>
            <div className=" w-2/4 flex flex-col justify-between">
              <h2 className=" text-right text-gray-700 text-xl">
                {obj.user.first_name}
              </h2>
              <p className="text-xs text-left text-gray-700 sm:text-xl ">
                {obj.user.username}
              </p>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Home;
