import styled from 'styled-components';

let color = () => {
    setInterval(() => {
        generateColor()
    }, 2000);
};

    

const  generateColor=()=>{
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

export const StatsSection = styled.section`
margin: 0 auto;
`

export const List = styled.ul`
display: flex;
/* gap: 20px; */
`
export const Title = styled.h2`
display: flex;
justify-content: center;
`
export const ListItem = styled.li`
display: flex;
flex-direction: column;
padding: 0 15px;
background-color: ${color};

`