import React from "react";
import { BsGrid1X2Fill } from "react-icons/bs";
export default function NoPostCreated() {
  return (
    <div>
      <div className="flex justify-center text-2xl mt-20">
        <BsGrid1X2Fill className="m-2" />
        <div className="m-1 font-bold">No posts</div>
      </div>
    </div>
  );
}
