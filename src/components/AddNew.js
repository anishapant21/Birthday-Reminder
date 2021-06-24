import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const AddNew = () => {
  const { register, handleSubmit } = useForm();

  const history = useHistory();
  const onSubmit = (d) => {
    history.push({
      pathname: "/",
      state: { detail: d },
    });
  };

  var renderElem = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="ui form">
        <div className="ui two column very relaxed stackable grid">
          <div className="column">
            <div className="field">
              <label>First Name</label>
              <input
                type="text"
                name="first-name"
                placeholder="First Name"
                {...register("firstName")}
              ></input>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label>Last Name</label>
              <input
                type="text"
                name="last-name"
                placeholder="Last Name"
                {...register("lastName")}
              ></input>
            </div>
          </div>
        </div>

        <br />

        <div className="ui three column grid">
          <div className="column">
            <div className="field">
              <label>Year</label>
              <input
                type="number"
                name="year"
                placeholder="year"
                {...register("year")}
              ></input>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label>Month</label>
              <select
                className="ui fluid search dropdown"
                name="card[expire-month]"
                {...register("month")}
              >
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label>Day</label>
              <input
                type="number"
                name="year"
                placeholder="day"
                {...register("day")}
              ></input>
            </div>
          </div>
        </div>

        <br />

        <div className="field">
          <label>Image</label>
          <input
            type="text"
            name="image"
            placeholder="image link"
            {...register("image")}
          ></input>
        </div>
      </div>
      <button type="submit" value="submit" className="button">
        Submit
      </button>
    </form>
  );

  return (
    <main style={{ paddingTop: "25px" }}>
      <div className="ui raised padded text fluid container segment">
        <div className="ui grid content">{renderElem}</div>
      </div>
    </main>
  );
};

export default AddNew;
