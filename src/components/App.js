import user from '../data/user.json';
import data from '../data/data.json';
import title from '../data/title.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { Layout } from './Layout';
import { Friends } from './Friends';
import { TransactionHistory } from './TransactionHistory';


export const App = () => {
  return (
    <Layout>
        <Profile item={user} />
      <Statistics itemtit={title} items={data} />
        <Friends items={friends} />
      <TransactionHistory items={transactions} />
       <GlobalStyle />
    </Layout>
  );
};
