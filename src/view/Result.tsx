import React from 'react'
import '../style/scss/result.scss'
import studying from '../style/img/studying.png'
import music from '../style/img/music.png'
import busywork from '../style/img/busywork.png'
import cook from '../style/img/cook.png'
import diy from '../style/img/diy.png'
import gift from '../style/img/gift.png'
import recreational from '../style/img/recreational.png'
import relax from '../style/img/relax.png'
import social from '../style/img/social.png'
import { AiOutlineHome } from 'react-icons/ai'
import { VscDebugRestart } from 'react-icons/vsc'
import { useLocation } from 'react-router-dom'
import { useResultLogic } from '../hooks/useMain'

interface StateType {
  hash: string
  key: string
  pathname: string
  search: string
  state: any
}

const Result = () => {
  const { state }: StateType = useLocation()
  const { move_rootpage } = useResultLogic()

  return (
    <>
      <div className="bg_conatiner">
        <div className="center_img">
          {state.type === 'education' && (
            <img src={studying} alt="공부 이미지" />
          )}
          {state.type === 'recreational' && (
            <img src={recreational} alt="레크레이션 이미지" />
          )}
          {state.type === 'music' && <img src={music} alt="음악 이미지" />}
          {state.type === 'busywork' && (
            <img src={busywork} alt="바쁜 남자 이미지" />
          )}
          {state.type === 'cooking' && <img src={cook} alt="요리 이미지" />}
          {state.type === 'diy' && <img src={diy} alt="diy 이미지" />}
          {state.type === 'charity' && <img src={gift} alt="선물 이미지" />}
          {state.type === 'relaxation' && <img src={relax} alt="휴식 이미지" />}
          {state.type === 'social' && <img src={social} alt="소셜 이미지" />}
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
