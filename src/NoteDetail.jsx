import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from './Header';
const notesData = [
  { id: 1, title: "Grocery List", description: "Milk, Eggs, Bread, Butter" },
  { id: 2, title: "Meeting Notes", description: "Discuss Q4 targets" },
  { id: 3, title: "Project Ideas", description: "New app features" },
  { id: 4, title: "Travel Plans", description: "Visit Paris, Rome" },
  { id: 5, title: "Book Summary", description: "Key takeaways from '1984'" },
];

const NoteDetail = () => {
  const { id } = useParams();
  const note = notesData.find((note) => note.id === parseInt(id));

  if (!note) {
    return <div style={styles.error}>Note not found</div>;
  }

  return (
    <>
    <Header />
    <div style={styles.container}>
      <div style={styles.splitContainer}>
        {/* Left Side - List of Notes */}
        <div style={styles.leftColumn}>
          {notesData.map((note) => (
            <Link key={note.id} to={`/note/${note.id}`} style={styles.link}>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>{note.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Side - Expanded Note */}
        <div style={styles.rightColumn}>
          <h2 style={styles.title}>{note.title}</h2>
          <p style={styles.description}>{note.description}</p>
        </div>
      </div>
    </div>
    </>
  );
};

const styles = {
    container: {
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
        // display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", // Centers content vertically if needed
        padding: "0", // Removes extra padding
        height: "100vh", // Ensures the container fills the entire viewport
        width: "100vw", // Ensures the container spans the full width of the viewport
        marginTop: "0px", // Removes extra margin
        boxSizing: "border-box", // Ensures consistent width/height calculation
        overflow: "hidden", // Prevents unwanted scrollbars
    },
    
  splitContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  leftColumn: {
    width: "30%",
    backgroundColor: "#E0F7FA", // Light blue background for left side
    padding: "20px",
    borderRight: "2px solid #ddd",
    overflowY: "auto",
  },
  rightColumn: {
    width: "70%",
    padding: "20px",
    backgroundColor: "#FFF",
  },
  link: {
    textDecoration: "none",
  },
  card: {
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    backgroundColor: "#FFF",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#4CAFEE", // Light blue color for titles
    marginBottom: "10px",
    transition: "color 0.2s ease",
  },
  cardHover: {
    transform: "scale(1.05)",
  },
  title: {
    fontSize: "28px",
    color: "#333",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.6",
  },
  error: {
    color: "red",
    fontSize: "20px",
    fontWeight: "bold",
  },
};

export default NoteDetail;
