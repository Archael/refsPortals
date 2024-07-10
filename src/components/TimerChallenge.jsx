import { useRef, useState } from 'react';

export default function TimerChallenge({ title, targetTime }) {
  //useref vs variables: userefs are instantiated for each instance rather than shared between instances of the component

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>Time's up!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={handleStart}>
          {timerStarted ? 'Stop' : 'Start'} challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Timer active' : 'Timer expired'}
      </p>
    </section>
  );
}
