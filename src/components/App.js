import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { Layout } from './Layout';
import { Friends } from './Friends';
import { TransactionHistory} from './TransactionHistory'


export const App = () => {
  return (
    <Layout>
        <Profile item={user} />
        <Statistics title='Upload stats' items={data} />
        <Friends items={friends} />
      <TransactionHistory items={transactions} />
    </Layout>
  );
};
