import React from "react";
import { styled } from "styled-components";
import { getWeather } from "../../utils";

function UserSearch() {
  const [cityInput, setCityInput] = React.useState("");

  const handleCitySearch = (event) => {
    event.preventDefault(); /**prevent page reload */
    const city = cityInput; /**save city name */
    setCityInput(""); /**clear city input */

    getWeather(city); /**get weather of the city */
  };
  return (
    <Wrapper>
      <form onSubmit={handleCitySearch}>
        <label htmlFor="city-search">Enter City: </label>
        <input
          type="text"
          id="city-search"
          value={cityInput}
          onChange={(event) => setCityInput(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  border: 2px dotted green;
  display: flex;
  justify-content: center;
`;
export default UserSearch;
