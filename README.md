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

## Choix de design

- **Palette** : bleu des tapis de réception, gris craie, et les couleurs de prises (menthe, jaune, tomate). Les couleurs servent de code : menthe = adultes débutants, jaune = enfants et ados, tomate = autonomes.
- **Typographies** : Anybody (titres, largeur variable) et Atkinson Hyperlegible (texte, conçue pour la lisibilité).
- **Accueil** : un mur d'escalade dont les prises sont des liens vers les parcours d'inscription.
- **Accessibilité** : lien d'évitement, focus visible, `prefers-reduced-motion` respecté, menu mobile au clavier (Échap pour fermer).

## À vérifier avec le club avant toute publication

- **Horaires du samedi** : le texte de l'ancien site dit « ados débutants 14 h-16 h, perfectionnement 16 h-18 h », mais le calendrier affiche l'inverse. Ici, c'est le texte qui est repris.
- **Vendredi** : le texte annonce les autonomes à 19 h 15, le calendrier à 18 h 45. Ici, 19 h 15.
- **Groupe du vendredi** : « 8 ans » dans le texte, « Microbes » dans le calendrier.
- **Tarifs et réductions** : copiés depuis l'ancien site (saison à confirmer, « Pass'Sport » à préciser).
- **Réseaux sociaux, plan d'accès, photos, boutique** : pas encore intégrés.
- **Calendrier détaillé** : à brancher sur l'agenda du club (Google Agenda). Attention, un événement public de l'ancien site expose un lien de réunion Teams avec son code : à signaler au club.

## Avant de publier

- Remplace le texte de pied de page par ton nom, et garde la mention « non officiel » tant que le club n'a pas validé.
- Le logo et les photos du club ne sont pas utilisés : demande l'autorisation avant de les ajouter.
- Les pages contiennent `noindex` pour ne pas concurrencer le site du club dans Google. Retire-le seulement avec son accord.
- Hébergement gratuit : GitHub Pages (Settings → Pages → branche `main`).

## Idées pour la suite

- Formulaire de liste d'attente (Netlify Forms, Formspree) à la place des liens `mailto:`.
- Passer en WordPress (thème sur mesure) si le club veut modifier le contenu lui-même.
- Page Photos, avec images optimisées (WebP) et textes alternatifs.
- Version anglaise, pour le portfolio.
