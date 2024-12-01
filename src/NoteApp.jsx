import React, { useState } from 'react';

const notesData = [
  { id: 1, title: 'Grocery List', description: 'Milk, Eggs, Bread, Butter', image: 'https://via.placeholder.com/100' },
  { id: 2, title: 'Meeting Notes', description: 'Discuss Q4 targets', image: 'https://via.placeholder.com/100' },
  { id: 3, title: 'Project Ideas', description: 'New app features', image: 'https://via.placeholder.com/100' },
  { id: 4, title: 'Travel Plans', description: 'Visit Paris, Rome', image: 'https://via.placeholder.com/100' },
  { id: 5, title: 'Book Summary', description: "Key takeaways from '1984'", image: 'https://via.placeholder.com/100' },
];

const NoteApp = () => {
  const [notes, setNotes] = useState(notesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addNote = () => {
    const newNote = {
      id: notes.length + 1,
      title: 'New Note',
      description: 'This is a new note.',
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>My Notes</h1>
        <div
          style={styles.hamburgerContainer}
          onMouseEnter={toggleMenu}
          onMouseLeave={toggleMenu}
        >
          <div style={styles.hamburger}></div>
          <div style={styles.hamburger}></div>
          <div style={styles.hamburger}></div>
          {isMenuOpen && (
            <div style={styles.dropdownMenu}>
              <button style={styles.menuItem}>Home</button>
              <button style={styles.menuItem}>Profile</button>
              <button style={styles.menuItem}>Logout</button>
            </div>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={handleSearch}
          style={styles.searchInput}
        />
      </div>

      {/* Notes List */}
      <div style={styles.notesList}>
        {filteredNotes.map((note) => (
          <div key={note.id} style={styles.card}>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{note.title}</h3>
              <p style={styles.cardDescription}>{note.description}</p>
            </div>
            {/* <img src={note.image} alt={note.title} style={styles.cardImage} /> */}
          </div>
        ))}
      </div>

      {/* Add Button */}
      <button onClick={addNote} style={styles.addButton}>+</button>
    </div>
  );
};


const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      backgroundColor: '#f9f9f9', // Neutral light background
      minHeight: '100vh',
      position: 'relative',
      maxWidth: '1450px',
      margin: '0 auto',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      position: 'relative',
      borderBottom: '2px solid #4CAFEE', // Vibrant coral accent
    },
    title: {
      fontSize: '32px',
      color: '#333',
      fontWeight: 'bold',
      color: '#4CAFEE', // Coral color for emphasis
    },
    hamburgerContainer: {
      position: 'relative',
      cursor: 'pointer',
      zIndex: 1000,
    },
    hamburger: {
      width: '30px',
      height: '4px',
      backgroundColor: '#4CAFEE', // Coral
      margin: '5px 0',
      borderRadius: '4px',
      transition: 'all 0.3s ease-in-out',
    },
    dropdownMenu: {
      position: 'absolute',
      top: '40px',
      right: '0',
      backgroundColor: '#E0F7FA', // Light coral tone for dropdown
      border: '1px solid #4CAFEE',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      minWidth: '150px',
      overflow: 'hidden',
    },
    menuItem: {
      padding: '10px 15px',
      fontSize: '16px',
      color: '#333',
      textAlign: 'left',
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    menuItemHover: {
      backgroundColor: '#FFE3D8', // Subtle coral hover effect
    },
    searchContainer: {
        marginBottom: '20px',
        maxWidth: '1290px',
        marginLeft: 'auto', 
        marginRight: 'auto', 
        padding: '0 20px',
      },
      
    searchInput: {
      width: '100%',
      padding: '12px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      fontSize: '16px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      outline: 'none',
      transition: 'border 0.3s ease',
    },
    searchInputFocus: {
      border: '1px solid #4CAFEE',
    },
    notesList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
      maxWidth: '1250px',
      margin: '0 auto'
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '12px',
      backgroundColor: '#f9f9f9', // Light coral background for cards
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    cardHover: {
      transform: 'scale(1.02)',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
    },
    cardContent: {
      marginBottom: '15px',
    },
    cardTitle: {
      fontSize: '18px',
      color: '#4CAFEE', // Coral for titles
      margin: '0 0 10px 0',
      fontWeight: 'bold',
    },
    cardDescription: {
      fontSize: '14px',
      color: '#555',
      margin: '0',
    },
    cardImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
    },
    addButton: {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      backgroundColor: '#4CAFEE', // Bright coral
      color: '#fff',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      border: 'none',
      fontSize: '32px',
      fontWeight: 'bold',
      cursor: 'pointer',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    addButtonHover: {
      transform: 'scale(1.1)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
    },
  };
  
  
export default NoteApp;