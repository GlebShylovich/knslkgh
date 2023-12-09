import './slider.scss';
import { useState, useEffect } from 'react';
import { arrSlider } from '../../picture'
import left from '../../assets/img/angle-left.png'
import right from '../../assets/img/angle-right.png'

export default function Slider() {
  const [count, setCount] = useState(0);

  function handlePrev() {
    if (count == 0) {
      setCount(arrSlider.length - 1);
      return;
    }
    setCount((prevCount) => prevCount - 1);
  }

  function handleNext() {
    if (count == arrSlider.length - 1) {
      setCount(0);
      return;
    }
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div className="slider">
      <div className="slider__buttons">
        <button className="prev" onClick={handlePrev}>
        </button>
        <button className="next" onClick={handleNext}>
        </button>
      </div>
      <div className="slider__body">
        <img src={arrSlider[count]} alt="" />
      </div>
    </div>
  )
}
