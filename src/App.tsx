import { useState } from 'react'
import styled from "styled-components"

import WidgetWrapper from './components/WidgetWrapper'
import WeatherWidget from './components/widgets/WeatherWidget'
import TaskWidget from './components/widgets/TaskWidget'

const Header = styled.header`
  height: 5em;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryForeground};
  box-shadow: 0 2px 0 0 ${(props) => props.theme.colors.shadow};
`
const Shell = styled.div`
  height: calc(100% - 5em);
  width: 100%;
  display: flex;
`


const Sidebar = styled.aside`
  height: 100%;
  width: 5em;
  background-color: ${(props) => props.theme.colors.secondary};
`
const Container = styled.div`
  height: 100%;
`
const Content = styled.main`
  height: 100%;
  width: calc(100% - 9em);
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
`

function App() {

  return (
    <Container>
      <Header />
      <Shell >
        <Sidebar />
        <Content >
          <WidgetWrapper>
            <WeatherWidget />
          </WidgetWrapper>
          <WidgetWrapper>
            <TaskWidget />
          </WidgetWrapper>
        </Content>
      </Shell>
    </Container >
  )
}

export default App
