import data from "./data.json";
import iconEllipsis from "./images/icon-ellipsis.svg";
import iconExercise from "./images/icon-exercise.svg";
import iconPlay from "./images/icon-play.svg";
import iconSelfCare from "./images/icon-self-care.svg";
import iconSocial from "./images/icon-social.svg";
import iconStudy from "./images/icon-study.svg";
import iconWork from "./images/icon-work.svg";
function TimeTracking({ currentSelectedData }) {
  return (
    <>
      {/* work */}
      <div className="relative h-[160px] rounded-[15px] bg-light-red-(work) lg:h-[244px]">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <img
            src={iconWork}
            alt="icon work"
            className="absolute -top-[10px] right-[17px]"
          />
        </div>
        <div className="absolute -bottom-[2px] left-0 h-[122px] w-full rounded-[15px] bg-dark-blue px-6 py-[28px] lg:h-[199px] lg:pb-8 lg:pl-[30px] lg:pr-[35px] lg:pt-[29px]">
          <div className="mb-2 flex items-center justify-between lg:mb-[25px]">
            <h2 className="text-lg leading-none text-white">{data[0].title}</h2>
            <img src={iconEllipsis} alt="icon ellipsis" />
          </div>

          <div className="flex items-center justify-between lg:flex-col lg:items-start lg:gap-3">
            <h3 className="text-[32px] leading-none text-white lg:text-[56px]">
              {currentSelectedData === "daily"
                ? data[0].timeframes.daily.current
                : currentSelectedData === "weekly"
                  ? data[0].timeframes.weekly.current
                  : data[0].timeframes.monthly.current}
              hrs
            </h3>
            <p className="text-[15px] leading-none text-pale-blue">
              Last Week -{" "}
              {currentSelectedData === "daily"
                ? data[0].timeframes.daily.previous
                : currentSelectedData === "weekly"
                  ? data[0].timeframes.weekly.previous
                  : data[0].timeframes.monthly.previous}
              hrs
            </p>
          </div>
        </div>
      </div>
      {/* work */}

      {/* play */}
      <div className="relative h-[160px] rounded-[15px] bg-soft-blue-(play) lg:h-[244px]">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <img
            src={iconPlay}
            alt="icon play"
            className="absolute -top-2 right-[17px]"
          />
        </div>
        <div className="absolute -bottom-[2px] left-0 h-[122px] w-full rounded-[15px] bg-dark-blue px-6 py-[28px] lg:h-[199px] lg:pb-8 lg:pl-[30px] lg:pr-[35px] lg:pt-[29px]">
          <div className="mb-2 flex items-center justify-between lg:mb-[25px]">
            <h2 className="text-lg leading-none text-white">{data[1].title}</h2>
            <img src={iconEllipsis} alt="icon ellipsis" />
          </div>

          <div className="flex items-center justify-between lg:flex-col lg:items-start lg:gap-3">
            <h3 className="text-[32px] leading-none text-white lg:text-[56px]">
              {currentSelectedData === "daily"
                ? data[1].timeframes.daily.current
                : currentSelectedData === "weekly"
                  ? data[1].timeframes.weekly.current
                  : data[1].timeframes.monthly.current}
              hrs
            </h3>
            <p className="text-[15px] leading-none text-pale-blue">
              Last Week -{" "}
              {currentSelectedData === "daily"
                ? data[1].timeframes.daily.previous
                : currentSelectedData === "weekly"
                  ? data[1].timeframes.weekly.previous
                  : data[1].timeframes.monthly.previous}
              hrs
            </p>
          </div>
        </div>
      </div>
      {/* play */}

      {/* study */}
      <div className="relative h-[160px] rounded-[15px] bg-light-red-(study) lg:h-[244px]">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <img
            src={iconStudy}
            alt="icon study"
            className="absolute -top-[10px] right-[17px]"
          />
        </div>
        <div className="absolute -bottom-[2px] left-0 h-[122px] w-full rounded-[15px] bg-dark-blue px-6 py-[28px] lg:h-[199px] lg:pb-8 lg:pl-[30px] lg:pr-[35px] lg:pt-[29px]">
          <div className="mb-2 flex items-center justify-between lg:mb-[25px]">
            <h2 className="text-lg leading-none text-white">{data[2].title}</h2>
            <img src={iconEllipsis} alt="icon ellipsis" />
          </div>

          <div className="flex items-center justify-between lg:flex-col lg:items-start lg:gap-3">
            <h3 className="text-[32px] leading-none text-white lg:text-[56px]">
              {currentSelectedData === "daily"
                ? data[2].timeframes.daily.current
                : currentSelectedData === "weekly"
                  ? data[2].timeframes.weekly.current
                  : data[2].timeframes.monthly.current}
              hrs
            </h3>
            <p className="text-[15px] leading-none text-pale-blue">
              Last Week -{" "}
              {currentSelectedData === "daily"
                ? data[2].timeframes.daily.previous
                : currentSelectedData === "weekly"
                  ? data[2].timeframes.weekly.previous
                  : data[2].timeframes.monthly.previous}
              hrs
            </p>
          </div>
        </div>
      </div>
      {/* study */}

      {/* exercise */}
      <div className="relative h-[160px] rounded-[15px] bg-lime-green-(exercise) lg:h-[244px]">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <img
            src={iconExercise}
            alt="icon exercise"
            className="absolute -top-1 right-[17px]"
          />
        </div>
        <div className="absolute -bottom-[2px] left-0 h-[122px] w-full rounded-[15px] bg-dark-blue px-6 py-[28px] lg:h-[199px] lg:pb-8 lg:pl-[30px] lg:pr-[35px] lg:pt-[29px]">
          <div className="mb-2 flex items-center justify-between lg:mb-[25px]">
            <h2 className="text-lg leading-none text-white">{data[3].title}</h2>
            <img src={iconEllipsis} alt="icon ellipsis" />
          </div>

          <div className="flex items-center justify-between lg:flex-col lg:items-start lg:gap-3">
            <h3 className="text-[32px] leading-none text-white lg:text-[56px]">
              {currentSelectedData === "daily"
                ? data[3].timeframes.daily.current
                : currentSelectedData === "weekly"
                  ? data[3].timeframes.weekly.current
                  : data[3].timeframes.monthly.current}
              hrs
            </h3>
            <p className="text-[15px] leading-none text-pale-blue">
              Last Week -{" "}
              {currentSelectedData === "daily"
                ? data[3].timeframes.daily.previous
                : currentSelectedData === "weekly"
                  ? data[3].timeframes.weekly.previous
                  : data[3].timeframes.monthly.previous}
              hrs
            </p>
          </div>
        </div>
      </div>
      {/* exercise */}

      {/* social */}
      <div className="relative h-[160px] rounded-[15px] bg-violet-(social) lg:h-[244px]">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <img
            src={iconSocial}
            alt="icon social"
            className="absolute -top-[10px] right-[17px]"
          />
        </div>
        <div className="absolute -bottom-[2px] left-0 h-[122px] w-full rounded-[15px] bg-dark-blue px-6 py-[28px] lg:h-[199px] lg:pb-8 lg:pl-[30px] lg:pr-[35px] lg:pt-[29px]">
          <div className="mb-2 flex items-center justify-between lg:mb-[25px]">
            <h2 className="text-lg leading-none text-white">{data[4].title}</h2>
            <img src={iconEllipsis} alt="icon ellipsis" />
          </div>

          <div className="flex items-center justify-between lg:flex-col lg:items-start lg:gap-3">
            <h3 className="text-[32px] leading-none text-white lg:text-[56px]">
              {currentSelectedData === "daily"
                ? data[4].timeframes.daily.current
                : currentSelectedData === "weekly"
                  ? data[4].timeframes.weekly.current
                  : data[4].timeframes.monthly.current}
              hrs
            </h3>
            <p className="text-[15px] leading-none text-pale-blue">
              Last Week -{" "}
              {currentSelectedData === "daily"
                ? data[4].timeframes.daily.previous
                : currentSelectedData === "weekly"
                  ? data[4].timeframes.weekly.previous
                  : data[4].timeframes.monthly.previous}
              hrs
            </p>
          </div>
        </div>
      </div>
      {/* social */}

      {/* self care */}
      <div className="relative h-[160px] rounded-[15px] bg-soft-orange-(self-care) lg:h-[244px]">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <img
            src={iconSelfCare}
            alt="icon self care"
            className="absolute -top-[10px] right-[17px]"
          />
        </div>
        <div className="absolute -bottom-[2px] left-0 h-[122px] w-full rounded-[15px] bg-dark-blue px-6 py-[28px] lg:h-[199px] lg:pb-8 lg:pl-[30px] lg:pr-[35px] lg:pt-[29px]">
          <div className="mb-2 flex items-center justify-between lg:mb-[25px]">
            <h2 className="text-lg leading-none text-white">{data[5].title}</h2>
            <img src={iconEllipsis} alt="icon ellipsis" />
          </div>

          <div className="flex items-center justify-between lg:flex-col lg:items-start lg:gap-3">
            <h3 className="text-[32px] leading-none text-white lg:text-[56px]">
              {currentSelectedData === "daily"
                ? data[5].timeframes.daily.current
                : currentSelectedData === "weekly"
                  ? data[5].timeframes.weekly.current
                  : data[5].timeframes.monthly.current}
              hrs
            </h3>
            <p className="text-[15px] leading-none text-pale-blue">
              Last Week -{" "}
              {currentSelectedData === "daily"
                ? data[5].timeframes.daily.previous
                : currentSelectedData === "weekly"
                  ? data[5].timeframes.weekly.previous
                  : data[5].timeframes.monthly.previous}
              hrs
            </p>
          </div>
        </div>
      </div>
      {/* self care */}
    </>
  );
}
export default TimeTracking;
