import useSWR from 'swr'
import fetcher from './utils'
import { useMemo } from "react"

export interface LocationResponse {
  results: Result[]
  generationtime_ms: number
}

export interface Result {
  id: number
  name: string
  latitude: number
  longitude: number
  elevation: number
  feature_code: string
  country_code: string
  admin1_id: number
  timezone: string
  population?: number
  country_id: number
  country: string
  admin1: string
  admin2_id?: number
  admin2?: string
}

export function useLocation(search: string) {
  const result = useSWR<LocationResponse>(
    `https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=5&language=en&format=json`,
    fetcher
  )
  // remove duplicates

  const uniqueResults = useMemo(() => {
    if (!result?.data?.results) return null
    const uniqueResults = result.data.results.filter((obj1, i, arr) =>
      arr.findIndex(obj2 => (obj2.name === obj1.name)) === i
    )
    return uniqueResults
  }, [result.data])


  return {
    ...result,
    uniqueResults,
  }
}
