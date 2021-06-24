import React, { useState } from "react";
import Navbar from "./Navbar";
import { TabContent, TabPane, Nav, NavItem, NavLink, Button } from "reactstrap";
import classnames from "classnames";
import Submit from "./Submit";
import Discuss from "./Discuss";

const SubmitAndDiscuss = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="row">
        <Navbar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex pt-3 pb-2 mb-3">
            <h4>과제제출</h4>
            <Button size="sm" style={{ marginLeft: "400px" }}>
              팀원 커뮤니티
            </Button>
          </div>
          <Nav tabs style={{ width: "600px" }}>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                과제 제출
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                토론하기
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Submit />
            </TabPane>
            <TabPane tabId="2">
              <Discuss />
            </TabPane>
          </TabContent>
        </main>
      </div>
    </div>
  );
};

export default SubmitAndDiscuss;
