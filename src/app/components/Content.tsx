import React from "react";
import Subscribe from "./forms/Subscribe";

const Content = () => {
  return (
    <div className="flex flex-col justify-center items-center border rounded-xl p-3">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[100%]">
        <div className="p-2">
          COL 1<Subscribe />
        </div>
        <div className="p-2">COL 2</div>
      </div>

      <div className="flex flex-col justify-center items-center p-3">
        {/* <TypingAnimation children="This is Left Column content." /> */}
      </div>
    </div>
  );
};

export default Content;
