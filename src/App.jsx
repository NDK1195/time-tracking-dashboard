import { useState } from "react";
import imageJeremy from "./images/image-jeremy.png";
import TimeTracking from "./TimeTracking";

function App() {
  const [currentSelectedData, setCurrentSelectedData] = useState("weekly");

  return (
    <div className="grid min-h-dvh place-items-center bg-very-dark-blue">
      <div className="grid w-full max-w-[1110px] grid-cols-1 gap-6 px-6 py-20 lg:grid-cols-4 lg:grid-rows-2 lg:gap-[30px] xl:p-0">
        {/* info */}
        <div className="relative flex h-[203px] flex-col justify-end rounded-[15px] bg-dark-blue lg:col-span-1 lg:row-span-2 lg:h-[518px]">
          <div className="absolute left-0 top-0 h-[133px] w-full rounded-[15px] bg-blue lg:h-[354px]">
            <div className="flex h-full items-center justify-center gap-4 lg:flex-col lg:items-start lg:gap-11 lg:px-8">
              <img
                src={imageJeremy}
                alt="image Jeremy"
                className="size-16 rounded-full border-[3px] border-white lg:size-[81px]"
              />
              <div>
                <p className="mb-1 text-[15px] leading-none text-pale-blue lg:mb-2">
                  Report for
                </p>
                <h1 className="text-2xl leading-none text-white lg:text-[40px] lg:leading-tight">
                  Jeremy Robson
                </h1>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-around py-6 text-lg leading-none lg:flex-col lg:items-start lg:justify-start lg:gap-[21px] lg:px-8 lg:pb-[33px]">
            <p
              className={`${currentSelectedData === "daily" ? "text-white" : "text-desaturated-blue"} cursor-pointer transition-colors hover:text-white`}
              onClick={() => setCurrentSelectedData("daily")}
            >
              Daily
            </p>
            <p
              className={`${currentSelectedData === "weekly" ? "text-white" : "text-desaturated-blue"} cursor-pointer transition-colors hover:text-white`}
              onClick={() => setCurrentSelectedData("weekly")}
            >
              Weekly
            </p>
            <p
              className={`${currentSelectedData === "monthly" ? "text-white" : "text-desaturated-blue"} cursor-pointer transition-colors hover:text-white`}
              onClick={() => setCurrentSelectedData("monthly")}
            >
              Monthly
            </p>
          </div>
        </div>
        {/* info */}

        <TimeTracking currentSelectedData={currentSelectedData} />
      </div>
    </div>
  );
}
export default App;
