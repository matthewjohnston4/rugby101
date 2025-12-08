import React from "react";
import Try from "../svgs/try";

export default function TriesPanel() {
  return (
    <div className="contentPanel scorePanel">
      <h2>Tries</h2>
      <div className="description triesDescription">
        <Try />
        <p>Tries are worth FIVE points.</p>
        <p>
          Tries are scored by players touching the ball to the ground in the
          goal area of their opposition. The ball can also be grounded at the
          base of the goal posts.
        </p>
        <p>
          A penalty try is awarded where the referee believes that misconduct by
          defenders prevented a try being scored.
        </p>
      </div>
    </div>
  );
}
