import React, { useEffect, useState } from 'react';
import BaComponents from './BaComponents';
import Qzone1 from '../../assets/qZone1.png'
import Qzone2 from '../../assets/qZone2.png'
import Qzone3 from '../../assets/qZone3.png'

const LeftNavbar = () => {
    const [categorys,setCategorys] = useState([])
    useEffect(()=>{
        fetch('public/data/categories.json')
        .then(resp =>resp.json())
        .then(data => setCategorys(data))
    },[])
    return (
        <div className='md:static '>
         <div className='md:absolute top-72'>
         <h2 className='text-xl rounded-md  mb-6 font-bold'> News Category</h2>
          <div className='justify-center space-y-8 opacity-80'>
          {
            categorys.map(category => <BaComponents  key={category.id} category={category}></BaComponents>
            )
          }
          </div>

          <div className=''>
                <h3 className='font-bold text-start ml-6 p-4'>Qzone</h3>
                <div className='ml-3'>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
                </div>
            </div>
         </div>
        </div>
    );
};

export default LeftNavbar;  

