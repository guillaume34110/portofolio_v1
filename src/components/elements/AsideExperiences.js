import React from 'react';
import './style/aside-experiences.css'

export default function AsideExperiences() {
  return (
  <div className = "aside-experiences">
      <h3 className="aside-experiences-title blue-macro">EXPERIENCES RECENTES</h3>
      <p className = "aside-experiences-date">septembre 2021 - decembre 2021 </p>
      <h4 className = "aside-experiences-entreprise">Openclassroom</h4>
      <p className = "aside-experiences-name">Développeur</p>
      <ul className = "aside-experiences-list">
          <li>Choisir une solution technique adaptée à votre client et travailler en mode Agile </li>
          <li>Créer des sites webs avec HTML et CSS ;</li>
          <li>Créer des applications web dynamiques avec Javascript et React ;</li>
          <li>Communiquer avec le back-end de l’application grâce à une API ;</li>
          <li>Mettre en œuvre des test unitaires et d’intégration et débugger le code ;</li>
          <li>Résoudre des problèmes techniques avec un langage de programmation et des algorithmes ;</li>
          <li>Refactoriser du code pour qu’il soit plus moderne et optimisé.</li>
      </ul>
  </div>
  );
}
