import React from 'react';

const FileLinks = () => {
  return (
    <div>
      <h2>Church Resources</h2>
      <ul>
        <li>
          <a href="/files/sermon-outline.pdf" target="_blank" rel="noopener noreferrer">
            Download Sermon Outline (PDF)
          </a>
        </li>
        <li>
          <a href="/files/worship-schedule.docx" target="_blank" rel="noopener noreferrer">
            Download Worship Schedule (Word)
          </a>
        </li>
        <li>
          <a href="/files/announcements.pptx" target="_blank" rel="noopener noreferrer">
            Download Announcements (PPTX)
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FileLinks;
