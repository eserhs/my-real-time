import {useState} from 'react'
import { send } from '../SocketApi'

export const Palette = ({activeColor}) => {
    const[color, setColor]=useState("#000");

  return (
    <div className='palette'>
        
        <input value={activeColor} onChange={(e)=> setColor(e.target.value)} type={"color"}></input>

        <button onClick={()=> send(color)}>Add</button>
        
    </div>
  )
}
