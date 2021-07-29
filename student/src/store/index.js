import { createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  // 초기 test 값
  classes: [
    {
      id: 1,
      className: "시스템 프로그래밍",
      classCode: "000001",
      classImage: "classImage.jpg",
      members: [
        {
          memberId: 1,
        },
      ],
      teams: [
        {
          id: 1,
          teamMember: [
            {
              memberId: 1,
            },
          ],
        },
      ],
      assignments: [
        {
          id: 1,
          progress: true,
          name: "과제 명 1",
          content: "내용",
          image: "assignmentImage.jpg",
          comment: [
            {
              id: 1,
              content: "내용",
              name: "조재영",
              createdAt: "2021-06-21",
            },
          ],
          point: 10,
          createdAt: "2020-05-21",
          deadline: "2021-06-21",
          teams: [
            {
              teamId: 1,
            },
          ],
        },
      ],
    },
  ],
  members: [
    {
      id: 1,
      memberId: "jdyj",
      memberPassword: "패스워드",
      memberName: "조재영",
      phoneNumber: "010-1234-5678",
      email: "abcd@souletaca.ek.kr",
      department: "컴퓨터공학과",
      studentId: "18111234",
      grade: 1,
      profileImage: "profile.jpg",
      myClass: [
        {
          classId: 1,
        },
      ],
      myAssignment: [
        {
          assignmentId: 1,
        },
      ],
    },
  ],
};

const store = createStore(reducer, initialState, composeWithDevTools());

export default store;
