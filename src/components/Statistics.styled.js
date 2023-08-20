import styled from 'styled-components';

// let color = () => {
//     setInterval(() => {
//         generateColor()
//     }, 2000);
// };

    

const  generateColor=()=>{
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

export const StatsSection = styled.section`
width: 400px;
height: 120px;
margin: 0 auto;
background-color: #e7e7e7;
border-radius: 4px; 
`

export const List = styled.ul`
width: 400px;
height: 60px;
display: flex;
border-radius: 4px;
/* gap: 20px; */
`
export const Title = styled.h2`
display: flex;
justify-content: center;
text-transform: uppercase;
`
export const ListItem = styled.li`
width: calc(100%/5);
display: flex;
flex-direction: column;
padding: 0 15px;
color: #ffffff;
background-color: ${generateColor};
`