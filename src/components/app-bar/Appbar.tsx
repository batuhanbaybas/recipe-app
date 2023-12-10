import React from "react";
import SearchFood from "../search-food/SearchFood";
import CategoryDrawer from "../category/category-drawer/CategoryDrawer";
import Link from "next/link";
import Navbar from "../ui/navbar/Navbar";

const AppBar = () => {
  return (
    <Navbar className="justify-between">
      <div className="flex items-center gap-x-2">
        <CategoryDrawer />
        <Link href="/">Recipe App</Link>
      </div>
      <SearchFood />
      <div />
    </Navbar>
  );
};

export default AppBar;
