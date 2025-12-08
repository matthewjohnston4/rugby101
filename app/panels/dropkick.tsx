import React from "react";
import KickForGoal from "../svgs/kickforgoal";

export default function DropKickPanel() {
  return (
    <div className="contentPanel scorePanel">
      <h2>Goal Kicks</h2>
      <div className="description goalKickDescription">
        <KickForGoal />
        <p>Goal kicks are worth THREE points.</p>
        <p>
          Goal kicks can be attempted in open play as a 'drop goal', or
          attempted from the awarding of a penalty against the opposition team.
        </p>
        <p>
          In both cases the ball must pass over the crossbar and between the
          upright posts.
        </p>
      </div>
    </div>
  );
}
