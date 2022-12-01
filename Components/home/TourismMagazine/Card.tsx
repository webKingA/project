import Image from "next/image";
import React from "react";
import Image1 from "../../../public/images/home/prague.jpg";
import style from "./style.module.css";
const Card = () => {
  return (
    <div className={style.container_card}>
      <div>
        <Image src={Image1} alt="" />
        <div>
          <h4>چگونه برای سفر کاری خودآماده شوید</h4>
          <p>
            ما قبلاً یک مقاله سطح 1 در مورد چگونگی آماده شدن
            برای سفر کاری خود نوشته ایم. اگر کنجکاو هستید،
            دریغ نکنید که آن را اینجا بررسی کنید. امروز ما
            در مورد آماده سازی سفر کاری به طور عمیق تر صحبت
            می کنیم تا اطمینان حاصل کنیم که تجربه ای امن و
            صلح آمیز خواهید داشت. 1. یک برنامه سفر ایجاد
            کنید گروه بندی مجدد آدرس های سفر و زمان بندی در
            یک مکان برای یک سفر شرکتی موفق بسیار مهم است.
            مسیر رسیدن به هتل را نقشه برداری کنید، آن را
            بررسی کنید
          </p>
          <div>
            <button>ادامه مطلب</button>
          </div>
          <p className={style.robon}>سفر های کاری</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
