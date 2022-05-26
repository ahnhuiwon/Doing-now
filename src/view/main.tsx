import React, { Fragment } from 'react'
import '../style/scss/main.scss'
import exams_img from '../style/img/exams.svg'

const Main = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="form_container">
          <div className="title_wrap">
            <div className="title_in_div">
              <h2>지금 뭐하지?</h2>
              <div className="sub_title">
                <p>선택장애 유저를 위한</p>
              </div>
              <div className="sub_title">
                <p>할 일 추천 사이트</p>
              </div>
              <div className="sub_title">
                <button>시작하기</button>
              </div>
            </div>
          </div>
        </div>
        <div className="panel_container">
          <div className="panel left_panel">
            <img alt="work_img" src={exams_img} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Main
