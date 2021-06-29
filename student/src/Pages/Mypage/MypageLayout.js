import React from 'react'
import MyInfo from './MyInfo'
import MyClass from './MyClass.js'
import MyAssignment from './MyAssignment'
import MyModify from './MyModify'
import { Redirect, Route, Switch,Link } from 'react-router-dom'

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
        
        <li>
            <Link className="nav-link" to="/myinfo">
            <span data-feather="file" />
              개인 정보
            </Link>
          </li>

          <li className="nav-item">
          <Link className="nav-link" to="/class">
            <span data-feather="file" />
              수강 과목
            </Link>
            </li>

          <li className="nav-item">
          <Link className="nav-link" to="/myassignment">
            <span data-feather="file" />
              과제 제출함
            </Link>
            </li>

          <li className="nav-item">
          <Link className="nav-link" to="/mymodify">
            <span data-feather="file" />
              회원정보 수정
            </Link>
            </li>
          
       </ul>
      </div>
    </nav>
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">마이페이지</h1>
        </div>

          <div>
          <Switch>
            <Route path="/myinfo" exact component={MyInfo}></Route>
            <Route path="/class" exact component={MyClass}></Route>
            <Route path="/myassignment" excat component={MyAssignment}></Route>
            <Route path="/mymodify" exact component={MyModify}></Route>       
            <Redirect to="/myinfo" />
          </Switch>
          </div>

      <canvas className="my-4 w-100" id="myChart" width={900} height={380} />
      

    </main>
  </div>
</div>



    )
}

export default MypageLayout;