import {useState} from 'react'
// import Icons Start
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { countPerson } from "../../../utils/data";
import { HiLocationMarker } from "react-icons/hi";
import style from "./BestTour.module.css"
const Header = () => {
    const [openList, setOpenList] = useState(false);
    const [count, setCount] = useState({
      adultL: 0,
      child: 0,
      baby: 0,
    });
    const { adultL, baby, child } = count;
  
    const decreaseCount = (i:string) =>
      setCount({
        ...count,
        [i]:
          i === "adultL"
            ? adultL + 1
            : i === "child"
            ? child + 1
            : i === "baby"
            ? baby + 1
            : null,
      });
    const increaceCount = (i:string) => {
      setCount({
        ...count,
        [i]:
          i === "adultL"
            ? adultL !== 0
              ? adultL - 1
              : 0
            : i === "child"
            ? child !== 0
              ? child - 1
              : 0
            : i === "baby"
            ? baby !== 0
              ? baby - 1
              : 0
            : null,
      });
    };
  return (
    <div>
    <div>
      <div>
        <FaUser size={20} color="blue" />
        <p>
          <span>تعداد نفرات</span>
          <span>
            {/* {count.adultL + count.child + count.baby} */}
          </span>
        </p>
        <IoIosArrowDown
          onClick={() => setOpenList(!openList)}
          size={20}
        />
        <div className={openList ? style.active : ""}>
          {countPerson.map((i) => {
            let counti;
            if (i.id === 1) {
              counti = count.adultL;
            } else if (i.id === 2) {
              counti = count.child;
            } else {
              counti = count.baby;
            }
            return (
              <div
                key={i.id}
                className={style.countPersonStyle}
              >
                <div>
                  <button
                    // onClick={() =>
                    //   decreaseCount(i.count)
                    // }
                  >
                    +
                  </button>
                  <p>{counti}</p>
                  <button
                    // onClick={() =>
                    //   increaceCount(i.count)
                    // }
                  >
                    -
                  </button>
                </div>
                <p>{i.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <HiLocationMarker size={26}/>
        <p>
          <span>قصد سفر به کجا را دارید؟</span>
          <span>کیش و قشم</span>
        </p>
      </div>
    </div>
    <div>
      <p>بهترین تورهای اخیر شهرزاد</p>
      <p>بهترین قیمت در مسیر‌های شما</p>
    </div>
  </div>
  )
}

export default Header