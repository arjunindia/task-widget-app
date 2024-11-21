import useSWR from 'swr'
import fetcher from './utils'

export interface WeatherResponse {
  coord: Coord
  weather: WeatherData[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  rain: Rain
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

export interface Coord {
  lon: number
  lat: number
}

export interface WeatherData {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export interface Wind {
  speed: number
  deg: number
  gust: number
}

export interface Rain {
  "1h": number
}

export interface Clouds {
  all: number
}

export interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}
export function useWeather(lat: number, lon: number) {
  const result = useSWR<WeatherResponse>(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_OWM_API_KEY}&units=metric`,
    fetcher
  )
  return result
}
