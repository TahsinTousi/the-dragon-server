import React from 'react';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
import bg from '../../../assets/bg.png'

const QZone = () => {
    return (
        <div className='bg-secondary text-center py-4'>
          <h4>Q-Zone</h4>
          <div>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
          </div>
          {/* <div>
            <img src={bg} alt="" />
          </div> */}
        </div>
    );
};

export default QZone;