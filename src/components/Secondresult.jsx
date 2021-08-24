import React from 'react';

function Secondresult({secondProfile, loading}) {
    if (loading){
        return null
    }else if (secondProfile.private === true) {
        alert("This Profile is private... which means..This dude is scared")
    window.location.reload()
    }else{
              return (
            <div className= "profile-container">
            <div className= "second-profile">
            <h1> <img src={secondProfile.ratings[0].roleIcon} alt="" /> {secondProfile.ratings[0].role}: {secondProfile.ratings[0].level}</h1>
            <img className= "rank-icon" src={secondProfile.ratings[0].rankIcon} alt="" />
                {/* <h3> Comp Gold Medals :{secondProfile.competitiveStats.awards.medalsGold}</h3>
                <h3> Healing Done per 10min(Ana):{secondProfile.competitiveStats.careerStats.ana.average.healingDoneAvgPer10Min}</h3> */}
            </div>
            <div className= "second-profile">
            <h1> <img src={secondProfile.ratings[1].roleIcon} alt="" /> {secondProfile.ratings[1].role}: {secondProfile.ratings[1].level}</h1>
            <img className= "rank-icon" src={secondProfile.ratings[1].rankIcon} alt="" />
            </div>
            <div className= "second-profile">
            <h1> <img src={secondProfile.ratings[2].roleIcon} alt="" /> {secondProfile.ratings[2].role}: {secondProfile.ratings[2].level}</h1>
            <img className= "rank-icon" src={secondProfile.ratings[2].rankIcon} alt="" />
        </div>
            </div>
        );
        }
    }
export default Secondresult;