import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Chat.css";

const Chat = ({ selectedSubject }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [files, setFiles] = useState([]);
  const [fileCount, setFileCount] = useState(0);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setFileCount(selectedFiles.length);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "" && files.length === 0) return;

    const messageData = {
      id: uuidv4(),
      user: "Moi",
      text: newMessage,
      files: files.map(file => URL.createObjectURL(file)),
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, messageData]);
    setNewMessage("");
    setFiles([]);
    setFileCount(0);
  };

  const handleDeleteMessage = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  return (
    <div className="chat-container">
      <h2>{selectedSubject}</h2>

      <div className="messages">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <strong>{msg.user}:</strong> {msg.text}
            <span style={{ fontSize: "12px", color: "gray", marginLeft: "10px" }}>
              {msg.timestamp}
            </span>
            {msg.files && msg.files.map((file, index) => (
              <div key={index}>
                <img src={file} alt="Fichier envoyé" width="100px" />
              </div>
            ))}
            <button onClick={() => handleDeleteMessage(msg.id)} style={{ marginLeft: "10px", background: "red" }}>
              Supprimer
            </button>
          </div>
        ))}
      </div>

      <div className="input-container">
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileChange}
          //multiple
        />
        <button  disabled={selectedSubject === 'Sélectionnez une matière pour accéder au forum'} className="buttonAjoutFichier" onClick={() => document.getElementById('fileInput').click()} style={{ position: 'relative' }}>
          <ion-icon name="document-attach"></ion-icon>
          {fileCount > 0 && (
            <span className="badge">{fileCount}</span>
          )}
        </button>
        <textarea
          className="espace-saisie"
          disabled={selectedSubject === 'Sélectionnez une matière pour accéder au forum'}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Poser votre question..."
          onInput={(e) => {
            e.target.style.height = "auto"; // Réinitialiser la hauteur
            e.target.style.height = e.target.scrollHeight + "px"; // Ajuster la hauteur selon le contenu
          }}
          rows="3" // Nombre minimum de lignes affichées
        />
        <button 
        onClick={handleSendMessage}
        disabled={selectedSubject === 'Sélectionnez une matière pour accéder au forum'}
        >
          <ion-icon name="paper-plane"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Chat;