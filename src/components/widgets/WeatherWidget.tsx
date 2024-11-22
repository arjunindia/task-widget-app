import { useState } from "react"
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
gap: 5em;
align-items: center;
 `
const DataWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-self: center;
  height: 100%;
`
const Data = styled.div`
  font-size: 1.2em;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  box-shadow: 0 2px 0 0 ${(props) => props.theme.colors.shadow};
  padding: 1em;
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

        <Data>Feels like {data?.main.feels_like}°C</Data>
        <Data>Humidity: {data?.main.humidity}%</Data>
        <Data>Wind: {data?.wind.speed} km/h</Data>
        <Data>Pressure: {data?.main.pressure} hPa</Data>
      </DataWrapper>
    </Wrapper>
    }
  </div>
}
