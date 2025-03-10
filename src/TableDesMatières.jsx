import "./TableDesMatières.css";

// Données temporaires
const mockSubjects = [
  { id: 1, name: 'Mathématiques II', questions: 45, students: 32 },
  { id: 2, name: 'Algorithmique', questions: 28, students: 25 },
  { id: 3, name: 'Electricité', questions: 37, students: 18 },
  { id: 3, name: 'Langage C', questions: 37, students: 18 },
];

// Icônes de base (vous pouvez utiliser react-icons en vrai projet)
const BookIcon = () => <span>📘</span>;
const MessageSquareIcon = () => <span>💬</span>;
const UserIcon = () => <span>👤</span>;

const TablesDesMatières = () => {
  return (
    <div className="container">
      {/* En-tête */}
      <div className="header">
        <h1>Bienvenue sur LATTON FORUM ESMT</h1>
        <p>Sélectionnez une matière pour voir les discussions</p>
      </div>

      {/* Grille des matières */}
      <div className="subjects-grid">
        {mockSubjects.map((subject) => (
          <div key={subject.id} className="subject-card">
            <div className="card-content">
              <div className="icon-container">
                <BookIcon />
              </div>
              <div className="subject-info">
                <h3>{subject.name}</h3>
                <div className="stats">
                  <p><MessageSquareIcon /> {subject.questions} questions</p>
                  <p><UserIcon /> {subject.students} étudiants</p>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button>Voir les discussions →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TablesDesMatières;