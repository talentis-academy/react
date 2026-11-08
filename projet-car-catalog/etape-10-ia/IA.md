# Étape 10 : l'IA dans le projet

Même code que l'étape 9. On ajoute seulement ce qu'il faut pour travailler avec Claude Code :

| Fichier | Rôle |
|---|---|
| `CLAUDE.md` | Le contexte du projet, lu par Claude à chaque session : stack, commandes, architecture, règles. |
| `.mcp.json` | Les serveurs MCP du projet : Playwright (piloter un navigateur), Chrome DevTools (performance, console), Figma desktop (lire la maquette). |
| `.claude/skills/migrate-to-feature/SKILL.md` | Notre skill de refacto : migrer une page existante vers View / Scene / Adapter, avec le test de l’adapter. |
| `.claude/skills/react-feature/SKILL.md` | Créer un nouvel écran directement dans l’architecture. |
| `prompts/README.md` | Des exemples de prompts : Figma pixel perfect, Jira, skill, tests unitaires, e2e, performance. |

## Mise en place

```bash
npm install
claude            # dans ce dossier : CLAUDE.md, .mcp.json et la skill sont chargés
/mcp              # vérifier les serveurs MCP
```

- Figma : ouvrir l'application Figma desktop, activer le serveur MCP Dev Mode (Preferences), sélectionner un frame.
- Jira : connecter le serveur MCP Atlassian (connecteur claude.ai, ou `claude mcp add` avec l’URL donnée dans la doc Atlassian).
- Skills existantes : voir le tableau en bas (front-end, performance, UX, tests).

## Le déroulé conseillé

1. On migre la Home ensemble, à la main, vers View / Scene / Adapter (étape 9).
2. Exercice 15 : chacun migre la page de détails à la main.
3. Partie IA : CLAUDE.md, le prompt, les MCP (Figma), les skills existantes, puis notre skill `migrate-to-feature` qui migre le reste.
4. On compare avec la correction de l’étape 9.
5. Les tests unitaires des adapters : écrits par Claude. Les parcours e2e : faits par Claude avec le MCP Playwright.

## La démo de la skill de refacto

Dans l'étape 10, tout est déjà migré. Pour la démo, on part du projet de la séance (l'étape 8 avec la Home migrée en live) : on y copie `CLAUDE.md`, `ARCHITECTURE.md` et `.claude/`, puis :

```
/migrate-to-feature src/pages/FavoritesPage.jsx
```

Ensuite on compare avec `etape-9-architecture`.

## Les deux skills du projet

| Skill | Quand | Appel |
|---|---|---|
| `migrate-to-feature` | Refacto : migrer une page existante vers View / Scene / Adapter | `/migrate-to-feature src/pages/FavoritesPage.jsx` |
| `react-feature` | Créer un nouvel écran directement dans l'architecture | « Crée l'écran ProfileScreen dans la feature auth » |

## Partager les skills avec l'équipe

- Le plus simple : les commiter dans `.claude/skills/` (comme ici). Après un `git pull`, tout le monde les a.
- Pour plusieurs projets : en faire un plugin, publié dans une marketplace (`/plugin marketplace add <org>/<repo>`).
- Dans GitHub : `/install-github-app` installe Claude Code Action ; on écrit `@claude` dans une PR ou une issue, et Claude travaille sur le dépôt, avec son `CLAUDE.md`.

## Les skills existantes (exemples)

| Besoin | Skill | Installation |
|---|---|---|
| Front-end (design soigné) | `frontend-design` (Anthropic, officielle) | `/plugin marketplace add anthropics/skills` puis `/plugin install example-skills@anthropic-agent-skills` |
| Tester une web app (Playwright) | `webapp-testing` (Anthropic, officielle) | même plugin `example-skills` |
| Performance React | `react-best-practices` (Vercel) | `npx skills add vercel-labs/agent-skills` |
| Expérience utilisateur, accessibilité | `web-design-guidelines` (Vercel) | même commande |
| Créer une skill | `skill-creator` (Anthropic, officielle) | même plugin `example-skills` |
