import React from "react";
import KickForGoal from "../svgs/kickforgoal";

export default function ConversionsPanel() {
  return (
    <div className="contentPanel scorePanel">
      <h2>Conversions</h2>
      <div className="description conversionsDescription">
        <KickForGoal />
        <p>Conversions are worth <strong>TWO</strong> points.</p>
        <p>
          When a try is scored, a conversion attempt is allowed - a kick at
          goal. The kick is taken from any place in a line through the point
          where the try was grounded.
        </p>
        <p>
          The kicked ball must pass over the crossbar and between the two
          upright posts.
        </p>
        <p>
          Opposition players must retreat behind their own try line, and can
          charge down the ball once the kicker has started their run up to kick.
        </p>
      </div>
    </div>
  );
}
