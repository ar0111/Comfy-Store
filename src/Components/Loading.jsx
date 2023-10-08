import React from 'react';
import { TabTitle } from './FunctionTitles';

const Loading = () => {
    TabTitle("Comfy | Home")
    return (
        <div className='h-screen flex items-center justify-center'>
            <span className='loading loading-ring loading-lg'></span>
        </div>
    );
};

export default Loading;