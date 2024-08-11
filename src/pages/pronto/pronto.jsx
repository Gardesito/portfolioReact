import React from "react";
import "./pronto.css";



const Pronto = () => {
  return (
    <>
      <div className="pronto">
        <div className="container pronto">
          <div className="terminal-loader">
            <div className="terminal-header">
              <div className="terminal-title">Status</div>
              <div className="terminal-controls">
                <div className="control close"></div>
                <div className="control minimize"></div>
                <div className="control maximize"></div>
              </div>
            </div>
            <div class="text">Loading...</div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Pronto };
