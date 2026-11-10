# Exemples de prompts (jour 5 · partie IA)

Un bon prompt = le contexte + la tâche + les contraintes + le résultat attendu (comment vérifier).

## 1. De Figma au code (MCP Figma, pixel perfect)

> Avec le MCP Figma, récupère le frame sélectionné (la carte détail d'une voiture). Mets à jour l'écran CarDetailsScreen en suivant l'architecture du CLAUDE.md (view, scene, adapter), en réutilisant les atoms existants et les variables CSS. Je veux un rendu pixel perfect. Ajoute les tests de l'adapter, lance npm test et le build, et compare avec une capture du navigateur.

## 2. Depuis un ticket Jira (MCP Atlassian)

> Lis le ticket CAR-12 avec le MCP Atlassian. Implémente-le en respectant le CLAUDE.md. Liste les critères d'acceptation, et pour chacun dis-moi comment tu l'as vérifié.

## 3. Migrer un écran avec la skill

> /migrate-to-feature src/pages/FavoritesPage.jsx

ou, sans la commande :

> Migre la page des favoris vers features/favorites/screens/FavoritesScreen en suivant la skill migrate-to-feature. Même rendu, mêmes textes. Lance npm test et npm run build.

## 4. Tests unitaires

> Écris les tests Vitest de HomeScreen.adapter.js : cas normal, valeurs manquantes, limite à 6 voitures. Lance npm test.

## 5. Test end-to-end avec le MCP Playwright

> Lance npm run dev. Avec le MCP Playwright, ouvre l'application, connecte-toi (n'importe quel identifiant), ajoute deux voitures aux favoris, va sur /favorites et vérifie qu'il y en a deux. Fais une capture. Ensuite, écris ce parcours en test Playwright dans tests/e2e.

## 6. Performance (MCP Chrome DevTools)

> Avec le MCP Chrome DevTools, ouvre la page d'accueil, enregistre une trace de performance et lis la console. Dis-moi ce qui ralentit et propose des corrections, sans les appliquer.
