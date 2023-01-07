import React, { useState } from "react";
function getUpTime(upDate){
    
    const cd = new Date();
    let diff = cd.getTime();
    diff = diff- upDate.getTime();
    return Math.floor(diff/1000);


}
function TimePannel({upDate}) {
    const [upTime,setUpTime] = useState(0);
    setInterval(() => {
        setUpTime (getUpTime(upDate)) 
    }, 3000);
  return (
    <p>{upTime} secs</p>
  );
}

export default TimePannel;
