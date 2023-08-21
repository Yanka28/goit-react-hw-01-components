import PropTypes from 'prop-types';
import { Wrapper, Description, Avatar, Name, Tag, Location, List, ListItem, StatsOptn } from './Profile.styled'

export const Profile = ({ item }) => { 
    const keys = Object.keys(item.stats)
    return (
    <Wrapper>
      <Description>
        <Avatar src={item.avatar} alt="User avatar"/>
        <Name><b>{item.username}</b></Name>
        <Tag>@{item.tag}</Tag>
        <Location>{item.location}</Location>
       </Description>
            <List>
                {keys.map(key => (
                    <ListItem key={key}>
                        <StatsOptn >{key}</StatsOptn>
                        <span><b>{item.stats[key]}</b></span>
                    </ListItem>
               ))
             }
            </List>
    </Wrapper>

    )
}

Profile.propTypes = {
    item: PropTypes.object,
    stats: PropTypes.object,
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    keys: PropTypes.array,
    key: PropTypes.string,
}