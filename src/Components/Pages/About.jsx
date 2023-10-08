import React from 'react';
import { TabTitle } from '../FunctionTitles';

const About = () => {
    TabTitle("Comfy | About")
    return (
        <div className='mt-20 h-screen'>
            <div className='flex flex-wrap gap-2 sm:-x-6 items-center justify-center'>
                <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>We Love</h1>
                <div className="stats bg-primary shadow">
                    <div className="stat">
                        <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
                            comfy
                        </div>
                    </div>
                </div>
            </div>
            <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nostrum beatae est aliquam ipsum, laborum consequatur quia in eveniet dolore quasi sint iure sunt. Delectus, unde. Quibusdam sint saepe porro, laborum alias error aliquam ratione eius facilis perferendis consequatur molestiae?</p>
        </div>
        
    );
};

export default About;