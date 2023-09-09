import logo from "./logo.svg";
import placeholder from "./placeholder.png";
import leftarrow from "./left-arrow.svg";
import "./App.css";

function App() {
  return <CreateAlbum />;
}

export default App;

function CreateAlbum() {
  return (
    <>
      <div className="relative">
        <div className="absolute left-32 -top-5 font-extrabold text-lg cursor-pointer">
          X
        </div>
      </div>
      <div className="w-4/5 h-[90vh] m-auto mt-10 rounded-2xl bg-slate-100 p-10 shadow-2xl ">
        <div className="flex flex-row justify-between text-xl">
          <img
            className="hover:text-blue-700 cursor-pointer w-8"
            src={leftarrow}
            alt=""
          />
          <h3 className="font-bold">ایجاد البوم جدید</h3>
          <div className="hover:text-blue-700 cursor-pointer font-bold">
            بعدی
          </div>
        </div>
        <div className="flex justify-between px-32 py-4  ">
          <div className="flex mt-10">
            <div className=" flex flex-col justify-between rounded-lg h-[500px] w-[550px] shadow-xl  bg-white m-auto items-center p-32 ">
              <img src={placeholder} alt="" />
              <div className="text-md">عکس یا ویدیو خود را بکشید</div>
              <div className="bg-blue-600 text-white text-center w-[200px] py-4 rounded-lg cursor-pointer hover:bg-blue-500  ">
                از کامپیوتر خود انتخاب کنید
              </div>
            </div>
          </div>
          <div className="flex flex-col w-14 mt-14 ">
            <div className="flex justify-between  p-3 items-center shadow-lg cursor-pointer border hover:border-blue-700">
              <img className="w-8" src={placeholder} alt="" />
              <span className="">+</span>
            </div>
            <div className="bg-blue-600 text-white w-14 h-7 rounded-sm cursor-pointer text-center my-2 hover:bg-white hover:text-blue-600 ">
              1:1
            </div>
            <div className="bg-blue-600 text-white w-14 h-7 rounded-sm cursor-pointer text-center my-2 hover:bg-white hover:text-blue-600 ">
              9:16
            </div>
            <div className="bg-blue-600 text-white w-14 h-7 rounded-sm cursor-pointer text-center my-2 hover:bg-white hover:text-blue-600 ">
              16:9
            </div>
            <div className="bg-blue-600 text-white w-14 h-7 rounded-sm cursor-pointer text-center my-2 hover:bg-white hover:text-blue-600 ">
              4:5
            </div>
          </div>
        </div>
        <div className="w-full h-[120px] flex justify-center">
          <div className="relative">
            <div className="absolute right-4 top-3 cursor-pointer font-bold">
              X
            </div>
            <div className=" h-full w-24 mx-3 m-3 rounded-md ">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute right-4 top-3 cursor-pointer font-bold">
              X
            </div>
            <div className=" h-full w-24 mx-3 m-3 rounded-md ">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute right-4 top-3 cursor-pointer font-bold">
              X
            </div>
            <div className=" h-full w-24 mx-3 m-3 rounded-md ">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
