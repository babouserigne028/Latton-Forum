import { useState } from 'react';
import Sidebar from './Sidebar';
import Dropdown from './Dropdown';
import Avatar from './Avatar';
import Chat from './Chat'; // Assurez-vous d'importer le composant Chat
import TableDesMatières from './TableDesMatières';
import './style.css';
import avatarImage from './assets/bamba.avif';
import { IoNotificationsOutline, IoMailOutline } from 'react-icons/io5';

function App() {
  const [selectedSubject, setSelectedSubject] = useState('Choisir une matière');
  const [ForumSelected, setForumSelected] = useState(false);
  const [chatVisible, SetChatVisible] = useState(false);
  const [showTablesDesMatières, setShowTablesDesMatières] = useState(true);



  const user = {
    name: 'Bamba',
    avatarUrl: avatarImage,
    role: 'Étudiant',
    notificationCount: 5
  };

  // Fonction pour gérer la sélection d'un sujet
  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    SetChatVisible(true);
  };

  const handleShowTablesDesMatières = () => {
    setShowTablesDesMatières(true);
    setForumSelected(false);
    SetChatVisible(false);
  };
  // Fonction pour gérer le clic sur le tableau de bord
  const handleForumClick = () => {
    setForumSelected(true);
    SetChatVisible(false);
    setShowTablesDesMatières(false);

  };

  // Fonction pour gérer le clic sur d'autres onglets
  const handleOtherButtonClick = () => {
    setForumSelected(false);
    SetChatVisible(false);
    setShowTablesDesMatières(false);
  };

  return (
    <div className="app">
      <Sidebar onForumClick={handleForumClick} onShowTablesDesMatières={handleShowTablesDesMatières} onOtherButtonClick={handleOtherButtonClick}  />
      <div className="main-content">
        <div className="user-container static-right">
          <IoMailOutline className="message-icon" />
          <IoNotificationsOutline className="notification-icon" />
          <Avatar user={user} />
        </div>
        {showTablesDesMatières && <TableDesMatières />}
        {ForumSelected && (
          <div className="dropdown-container">
            <Dropdown selectedSubject={selectedSubject} handleSubjectSelect={handleSubjectSelect} />
          </div>
        )}
        {chatVisible && (
          <Chat selectedSubject={selectedSubject} />
        )}
      </div>
    </div>
  );
}

export default App;