import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Bahrain Reformed Baptist Church</h1>
      <div>
        <h2>Church Resources</h2>
        <ul>
          <li>
            <a
              href="/files/Church-Membeship.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Church-Membership.pdf (PDF)
            </a>
          </li>
          <li>
            <a
              href="/files/worship-schedule.docx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Worship Schedule (Word)
            </a>
          </li>
          <li>
            <a
              href="/files/announcements.pptx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Announcements (PPTX)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
