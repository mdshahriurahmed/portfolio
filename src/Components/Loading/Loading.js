import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div>
            <div className='flex justify-center items-center justify-items-center pt-96'>
                <BallTriangle
                    height="100"
                    width="100"
                    color='#5FBB46'
                    ariaLabel='loading'

                />
            </div>
        </div>
    );
};

export default Loading;