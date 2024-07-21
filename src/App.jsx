import Profile from "./components/Profile/Profile";
import userData from "./data/userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./data/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";

function App() {
  return (
    <>
      <Section title="Profile">
        <Container>
          <Profile
            key={userData.username}
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats}
          />
        </Container>
      </Section>

      <Section title="Friends">
        <Container>
          <FriendList friends={friends} />
        </Container>
      </Section>

      <Section title="Transaction">
        <Container>
          <TransactionHistory items={transactions} />
        </Container>
      </Section>
    </>
  );
}

export default App;
