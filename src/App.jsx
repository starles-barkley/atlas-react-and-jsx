import React from 'react';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <div>
      <Header />
      <Section title="What is React?">
        <p>
        React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components, manage the state of their application effectively, and efficiently update the DOM when data changes. React is widely used for its speed, simplicity, and flexibility.
        </p>
      </Section>
    </div>
  );
}

export default App;
