import React from 'react';
import Tabs from '../Tabs/Tabs';

const Guide = () => {
  return (
    <div className="guide text-center">
      <Tabs>
        <div label="Still Lifes">
          <section>
            <div className="diagram-heading">
              Still Lifes
            </div>
            <div className="diagram-row">
              <div className="diagram diagram-block">
              </div>
              <div className="diagram diagram-boat">
              </div>
            </div>
            <div className="diagram-row">
              <div className="diagram diagram-beehive">
              </div>
              <div className="diagram diagram-loaf">
              </div>
            </div>
          </section>
        </div>
        <div label="Oscillators">
          <section>
            <div className="diagram-heading">
              Oscillators
            </div>
            <div className="diagram-row">
              <div className="diagram diagram-beacon">
              </div>
              <div className="diagram diagram-blinker">
              </div>
            </div>
            <div className="diagram-row">
              <div className="diagram diagram-penta-decathlon">
              </div>
              <div className="diagram diagram-pulsar">
              </div>
            </div>
            <div className="diagram-row">
              <div className="diagram diagram-toad">
              </div>
              <div className="diagram">
              </div>
            </div>
          </section>
        </div>
        <div label="Spaceships">
          <section>
            <div className="diagram-heading">
              Spaceships
            </div>
            <div className="diagram-row">
              <div className="diagram diagram-glider">
              </div>
              <div className="diagram diagram-light-weight-spaceship">
              </div>
            </div>
            <div className="diagram-row">
              <div className="diagram diagram-middle-weight-spaceship">
              </div>
              <div className="diagram diagram-heavy-weight-spaceship">
              </div>
            </div>
          </section>
        </div>
      </Tabs>
    </div>
  );
};

export default Guide;