import React, { useState } from "react";
import { products } from "../../product";
import Card from "../atoms/card";
import { OrderSummary } from "../atoms/orderSummary";
import PromoCode from "../atoms/promoCode";

export default function GioHang() {
  return (
      <div className="mx-56 flex gap-5">
        <div className=" w-[31rem] h-[]rem rounded-lg">
          <p className="font-semibold mx-5">Your product list</p>
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                {...product}
                hinhAnh={product.hinhAnh}
                tenSP={product.tenSP}
                gia={product.gia}
                soLuong={product.soLuong}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-5">
          <OrderSummary/>
          <PromoCode/>
        </div>
      </div>
  );
}
