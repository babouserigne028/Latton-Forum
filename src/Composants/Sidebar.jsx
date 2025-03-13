import { useState } from 'react';
import '../style.css'; // Importer le fichier CSS
import LogoLattonForum from '../assets/LogoLattonForum.jpg'; // Importer l'image

// eslint-disable-next-line react/prop-types
function Sidebar({ onShowTablesDesMatières, onForumClick, onOtherButtonClick, setActiveTab }) {
  const [activeIndex, setActiveIndex] = useState(null);

  // Fonction pour gérer le clic sur un élément de la barre latérale
  const handleItemClick = (index, callback, tabName) => {
    if (index === 1 && activeIndex === 1) {
      setActiveIndex(null); // Désactiver si cliqué à nouveau
      if (callback) callback();
      setActiveTab(null);
    } else {
      setActiveIndex(index);
      if (callback) callback();
      setActiveTab(tabName);
    }
  };

  return (
    <div className="navigation">
      <ul>
        <li>
          <a href="#">
            <img src={LogoLattonForum} alt="Logo Latton Forum" className="logo" />
          </a>
        </li>
        <li className={activeIndex === 0 ? 'active' : ''} onClick={onShowTablesDesMatières}>
          <a href="#" onClick={() => handleItemClick(0, onShowTablesDesMatières, 'Dashbord')}>
            <span className="icon">
            <ion-icon name="chatbubbles"></ion-icon>
            </span>
            <span className="title">Dashbord</span>
          </a>
        </li>
        <li className={activeIndex === 1 ? 'active' : ''} onClick={onForumClick}>
          <a href="#" onClick={() => handleItemClick(1, onForumClick, 'Forum de discussion')}>
            <span className="icon">
            <ion-icon name="chatbubbles"></ion-icon>
            </span>
            <span className="title">Forum de discussion</span>
          </a>
        </li>
        <li className={activeIndex === 2 ? 'active' : ''} onClick={onOtherButtonClick}>
          <a href="#" onClick={() => handleItemClick(2, onOtherButtonClick, 'Mes Questions')}>
            <span className="icon">
            <ion-icon name="chatbox-ellipses-sharp"></ion-icon>
            </span>
            <span className="title">Mes Questions</span>
          </a>
        </li>
        <li className={activeIndex === 3 ? 'active' : ''} onClick={onOtherButtonClick}>
          <a href="#" onClick={() => handleItemClick(3, onOtherButtonClick, 'Supports de Cours')}>
            <span className="icon">
            <ion-icon name="file-tray-stacked-sharp"></ion-icon>
            </span>
            <span className="title">Supports de Cours</span>
          </a>
        </li>
        <li className={activeIndex === 4 ? 'active' : ''} onClick={onOtherButtonClick}>
          <a href="#" onClick={() => handleItemClick(4, onOtherButtonClick, 'Compte')}>
            <span className="icon">
             <ion-icon name="lock-closed-sharp"></ion-icon>
            </span>
            <span className="title">Compte</span>
          </a>
        </li>
        <li className={activeIndex === 5 ? 'active' : ''} onClick={onOtherButtonClick}>
          <a href="#" onClick={() => handleItemClick(5, onOtherButtonClick, 'Accueil')}>
            <span className="icon">
             <ion-icon name="exit-sharp"></ion-icon>
            </span>
            <span className="title">Accueil</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;