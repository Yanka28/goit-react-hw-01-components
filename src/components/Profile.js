import PropTypes from 'prop-types';
import {
  Wrapper,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  List,
  ListItem,
  StatsOptn,
} from './Profile.styled';

export const Profile = ({ item }) => {
  const keys = Object.keys(item.stats);
  return (
    <Wrapper>
      <Description>
        <Avatar src={item.avatar} alt="User avatar" />
        <Name>
          <b>{item.username}</b>
        </Name>
        <Tag>@{item.tag}</Tag>
        <Location>{item.location}</Location>
      </Description>
      <List>
        {keys.map(key => (
          <ListItem key={key}>
            <StatsOptn>{key}</StatsOptn>
            <span>
              <b>{item.stats[key]}</b>
            </span>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

Profile.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
