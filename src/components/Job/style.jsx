import styled from "styled-components";

export const JobContainer = styled.div`
    font-family: "Roboto", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    margin: 20px 0;
    border-top: 1px solid #dddddd;
    padding-top: 20px;
`
export const SubmitButton = styled.input`
    border: 1px solid lightpink;
    border-radius: 10px;
    color: white;
    background-color: lightpink;
    margin: 10px 10px 10px 0;
    padding: 0.6em 1.2em;
    cursor: pointer;
    font-size: 1em;
    transition: border-color 0.25s;
    &:hover {
        border: 1px solid darkpink;
        color: darkpink;
    }
`

export const TitleDiv = styled.div`
    font-size: 1.2em;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
`
export const CompanyDiv = styled.div`
    font-size: 1.2em;
    font-weight: light;
`
export const YearDiv = styled(TitleDiv)`
    font-size: 1em;
`
export const Ul = styled.ul`
`

export const EducationContainer = styled(JobContainer)``
export const SchoolDiv = styled(CompanyDiv)``

export const Flex = styled.div`
    display: flex;
`
export const DescriptionDiv = styled.div`
    margin-top: 30px;
    margin-bottom: -10px;
`