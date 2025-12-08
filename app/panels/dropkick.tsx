import React from "react";
import KickForGoal from "../svgs/kickforgoal";

export default function DropKickPanel() {
  return (
    <div className="contentPanel scorePanel">
      <h2>Goal Kicks</h2>
      <div className="description goalKickDescription">
        <KickForGoal />
        <p>Goal kicks are worth <strong>THREE</strong> points.</p>
        <p>
          Goal kicks can be attempted in open play as a <strong>'drop goal'</strong>. This option
          is high risk as opposition players can charge down a kicker from close
          range.
        </p>
        <p>
          Goal kicks are also an option after the awarding of a <strong>penalty</strong> against
          a team. In this case the opposition team must retreat from the kicker
          and not move while the kick is taken.
        </p>
        <p>
          In both cases the ball must pass over the crossbar and between the
          upright posts.
        </p>
      </div>
    </div>
  );
}
