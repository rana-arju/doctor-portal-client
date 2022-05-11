import React from 'react';
import bannerRightImg from "../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const AppointmentBannner = ({date, setDate}) => {
 
    return (
      <div className="hero max-h-screen ">
        <div className="hero-content container flex-col mb-5 lg:flex-row-reverse lg:my-10 ">
            <img src={bannerRightImg} alt="..." className="w-fit rounded-lg shadow-2xl md:w-6/12" />
            <div className="mr-0 md:mr-20">
                <DayPicker
                   mode="single"
                    selected={date}
                    onSelect={setDate}
                    />
            </div>
        </div>
    </div>
    );
};

export default AppointmentBannner;