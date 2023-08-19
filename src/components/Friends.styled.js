import styled from 'styled-components';

const getOnlineStatus = props => { 
    switch (props.boole) { 
        case 'true':
            return 'green'
        case 'false':
            return 'red'
        default:
        return null;
    }
}

export const Status = styled.span`
   display: block;
   width: 20px;
   height: 20px;
   border-radius: 50px;
   background-color: ${getOnlineStatus};
`
export const Friend = styled.li`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 20px;
   margin-bottom: 20px;
   `
