import React, { Fragment } from 'react'
import '../style/scss/main.scss'
import exams_img from '../style/img/exams.svg'
import Form from '../component/Form'

const Main = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="forms_container">
          <div className="signin_signup">
            <Form />
          </div>
        </div>
        <div className="panels_container">
          <div className="panel panel_left">
            <div className="content">
              <h3>지금 뭐하지?</h3>
              <p>선택장애 유저들을 위한 할 일 정해주는 프로그램</p>
            </div>

            <img src={exams_img} className="image" alt="이미지" />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Main
