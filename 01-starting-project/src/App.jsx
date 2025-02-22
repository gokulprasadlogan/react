import { CORE_CONCEPTS } from "./data";
import Header from "./assets/components/Header";
import CoreConcept from "./assets/components/CoreConcepts";
import TabButton from "./assets/components/TabButton";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concepts) => (
              <CoreConcept key={concepts.title} {...concepts} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
