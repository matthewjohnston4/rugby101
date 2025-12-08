"use client";

import { useState } from "react";
import Image from "next/image";
import ViewPanel, { ContentType } from "./views";
import DeskOfM from "./svgs/deskofm";

export default function Home() {
  const [activeContent, setActiveContent] = useState<ContentType>("pitch");

  return (
    <div className="main">
      <div className="titleIcon"><a href="https://deskofm.com" target="_blank" rel="noopener noreferrer"><DeskOfM /></a></div>
      <div className="title">
        <h1>
          <span className="titleSmallLine">Beginner's Guide to</span>
          <span className="titleBigLine">Rugby</span>
        </h1>
      </div>

      <div className="layout">
        <div className="intro">
          <p>
            Rugby is a game played on <a className="panelLink" onClick={() => setActiveContent("pitch")}>a pitch</a> between two{" "}
            <a className="panelLink" onClick={() => setActiveContent("teams")}>
              teams
            </a>{" "}
            of{" "}
            <a className="panelLink" onClick={() => setActiveContent("teams")}>
              15 players
            </a>
            .
          </p>
          <p>There are two periods of 40 minutes in each match, separated by a halftime break of 10 minutes.</p>
          <p>Points are scored through:</p>
          <ul>
            <li><a className="panelLink" onClick={() => setActiveContent("tries")}>Tries</a></li>
            <li><a className="panelLink" onClick={() => setActiveContent("conversion")}>Conversion</a></li>
            <li><a className="panelLink" onClick={() => setActiveContent("goalKicks")}>Goal kicks</a></li>
          </ul>
          <p>Players can run with the ball, pass it backwards, or kick it.</p>
          <p>
            Opposing players can tackle the ball carrier in an attempt to win
            the ball.
          </p>
          <p>
            Tackling attempts often result in a ruck - if the tackled player
            goes to ground - and a maul - if the player retains the ball and is
            off the ground.
          </p>
          <p>
            If the ball passes either touchline, it is in touch, and play is
            restarted with a lineout.
          </p>
          <p>
            If the ball passes the dead ball lines, play is restarted with a
            22-metre drop-out.
          </p>
          <p>A scrum is used to restart play after:</p>
          <ul>
            <li>The ball has been knocked on or passed forward.</li>
            <li>An accidental offside.</li>
            <li>The ball is stuck (called “going dead”) in a ruck or maul.</li>
          </ul>
        </div>
        <div className="viewer">
          <ViewPanel
            activeContent={activeContent}
            setActiveContent={setActiveContent}
          />
        </div>
      </div>
    </div>
  );
}
