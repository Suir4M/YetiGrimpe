# Yeti 85 – proposition de refonte

Refonte du site du club d'escalade Yeti 85 (La Roche-sur-Yon). Projet personnel, **non officiel**.
Site statique : HTML, CSS et un peu de JavaScript, sans framework ni étape de build.

## Lancer le projet

Ouvre `index.html` dans ton navigateur. Pour un serveur local : `python3 -m http.server`, puis http://localhost:8000.

## Structure

```
index.html        Accueil : présentation, demi-finale, points de départ, salles, dates
grimper.html      Inscriptions : adultes débutants, enfants, autonomes, tarifs
horaires.html     Planning de la semaine (grille sur grand écran, liste sur mobile)
evenements.html   Demi-finale du Championnat de France, bénévoles, partenaires
css/style.css     Tout le style (variables en haut du fichier)
js/main.js        Menu mobile + mise en avant du jour courant dans le planning
```

## Idées pour la suite

- Formulaire de liste d'attente (Netlify Forms, Formspree) à la place des liens `mailto:`.
- Passer en WordPress (thème sur mesure) si le club veut modifier le contenu lui-même.
- Page Photos, avec images optimisées (WebP) et textes alternatifs.
