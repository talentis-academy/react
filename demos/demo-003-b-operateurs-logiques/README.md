# Démo 003-B · Opérateurs logiques (slides 09 et 10)

Des petits fichiers JavaScript pour pratiquer les conditions, sans React.

## Lancer avec Quokka (VS Code)

1. Extensions (Cmd + Shift + X) : installer **Quokka.js** (version Community, gratuite).
2. Ouvrir un fichier, puis Cmd + Shift + P → **« Quokka.js: Start on Current File »**.
3. Le résultat de chaque `console.log` s'affiche au bout de la ligne. On change une valeur, ça se met à jour tout de suite.

La version **Community** (gratuite, sans limite de durée) suffit : elle affiche toujours les `console.log` et les erreurs. C'est pour ça que les fichiers utilisent `console.log`, et pas `//?` (réservé à la version Pro).

Les carrés dans la marge : vert = ligne exécutée, jaune = ligne exécutée en partie (ex. `carColor ?? "Néant"` quand `carColor` vaut `""` : la partie `"Néant"` n'est jamais lue), rouge = erreur, gris = pas exécutée.

Sans Quokka : `node 01-operateurs.js` dans le terminal, ou copier le code dans la console du navigateur (F12).

| Fichier | Slide | Contenu |
|---|---|---|
| `01-operateurs.js` | 09 | `!` (NOT), `!!` (double NOT), `&&` (AND), `? :` (ternaire), `??` (nullish coalescing) sur `carColor` |
| `02-vide-ou-null.js` | 09 | `??` (nullish coalescing) face à `""`, `null`, `undefined` |
| `03-premiere-condition.js` | 10 | « Couleur : Néant » avec let + if / else et const + ternaire |
| `04-a-vous.js` | 09-10 | Pour les étudiants : deviner puis vérifier |
