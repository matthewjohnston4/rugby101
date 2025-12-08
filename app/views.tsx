import React from 'react';
import TeamPanel from './panels/teams';
import TriesPanel from './panels/tries';
import ConversionsPanel from './panels/conversions';
import DropKickPanel from './panels/dropkick';

export type ContentType = 'teams' | 'tries' | 'conversion' | 'goalKicks';

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
    };

    return (
        <div className="activeContent">
            {contentMap[activeContent]}
        </div>
    );
}