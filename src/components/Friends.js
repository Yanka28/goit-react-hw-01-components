import { Status, Friend} from  './Friends.styled'
export const Friends = ({ items}) => { 
    return (
        <ul>
            {items.map(item => (
                <Friend key={item.id}>
                    <Status boole={item.isOnline.toString()}>{item.isOnline}</Status>
                    <img src={item.avatar} alt="User avatar" width="48"/>
                    <p >{item.name}</p>
                </Friend>
            ))}
    </ul>
)
}