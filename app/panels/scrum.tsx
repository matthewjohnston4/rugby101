import Scrum from "../svgs/scrum";

export default function ScrumPanel() {
  return (
    <div className="contentPanel scrumContent">
      <h2>The Scrum</h2>
      <div className="scrum">
        <Scrum />
        <p>
          This set piece involves the two sets of forwards binding in their
          scrum formations, and then to each other, with the front rows binding
          in the gaps to the left (from their perspective) of their opponent.
        </p>

        <p>
          Once binding is set, the scrumhalf must feed the ball straight down
          the <strong>'tunnel'</strong> formed by the two front rows. The hookers from each team
          then attempt to win the ball using their feet, in combination with a
          drive from the rest of the pack.
        </p>

        <p>
          The ball is then fed backwards to the feet of the hindmost player in
          the scrum - usually the Number 8 - who can pick it up, or give it to
          the scrumhalf, who can then pass to the backs. Players cannot leave
          the scrum until the ball has exited in this manner.
        </p>

        <p>
          Defending teams can also win a scrum by forcing the opposition pack to
          rotate, or <strong>wheel</strong>, by more than 90 degrees - this should result in them
          being awarded the put-in to a second scrum.
        </p>

        <p>
          Because the scrum is a potentially dangerous set piece, there are many
          strict rules about binding, driving, and movement.
        </p>
      </div>
    </div>
  );
}
