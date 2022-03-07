import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { changeColor } from '../Features/theme';

const ChangeColor = () => {
    const dispatch=  useDispatch();
    const[color, setColor] = useState('')
  return (
    <>
        <input onChange={(e)=>setColor(e.target.value)} type="text"/>
        <button onClick={()=>{
            dispatch(changeColor(color))
        }}>Change Color</button>
    </>
  )
}

export default ChangeColor