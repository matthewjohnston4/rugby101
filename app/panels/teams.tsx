import React from 'react';
import HalfPitch from './half-pitch';

export default function TeamPanel() {
    const [selectedPlayer, setSelectedPlayer] = React.useState<number>(1);
    const playerInfo: Record<number, Record<string, string>> = {
        1: {name: 'Loosehead Prop', description: 'A prop\'s main role is to drive in the scrum, support jumping players in the lineout and provide impact in rucks and mauls. The loose-head is so named because their head binds in a scrum on the outside of the opposition prop\'s body. They\'re more involved with protecting the hooker in the scrum.'},
        2: {name: 'Hooker', description: 'The hooker is supported by the two props in a scrum and will attempt to use their feet to \'hook\' the ball to their teams side. They generally also provide the throw-in for a lineout.'},
        3: {name: 'Tighthead Prop', description: 'A prop\'s main role is to drive in the scrum, support jumping players in the lineout and provide impact in rucks and mauls. A tight-head is so named because they bind in between an opposition prop and hooker\'s bodies. They are considered the anchor of the scrum and dictate a lot of the movement in that set piece for their team.'},
        4: {name: 'Lock', description: 'The locks bind tightly in the second row of the scrum, and provide much of the pushing power during that set piece. They are usually the tallest players in the team and thus are targets for throws in lineouts.'},
        5: {name: 'Lock', description: 'The locks bind tightly in the second row of the scrum, and provide much of the pushing power during that set piece. They are usually the tallest players in the team and thus are targets for throws in lineouts.'},
        6: {name: 'Blindside Flanker', description: 'Flankers are part of the back row that is loosely bound to the scrum, and are primarily tasked with tackling and turning over the ball. They usually detach from the scrum as early as possible in order to cover opposing backs if the opposition wins the scrum. They are often first to any breakdown. One flanker operates on the blind-side of the scrum which is the side closest to a touchline, while the open-side operates on the side furthest from touch - as such they are not generally in a fixed location in the scrum.'},
        7: {name: 'Openside Flanker', description: 'Flankers are part of the back row that is loosely bound to the scrum, and are primarily tasked with tackling and turning over the ball. They usually detach from the scrum as early as possible in order to cover opposing backs if the opposition wins the scrum. They are often first to any breakdown. One flanker operates on the blind-side of the scrum which is the side closest to a touchline, while the open-side operates on the side furthest from touch - as such they are not generally in a fixed location in the scrum.'},
        8: {name: 'Number Eight', description: 'The 8 loosely binds in the back row of the scrum between the two locks. This player has the responsibility of securing possession of a ball won in a scrum, and either providing it cleanly to the scrum-half, or running it out of the scrum. They will also provide a lot of defensive work in general play, similar to the other loose forwards.'},
        9: {name: 'Scrum-Half', description: 'One of two "half-backs" - the players who link between the forwards in the scrum and the backs who are spread out acros the pitch. During a scrum, the scrumhalf rolls the ball in at the side between the two teams, and may be able to pick it up at the feet of the 8 if the ball was won. They also frequently receive the ball at a lineout. They\'ll also usually retrieve the ball from rucks and make quick tactical decisions about what to do with the ball initially.'},
        10: {name: 'Fly-Half', description: 'The other half-back, and generally considered to be the tactician of the team. The fly-half leads and orders the back line and thus most of a team\'s game plan. They\'re usually the best kicker on the team and responsible for kicking for territory, and goal kicking.'},
        11: {name: 'Left Wing', description: 'Wingers are usually the fastest runners in any team, both for attack and defense. In modern rugby they\'re also usually capable kickers, using a kick-and-chase in attack. They\'re responsible for defending their \'wing\' of the field, and usually use that side for attacking runs.'},
        12: {name: 'Inside Centre', description: 'There are two centres, one an inside who is positioned closer to the fly-half, and an outside who is closer to the wing. They both are vital in creating space for players outside them by running good lines, dodging tackles, and passing cleanly. They\'re usually the first players to make tackles when the opposing back line has the ball.'},
        13: {name: 'Outside Centre', description: 'There are two centres, one an inside who is positioned closer to the fly-half, and an outside who is closer to the wing. They both are vital in creating space for players outside them by running good lines, dodging tackles, and passing cleanly. They\'re usually the first players to make tackles when the opposing back line has the ball.'},
        14: {name: 'Right Wing', description: 'Wingers are usually the fastest runners in any team, both for attack and defense. In modern rugby they\'re also usually capable kickers, using a kick-and-chase in attack. They\'re responsible for defending their \'wing\' of the field, and usually use that side for attacking runs.'},
        15: {name: 'Fullback', description: 'The full back is usually positioned behind every other player of their team, in order to field long opposition kicks, and provide a last line of defence. Fullbacks will be superb catchers, and after catching will either run the ball or provide their own return kick.'},
    };
    return (
        <div className="contentPanel teamContent">
            <h2>The Team</h2>
            <div className='pitch'>
                <HalfPitch />
                <div onClick={() => setSelectedPlayer(1)} className='player playerForward player1'>1</div>
                <div onClick={() => setSelectedPlayer(2)} className='player playerForward player2'>2</div>
                <div onClick={() => setSelectedPlayer(3)} className='player playerForward player3'>3</div>
                <div onClick={() => setSelectedPlayer(4)} className='player playerForward player4'>4</div>
                <div onClick={() => setSelectedPlayer(5)} className='player playerForward player5'>5</div>
                <div onClick={() => setSelectedPlayer(6)} className='player playerForward player6'>6</div>
                <div onClick={() => setSelectedPlayer(7)} className='player playerForward player7'>7</div>
                <div onClick={() => setSelectedPlayer(8)} className='player playerForward player8'>8</div>
                <div onClick={() => setSelectedPlayer(9)} className='player playerBack player9'>9</div>
                <div onClick={() => setSelectedPlayer(10)} className='player playerBack player10'>10</div>
                <div onClick={() => setSelectedPlayer(11)} className='player playerBack player11'>11</div>
                <div onClick={() => setSelectedPlayer(12)} className='player playerBack player12'>12</div>
                <div onClick={() => setSelectedPlayer(13)} className='player playerBack player13'>13</div>
                <div onClick={() => setSelectedPlayer(14)} className='player playerBack player14'>14</div>
                <div onClick={() => setSelectedPlayer(15)} className='player playerBack player15'>15</div>
            </div>
            <div className='description teamDescription'>
                <p>The 15 players are composed of 8 <strong className='textForwards'>forwards</strong> - generally stronger and bulkier players who take part in scrums and do most of the tackling - and 7 <strong className='textBacks'>backs</strong> - faster players who do more of the ball running.</p>
            </div>
            <div className='description playerDescription'>
                <h3>{playerInfo[selectedPlayer].name}</h3>
                <p>{playerInfo[selectedPlayer].description}</p>
            </div>
        </div>
    );
}