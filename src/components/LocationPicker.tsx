import styled from "styled-components"
import { useLocation } from '../lib/location'
import { useEffect, useRef, useState } from "react"
const LocationPickerStyled = styled.input`
  border: 2px solid ${(props) => props.theme.colors.border};
  box-shadow: 0 2px 0 0 ${(props) => props.theme.colors.shadow};
  padding: 0.2em;
  border-radius: 0.25em;
  outline: none;
  font-size: 1.5em;
`
const SearchList = styled.ul`
  list-style: none;
  padding: 1em;
  margin-top: 0.5em;
  border-radius: 0.25em;
  border: 2px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0 2px 0 0 ${(props) => props.theme.colors.shadow};
`

const SearchItem = styled.li`
  padding: 0.5em;
  border-radius: 0.25em;
  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`

export default function LocationPicker() {
  const ref = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')
  const listRef = useRef<HTMLUListElement>(null)
  const [focused, setFocused] = useState(false)
  const [selected, setSelected] = useState(0)
  useEffect(() => {

    const setFocus = () => {
      setFocused(true)
    }
    const setBlur = () => {
      if (listRef.current?.matches(":hover")) {
        return
      }
      setFocused(false)
    }


    if (ref.current !== null) {
      ref.current.addEventListener('focus', setFocus)
      ref.current.addEventListener('blur', setBlur)
      return () => {
        ref.current?.removeEventListener('focus', setFocus)
        ref.current?.removeEventListener('blur', setBlur)
      }
    }
  }, [])
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFocused(false)
      }
      if (e.key === 'Enter') {
        setFocused(false)
        if (!uniqueResults || uniqueResults.length === 0) return
        setValue(uniqueResults[selected].name)
        ref.current?.blur()
      }
      if (e.key === "Tab") {
        setFocused(false)
        if (!uniqueResults || uniqueResults.length === 0) return
        console.log(uniqueResults[selected])
        setValue(uniqueResults[selected].name)
      }
      if (e.key === "ArrowDown") {
        setSelected((selected) => { if (selected < 5) return selected + 1; return selected })
      }
      if (e.key === "ArrowUp") {
        setSelected((selected) => { if (selected > 0) return selected - 1; return selected })
      }
    }
    ref.current?.addEventListener('keydown', handleKeyDown)
    return () => {
      ref.current?.removeEventListener('keydown', handleKeyDown)
    }
  }, [selected])
  const { data, isLoading, uniqueResults } = useLocation(value)
  const isSearchVisible = focused && !isLoading && data?.results && uniqueResults && data?.results.length > 0
  return <div>
    <LocationPickerStyled ref={ref} value={value} onChange={(e) => setValue(e.target.value)} />
    {isSearchVisible && <SearchList ref={listRef} >
      {uniqueResults?.map((result, i) => (
        <SearchItem key={result.id} onClick={() => {
          setValue(result.name);
          setFocused(false)
        }} onMouseEnter={() => setSelected(i)} style={{ backgroundColor: selected === i ? '#3c402b44' : '' }}>
          {result.name}, {result.country}
        </SearchItem>
      ))}
    </SearchList>}
  </div>
}
