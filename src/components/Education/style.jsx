import styled from 'styled-components'
import { MdEdit } from 'react-icons/md'

export const Degree = styled.div`
    font-size: 1.2em;
    font-weight: bold;
    letter-spacing: 0.1em;
`
export const Year = styled(Degree)`
    font-size: 1em;
`
export const DescriptionDiv = styled.div`
    padding: 10px 0;
`
export const EducationContainer = styled.div`
    font-family: "Roboto", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    margin: 20px 0;
    border-top: 1px solid #dddddd;
    padding-top: 20px;
`
export const School = styled.div`
    font-size: 1.2em;
    font-weight: light;
`
export const Edit = styled(MdEdit)`
  font-size: 1.4em;
  margin: 0 0 0 auto;
  transform: 0.2s;
  &:hover {
    cursor: pointer;
    color: black;
    transform: 0.2s;
  }
`
export const Row = styled.div`
  display: flex;
`
