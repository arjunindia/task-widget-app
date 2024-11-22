import { create } from 'zustand'

interface LocationStore {
  location: string
  latitude: number
  longitude: number
  setLocation: (location: string) => void
  setLatLong: (latitude: number, longitude: number) => void
}

const useLocationStore = create<LocationStore>()((set) => ({
  location: 'Thiruvananthapuram',
  latitude: 8.4855,
  longitude: 76.94924,
  setLocation: (location: string) => {
    set({ location })
  },
  setLatLong: (latitude: number, longitude: number) => {
    set({ latitude, longitude })
  }
}))

export default useLocationStore
