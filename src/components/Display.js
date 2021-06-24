import React, { useEffect, useState } from "react";
import data from "../data/data";
import Remain from "./Remain";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Display = () => {
  const location = useLocation();

  const [people, setPeople] = useState(data);
  const [all, setAll] = useState(false);
  const [button, setButton] = useState("all");

  useEffect(() => {
    if (location.state) {
      if (!location.state.detail) {
        return;
      } else {
        console.log(location.state.detail);
        const dataToSend = {
          id: people.length + 1,
          name: `${location.state.detail.firstName} ${location.state.detail.lastName}`,
          dob: `${location.state.detail.year}/${location.state.detail.month}/${location.state.detail.day}`,
          image: location.state.detail.image,
        };

        people.push(dataToSend);
        setPeople(people);
      }
    }
    return;
  }, [people, location.state]);

  const history = useHistory();
  const callMeMaybe = () => {
    history.push({
      pathname: "/addnew",
    });
  };

  const changedIam = () => {
    setAll(!all);
    if (all) {
      setButton("all");
    } else {
      setButton("upcoming");
    }
  };
  const buttonMe = () => {
    changedIam();
  };

  return (
    <main style={{ paddingTop: "25px" }}>
      <div className="ui raised padded text fluid container segment">
        <div className="ui grid content">
          <div className="ui two column row">
            <div className="column"></div>
            <div className="column">
              <button
                className="ui red right floated basic button"
                onClick={() => buttonMe()}
              >
                Show {button} Birthdays{" "}
              </button>
            </div>
          </div>

          <Remain people={people} all={all} />
          <button onClick={callMeMaybe} className="button">
            Add New
          </button>
        </div>
      </div>
    </main>
  );
};

export default Display;
