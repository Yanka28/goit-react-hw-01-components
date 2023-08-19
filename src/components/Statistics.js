import { StatsSection, List, Title, ListItem } from './Statistics.styled';

export const Statistics = ({ items, title=''} ) => {
    return (
        <StatsSection>
            <Title>{title}</Title>
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