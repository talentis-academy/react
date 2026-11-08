import TeamList from "./components/TeamList";

const members = [
  { id: 1, fullName: "Alice Martin", role: "Lead Developer", email: "alice@company.com", remote: true },
  { id: 2, fullName: "Karim Benali", role: "Product Owner", email: "karim@company.com", remote: false },
  { id: 3, fullName: "Sara Lopez", role: "UX Designer", remote: true },
  { id: 4, fullName: "Tom Durand", role: "QA Engineer", remote: false },
];

function Home() {
  return <TeamList title="Team Directory" members={members} />;
}

export default Home;
