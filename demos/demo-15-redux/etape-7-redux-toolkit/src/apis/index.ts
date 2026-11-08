// RTK Query (Redux Toolkit Query) : on crée une "API slice"
// Objectif : faire des appels HTTP + gérer cache / loading / error automatiquement

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * commentsApi = "API slice"
 * Elle contient :
 * - un reducer (pour stocker cache + status dans Redux)
 * - un middleware (pour déclencher/optimiser les requêtes)
 * - des endpoints (GET/POST/...)
 * - des hooks React auto-générés (useGetCommentsQuery, etc.)
 */
export const commentsApi = createApi({
  /**
   * reducerPath = le nom de la clé dans le store Redux
   * Exemple : state.commentsApi => contiendra le cache, loading, erreurs, etc.
   *
   * Dans le store on fera :
   * reducer: { [commentsApi.reducerPath]: commentsApi.reducer }
   */
  reducerPath: "commentsApi",

  /**
   * baseQuery = le "client HTTP" utilisé par RTK Query
   * fetchBaseQuery est une petite couche au-dessus de fetch (pas besoin d'axios)
   *
   * baseUrl = URL de base, les endpoints ajouteront juste le chemin
   */
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  /**
   * endpoints = on déclare ici toutes les routes API
   * builder permet de créer :
   * - builder.query(...)  => GET (lecture) + cache
   * - builder.mutation(...) => POST/PUT/DELETE (écriture)
   */
  endpoints: (builder) => ({
    /**
     * getComments = nom de l'endpoint
     * builder.query => c'est un endpoint de lecture (GET)
     */
    getComments: builder.query({
      /**
       * query = fonction qui construit l'URL de la requête
       * postId est un paramètre (optionnel) avec une valeur par défaut = 1
       *
       * Si postId = 1 => GET /comments?postId=1
       * Si postId = 5 => GET /comments?postId=5
       *
       * RTK Query gère automatiquement :
       * - loading / success / error
       * - cache + dedupe (évite des appels identiques)
       */
      query: (postId = 1) => `/comments?postId=${postId}`,
    }),
  }),
});

/**
 * RTK Query génère automatiquement des hooks React
 * Le nom est basé sur l'endpoint :
 * getComments => useGetCommentsQuery
 *
 * Utilisation :
 * const { data, isLoading, error } = useGetCommentsQuery(1);
 */
export const { useGetCommentsQuery } = commentsApi;
