import styled from "styled-components"
import { useWeather } from '../../lib/weather'
import LocationPicker from '../LocationPicker'

import useLocationStore from '../../lib/stores/location'

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  margin: 0;
  display: inline-block;
  margin-right: 0.5em;
`
const Temperature = styled.p`
  font-size: 3em;
  line-height: 0;
  transform: translateY(-1em);
  font-weight: bold;
`
const Icon = styled.img`
width: 10em;
height: 10em;

`
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-self: center;
  height: 100%;
  transform: translateY(1em);
`
const Wrapper = styled.div`
display: flex;
justify-content: center;
gap: 10em;
align-items: center;
@media (max-width: 900px) {
  gap: 5em;
}
@media (max-width: 700px) {
  flex-direction: column;
  gap: 2em;
  margin-bottom: 2em;
}
 `
const DataWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-self: center;
  height: 100%;
  gap: 1em;
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    gap: 0.5em;
  }
`
const Data = styled.div`
  font-size: 1.2em;
  text-align: center;
  box-shadow: 0 2px 0 0 ${(props) => props.theme.colors.shadow};
  background-color: ${(props) => props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 0.5em;
  padding: 1em;
  @media (max-width: 900px) {
    font-size: 1em;
    padding: 0.5em;
    margin: 0;
  }
`


export default function WeatherWidget() {
  const { latitude, longitude } = useLocationStore((state) => state)
  const { data, isLoading } = useWeather(latitude, longitude)
  return <div>
    <Title>Weather in</Title><LocationPicker />
    {isLoading && <p>Fetching weather data...</p>}
    {data && <Wrapper>
      <IconWrapper>
        <Icon src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@4x.png`} alt={data?.weather[0].description} />
        <Temperature>{data?.main.temp}°C</Temperature>
      </IconWrapper>
      <DataWrapper>

        <Data>Feels like <br /> <strong>{data?.main.feels_like}°C</strong></Data>
        <Data>Humidity:<br /> <strong>{data?.main.humidity}%</strong></Data>
        <Data>Wind speed:<br /> <strong>{data?.wind.speed} km/h</strong></Data>
        <Data>Pressure:<br /> <strong>{data?.main.pressure} hPa</strong></Data>
      </DataWrapper>
    </Wrapper>
    }
  </div>
}
