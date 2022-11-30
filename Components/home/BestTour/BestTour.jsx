import React , {useState} from "react";
import style from "./BestTour.module.css";

// import Icons Start

import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';

// import Icons End

const BestTour = () => {

    const [adult , setAdult] = useState(0);
    const [child , setChild] = useState(0);
    const [baby , setBaby] = useState(0);

  return (
    <div className={style.besttour}>
      <div>
        <span>
            <select>
                <option value="">
                    <span>
                        <AiOutlinePlus />
                        {adult}
                        <AiOutlineMinus />
                    </span>
                    <span></span>
                </option>
            </select>
        </span>
        <span></span>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default BestTour;
