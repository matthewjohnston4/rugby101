import React from 'react';
import TeamPanel from './panels/teams';
import TriesPanel from './panels/tries';
import ConversionsPanel from './panels/conversions';
import DropKickPanel from './panels/dropkick';
import PitchPanel from './panels/pitch';

export type ContentType = 'pitch' | 'teams' | 'tries' | 'conversion' | 'goalKicks';

interface ViewPanelProps {
    activeContent: ContentType;
    setActiveContent: (content: ContentType) => void;
}

export default function ViewPanel({ activeContent, setActiveContent }: ViewPanelProps) {
    const contentMap: Record<ContentType, React.ReactNode> = {
        teams: <TeamPanel />,
        tries: <TriesPanel />,
        conversion: <ConversionsPanel />,
        goalKicks: <DropKickPanel />,
        pitch: <PitchPanel />,
    };

    return (
        <div className="activeContent">
            {contentMap[activeContent]}
        </div>
    );
}