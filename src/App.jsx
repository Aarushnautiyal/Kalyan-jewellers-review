import ReactStars from "react-rating-stars-component";
import React, { useEffect, useState } from "react";
import './App.css'
import Rating from "./Rating";
import Text from "./Text";

const App = ()=>{
  const [display, setdisplay] = useState(false)
  const [value, setValue] = useState(0)
  const [textDisplay, setTextDisplay] = useState()
  const [lower, setLower] = useState()
  const ratingChanged = (newRating) => {
    setdisplay(true)
    setValue(newRating)
    console.log(newRating);
  };
 
  useEffect(() => {
     switch (value) {
      case 1:
        setTextDisplay('oh no!')
        setLower('oops, what went wrong?')
        break;
      case 2:
        setTextDisplay('That\'s not good')
        setLower('oops, what went wrong?')
        break;
      case 3:
        setTextDisplay('Tell us more!')
        setLower('Where can we excel?')
        break;
      case 4:
        setTextDisplay('Yay, almost perfect!')
        setLower('Which of this was your favourite aspect?')
        break;
      case 5:
        setTextDisplay('That\'s awesome')
        setLower('Which of this was your favourite aspect?')
        break;
      default:
        break;
    }
  }, [value])
  return(
    <div className="flx size">
      <div className="card">
        <h3>Hi Divya,</h3>
      <h1>Tell Us How We Did?</h1>
      <p>Spear Heads Solitaire Diamond Engagement Ring</p>
      <h2>Rate Your Experience</h2>
      <div className="card flx inner">
        {display&&<Text value={textDisplay}/>}
        {/* {textDisplay} */}
        <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
      {lower}
      {display&&<Rating/>}
      </div>
      </div>
    </div>
  )
}
export default App