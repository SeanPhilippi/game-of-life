import React from 'react';
import Tabs from './Tabs';

const Guide = () => {
  return (
    <div className="guide text-center">
      <Tabs>
        <div label="Still Lifes">
          <section className="diagram-content pt-1 d-flex flex-column justify-content-between">
            <div className="diagram-row d-flex justify-content-between">
              <div className="diagram diagram-block">
              </div>
              <div className="diagram diagram-boat">
              </div>
              <div className="diagram diagram-beehive">
              </div>
            </div>
            <div className="diagram-row d-flex justify-content-between">
              <div className="diagram diagram-loaf">
              </div>
            </div>
          </section>
        </div>
        <div label="Oscillators">
          <section className="diagram-content pt-1 d-flex flex-column justify-content-between">
            <div className="diagram-row d-flex justify-content-between">
              <div className="diagram diagram-beacon">
              </div>
              <div className="diagram diagram-blinker">
              </div>
              <div className="diagram diagram-penta-decathlon">
              </div>
            </div>
            <div className="diagram-row d-flex justify-content-between">
              <div className="diagram diagram-pulsar">
              </div>
              <div className="diagram diagram-toad">
              </div>
            </div>
          </section>
        </div>
        <div label="Spaceships">
          <section className="diagram-content pt-1 d-flex flex-column justify-content-between">
            <div className="diagram-row d-flex justify-content-between">
              <div className="diagram diagram-glider">
              </div>
              <div className="diagram diagram-light-weight-spaceship">
              </div>
              <div className="diagram diagram-middle-weight-spaceship">
              </div>
            </div>
            <div className="diagram-row d-flex justify-content-between">
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