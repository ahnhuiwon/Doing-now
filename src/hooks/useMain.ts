import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface Tempdata {
  access: number
  category: string
  person: number
}

interface Resdata {
  accessibility: number
  activity: string
  key: string
  link: string
  participants: number
  price: number
  type: string
}

// 메인 페이지 로직
export const useMainLogic = () => {
  const [loading, set_loading] = useState<boolean>(false)
  const navigate = useNavigate()

  const main_click = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { access_val, category_val, person_val } = e.currentTarget

    const temp_data: Tempdata = {
      access: Number(access_val.value) / 10,
      category: category_val.value,
      person: person_val.value,
    }

    send_data(temp_data)
  }
  // rest api 함수
  const send_data = async (param: Tempdata) => {
    console.log(param)

    set_loading(true)

    const { access, category, person } = param

    await Axios.get(
      `https://www.boredapi.com/api/activity?accessibility=${access}&&type=${category}&&participants=${person}`
    )
      .then(async res => {
        if (!res.data.error) {
          await translate_func(res.data, param)
        } else {
          navigate('/~c11st16/portfolio/do_now/not_search')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const translate_func = async (param: Resdata, send_param: Tempdata) => {
    const { activity } = param
    await Axios.get(
      `https://dapi.kakao.com/v2/translation/translate?src_lang=en&target_lang=kr&query=${activity}`,
      {
        headers: {
          Authorization: 'KakaoAK c1d5bb9a47003e72e17807eec9bbb613',
          'Content-type': 'application/x-www-form-urlencoded',
        },
      }
    )
      .then(async res => {
        await set_loading(false)
        await navigate('/~c11st16/portfolio/do_now/result', {
          state: {
            activity: res.data.translated_text[0],
            accessibility: param.accessibility,
            participants: param.participants,
            type: param.type,
            total_data: send_param,
          },
        })
      })
      .catch(err => {
        navigate('/not_search')
        console.log(err)
      })
  }

  return { main_click, loading, send_data }
}

// 결과 페이지 로직
export const useResultLogic = () => {
  const navigate = useNavigate()

  const move_rootpage = () => {
    navigate('/~c11st16/portfolio/do_now/')
  }

  return { move_rootpage }
}
