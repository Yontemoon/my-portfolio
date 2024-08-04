import { play } from "../lib/fonts";
import clsx from "clsx";

const MaxHomePage = () => {
  return (
    <div
      className={clsx(
        play.className,
        "name-fade-animation fixed flex flex-col z-10 mb-2 mr-5"
      )}
    >
      <h1>Monte Yoon</h1>
      <h2>Software Developer.</h2>
    </div>
  );
};

export default MaxHomePage;
