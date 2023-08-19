
import { Wrapper, Description, List, ListItem, StatsOptn } from './Profile.styled'

export const Profile = ({ item }) => { 
    const keys = Object.keys(item.stats)
    return (
    <Wrapper>
      <Description>
        <img src={item.avatar} alt="User avatar" width='100px'/>
        <p>{item.username}</p>
        <p>@{item.tag}</p>
        <p>{item.location}</p>
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