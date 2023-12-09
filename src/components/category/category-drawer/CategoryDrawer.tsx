import React from "react";
import Drawer from "../../ui/drawer/Drawer";
import { RxHamburgerMenu } from "react-icons/rx";
import CategoryList from "../category-list/CategoryList";

function CategoryDrawer() {
  return (
    <Drawer
      title={"Categories"}
      drawerOpenButtonLabel={<RxHamburgerMenu className="text-2xl" />}
    >
      <CategoryList />
    </Drawer>
  );
}

export default CategoryDrawer;
