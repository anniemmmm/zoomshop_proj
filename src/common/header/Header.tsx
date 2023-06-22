import React from "react";
import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";

interface HeaderProps {
  CartItem: Array<any>; 
}

const Header: React.FC<HeaderProps> = ({ CartItem }) => {
  return (
    <>
      <Head />
      <Search CartItem={CartItem} />
      <Navbar />
    </>
  );
};

export default Header;
