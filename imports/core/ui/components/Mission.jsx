import React, { PureComponent } from 'react';

export class Mission extends PureComponent {
  render() {
    return (
      <section id="mission" className="content-section side-text invert">
        <div className="container">
          <h2>What is our mission and message?</h2>
          <div className="row">
            <div>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/WUppGn2Z4b4?list=PLzwMXFvS_OYMIrrdyP1ASjmD3uz9NqC9p" frameBorder="0" allowFullScreen />
            </div>
            <div className="text-cont">
              <p>Times are changing, and so can our feeling of powerless at the pain we see every day around us, and on the news<br />Today's technology gives us ALL have the power to solve ALL of the world's problems ourselves, by coming together and using positive and innovative tools to target their roots causes<br />While each action may feel like a tiny ripple. As the Positve Action Movement sweeps around the world these ripples will combine into an unstoppable wave of positive change!<br />Focallocal is about empowering people. The time for waiting for others to fix this planet is over<br />That future is ours, if we all just do a little Positive Action, every day!</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
