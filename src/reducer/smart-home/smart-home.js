import React, { useReducer, useState } from "react";
import reducer, { appliances, actions } from "./smart-reducer";
import TimePannel from "./time-pannel";

function SmartHome() {
  const [state, dispatch] = useReducer(reducer, appliances);
  const [name, setName] = useState("");
  const toogleActivation = (name) => {
    dispatch({
      type: actions.TOOGLE_STATUS,
      payload: {
        name: name,
      },
    });
  };
  const pannels = state.map((appl) => (
    <div className="pannel" key={appl.name}>
      <div className="title-bar">
        <span>{appl.name}</span>
        <button
          className="close"
          onClick={() => {
            dispatch({
              type: actions.REMOVE_APPLIANCE,
              payload: {
                name: appl.name,
              },
            });
          }}
        >
          X
        </button>
      </div>
      <div className="row">
        <button
          className={appl.active ? "butn notactive" : "butn active"}
          onClick={() => {
            toogleActivation(appl.name);
          }}
        >
          {appl.active ? "Stop" : "Activate"}
        </button>
        <div>
          <p className="info-label">up-time</p>
          {appl.active ? <TimePannel upDate={appl.start} /> : <p>0 sec</p>}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
        <h1>Appliance Monitor</h1>
        <div className="add-pannel">
          <input
            type="text"
            className="text-box"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <button
            className="add-button"
            onClick={() => {
              dispatch({
                type: actions.ADD_APPLIANCE,
                payload: {
                  name: name,
                },
              });
            }}
          >
            Add
          </button>
        </div>
      {pannels}
    </div>
  );
}
export default SmartHome;
