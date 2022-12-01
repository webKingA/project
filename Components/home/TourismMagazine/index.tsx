import React from 'react'
import Card from './Card'
import style from "./style.module.css"

const TourismMagazine = () => {
  return (
    <section className={style.container_tourismMagazine}>
        <div>
            <h1>
                مجله‌ی گردشگری شهرزاد بال
            </h1>
            <p>مجله‌ کاری | لوازم سفر | مناطق گردشگری | اخبار و رویداد‌های گردشگری</p>
        </div>
        <div className={style.container_card_tourismMagazine}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
    </section>
  )
}

export default TourismMagazine