import React from "react";
import { Link } from "react-router-dom";

const defaultList = [
  {
    title: "▶ 수업 명1",
    url: "/student/class/main",
  },
  {
    title: "▶ 수업 명2",
    url: "/student/class/main",
  },
  {
    title: "▶ 수업 명3",
    url: "/student/class/main",
  },
];

const Navbar = ({ list }) => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          {!list
            ? defaultList.map((item) => (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={item.url}
                    style={{ fontSize: "12px", color: "black" }}
                  >
                    <span data-feather="home" />
                    {item.title}
                  </Link>
                </li>
              ))
            : list.map((item) => (
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href={item.url}
                    style={{ fontSize: "12px" }}
                  >
                    <span data-feather="home" />
                    {item.title}
                  </a>
                </li>
              ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
