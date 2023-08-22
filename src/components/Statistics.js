import PropTypes from 'prop-types';
import { StatsSection, List, Title, ListItem } from './Statistics.styled';

export const Statistics = ({ items, title }) => {
  return (
    <StatsSection>
      {title && <Title>{title}</Title>}
      <List>
        {items.map(item => (
          <ListItem key={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </ListItem>
        ))}
      </List>
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
