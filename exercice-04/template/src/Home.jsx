// Exercice 4 · template : le CSS est prêt (index.css), à vous de coder l'annuaire (les TODO)
import TeamList from "./components/TeamList";

// TODO 1 : créer le tableau members (4 à 6 membres : id, fullName, role, email facultatif, remote)
//          avec au moins 1 membre sans email, 1 membre remote: true et 1 membre remote: false
const members = [];

function Home() {
  // TODO 2 : passer le titre "Team Directory" et le tableau members à TeamList
  return <TeamList />;
}

export default Home;
