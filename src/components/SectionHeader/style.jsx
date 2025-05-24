import styled from 'styled-components'
import { MdAdd, MdEdit } from 'react-icons/md'

export const Row = styled.div`
    display: flex;
`
export const Header = styled.h3`
    color: #808080;
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-size: 2em;
    font-weight: 100;
    font-style: normal;
    letter-spacing: 0.2em;
    margin-top: 10px;
    text-transform: uppercase;
`
export const ProfileHeader = styled.h3`
    color: tan;
    font-family: "Dynalight", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 4em;
    margin: 0;
`
export const PlusButton = styled(MdAdd)`
    font-size: 2em;
    margin: 15px 0px 0px auto;
    &:hover {
        cursor: pointer;
        color: black;
    }
`
export const EditButton = styled(MdEdit)`
    font-size: 1.4em;
    margin: 20px 0px 0px auto;
    &:hover {
        cursor: pointer;
        color: black;
    }
`
