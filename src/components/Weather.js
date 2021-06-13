import React, { useEffect, useState } from "react";
import Temperature from "../components/Temperature";
import Location from "../components/Location";
import Description from "../components/Description";
import Humidity from "../components/Humidity";
import WindSpeed from "../components/WindSpeed";
import Time from "../components/Time";
import ClipLoader from "react-spinners/ClipLoader";
import RecentSearches from "../components/RecentSearches";
import styled from "styled-components";

function Weather() {
  const [city, setCity] = useState("London");
  const [clause, setClause] = useState(false);
  const [weather, setWeather] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [wind, setWind] = useState("");
  const [winddegree, setWinddegree] = useState("");
  const [temp, setTemp] = useState("");
  const [location, setLoc] = useState("");
  const [humidity, setHumidity] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [recentSearch, setRecentSearch] = useState([]);
  const [inputBx, setInputBx] = useState("");

  function handleSearch(e) {
    setInputBx(e.target.value);
    e.preventDefault();
  }
  function handleClick(e) {
    setClause(!clause);
    setCity(city);
    // console.log(recentSearch)
    setInputBx("");
  }

  useEffect(
    (e) => {
      if (location.length > 0) {
        setRecentSearch((prev) => [...prev, location]);
      }
      localStorage.setItem("location", recentSearch);
    },
    [location]
  );

  useEffect(() => {
    setCity(inputBx);
  }, [inputBx]);

  useEffect(() => {
    // console.log(city);
    if (city.length > 0) {
      setIsLoading(true);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=079b76b390ad70c628a14a9a141e5992`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeather(data.weather[0].description);
          setCountry(data.sys.country);
          setSunrise(Date(data.sys.sunrise * 1000));
          setSunset(Date(data.sys.sunset * 1000));
          setWind(data.wind.speed);
          setLoc(data.name);
          setTemp(data.main.temp);
          setHumidity(data.main.humidity);
          setWinddegree(data.wind.deg);
          setIsLoading(false);
          // console.log(data);
        })
        .catch((err) => console.log(err));
    }
  }, [clause]);

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   }
  //   function showPosition(position) {
  //     // console.log(position)
  //     // console.log(position.coords.latitude)
  //     setLatitude(position.coords.latitude);
  //     setLongitude(position.coords.longitude);
  //     // console.log(position.coords.longitude)
  //     fetch(
  //       `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=079b76b390ad70c628a14a9a141e5992`
  //     )
  //       .then((response) => response.json())
  //       .then((res) => console.log(res));
  //   }
  // }, []);

  return (
    <div style={{overflow: 'hidden'}} className="container">
      {isLoading && <ClipLoader />}
      <input
        type="text"
        id="inputBox"
        value={inputBx}
        placeholder="search city.."
        onChange={handleSearch}
      />
      <button onClick={handleClick}>Search</button>

      
      <Wrapper>
          <RecentSearches city={city} />
        </Wrapper>
      <WeatherWrapper>
        
        <Wrapper>
          <div>
            <Location location={location} country={country} />
            <Temperature temp={temp} />
          </div>
          <Description weather={weather} />
        </Wrapper>

        <Wrapper>
          <Humidity humidity={humidity} />
          <WindSpeed wind={wind} winddegree={winddegree} />
        </Wrapper>

{/* 
        <Wrapper>
          <RecentSearches city={city} />
        </Wrapper> */}
      </WeatherWrapper>
    </div>
  );
}

export default Weather;

const RecentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  padding: 2rem 1.5rem;
`;

const WeatherWrapper = styled.div`
  width: 495px;
  height: 401px;
  background: #e8ecf0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 19px;
  align-items: center;
  margin: 0 auto;
`;
