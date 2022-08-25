import { useSelector } from "react-redux";
import Header from "./Header";

const ImageFull = () => {
  const { urlFull } = useSelector((state) => state.home);
  return (
    <>
      <Header />
      {urlFull ? (
        <div>
          <img className="w-full h-full " src={urlFull} alt="photo" />
        </div>
      ) : (
        <p className="text-red-600">Error return to the Glorious page</p>
      )}
    </>
  );
};

export default ImageFull;
