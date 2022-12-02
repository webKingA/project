import React, { useEffect } from 'react';
import style from './index.module.css';
import Header from '../../Components/ProfileAdmin/Header/Header';

const Index = () => {

    useEffect(() => {
        if (window.localStorage.getItem('token') == null) {
          window.location = '/login';
        }
      }, []);

    return (
        <div className={style.profile__admin}>
            <Header />
        </div>
    );
}

export default Index;
