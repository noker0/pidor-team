import React from 'react'
import './Main.css'
import retel from '../../assets/retel.png'
import star from '../../assets/star.png'

const Main = () => {
  return (
    <>
        <div className="glav">
            <p>Make your dream business goal come true</p>
        </div>
        <div className="glav2">
            <p>when you need us for improve your business,then come with us to help your business have reach it, you just sit and feel that goal</p>
        </div>
        <div className="glav3">
          <button>Start Project</button>
        </div>
        <div className="main">
            <div className="doll">
                <div className="refel">
                    <img src={star} alt="" />
                    <p>great project</p>
                </div>
                <div className="dool">
                    <p>800+</p>
                    <p>Done</p>
                </div>
            </div>
            <img src={retel} className='retel' alt="" />
        </div>
    </>
  )
}

export default Main