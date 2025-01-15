import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import HelpfulResource from './components/HelpfulResource';

function App() {
  return (
    <div>
      <Header />
      <Section title="What is React?">
        <p>
        React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components, manage the state of their application effectively, and efficiently update the DOM when data changes. React is widely used for its speed, simplicity, and flexibility.
        </p>
      </Section>
      <Section title="Benefits of React">
        <ul>
          <li>Reusable components for efficient development.</li>
          <li>Virtual DOM for faster UI updates.</li>
          <li>One-way data binding for better control of state.</li>
          <li>Strong ecosystem with tools like React Router and Redux.</li>
          <li>Wide community support and extensive documentation.</li>
        </ul>
      </Section>
      <Section title="Helpful Resources">
        <HelpfulResource
          link="https://reactjs.org/docs/getting-started.html"
          label="React Official Documentation"
        />
        <HelpfulResource
          link="https://www.youtube.com/watch?v=w7ejDZ8SWv8"
          label="React Tutorial for Beginners (Programming with Mosh)"
        />
        <HelpfulResource
          link="https://beta.reactjs.org/"
          label="Beta React Documentation"
        />
      </Section>
    </div>
  );
}

export default App;