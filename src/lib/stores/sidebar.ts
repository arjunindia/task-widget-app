import { create } from 'zustand'

interface SidebarStore {
  sidebarEnabled: boolean
  setSidebarEnabled: (enabled: boolean) => void
}

const useSidebarStore = create<SidebarStore>()((set) => ({
  sidebarEnabled: false,
  setSidebarEnabled: (enabled: boolean) => {
    set({ sidebarEnabled: enabled })
  }
}))

export default useSidebarStore
