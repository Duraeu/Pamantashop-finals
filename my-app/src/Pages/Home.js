
import {useState} from 'react';

const Home = () => {
 


    return ( 
        <div className="home ">
            <h1 className='text-2xl pb-2'>Shopping platform for PLM HARIBONS.</h1>

            <div className='grid grid-cols-5 gap-5 p-6 m-5 flex-auto '>
                <div>img 1</div>
                <div>img 2</div>
                <div>img 3</div>
                <div>img 4</div>
                <div>img 5</div>
            </div>
            <h3 className='pt-2'>We have many promo for you everyday, don't miss out. Checkout now!</h3>
        </div>
     );
}
 
export default Home;