/* eslint-disable max-len */
import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "../../assets/svg";

interface IProps {
	pageProps?:number;
  total: number;
  pageSize: number;
  onChange: (page: number) => void;
  maxPageDisplay?: number;
  changePage?: number;
}

export const Pagination = (props: IProps) => {
  const { pageProps,total, pageSize, onChange, maxPageDisplay, changePage } = props;

  const [currectPage, setCurrectPage] = useState(1);

  useEffect(() => {
    if (changePage) {
      setCurrectPage(changePage);
    }
  }, [changePage]);

  useEffect(() => {
	if(pageProps !== undefined)
	setCurrectPage(pageProps);
  }, [pageProps])

  const calculateCount = () => {
    let count = 1;
    if (total > pageSize && !!(total % pageSize)) {
      count = Math.floor(total / pageSize) + 1;
    } else if (total > pageSize && !(total % pageSize)) {
      count = Math.floor(total / pageSize);
    }
    return count;
  };
  const pageCount = calculateCount();

  const handleClick = (page: number) => {
    if (page === currectPage) {
      return;
    }
    onChange(page);
    setCurrectPage(page);
  };

  const handleNext = () => {
    onChange(currectPage + 1);
    setCurrectPage(currectPage + 1);
  };

  const handlePrev = () => {
    onChange(currectPage - 1);
    setCurrectPage(currectPage - 1);
  };

  const keys = Array.from({
    length: pageCount,
  }).keys() as unknown as Array<number>;
  const pageList = [...keys];
  const maxPage = maxPageDisplay || 4;
  return (
    // <div className="pagination btn-group">
    //   <button disabled={!pageList[currectPage - 1]} onClick={handlePrev} className="btn text-xs  m-1">
    //     <ChevronLeftIcon className="w-4 h-4" />
    //   </button>
    //   {
    //     pageList[(currectPage - maxPage) - 1] !== undefined && <button className="btn px-3 m-1 btn-disabled">...</button>
    //   }
    //   {
    //       pageList.map((item) => {
    //         if (item + 1 >= currectPage + maxPage) {
    //           return null;
    //         }
    //         if (item + 1 <= currectPage - maxPage) {
    //           return null;
    //         }
    //         return (
    //           <button
    //             onClick={(e) => {
    //               e.preventDefault();
    //               handleClick(item + 1);
    //             }}
    //             key={`${item}`}
    //             className={`${currectPage === item + 1 ? "btn-info" : ""} btn px-3 m-1`}
    //           >
    //             {item + 1}
    //           </button>
    //         );
    //       })
    //     }
    //   {
    //     !!(pageList[(currectPage + maxPage) - 1]) && <button className="btn px-3 m-1 btn-disabled">...</button>
    //   }
    //   <button disabled={!pageList[currectPage]} onClick={handleNext} className="btn text-xs  m-1">
    //     <ChevronRightIcon className="w-4 h-4" />
    //   </button>
    // </div>
    <div className="pagination flex items-center w-fit bg-white drop-shadow-[0px_2px_3px_rgba(0,0,0,0.07)] rounded-[4px] overflow-hidden">
       <button
        disabled={!pageList[currectPage+1]}
        onClick={handleNext}
        className="btn bg-transparent hover:bg-transparent p-[10px] text-xs disabled:bg-transparent"
      >
        <ChevronRightIcon
          className={`w-3 h-3 stroke-base-200 ${
            !pageList[currectPage+1] ? "stroke-gray-300" : ""
          }`}
        />
      </button>
      <button className="btn bg-transparent hover:bg-transparent py-[10px] px-3 text-base-content">
        {currectPage+1}
      </button>
    
	  <button
        disabled={!pageList[currectPage+1 - 1]}
        onClick={handlePrev}
        className="btn bg-transparent hover:bg-transparent p-[10px] text-xs disabled:bg-transparent"
      >
        <ChevronLeftIcon
          className={`w-3 h-3 stroke-base-200 ${
            !pageList[currectPage+1 - 1] ? "stroke-gray-300" : ""
          }`}
        />
      </button>
    </div>
  );
};
export default Pagination;
