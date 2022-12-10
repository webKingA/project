import React from 'react';
import style from './index.module.css';
import Header from '../../../Components/ProfileAdmin/Header/Header';
import UsersList from '../../../Components/ProfileAdmin/UsersList/UsersList';
import Table from '../../../Components/ProfileAdmin/Table/Table';

const Index = () => {
    return (
        <div className={style.rolemanagment}>
            <Header />
            <UsersList />
            <Table />
        </div>
    );
}

export default Index;
