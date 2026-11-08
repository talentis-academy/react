import { useQuery } from "@tanstack/react-query";
import { fetchCarsByYear } from "../api/carsApi";
import { QUERY_KEYS } from "./queryKeys";

// L'année fait partie de la clé : chaque année a son propre cache
export const useCars = (year) =>
  useQuery({
    queryKey: [QUERY_KEYS.CARS_BY_YEAR, year],
    queryFn: () => fetchCarsByYear(year),
  });
