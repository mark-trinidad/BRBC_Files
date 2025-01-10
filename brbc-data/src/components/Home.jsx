import React, { useState, useEffect } from 'react';

export default function Home() {
  const [fileList, setFileList] = useState([]);
  const [filteredFiles, setFilteredFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mark-trinidad/BRBC_Files/refs/heads/main/brbc-data/public/fileList.json')
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
                <a href={file} download>{file.split('/').pop()}</a>
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
