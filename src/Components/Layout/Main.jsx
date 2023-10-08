import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Loading from '../Loading';
import { TabTitle } from '../FunctionTitles';

const Main = () => {
    TabTitle ('Comfy');

    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading';
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            {
                isPageLoading ? (
                    <Loading></Loading>
                ) : (<Outlet></Outlet>)
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Main;