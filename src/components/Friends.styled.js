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
   width: 30px;
   height: 30px;
   border-radius: 50px;
   background-color: ${getOnlineStatus};
`
export const FriendsList = styled.ul`
  margin: 0 auto;
  padding: 20px;
`
export const FriendItem = styled.li`
   width: 400px;
   height: 120px;
   padding-left: 10px;
   border: 1px solid #e7e7e7;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   gap: 15px;
   margin-bottom: 20px;
   background-color: #e7e7e7;
   border-radius: 4px;
   `
export const FriendsAvatar = styled.img`
   width: 100px;
   border: 1px solid #c8c0c0;
   border-radius: 4px;
   background-color: #d5d0d0;
`   

export const FriendName = styled.p`
font-size: 30px;
`
