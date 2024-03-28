import { Component, useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
  }
  console.log("App component is executed");

  let tabContent = <p>Plase select Topic!</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((CoreConceptItem) => (
              <CoreConcept  key={CoreConceptItem.title} {...CoreConceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handSelect("components")}
            >
              COMPONENTS
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handSelect("props")}
            >
              PROPS
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handSelect("state")}
            >
              STATE
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
