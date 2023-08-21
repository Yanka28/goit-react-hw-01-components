import PropTypes from 'prop-types';
import { StatsSection, List, Title, ListItem } from './Statistics.styled';

export const Statistics = ({ items, itemtit }) => {
    return (
        <StatsSection>
            {(itemtit.title!== '')? <Title>{itemtit.title}</Title>: null}
            {/* <Title boole={ itemtit.title }>{itemtit.title}</Title> */}
            <List>
                {items.map(item => (
                    <ListItem key={item.id}>
                        <span>{item.label}</span>
                        <span>{ item.percentage}%</span>
                    </ListItem>))}
            </List>
        </StatsSection>
    )
}

Statistics.propTypes = {
    items: PropTypes.array,
    itemtit: PropTypes.object,
    item: PropTypes.object,
    username: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
}