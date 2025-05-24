import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContainer = styled.div`
  margin: auto;
  padding: 20px; 
  border: 1px solid black;
  border-radius: 3px;
  box-shadow: 2px solid black;
  background: white;
  width: 50%;
  max-width: 500px;
  max-height: 90%;
  overflow: scroll;
`
export const ButtonRow = styled.div`
  display: flex;
  margin: 30px 0 0 0;
`
export const TopButtonRow = styled(ButtonRow)`
    margin: 0 0 30px 0;
`

export const Button = styled.button`
  font-size: 1em;
  border: 1px solid tan;
  border-radius: 10px;
  color: white;
  background-color: tan;
  margin: 0px 0px 0px auto;
  padding: 10px 20px;
  display: flex;
  transition: 0.3s;
  &:hover {
      border: 1px solid bf935a;
      cursor: pointer;
      background-color: #bf935a;
      transition: 0.2s;
  } 
`

export const DeleteButton = styled(Button)`
  border: 1px solid white;
  border-radius: 10px;
  color: gray;
  background-color: white;
  margin: 0;
  display: flex;
  padding: 10px;
  &:hover {
      background-color: #eee;
      border: 1px solid white;
  } 
`
export const Close = styled(MdClose)`
    font-size: 1.4em;
    margin: 0px 0px 0px auto; 
    vertical-align:middle;
    display: flex;
    &:hover {
        cursor: pointer;
        color: black;
    }
`
export const TitleDiv = styled.div`
    font-size: 1.2em;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
`
