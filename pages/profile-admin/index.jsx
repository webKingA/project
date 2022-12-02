import React, { useEffect } from 'react';
import style from './index.module.css';
import Header from '../../Components/ProfileAdmin/Header/Header';
import UsersList from '../../Components/ProfileAdmin/UsersList/UsersList';
import Table from '../../Components/ProfileAdmin/Table/Table';

const Index = () => {

    useEffect(() => {
        if (window.localStorage.getItem('token') == null) {
          window.location = '/login';
        }
      }, []);

    return (
        <div className={style.profile__admin}>
            <Header />
            <UsersList />
            <Table />
        </div>
    );
}

export default Index;
