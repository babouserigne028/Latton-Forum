import { useRef, useState } from "react";
import { utilisateurs, messages, mockSubjects } from "../assets/data";

import { FaPlus } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";

import "./Chat.css";

const Chat = () => {
  const chatContainerRef = useRef(null);
  const currentUser = 1;
  const [message, setMessage] = useState("");
  const [currentSubject, setCurrentSubject] = useState(mockSubjects[0]);

  const onSelectSubject = (subject) => {
    setCurrentSubject(subject);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message envoyé:", message);
    setMessage("");
  };

  return (
    <div>
      <div className="headerChat">
        <h2>Discussion</h2>
      </div>
      <div className="subject-selector">
        {mockSubjects.map((subject) => (
          <button
            key={subject.id}
            onClick={() => onSelectSubject(subject)}
            className={`subject-button ${
              currentSubject.id === subject.id ? "active" : ""
            }`}
            style={
              currentSubject.id === subject.id
                ? { backgroundColor: "#f0f0f0" }
                : {}
            }
          >
            {subject.name}
          </button>
        ))}
      </div>
      <div ref={chatContainerRef} className="chat-container">
        {messages.map((msg) => {
          // Permet de rechercher dans le tableau utilisateur le nom et le prenom
          const user = utilisateurs.find((u) => u.id === msg.userId);
          const sujet = mockSubjects.filter((s) => msg.sujet.includes(s.id));

          return (
            <div
              key={msg.id}
              className={`message-row ${
                msg.userId === currentUser ? "right" : "left"
              }`}
            >
              <div className="message-bubble">
                <div className="message-user">
                  <p>
                    <strong>
                      {user?.prenom} {user?.nom}
                    </strong>
                  </p>
                </div>
                <div className="message-content">{msg.contenu}</div>
                <div className="message-attributs">
                  {msg.dateCreation} - {sujet.map((s) => s.name).join(", ")} -{" "}
                  {user.status}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="chat-input-container">
        <button className="chat-button">
          <FaPlus size={20} />
        </button>
        <form onSubmit={handleSubmit} className="chat-form">
          <input
            type="text"
            placeholder="Écrivez votre message ici..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="chat-input"
          />
          <button type="submit" className="chat-button">
            <LuSend size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
