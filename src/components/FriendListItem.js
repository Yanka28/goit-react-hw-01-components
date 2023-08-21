import PropTypes from 'prop-types';
import { Status, FriendsAvatar, FriendItem, FriendName } from './FriendListItem.styled'

export const FriendListItem = ({ friend: { id, isOnline, avatar, name } }) => { 
    return (
        <FriendItem key={id}>
                    <Status boole={isOnline.toString()}>{isOnline}</Status>
                    <FriendsAvatar src={avatar} alt="User avatar" width="48"/>
                    <FriendName><b>{name}</b></FriendName>
        </FriendItem>
    )
}

FriendListItem.propTypes = {
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
};