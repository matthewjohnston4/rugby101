"use client";

import { useState } from "react";
import Image from "next/image";
import ViewPanel, { ContentType } from "./views";
import DeskOfM from "./svgs/deskofm";

export default function Home() {
  const [activeContent, setActiveContent] = useState<ContentType>("pitch");

  return (
    <div className="main">
      <div className="titleIcon">
        <a href="https://deskofm.com" target="_blank" rel="noopener noreferrer">
          <DeskOfM />
        </a>
      </div>
      <div className="title">
        <h1>
          <span className="titleSmallLine">Beginner's Guide to</span>
          <span className="titleBigLine">Rugby</span>
        </h1>
      </div>

      <div className="layout">
        <div className="intro">
          <p>
            Rugby is a game played on{" "}
            <a className="panelLink" onClick={() => setActiveContent("pitch")}>
              a pitch
            </a>{" "}
            between two{" "}
            <a className="panelLink" onClick={() => setActiveContent("teams")}>
              teams
            </a>{" "}
            of{" "}
            <a className="panelLink" onClick={() => setActiveContent("teams")}>
              15 players
            </a>
            .
          </p>
          <p>
            There are two periods of 40 minutes in each match, separated by a
            halftime break of 10 minutes.
          </p>
          <p>Points are scored through:</p>
          <ul>
            <li>
              <a
                className="panelLink"
                onClick={() => setActiveContent("tries")}
              >
                Tries
              </a>
            </li>
            <li>
              <a
                className="panelLink"
                onClick={() => setActiveContent("conversion")}
              >
                Conversion
              </a>
            </li>
            <li>
              <a
                className="panelLink"
                onClick={() => setActiveContent("goalKicks")}
              >
                Goal kicks
              </a>
            </li>
          </ul>
          <p>
            Players can hold and run with the ball, use their hands to pass it
            backwards, or kick it in any direction.
          </p>
          <p>
            Opposing players can tackle the ball carrier below the line of the
            shoulders in an attempt to win the ball.
          </p>
          <p>
            Tackling attempts often result in a{" "}
            <a className="panelLink" onClick={() => setActiveContent("ruck")}>
              ruck
            </a>{" "}
            - where the tackled player goes to ground - and a{" "}
            <a className="panelLink" onClick={() => setActiveContent("maul")}>
              maul
            </a>{" "}
            - where the player retains the ball and is held up off the ground.
          </p>
          <p>
            If the ball goes outside{" "}
            <a className="panelLink" onClick={() => setActiveContent("pitch")}>
              the sides of the pitch
            </a>
            , it is in touch, and play is restarted with a{" "}
            <a
              className="panelLink"
              onClick={() => setActiveContent("lineout")}
            >
              lineout
            </a>
            .
          </p>
          <p>
            If an attacking team takes the ball past the{" "}
            <a className="panelLink" onClick={() => setActiveContent("pitch")}>
              dead ball line
            </a>
            , play is restarted with a{" "}
            <a
              className="panelLink"
              onClick={() => setActiveContent("dropout")}
            >
              22-metre drop-out for the defending team
            </a>
            .
          </p>
          <p>
            If a defending team takes the ball past their own{" "}
            <a className="panelLink" onClick={() => setActiveContent("pitch")}>
              dead ball line
            </a>
            , play is restarted with a{" "}
            <a
              className="panelLink"
              onClick={() => setActiveContent("scrum")}
            >
              5 metre scrum for the attacking team
            </a>
            .
          </p>
          <p>
            A{" "}
            <a className="panelLink" onClick={() => setActiveContent("scrum")}>
              scrum
            </a>{" "}
            is used to restart play after:
          </p>
          <ul>
            <li>
              The ball has been{" "}
              <a
                className="panelLink"
                onClick={() => setActiveContent("knockon")}
              >
                knocked on or passed forward
              </a>
              .
            </li>
            <li>
              An{" "}
              <a
                className="panelLink"
                onClick={() => setActiveContent("offside")}
              >
                offside infringement
              </a>
              .
            </li>
            <li>
              The ball is unable to be retrieved from a{" "}
              <a className="panelLink" onClick={() => setActiveContent("ruck")}>
                ruck
              </a>{" "}
              or{" "}
              <a className="panelLink" onClick={() => setActiveContent("maul")}>
                maul
              </a>
              .
            </li>
          </ul>
          <p>
            There are many offences during play that can result in{" "}
            <a
              className="panelLink"
              onClick={() => setActiveContent("penalty")}
            >
              penalties and other punishments
            </a>{" "}
            by the referee.
          </p>
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
