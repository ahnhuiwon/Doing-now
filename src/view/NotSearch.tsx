import React from 'react'
import { useResultLogic } from '../hooks/useMain'
import sad from '../style/img/sad.png'
import '../style/scss/not_search.scss'

const NotSearch = () => {
  const { move_rootpage } = useResultLogic()

  return (
    <>
      <div className="bg_conatiner">
        <div className="center_img">
          <img src={sad} alt="결과 샘플 이미지" />
          <p className="null_text">검색 결과가 없네요...</p>
          <button className="main_btn" onClick={move_rootpage}>
            메인으로
          </button>
        </div>
      </div>
    </>
  )
}

export default NotSearch
