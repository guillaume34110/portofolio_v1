import React from 'react';
import './style/aside-formations.css'

export default function AsideFormation() {
  return (
    <div className = "aside-formations">
    <h3 className="aside-formations-title blue-macro">FORMATIONS</h3>
    <p className = "aside-formations-date">septembre 2021 - decembre 2021 </p>
    <h4 className = "aside-formations-entreprise ">Openclassroom</h4>
    <p className = "aside-formations-name">Développeur Front-End RNCP niv.6</p>
    <ul className = "aside-formations-list">
        <li>Analyser les besoins à partir du cahier des charges défini par le client ou le chef de projet .</li>
        <li>Implémenter des mockups avec du code de qualité ;</li>
        <li>Optimiser le temps de chargement des pages ;</li>
        <li>Communiquer avec les développeurs back-end pour assurer l’échange d’information dans l’application ;</li>
        <li>Utiliser les bonnes pratiques pour structurer le code HTML, CSS et Javascript ;</li>
        <li>Utiliser des frameworks comme React pour construire des applications puissantes et modulaires ;</li>
        <li>Tester le bon fonctionnement de l’application et corriger le code quand c’est nécessaire ;</li>
        <li>Assurer le support technique du site et produire une documentation technique et fonctionnelle du site pour le client.</li>
    </ul>
   
    <p className = "aside-formations-date">septembre 2009 - juillet 2011 </p>
    <h4 className = "aside-formations-entreprise ">Lycée Pierre Rouge</h4>
    <p className = "aside-formations-name">Bts systemes électronique</p>
    <ul className = "aside-formations-list">
        <li>Electronique Analogique et numérique </li>
        <li>Conception de cartes électroniques </li>
        <li>Programation en C et en Basic sur microcontroleurs</li>
    </ul>
</div>
  );
}
