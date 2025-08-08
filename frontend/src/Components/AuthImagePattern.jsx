import Appabanner from "../../public/Appabanner.png";

const AuthImagePattern = () => {
  return (
    <div className="w-full h-full relative ">
      <img
        src={Appabanner}
        alt="Appabanner"
        className="  w-5xl h-120 object-cover rounded-2xl mt-20 mr-32"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-black px-9 text-center mt-130">
        <h2 className="text-3xl font-bold mb-4">Welcome back!</h2>
        <p className="text-xl">Sign in to continue your conversations and connect.</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
