import React from 'react'
import CommuModal from './CommuModal'
import MyInfo from './MyInfo'
import MyClass from './MyClass.js'
import MyAssignment from './MyAssignment'
import MyModify from './MyModify'


export const MypageLayout = () => {
    return (
<div className="container-fluid">
  <div className="row">
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>마이페이지</span>
          <a className="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle" />
          </a>
        </h6>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <span data-feather="home" />
              개인 정보
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file" />
              수강 과목
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="shopping-cart" />
              과제 제출함
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="users" />
              회원정보 수정
            </a>
          </li>
          
       </ul>
      </div>
    </nav>
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">마이페이지</h1>
        </div>

          <div>
            {/* <MyInfo /> */}
            {/* <MyClass /> */}
            {/* <MyAssignment /> */}
            {/* <MyModify /> */}
            <CommuModal />
          </div>

      <canvas className="my-4 w-100" id="myChart" width={900} height={380} />
      

    </main>
  </div>
</div>



    )
}

export default MypageLayout;