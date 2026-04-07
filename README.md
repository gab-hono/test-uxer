# Test Technique alternance UXER

## *Objectif*

En utilisant React, développer un composant Bouton fidèle aux spécifications du design Figma. Privilégier une approche orientée props afin de rendre le composant flexible et réutilisable.

---

## *Mon pas à pas*

### 1. Exploration du fichier Figma, et documentation des éléments suivants :

* Variantes du bouton
* Tailles
* États
* Tokens de design

### 2. Définition des propriétés (props) du composant

### 3. Initiation du projet avec React

En faisant attention à la création d'un repo GitHub, la bonne organisation de l'architecture du projet, et à l'écriture d'un README clair.

### 4. Traduction des tokens documentés dans le "pas 1" → en variables CSS

### 5. Développement du composant avec les props

### 6. Structuration de la Home Page

Qui montre l’efficacité du composant.

### 7. Écriture finale à mode de documentation du process

---

## Détail du développement

### 1. Analyse du fichier Figma

J’ai commencé par explorer le fichier Figma, ses groupes et composants.
De cette analyse, j’ai extrait l’information principale qui m’a permis de comprendre quelles sont les variantes et les états de chacune, les tailles, et les sous-composants (comme les icônes à l’intérieur du bouton, ou le badge).

Ces catégories m’ont donné une idée principale de comment seraient composées les props du composant.

J’ai laissé ceci documenté dans un fichier Word pour avoir une référence ultérieure.

---

### 2. Extraction et création de design tokens

En pouvant exporter les valeurs exactes comme “code CSS” à partir de Figma, j’ai décidé de créer un fichier de “tokens”, qui centralise l’information et rend plus facile une éventuelle modification ultérieure.

J’ai identifié les valeurs qui se répétaient à travers différentes variantes, et je leur ai donné des noms de variables pour les utiliser dans le fichier `.css` spécifique du bouton.

J’ai organisé le fichier par catégories sémantiques :

* d’abord les bases de couleur comme valeurs brutes (`--color-green-light: #007031`)
* puis des alias sémantiques qui référencent ces bases (`--btn-bg-primary-default: var(--color-green-light)`)

---

### 3. Écriture du CSS du composant

Avec les tokens déjà définis, j’ai commencé à écrire le fichier `Button.css` (CSS propre du composant `Button.tsx`).

Pour cela, j’ai posé les bases d’un bouton (`.btn`), avec les éléments qui se répètent dans absolument tous les boutons. Ainsi, les classes qui s’ajoutent ensuite n’ont pas besoin de répéter du code.

Une classe de base `.btn` définit les styles structurels partagés par tous les boutons (display flex, border-radius, font-family), et les classes modificatrices ajoutent les variations spécifiques :
`.btn--primary`, `.btn--secondary`, `.btn--m`, `.btn--icon-only`, etc.

Les états interactifs sont gérés avec des pseudo-classes :

* `:hover` pour le hover
* `:focus-visible` pour le focus accessible clavier (plus précis que `:focus` car il ne se déclenche pas au clic souris)
* `:disabled` pour l’état désactivé

L’état disabled utilise `opacity: 0.4` et `pointer-events: none` pour désactiver toutes les interactions.

J’ai aussi pris la décision de ne pas répéter inutilement des règles : par exemple, le badge change de couleur selon la variante du bouton parent en utilisant des sélecteurs descendants (`.btn--primary .badge`).

---

### 4. Création des icônes comme composants React

Comme les boutons dans Figma avaient des icônes SVG de référence, j’ai pris le code SVG de chacun et je l’ai traduit en fonction.

Chaque icône est un composant dans le dossier “icons” à l’intérieur du dossier de composants. Cela facilite l’organisation et leur utilisation.

Les SVG exportés depuis Figma ne sont pas directement utilisables en React pour deux raisons :

* les attributs HTML comme `clip-path` doivent être écrits en camelCase (`clipPath`) pour respecter la syntaxe JSX
* les couleurs sont hardcodées avec des valeurs hex ou fixes, ce qui empêche l’icône d’hériter de la couleur du composant parent

Ma solution a été de remplacer toutes les valeurs de `fill` par `fill="currentColor"`, qui est la manière standard de faire hériter la couleur via la propriété CSS `color`.

Ainsi, le même composant `<CheckIcon />` apparaît blanc dans un bouton primary et gris dans un bouton secondary, sans avoir besoin de lui passer des props de couleur.

---

### 5. Création du composant Button en React avec TypeScript

Une fois les classes CSS prêtes et les icônes importables, j’ai commencé à travailler sur la logique du composant et ses props.

Le bouton est une fonction typée avec une interface TypeScript (pour assurer le bon passage des données).

Explication des éléments clés :

