import axios from "axios";
import { GetServerSideProps } from "next";
import React from "react";
import Header from "../Components/home/Header/Header";
const Search = ({ isSuccess }: any) => {
  return (
    <div>
      <Header />

      <h1 style={{textAlign:"center",paddingTop:"120px"}}>
        {isSuccess
          ? "موفق"
          : "هیچ هتلی برای تاریخ مورد نظر یافت نشد"}
      </h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps =
  async (ctx) => {
    const token = ctx.req.cookies["token"];
    const {
      adultL,
      child,
      baby,
      originD,
      destinationD,
    } = ctx.query;
    const data = {
      data: {
        fromDate: originD,
        toDate: destinationD,
        hotelId: 0,
        roomsList: [
          {
            adultQty: adultL,
            childQtyList: [0],
          },
        ],
      },
    };

    const fetch = axios.create();

    const res = await fetch.post(
      `${process.env.BASEURL}/InternalHotel/hotelavailability`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

    console.log(res.data.isSuccess);
    return {
      props: {
        isSuccess: res.data.isSuccess,
      },
    };
  };

export default Search;
