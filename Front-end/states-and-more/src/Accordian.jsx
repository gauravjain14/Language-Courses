import { useState } from 'react';

function Panel({ title, children, isActive, onShow}) {
    // We are destructuring the props into title, isActive,
    // children. props.children points to anything between
    // opening and closing tags <> ... </>
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : ( 
        <button onClick={onShow}>
            Show
        </button>
      )}
    </section>
  );
}

function Accordion() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <h2>Delhi, India</h2>
      <Panel title="About" isActive={isActive === false} onShow={() => setIsActive(false)}>
        With a population of about 25 million, Delhi is India's capital city.
      </Panel>
      <Panel title="Etymology" isActive={isActive === true} onShow={() => setIsActive(true)}>
        Is there one? I don't know.
      </Panel>
    </>
  );
}

export default Accordion;
