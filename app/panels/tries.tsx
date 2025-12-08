import React from "react";
import Try from "../svgs/try";

export default function TriesPanel() {
  return (
    <div className="contentPanel scorePanel">
      <h2>Tries</h2>
      <div className="description triesDescription">
        <Try />
        <p>
          Tries are worth <strong>FIVE</strong> points.
        </p>
        <p>
          Tries are scored by players touching the ball to the ground in the
          goal area of their opposition. The ball can also be grounded at the
          base of the goal posts.
        </p>
        <p>
          The grounding of the ball requires downward pressure into the pitch by
          the scoring team, not just dropping the ball to the ground.
        </p>
        <p>
          A penalty try is awarded where the referee believes that misconduct by
          defenders prevented a try being scored.
        </p>
      </div>
    </div>
  );
}
