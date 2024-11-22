import styled from "styled-components"

const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.border};
  border-radius: 0.5em;
  padding: 1em;
  box-shadow: 2px 2px 0 0 ${(props) => props.theme.colors.shadow};
  width: 100%;
`

export default function WidgetWrapper({ children, enabled }: { children: React.ReactNode, enabled: boolean }) {
  if (!enabled) return null
  return <Container>{children}</Container>
}
