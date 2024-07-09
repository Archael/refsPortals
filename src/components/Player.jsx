import { useState, useRef } from 'react';

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const playerNameRef = useRef();

  function handleClick() {
    // useRef will always return an object with a .current property
    setEnteredPlayerName(playerNameRef.current.value);
  }
  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'}
      </h2>
      <p>
        <input ref={playerNameRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
