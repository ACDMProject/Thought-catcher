import React from "react";
import { Link } from "react-router-dom";

function LearnMore() {
  return (
    <div className="info-box shadow-sm d-flex align-items-end flex-column">
      <p className="mb-1">
        Each time you log a thought via the Mood Scriber, we store it in memory.
        Your dashboard will give you anoverview of your thought patterns, but
        for more detail, you can review each entry you make via the Diary.
      </p>
      <Link to="/diary">
        <button type="button" className="btn btn-outline-next btn-sm">
          To the diary!
        </button>
      </Link>
    </div>
  );
}
export default LearnMore;
