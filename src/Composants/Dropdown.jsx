import { useState } from 'react';
import { mockSubjects } from '../assets/data';
import './Dropdown.css'; // Importer le fichier CSS

function Dropdown({ selectedSubject, handleSubjectSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état du menu déroulant
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Fonction pour gérer la sélection d'un sujet
  const handleSelect = (subject) => {
    setIsOpen(false); // Fermer le menu déroulant après la sélection
    handleSubjectSelect(subject);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {selectedSubject}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {mockSubjects.map((subject) => (
            <li key={subject.id}>
              <a href="#" onClick={() => handleSelect(subject.name)}>
                {subject.name}
              </a>
            </li>
          ))}

        </ul>
      )}
    </div>
  );
}

export default Dropdown;