* **Interface**
  Définit le contrat du composant. Toutes les props ont des types stricts, ce qui évite les valeurs invalides et permet l’autocomplétion.

* **Valeurs par défaut**
  `variant = "primary"`, `size = "m"`, `disabled = false`, `iconOnly = false`
  → permettent une utilisation simple dans les cas les plus courants.

* **Logique des classes dynamique**
  Un tableau de classes est construit selon les props, filtré avec `.filter(Boolean)` puis joint avec `.join(" ")`.
  → plus lisible que des concaténations conditionnelles.

* **Mode iconOnly**
  Change la structure des classes :
  `btn--icon-only` et `btn--icon-only-${variant}` remplacent les classes standards.

* **Rendu conditionnel**
  Les icônes et le badge sont optionnels :
  `{leadingIcon && <span>...</span>}`
  Le badge utilise `badge !== undefined` car `0` est une valeur valide.

---

### 6. Création du composant ButtonGroup

Une fois tout testé, j’ai commencé à travailler sur le Button Group, qui m’a posé plus de difficulté.

Pour plus de clarté, j’ai créé un composant séparé `ButtonGroup.tsx` avec son propre fichier CSS.

Le Button Group n’est pas simplement un bouton avec plus de props, mais la composition de deux éléments :

* le bouton principal
* le “addon”

La solution utilisée :

* `overflow: hidden` sur le wrapper
* `border-radius: 8px`

→ permet que les coins arrondis du conteneur découpent visuellement les enfants, sans calculer chaque coin individuellement.

Les éléments enfants ont `border-radius: 0`.

Le séparateur vertical est implémenté avec `border-left` sur l’addon, sans ajouter d’élément HTML supplémentaire.

---

### 7. Intégration et structure du projet

Les fichiers CSS sont intégrés de deux manières :

* `tokens.css` est importé globalement dans `main.tsx`
  → les variables CSS sont disponibles partout

* les fichiers CSS spécifiques sont importés dans leurs composants (`Button`, `ButtonGroup`)

Pour la démo :

* une page principale montre les boutons issus du Figma
* une page `/test` montre toutes les variations de manière organisée

→ avec possibilité de modifier les props en live

---

## Bugs à corriger (lundi 06 avril)

 [] Le Button Group ne s’affiche pas correctement → vérifier les propriétés CSS
 [] Les icônes SVG ne sont pas fidèles au modèle Figma → corriger les composants “Icons”
 [] L’icône dans “icon-only--primary” n’a pas la bonne couleur → utiliser `var(--color-neutral-white)`
 [] L’état `focus` ne fonctionne pas correctement

 ---
 Aquí tienes la continuación en francés, manteniendo tu estilo y coherencia con el README 👇

---

## Solutions

**Les icônes SVG ne sont pas fidèles au modèle Figma → corriger les composants “Icons”**
En explorant plus en détail le fichier Figma fourni, je me suis rendu compte qu’il y avait une page “icônes” où se trouvait la librairie utilisée dans le projet, provenant de Phosphor Icons.

J’ai lu la documentation pour comprendre comment utiliser ces icônes dans mon projet, puis j’ai installé Phosphor Icons dans mon projet React et importé un par un les icônes nécessaires pour le moment.

Si par la suite on souhaite utiliser de nouvelles icônes de la librairie, il suffit de les importer en haut du fichier, comme montré ci-dessous :

```ts
import { CheckIcon, TrashIcon, SlidersHorizontalIcon, GearSixIcon } from "@phosphor-icons/react/dist/ssr"
```

---

**L’icône dans “icon-only--primary” n’a pas la bonne couleur → utiliser `var(--color-neutral-white)`**
Je n’avais pas utilisé la bonne variable dans la spécification de la sous-classe.
C’est maintenant corrigé et fonctionnel.

---

**Correction du CSS de ButtonGroup**

* J’ai mis `margin: 0` et `border: none` sur `.btn-group .btn`, afin de supprimer le bord propre au bouton et prioriser celui du conteneur
* Sur `.btn-group--addon`, j’ai ajouté `align-self: stretch`, ce qui permet à l’élément d’occuper correctement l’espace disponible et d’éviter qu’il apparaisse comme un carré isolé dans la div
* J’ai également supprimé ses bordures (`border: none`) et son `border-radius`

---

**Améliorations globales du CSS**

* J’ai ajouté un `margin: 2px` entre les boutons pour la démo, afin qu’ils ne soient pas collés entre eux et soient plus lisibles
* J’ai ajouté `justify-content: center` dans `.leading-icon` et `.trailing-icon`, car l’absence de cette propriété faisait que l’icône était légèrement décalée vers la gauche dans les boutons en mode `iconOnly`
