import MemberCard from "./MemberCard";

function TeamList({ title, members }) {
  return (
    <section>
      <h1>{title}</h1>
      {members.length === 0 ? (
        <p>No members</p>
      ) : (
        <div className="team-grid">
          {members.map((member) => (
            <MemberCard key={member.id} {...member} />
          ))}
        </div>
      )}
    </section>
  );
}

export default TeamList;
