import styled from 'styled-components';

const getBackgroundRow = props => { 
    switch (props.boole) { 
        case '1':
            return '#e7e7e7'
        case '0':
            return '#d5d0d0'
        default:
        return null;
    }
}

export const Table = styled.table`
    flex-direction: column;
    margin: 0 auto;
    width: 600px;
   
`

export const TitleTrHist = styled.thead`
height: 60px;
background-color: #a580d5;;
text-transform: uppercase;

`

export const Column = styled.th`
text-align: center;
font-size: 20px;
color: #e7e7e7;
`
export const CellType = styled.td`
text-align: left;
text-transform: capitalize;
`
export const Cell = styled.td`
text-align: center;
font-size: 20px;
`
export const Tbody = styled.tbody`

`

export const Row = styled.tr`
height: 60px;
border: 1px solid black;
background-color: ${getBackgroundRow};
`