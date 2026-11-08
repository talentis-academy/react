function MemberCard({ fullName, role, email, remote, showEmail = true }) {
  return (
    <article className="member-card">
      <h2>{fullName}</h2>
      <p className="role">{role}</p>
      {showEmail && <p>Email : {email ? email : "N/A"}</p>}
      {remote && <span className="badge">Remote</span>}
    </article>
  );
}

export default MemberCard;
