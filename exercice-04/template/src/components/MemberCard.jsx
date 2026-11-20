// TODO 6 : recevoir les props fullName, role, email, remote (bonus : showEmail, true par défaut)
function MemberCard({ member }) {
  const { fullName, role, email, remote } = member;
  return (
    <article className="member-card">
      <h2>{fullName}</h2>
      <p className="role">{role}</p>
      {email ? email : "Email N/A"}
      {remote && <span className="badge">Remote</span>}
    </article>
  );
}

export default MemberCard;
