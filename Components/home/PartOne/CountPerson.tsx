import { useState } from "react";
import { countPerson } from "../../../utils/data";
import style from "./PartOne.module.css";

interface Props {
  count: {
    adultL: number;
    child: number;
    baby: number;
  };
  setCount: React.Dispatch<
    React.SetStateAction<{
      adultL: number;
      child: number;
      baby: number;
    }>
  >;
}

const CountPerson = ({ count, setCount }: Props) => {
  const [openList, setOpenList] = useState(false);

  const { adultL, baby, child } = count;

  const decreaseCount = (i: string) =>
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
  const increaceCount = (i: string) => {
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
        <div className={style.container_count_person}>
          <p
            onClick={() => setOpenList(!openList)}
            className={style.how_count_person}
          >
            <span>تعداد نفرات</span>
            <span>
              {count.adultL + count.child + count.baby}
            </span>
          </p>

          <div className={`${style.list_count_person} ${openList ? style.active : ""}`}>
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
                <div className={style.btn_count_person} key={i.id}>
                  <div>
                    <button
                      onClick={() => decreaseCount(i.count)}
                    >
                      +
                    </button>
                    <p>{counti}</p>
                    <button
                      onClick={() => increaceCount(i.count)}
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
      </div>
    </div>
  );
};

export default CountPerson;
