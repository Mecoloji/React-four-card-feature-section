import calculator from "./images/icon-calculator.svg";
import karma from "./images/icon-karma.svg";
import supervisor from "./images/icon-supervisor.svg";
import teamBuilder from "./images/icon-team-builder.svg";

import "./App.css";

function App() {
  return (
    <section className="container">
      <article className="card-header card-1">
        <h1>Reliable, efficient delivery</h1>
        <h2>Powered by Technology</h2>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </article>

      <article className="card-main card-2">
        <hr id="cyan" />
        <section className="fc-card">
          <h3>Supervisor</h3>
          <p>
            Monitors activity to identify project roadblocks
          </p>
          <div className="fc-card-icon">
            <img src={supervisor} alt="" />
          </div>
        </section>
      </article>

      <article className="card-main card-3">
        <hr id="red" />
        <section className="fc-card">
          <h3>Team Builder</h3>
          <p>
            Scans our talent network to create the optimal team for your project
          </p>
          <div className="fc-card-icon">
            <img src={teamBuilder} alt="" />
          </div>
        </section>
      </article>

      <article className="card-main card-4">
        <hr id="orange" />
        <section className="fc-card">
          <h3>Karma</h3>
          <p>
            Regularly evaluates our talent to ensure quality
          </p>
          <div className="fc-card-icon">
            <img src={karma} alt="" />
          </div>
        </section>
      </article>

      <article className="card-main card-5">
        <hr id="blue" />
        <section className="fc-card">
          <h3>Calculator</h3>
          <p>
            Uses data from past projects to provide better delivery estimates
          </p>
          <div className="fc-card-icon">
            <img src={calculator} alt="" />
          </div>
        </section>
      </article>
    </section>
  );
}

export default App;
