import { play } from "../lib/fonts";
import clsx from "clsx";
import MyLinks from "./MyLinks";

const MaxHomePage = ({ ...props }) => {
  return (
    <div
      className={clsx(
        { ...props },
        play.className,
        "delayed-fade-animation relative flex flex-col z-10 min-h-28 h-full w-full"
      )}
    >
      <div className="absolute bottom-0 left-0 lg:top-0">
        <h1>Monte Yoon</h1>
        <h2 className="mb-2">Software Developer.</h2>
      </div>
      <div className={clsx("absolute bottom-0 right-0 ")}>
        <MyLinks />
      </div>
    </div>
  );
};

export default MaxHomePage;
