import React, { useState, useEffect } from "react";
import axios from "axios";
import Firstresult from "./Firstresult";
function Firstprofile({ firstProfile, setFirstProfile }) {
  const [loading, setLoading] = useState(true);
  const [profileName, setProfileName] = useState("");
  const [platform, setPlatform] = useState("");
  const region = "us";

  const allStatsURL = `https://ow-api.com/v1/stats/${platform}/${region}/${profileName}/complete`;
  const getData = async () => {
    const res = await axios.get(allStatsURL);

    setFirstProfile(res.data);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  const handleChange = (e) => {
    setProfileName(e.target.value);
  };
const handleChangePc = (e) => {
setPlatform("pc")
}
const handleChangePsn = (e) => {
  setPlatform("psn")
}
const handleChangeXbox = (e) => {
  setPlatform("xbox")
}

  return (
    <div className= "forms">
      <form onSubmit={handleSubmit}>
        <label for="pro2search">Profile 1: </label>
        <input
          type="search"
          id="pro2search"
          onChange={handleChange}
          placeholder="who are you looking for?"
          value={profileName}
        />
      </form>
      <div className = "buttons-container">
<button id= "pc" className= "buttons" onClick = {handleChangePc} > PC </button>
<button id = "psn" className= "buttons" onClick = {handleChangePsn}> PSN</button>
<button id = "xbox" className= "buttons" onClick = {handleChangeXbox} > XBOX </button>
      
      </div>
      <Firstresult firstProfile={firstProfile} loading={loading} />
    </div>
  );
}

export default Firstprofile;
