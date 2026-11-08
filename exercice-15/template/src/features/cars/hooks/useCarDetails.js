import { useQuery } from "@tanstack/react-query";
import { fetchCarById } from "../api/carsApi";
import { QUERY_KEYS } from "./queryKeys";

// L'id fait partie de la clé : chaque voiture a son propre cache
export const useCarDetails = (id) =>
  useQuery({
    queryKey: [QUERY_KEYS.CAR_DETAILS, id],
    queryFn: () => fetchCarById(id),
    enabled: Boolean(id),
  });
