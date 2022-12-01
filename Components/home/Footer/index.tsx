import Image from "next/image";
import React from "react";
import style from "./style.module.css";
import Image1 from "../../../public/images/home/prague.jpg";
import GoolePlay from "../../../public/images/home/Google_Playsvg.png"
import AppStore from "../../../public/images/home/app_store.png"
import {
  FaFacebookF,
  FaTelegramPlane,
} from "react-icons/fa";
import {
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsWhatsapp,
} from "react-icons/bs";
import { itemsFooter } from "../../../utils/data";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div>
        <div className={style.phone_logo}>
          {/* phone */}
          <div>
            <p>تلفن پشتیبان:</p>
            <p>09101234567</p>
          </div>
          {/* logo */}
          <Image src={Image1} alt="" />
        </div>
        <div className={style.address_media}>
          {/* address */}
          <p>
            <span>آدرس :</span>
            <span>
              {" "}
              اصفهان | خیابان حکیم نظامی | نرسیده به چهارراه
              نظر | ساختمان حکیم | طبقه 5 | واحد 501
            </span>
          </p>
          {/* media */}
          <div>
            <FaFacebookF />
            <BsInstagram />
            <BsTwitter />
            <BsYoutube />
            <FaTelegramPlane />
            <BsWhatsapp />
          </div>
        </div>
        <div className={style.quick_access}>
          <div className={style.footer_bottm_right}>
            <div>
              <ul>
                {itemsFooter.slice(0, 7).map((i) => (
                  <li key={i.id}>
                    <Link href={i.link}>{i.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul>
                {itemsFooter.slice(7, 14).map((i) => (
                  <li key={i.id}>
                    <Link href={i.link}>{i.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={style.footer_bottm_left}>
            <div className={style.get_app}>
              <Image alt="" src={GoolePlay}/>
              <Image alt="" src={AppStore}/>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>



{/* text seveices shahrzad footer */}
      <div className={style.text_services_footer}>
        <p>کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به شرکت شهرزاد بال می‌باشد.</p>
      </div>
    </footer>
  );
};

export default Footer;
