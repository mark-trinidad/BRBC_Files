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
              href={`${process.env.PUBLIC_URL}/files/Church-Membership.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Church-Membership (PDF)
            </a>
          </li>
          <li>
            <a
              href={`${process.env.PUBLIC_URL}/files/BRBC-Thursday-Study.docx`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download BRBC-Thursday-Study (Word)
            </a>
          </li>
          <li>
            <a
              href={`${process.env.PUBLIC_URL}/files/Doctrine-of-Grace-1.pptx`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Doctrine-of-Grace-1 (PPTX)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
