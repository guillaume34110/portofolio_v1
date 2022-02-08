
import cryptoGameVideo from "../assets/videos/cryptogame_x264.mp4";
import dataCurveVideo from "../assets/videos/dat-curve-smoother_x264.mp4";
import fishEyeVideo from "../assets/videos/fisheye_x264.mp4";
import meteoVideo from "../assets/videos/meteo-api_x264.mp4";
import myChatVideo from "../assets/videos/myChat_x264.mp4";
import pinguiVideo from "../assets/videos/pinguigny_x264.mp4";
import crypto1 from "../assets/pictures/projects/cryptogame1-min.PNG"
import crypto2 from "../assets/pictures/projects/cryptogame2-min.PNG"
import dataCurve from "../assets/pictures/projects/data-curve-smoother-min.PNG"
import fisheye1 from "../assets/pictures/projects/fisheye1-min.PNG"
import fisheye2 from "../assets/pictures/projects/fisheye2-min.PNG"
import meteo from "../assets/pictures/projects/meteo-min.PNG"
import myChat1 from "../assets/pictures/projects/chat1-min.PNG"
import myChat2 from "../assets/pictures/projects/chat2-min.PNG"
import pinguini1 from "../assets/pictures/projects/pinguini1-min.PNG"
import pinguini2 from "../assets/pictures/projects/pinguini2-min.PNG"

export const projectMap = [
    {title : "MyChat" ,description :"Une application de messagerie instantanée basé sur un serveur Node.js",video : myChatVideo ,icons :["javascript","html","css","node"],githubLink :"https://github.com/guillaume34110/multipassinbox" ,directLink:"https://multipassinbox.herokuapp.com/" ,fullDescription : "cette application est un chat en temps réel avec authentification et création de compte.Sur cette application il est possible de crée son compte pour pouvoir dicuter avec les autres utilisateurs .Un chat global pour tous les utilisateur est présent .Les utilisateurs peuvent ajouter des amis pour avoir des discutions privées." ,pictures : [myChat1,myChat2] },
    {title : "Fisheye" ,description :"une plateforme pour photographes en javascript vanilla ",video : fishEyeVideo ,icons :["javascript","html","sass"],githubLink :"https://github.com/guillaume34110/GuillaumeGaillard_6_4102021" ,directLink:"https://guillaume34110.github.io/GuillaumeGaillard_6_4102021/" ,fullDescription : "fisheye est une plateforme de photographe que j'ai eu a réaliser durant ma formation openclassroom .Cette application à été integrée a partir d'une maquette et l'accent est mis sur l'accessiblitée." ,pictures : [fisheye1,fisheye2] },
    {title : "Meteo Reunion" ,description :"Une applicationmeteo pour l'ile de la reunion uniquement",video : meteoVideo ,icons :["javascript","html","css"],githubLink :"https://github.com/guillaume34110/meteoApi" ,directLink:"https://guillaume34110.github.io/meteoApi/" ,fullDescription : "une petite application meteo pour l'ile de la Réunion . développé avec mapboxgl et openweathermap" ,pictures : [meteo] },
    {title : "PinguiniGenerator" ,description :"Une application de generation de petits pinguins 8bits procédurale",video : pinguiVideo ,icons :["react","html","css"],githubLink :"https://github.com/guillaume34110/pinguiny" ,directLink:"https://guillaume34110.github.io/pinguiny/#/" ,fullDescription : "Toute petite application de génération de pinguini trés simple avec react-konva" ,pictures : [pinguini1 , pinguini2] },
    {title : "Cryptogame" ,description :"un petit jeu de trading de cryptomonaie en acclééré",video : cryptoGameVideo ,icons :["javascript","react","html","css"],githubLink :"https://github.com/guillaume34110/cryptoGame" ,directLink:"https://guillaume34110.github.io/cryptoGame/" ,fullDescription : `Un petit jeu de trading accéleré de cryptomonaie . acheter des long ou des short et vendez les en essayant de faire du profit, vous partez avec 1000$ . le jeux se lance une fois qu'une cryptomonaie est selectionée , une fois la partie lancé "9500 minutes" de cryptomonaies defilerons à toutes vitesse.Ces données sont prise au hazard au cour des derniéres années.  ` ,pictures : [crypto1 , crypto2] },
    {title : "Curve Smoother" ,description :"Une application qui simule un condensateur et une résistance sur un signal aléatoire",video : dataCurveVideo ,icons :["javascript","html","css"],githubLink :"https://github.com/guillaume34110/DataCurveSmoother" ,directLink:"https://guillaume34110.github.io/DataCurveSmoother/" ,fullDescription : "une application qui simule le comportement d'un consenteur et d'une résistance sur un signal électrique aléatoire (signal vert) . les deux boutons rotatifs permettent de selectionnées les valeurs des composants associés .Modifier ces valeur va permettre de changer la base de temps du filtrage (signal rouge), le signal rouge sera plus ou moins bruité" ,pictures : [dataCurve] }
]