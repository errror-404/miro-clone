import React from "react";
import { NewButton } from "./new-button";
import { List } from "./list";

const Sidebar = () => {
  return (
    <aside className=" text-white fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex flex-col p-3 gap-y-4">
      <NewButton />
      <List />
    </aside>
  );
};

export default Sidebar;
