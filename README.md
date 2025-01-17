# Berlin Clock Kata

## 1. Préparation de l’environnement

### Installer NPM
- Téléchargez et installez Node.js depuis [nodejs.org](https://nodejs.org/fr).
- Vérifiez l’installation avec la commande :
  ```bash
  npm -v
  ```

## 2. Berlin Clock Kata

L’objectif est de convertir une heure digitale en représentation de l'**heure Berlin Clock**, composée de lampes avec deux états : allumé ou éteint.

### Description de l'horloge :
1. **Lampe des secondes** :
   - Allumée pour les secondes paires.
   - Éteinte pour les secondes impaires.
2. **Heures** :
   - Ligne 1 : 4 lampes rouges, chaque lampe représente 5 heures.
   - Ligne 2 : 4 lampes rouges, chaque lampe représente 1 heure.
3. **Minutes** :
   - Ligne 1 : 11 lampes, avec une lampe rouge toutes les 3 lampes (blocs de 5 minutes).
   - Ligne 2 : 4 lampes jaunes, chaque lampe représente 1 minute.

### Étapes d’implémentation :
1. Implémenter la ligne des minutes simples.
2. Implémenter la ligne des blocs de 5 minutes.
3. Implémenter la ligne des heures simples.
4. Implémenter la ligne des blocs de 5 heures.
5. Implémenter la lampe des secondes.
6. Intégrer l’horloge complète.

### Méthodologie
- Formez des paires et travaillez en **pair programming**.
- Suivez la méthode **TDD** (Test-Driven Development).
