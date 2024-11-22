import { deleteTodo, useTodos, updateTodo, addTodo } from '../../lib/todos'
import styled from "styled-components"
import { type ChangeEvent, useEffect, useState } from "react"
import { Trash, Plus } from '@phosphor-icons/react'

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
  @media (max-width: 665px) {
    flex-direction: column;
    align-items: start;
    gap: 0.5em;
    max-width: 100%;
  }
`
const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  margin: 0;
  display: inline-block;
  margin-right: 0.5em;
`
const AddButton = styled.button`
  background: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5em;
  box-shadow: 2px 2px 0 0 ${({ theme }) => theme.colors.shadow};
  padding: 0.5em;
  &:hover {
    background: ${({ theme }) => theme.colors.hoverSecondary};
  }
  @media (max-width: 665px) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }

`
const TodoInput = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5em;
  box-shadow: 2px 2px 0 0 ${({ theme }) => theme.colors.shadow};
  font-size: 1em;
  padding: 0.5em;
  max-width: 60vw;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  gap: 1em;
`
const Item = styled.li`
  cursor: pointer;
  padding: 1em;
  border-radius: 0.25em;
  background-color: ${(props) => props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.colors.border};
  box-shadow: 0 2px 0 0 ${(props) => props.theme.colors.shadow};
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1em;
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: start;
    gap: 0.5em;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.hoverSecondary};
  }
 `
const Completed = styled.span`
  text-decoration: line-through;
  width: 100%;
`
const NotCompleted = styled.span`
  width: 100%;
`

const Checkbox = styled.input`
  margin-right: 0.5em;
  transform: scale(1.5);
`
const IconWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.danger};
  border: 2px solid ${(props) => props.theme.colors.border};
  box-shadow: 0 2px 0 0 ${(props) => props.theme.colors.shadow};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  border-radius: 0.25em;
`


const ListItem = ({ id, title, completed }: { id: number, title: string, completed: boolean }) => {
  const [checked, setChecked] = useState(completed)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }
  const handleClick = () => {
    setChecked(!checked)
  }
  useEffect(() => {
    updateTodo(id, title, checked)
  }, [checked])
  return <Item>
    <Checkbox type="checkbox" checked={checked} onChange={handleChange} />
    {checked && <Completed onClick={handleClick}>{title}</Completed>}
    {!checked && <NotCompleted onClick={handleClick}>{title}</NotCompleted>}
    <IconWrapper>
      <Trash size={20} onClick={() => deleteTodo(id)} />
    </IconWrapper>
  </Item>
}

export default function TaskWidget() {
  const { data } = useTodos()
  const [newTodo, setNewTodo] = useState('')
  const handleAddTodo = () => {
    addTodo(newTodo)
    setNewTodo('')
  }
  return <div>
    <TitleWrapper>
      <Title>Tasks</Title>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1em', position: 'relative' }}>
        <TodoInput placeholder="New task" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <AddButton onClick={handleAddTodo}><Plus size={20} /></AddButton>
      </div>
    </TitleWrapper>
    <List>
      {data?.map((todo) => {
        return <ListItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
      })}


    </List>
  </div>

}

