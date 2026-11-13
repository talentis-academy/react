// TODO 6 : recevoir les props fullName, role, email, remote (bonus : showEmail, true par défaut)
function MemberCard() {
  return (
    <article className="member-card">
      {/* TODO 7 : le nom dans un <h2>, le rôle dans <p className="role"> */}
      {/* TODO 8 : « Email : [email] », ou « Email : N/A » si pas d'email (ternaire ? :) */}
      {/* TODO 9 : le badge <span className="badge">Remote</span> seulement si remote (&&) */}
    </article>
  );
}

export default MemberCard;
