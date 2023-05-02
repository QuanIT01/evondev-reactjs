import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const ListLink = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/blog",
    title: "Blog",
  },
  {
    id: 3,
    to: "/profile",
    title: "Profile",
  },
  {
    id: 4,
    to: "/contact",
    title: "Contact",
  },
];

const Nav = () => {
  return (
    <>
      <div className="flex items-center justify-center p-5 bg-white shadow-md gap-x-5">
        {ListLink.map((item) => (
          <NavLink
            to={item.to}
            className={({ isActive }) => (isActive ? "text-green-400" : "")}
            key={item.id}
          >
            {item.title}
          </NavLink>
        ))}
        {/*} <NavLink
        to={"/blog"}
        className={({ isActive }) => (isActive ? "text-green-400" : "")}
      >
        Blog
      </NavLink>
      <NavLink
        to={"/profile"}
        className={({ isActive }) => (isActive ? "text-green-400" : "")}
      >
        Profile
      </NavLink>*/}
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Nav;
