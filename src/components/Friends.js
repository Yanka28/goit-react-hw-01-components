import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem'
import { FriendsList } from './Friends.styled'

export const Friends = ({ items}) => { 
    return (
        <FriendsList>
            {items.map(item => (
                <FriendListItem key={item.id} friend={item}>
                </FriendListItem>
            ))}
    </FriendsList>
)
}

Friends.propTypes = {
    items: PropTypes.array,
    item: PropTypes.object,
    id: PropTypes.number,
}