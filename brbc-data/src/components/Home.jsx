import React, { useState, useEffect } from 'react';

export default function Home() {
  const [fileList, setFileList] = useState([]);
  const [filteredFiles, setFilteredFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch the file list from the correct path on GitHub Pages.
    fetch('/BRBC_Files/fileList.json')  // Corrected path for GitHub Pages.
      .then(response => response.json())
      .then(data => {
        setFileList(data);
        setFilteredFiles(data); 
      })
      .catch(error => console.error('Error loading file list:', error));
  }, []);

  const filterFiles = (term) => {
    return fileList.filter(file =>
      file.toLowerCase().includes(term.toLowerCase())
    );
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setFilteredFiles(filterFiles(value));
  };

  return (
    <div className="home">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search files..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="file-list">
        {filteredFiles.length > 0 ? (
          <ul>
            {filteredFiles.map((file, index) => (
              <li key={index}>
                {/* Corrected link to download file from GitHub Pages */}
                <a href={`/BRBC_Files/${file}`} download>{file.split('/').pop()}</a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No files found.</p>
        )}
      </div>
    </div>
  );
}
