import {useState, useEffect} from 'react'

const useWidth = () => {
  let [width, setWidth] = useState(700)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let xwidth = window.innerWidth
      if (xwidth < 700) {
        setWidth(xwidth - 30)
      }
    }
  }, [])
  return width
}

export default useWidth;