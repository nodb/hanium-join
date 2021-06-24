import React from "react";

const defaultList = [
  {
    title: "개인정보",
    url: "#",
  },
  {
    title: "수강 과목",
    url: "#",
  },
  {
    title: "과제 제출함",
    url: "#",
  },
  {
    title: "회원 정보 수정",
    url: "#",
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
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href={item.url}
                    style={{ fontSize: "12px", color: "black" }}
                  >
                    <span data-feather="home" />
                    {item.title}
                  </a>
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
