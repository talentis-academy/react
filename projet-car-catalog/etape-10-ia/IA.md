# Étape 10 : l'IA dans le projet

Même code que l'étape 9. On ajoute seulement ce qu'il faut pour travailler avec Claude Code :

| Fichier | Rôle |
|---|---|
| `CLAUDE.md` | Le contexte du projet, lu par Claude à chaque session : stack, commandes, architecture, règles. |
| `.mcp.json` | Les serveurs MCP du projet : Playwright (piloter un navigateur), Chrome DevTools (performance, console), Figma desktop (lire la maquette). |
| `.claude/skills/react-feature/SKILL.md` | Notre skill : créer ou migrer un écran en View / Scene / Adapter, avec le test de l'adapter. |
| `prompts/README.md` | Des exemples de prompts : Figma pixel perfect, Jira, skill, tests unitaires, e2e, performance. |

## Mise en place

```bash
npm install
claude            # dans ce dossier : CLAUDE.md, .mcp.json et la skill sont chargés
/mcp              # vérifier les serveurs MCP
```

- Figma : ouvrir l'application Figma desktop, activer le serveur MCP Dev Mode (Preferences), sélectionner un frame.
- Jira : connecter le serveur MCP Atlassian (connecteur claude.ai, ou `claude mcp add` avec l’URL donnée dans la doc Atlassian).
- Skills existantes à montrer : front premium (design), navigateur, performance React, Argent (piloter un simulateur iOS / Android).

## Le déroulé conseillé

1. On migre la Home ensemble, à la main, vers View / Scene / Adapter (étape 9).
2. On demande à Claude de migrer les autres écrans avec la skill `react-feature`.
3. On compare avec la correction de l'étape 9.
4. Les tests unitaires des adapters : écrits par Claude. Les parcours e2e : faits par Claude avec le MCP Playwright.
