import React, { useState } from "react";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>Learn more about our company and what we do.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Get in touch with us!</p>
    </div>
  );
}

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => setPage("home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setPage("about")}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setPage("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;
