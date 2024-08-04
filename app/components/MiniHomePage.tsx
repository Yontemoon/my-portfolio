import React, { Dispatch, SetStateAction } from "react";

import BackArrow from "../icons/back-arrow";
import { play } from "../lib/fonts";

const MiniHomePage = ({
  setShowBack,
  showBack,
}: {
  setShowBack: Dispatch<SetStateAction<boolean>>;
  showBack: boolean;
}) => {
  return (
    <div className={play.className}>
      <div className="relative m-0">
        <h2 className="delayed-fade-animation fixed lg:-rotate-90 lg:-right-16 lg:top-20 z-30 lg:mr-5 lg:mt-3 text-nowrap overflow-hidden">
          Monte Yoon
        </h2>
        <div
          id="exitIcon"
          className={showBack ? `showExit exitIcon` : `exitIcon`}
        >
          {
            <div className={`fixed bottom-0 right-0 m-2`}>
              <BackArrow width={44} />
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default MiniHomePage;
