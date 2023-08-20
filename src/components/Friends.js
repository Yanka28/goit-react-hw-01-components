import { Status, FriendsList, FriendItem, FriendsAvatar, FriendName} from  './Friends.styled'
export const Friends = ({ items}) => { 
    return (
        <FriendsList>
            {items.map(item => (
                <FriendItem key={item.id}>
                    <Status boole={item.isOnline.toString()}>{item.isOnline}</Status>
                    <FriendsAvatar src={item.avatar} alt="User avatar" width="48"/>
                    <FriendName><b>{item.name}</b></FriendName>
                </FriendItem>
            ))}
    </FriendsList>
)
}