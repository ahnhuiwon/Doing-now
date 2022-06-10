import React, { useState } from 'react'
import { useMainLogic } from '../hooks/useMain'
import Loading from '../component/Loading'

const Form = () => {
  const [access, set_access] = useState<number>(0)
  const [person, set_person] = useState<number>(1)
  const { main_click, loading } = useMainLogic()

  const change_func = evt => {
    const { value } = evt.target

    set_access(value)
  }

  const change_person = evt => {
    const { value } = evt.target

    set_person(value)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <form className="sign_in_form" onSubmit={main_click}>
      <h2 className="title">설정하기</h2>
      <div className="input_field">
        <label>접근성</label>
        <input
          type="range"
          min="0"
          max="10"
          placeholder="username"
          name="access_val"
          onChange={e => {
            change_func(e)
          }}
          value={access}
        />
        <p>{access}</p>
      </div>
      <div className="guide_text">
        <p>! 접근성은 0에 가까울수록 높아집니다.</p>
      </div>
      <div className="input_field">
        <label>유형</label>
        <select name="category_val">
          <option value="">활동 유형</option>
          <option value="education">교육</option>
          <option value="recreational">레크레이션</option>
          <option value="social">소셜</option>
          <option value="diy">DIY</option>
          <option value="charity">자선</option>
          <option value="cooking">요리</option>
          <option value="relaxation">휴식</option>
          <option value="music">음악</option>
          <option value="busywork">바쁜 작업</option>
        </select>
      </div>
      <div className="input_field">
        <label>인원</label>
        <input
          className="input_last"
          type="number"
          value={person}
          name="person_val"
          onChange={e => {
            change_person(e)
          }}
        />
      </div>
      <p className="social_text">지금 뭐하지?</p>
      <input type="submit" value="시작하기" className="btn_solid" />
    </form>
  )
}

export default Form
