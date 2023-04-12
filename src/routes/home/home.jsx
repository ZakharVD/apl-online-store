import { useNavigate } from "react-router-dom";
import shoe from "../../assets/shoe.jpg";


function Home() {
  const redirect = useNavigate();
  const shopNowHandler = () => {
    redirect('shop');
  }
  return (
    <div className="h-[100vh] max-h-[1000px] relative max-w-[1000px] mx-auto">
      <div className=" h-[60%] w-[100%] border-b-8">
        <h1 className="uppercase font-bold text-3xl new:text-4xl md:text-5xl lg:text-6xl w-[90%] mx-auto mt-[15px]">
          Find appeal that defines <span className="highlight">You</span>.
        </h1>
        <div className="absolute w-[400px] new:w-[400px] md:w-[450px] lg:w-[700px] h-[400px] new:h-[400px] md:h-[450px] lg:h-[700px] top-[15px] md:top-[25px] lg:top-[60px] left-[-70px] md:left-[-30px] lg:left-[-20px] cover bg-center">
          <img src={shoe} alt="" className="" />
        </div>
      </div>
      <div className="absolute right-[-15px] top-[40%] new:top-[35%] md:top-[27%] bg-mainbg border-y-8 border-l-8 formain:border-8 border-orange w-[40%] lg:w-[300px] h-[240px] new:h-[300px] md:h-[350px] rounded-xl text-black text-center flex flex-col justify-center items-center font-medium md:text-md lg:text-xl mr-[10px] p-[10px]">
        Get
        <span className="text-2xl new:text-3xl md:text-4xl lg:text-5xl font-bold">25% OFF</span>
        on your first purchase
      </div>
      <div className="w-[60%] lg:w-[calc(100%-300px)] h-[170px] flex justify-center items-center">
        <button onClick={shopNowHandler} className="z-10 text-center rounded-xl p-5 text-white bg-black text-md font-medium new:w-[150px] new:h-[80px]">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Home;
