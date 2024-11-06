import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Dog from "./dog.jpg";
import "./App.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

function App() {
  const [waitingWorker, setWaitingWorker] = useState(null);

  useEffect(() => {
    serviceWorkerRegistration.register({
      onSuccess: (r) => {
        setWaitingWorker(r.waiting);
      },
    });
  }, []);

  function activateWorker() {
    waitingWorker.postMessage({
      type: "SKIP_WAITING",
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={Dog} alt="Dog" />
        <p>Hello Darling</p>
        <a
          className="App-link"
          href="https://developer.chrome.com/docs/workbox/modules/workbox-precaching"
          target="_blank"
          rel="noopener noreferrer"
        >
          sfsdfsdfgfgf
        </a>
      </header>
      <main>
        {waitingWorker && (
          <div>
            <p>New version is available</p>
            <button onClick={activateWorker}>Update</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

// hook.js:608 Error during service worker registration: SecurityError: Failed to register a ServiceWorker for scope ('https://kmstest.irisaco.com/dashboard/') with script ('https://kmstest.irisaco.com/dashboard/service-worker.js'): The script has an unsupported MIME type ('text/html').
