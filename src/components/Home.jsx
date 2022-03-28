import React from "react";
import logo from "../img/logo.png";
import Search from "../components/Search";
import { useNavigate } from "react-router-dom";
export default function Home() {
  let navigate = useNavigate();
  const goToVoiceSearch = () => {
    navigate("/toggle-voice-search");
  };
  return (
    <div className="container">
      <div>
        <div className="content logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="content">
          <div className="searchBox">
            <i style={{ color: "gray" }} class="fas fa-search icon"></i>
            <Search></Search>
            <i
              onClick={goToVoiceSearch}
              style={{ color: "#DC5182", cursor: "pointer" }}
              className="fas fa-microphone microphone"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
