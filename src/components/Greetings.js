import React, { useState } from 'react'
import Output from './Output';

const Greetings = () => {
    const [changedText, setChangedText] = useState(false);

    const changeHandler = () => {
        setChangedText(prev => !prev)
    }
  return (
    <div>
        <h2>Hello world</h2> 
        {!changedText && <Output>Nice to me you</Output>}
        {changedText && <Output>changed</Output>}
        <button onClick={changeHandler}>submit</button>
    </div>
  )
}

export default Greetings