import React from "react";

const Example = () => {
  return (
    <div role="tabpanel">
      <ul class="nav nav-tabs">
        <li role="presentation" class="active">
          <a href="#">과제 제출</a>
        </li>
        <li role="presentation">
          <a href="#">토론 하기</a>
        </li>
      </ul>
    </div>
  );
};

export default Example;
