import React from "react";
import { Link } from "react-router-dom";

function LetsGo() {
  return (
    <div className="info-box shadow-sm d-flex align-items-end flex-column">
      <p>
        If you're new to CBT, or simply need a reminder of each cognitive
        distortion, head over to the defintions page where you can find out a
        bit more about each one.
      </p>
      <p className="mb-0">
        They'll always be there for you to refer back to any time you need.
      </p>
      <Link to="/definitions">
        <button type="button" className="btn btn-sm btn-outline-next">
          Take a look!
        </button>
      </Link>
    </div>
  );
}
export default LetsGo;

// <p>
//         Thought Catcher is designed to help you identify your negative thinking
//         habits and replace them with positive ones!
//       </p>
//       <p>
//         It also gives you the tools to track your thoughts and moods, helping
//         you keep on top of your mental health.
//       </p>
