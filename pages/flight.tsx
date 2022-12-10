import axios from "axios";
import { GetServerSideProps } from "next";
import React from "react";
import Header from "../Components/home/Header/Header";
import style from "../styles/search.module.css";
const Search = ({ data }: any) => {
  console.log(data);
  return (
    <div>
      <Header />
      <div className={style.containerCard_search}>
        {data.map((item: any) => (
          <div className={style.card}>
            <p>{item.airLine}</p>
            <p>{item.terminalNumber}</p>
            <p>{item.startDate}</p>
            <p>{item.classRefundStatus}</p>
            <p>{item.infantDiscountPrice}</p>
            <p>{item.infantTotalPrice}</p>
            <p>{item.paymentable}</p>
            <p>{item.paymentableDiscount}</p>
            <p>{item.classRefundStatus}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps =
  async (ctx) => {
    const token = ctx.req.cookies["token"];
    const {
      origin,
      destination,
      adultL,
      child,
      baby,
      originD,
      destinationD,
      selected,
    } = ctx.query;
    const data = {
      data: {
        startDate: originD,
        srcCityId: 4,
        destCitytId: 6,
        adultQty: adultL,
        childQty: child,
        infantQty: baby,
        isOneway: true,
      },
    };
    const fetch = axios.create();

    const res = await fetch.post(
      `${process.env.BASEURL}/InternalFlight/flightsavailability`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

    return {
      props: {
        data: res.data.response,
      },
    };
  };

export default Search;
