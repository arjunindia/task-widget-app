import styled from "styled-components"
import WidgetWrapper from './WidgetWrapper'
import WeatherWidget from './widgets/WeatherWidget'
import TaskWidget from './widgets/TaskWidget'
import { CloudSun, CalendarCheck } from '@phosphor-icons/react'
import React, { useCallback } from 'react'
import useSidebarStore from "../lib/stores/sidebar"

const ShellWrapper = styled.div`
  height: calc(100% - 5em);
  width: 100%;
  display: flex;
`


const Sidebar = styled.aside<{ enabled: boolean }>`
  min-height: 84.5vh;
  width: 5em;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 2em 0;
  gap: 2em;
  @media (max-width: 665px) {
    min-height: 100vh;
    display: ${({ enabled }) => enabled ? 'flex' : 'none'};
    position: ${({ enabled }) => enabled ? 'fixed' : 'none'};
    
    z-index: 1;
    top: 0;
    left: 0;
    height: 100%;
    background-color: ${(props) => props.theme.colors.secondary};
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 2em 0;
    gap: 2em;
  }
`

const Content = styled.main`
  height: 100%;
  width: calc(100% - 9em);
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  @media (max-width: 665px) {
    width: calc(100% - 4em);
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`

// if enabled, then the button background is the background color else it is the hover color
const WidgetButton = styled.button<{ enabled: boolean }>`
  background: ${({ theme, enabled }) => enabled ? theme.colors.background : theme.colors.hover};
  
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5em;
  box-shadow: 2px 2px 0 0 ${({ theme }) => theme.colors.shadow};
  font-size: 1em;
  padding: 0.5em;
  &:hover {
    background: ${({ theme }) => theme.colors.hoverSecondary};
  }
`


type WidgetItem = {
  id: number
  name?: string
  logo: React.ReactNode
  component: React.ReactNode
}
const WidgetList: WidgetItem[] = [
  {
    id: 1,
    name: 'Weather',
    logo: <CloudSun size={40} />,
    component: <WeatherWidget />
  },
  {
    id: 2,
    name: 'Tasks',
    logo: <CalendarCheck size={40} />,
    component: <TaskWidget />
  }
]


const Shell = () => {
  const sidebarEnabled = useSidebarStore((state) => state.sidebarEnabled)
  const [enabledList, setEnabledList] = React.useState<boolean[]>(Array(WidgetList.length).fill(true))

  const toggleWidget = useCallback((id: number) => {
    setEnabledList((prev) => {
      const newList = [...prev]
      newList[id - 1] = !newList[id - 1]
      return newList
    })
  }, [])

  console.log(enabledList)
  return <ShellWrapper >
    <Sidebar enabled={sidebarEnabled}>
      {WidgetList.map((widget) => (
        <WidgetButton key={widget.id} onClick={() => toggleWidget(widget.id)} enabled={enabledList[widget.id - 1]} title={`Toggle ${widget.name}`}>
          {widget.logo}
        </WidgetButton>
      ))}
    </Sidebar>
    <Content >
      {WidgetList.map((widget, index) => (
        <WidgetWrapper key={widget.id} enabled={enabledList[index]}>
          {widget.component}
        </WidgetWrapper>
      ))}
    </Content>
  </ShellWrapper>
}

export { Shell }
