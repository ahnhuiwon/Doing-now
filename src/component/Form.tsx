import React, { Fragment } from 'react'

const Form = () => {
  return (
    <Fragment>
      <form className="sign_in_form">
        <h2 className="title">Sign in</h2>
        <div className="input_field">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="username" />
        </div>
        <div className="input_field">
          <i className="fas fa-lock"></i>
          <input type="text" placeholder="password" />
        </div>
        <p className="social_text">지금 뭐하지?</p>
        <input type="submit" value="시작하기" className="btn_solid" />
      </form>
    </Fragment>
  )
}

export default Form
