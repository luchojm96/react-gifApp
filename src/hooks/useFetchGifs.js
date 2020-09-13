import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

  const apiKey = 'lxWFpxSwBczbzqySkiOHH0Jof9gUAPT2'

  const [state, setState] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    getGifs(category, apiKey)
      .then(imgs => setState({
        data: imgs,
        loading: false
      }))
  }, [category])

  return state // { data: [], loading: true }
}
