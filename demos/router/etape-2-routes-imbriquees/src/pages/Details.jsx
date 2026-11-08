import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Details() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("tab"));
  return (
    <div>
      <h1>Détails voiture</h1>
      <p>ID: {params.id}</p>
    </div>
  );
}

export default Details;
