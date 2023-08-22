import PropTypes from 'prop-types';
import {
  Status,
  FriendsAvatar,
  FriendItem,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <FriendItem>
      <Status $status={isOnline}></Status>
      <FriendsAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>
        <b>{name}</b>
      </FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
