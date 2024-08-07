import React, { Dispatch, SetStateAction } from "react";

import BackArrow from "../icons/back-arrow";
import { play } from "../lib/fonts";
import MyLinks from "./MyLinks";
import clsx from "clsx";

const MiniHomePage = ({
  setShowBack,
  showBack,
}: {
  setShowBack: Dispatch<SetStateAction<boolean>>;
  showBack: boolean;
}) => {
  return (
    <div className={clsx("relative m-0 w-full h-full", play.className)}>
      <h2 className="delayed-fade-animation absolute lg:-rotate-90 lg:-right-16 lg:top-20 z-30 lg:mr-5 lg:mt-3 text-nowrap overflow-hidden">
        Monte Yoon
      </h2>
      <div className="absolute lg:bottom-14 lg:right-0 bottom-0 ">
        <MyLinks />
      </div>
      <div
        id="exitIcon"
        className={showBack ? `showExit exitIcon` : `exitIcon`}
      >
        {
          <div className={`fixed bottom-0 right-0 m-2`}>
            <BackArrow width={40} />
          </div>
        }
      </div>
    </div>
  );
};

export default MiniHomePage;
