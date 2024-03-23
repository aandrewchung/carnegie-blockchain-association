// src/components/DirectoryPage.js
import React, { useState, useEffect } from 'react';
import PersonCard from './PersonCard';
import './DirectoryPage.css';

const DirectoryPage = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Adjust the URL to match your server's address and port
        const response = await fetch('http://localhost:3001/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const usersData = await response.json();

        setPeople(usersData);
      } catch (error) {
        console.error("Could not fetch the data", error);
        // Handle errors or set some error state to show a message in the UI
      }
    };

    fetchData();
  }, []);

  return (
    <div className="directory-page">
      {people.map((person, index) => (
        <PersonCard
          key={index}
          firstName={person.firstName}
          lastName={person.lastName}
          graduationYear={person.graduationYear}
          company={person.company}
          twitter={person.twitter}
          imageUrl={person.imageUrl} // Pass the imageUrl to the PersonCard
        />
      ))}
    </div>
  );
};

export default DirectoryPage;
