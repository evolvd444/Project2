import React, {useState, useEffect} from 'react';
import Firstprofile from './Firstprofile';

function Firstresult({firstProfile, loading, setFirstProfile}) {
   
if (loading){
    return null
}else if (firstProfile.private === true) {
        alert("This Profile is private... which means..This dude is scared")
    window.location.reload()
    console.log(firstProfile)
    }else {
      
          return (
              <div className= "profile-container">
            <div className= "second-profile">
            <h1> <img src={firstProfile.ratings[0].roleIcon} alt="" /> {firstProfile.ratings[0].role}: {firstProfile.ratings[0].level}</h1>
            <img className= "rank-icon" src={firstProfile.ratings[0].rankIcon} alt="" />
            
            {/* <h3> Comp Gold Medals :{firstProfile.competitiveStats.awards.medalsGold}</h3>
            <h3> Healing Done per 10min(Ana):{firstProfile.competitiveStats.careerStats.ana.average.healingDoneAvgPer10Min}</h3> */}
        </div>
        <div className= "second-profile">
        <h1> <img src={firstProfile.ratings[1].roleIcon} alt="" /> {firstProfile.ratings[1].role}: {firstProfile.ratings[1].level}</h1>
            <img className= "rank-icon" src={firstProfile.ratings[1].rankIcon} alt="" />
        </div>
        <div className= "second-profile">
        <h1> <img src={firstProfile.ratings[2].roleIcon} alt="" /> {firstProfile.ratings[2].role}: {firstProfile.ratings[2].level}</h1>
            <img className= "rank-icon" src={firstProfile.ratings[2].rankIcon} alt="" />
        </div>
        </div>
    );
        } 
    }





export default Firstresult;