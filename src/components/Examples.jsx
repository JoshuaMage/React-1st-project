import { useState } from "react";

import { EXAMPLES } from "../data.js";
import TabButton from "../components/TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
  }

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
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handSelect("components")}
            >
              COMPONENTS
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handSelect("props")}
            >
              PROPS
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handSelect("state")}
            >
              STATE
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
