import React from 'react'
import '../style/scss/result.scss'
import studying from '../style/img/studying.png'
import { AiOutlineHome } from 'react-icons/ai'
import { VscDebugRestart } from 'react-icons/vsc'
import { useLocation } from 'react-router-dom'
import { useResultLogic } from '../hooks/useMain'

const Result = () => {
  const { state } = useLocation()
  const { move_rootpage } = useResultLogic()
  console.log(state)

  return (
    <>
      <div className="bg_conatiner">
        <div className="center_img">
          <img src={studying} alt="결과 샘플 이미지" />
          <p className="title_text">{state['activity']}</p>
          <div className="text_wrap">
            <span>접근성</span>
            <p>{Number(state['accessibility']) * 10}</p>
          </div>
          <div className="text_wrap">
            <span>인원</span>
            <p>{state['participants']}</p>
          </div>
          <a className="a_style" href={state['link']}>
            자세히 보기
          </a>
          <div className="btn_wrap">
            <button className="home_btn" onClick={move_rootpage}>
              <AiOutlineHome />
            </button>
            <div></div>
            <button className="restart_btn">
              <VscDebugRestart />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Result
