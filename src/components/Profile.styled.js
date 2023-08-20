import styled from 'styled-components';
 
export const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 margin: 0 auto;
 width: 310px;
 border-radius: 4px;
 border: 2px solid #c8c0c0;
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
gap:10px;
background-color: #e7e7e7;
border-radius: 4px;
`
export const Avatar = styled.img`
    width: 150px;
    margin: 0 auto;
    border-radius: 75px;
  
`
export const Name = styled.p`
font-size: 30px;
`
export const Tag = styled.p`
color: grey;
`
export const Location = styled.p`
color: grey;
`

export const List = styled.ul`
  height: 50px;
  display: flex;
  justify-content:space-around;
  background-color: #d5d0d0;
  border-radius: 4px;
`

export const ListItem = styled.li`
width: calc(100%/3);
border: 1px solid #c8c0c0;
display: flex;
flex-direction: column;
align-items: center;
text-transform: capitalize;

`;
export const StatsOptn = styled.span`
 color: grey;
`;