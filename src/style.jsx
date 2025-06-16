import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    text-align: left;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    line-height: 1.5;
`
export const Column = styled.div`
    color: gray;
    padding: 50px;`
export const ColumnLeft = styled(Column)`
    width: 70%;
`
export const ColumnRight = styled(Column)`
    width: 30%;
`

export const SectionContainer = styled.div`
    border-top: ${props => !props.$first && '1px solid black'};
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
    padding: 20px 0;
`


