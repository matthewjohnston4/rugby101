import React from 'react';
import TeamPanel from './panels/teams';

export type ContentType = 'home' | 'teams' | 'settings' | 'profile';

interface ViewPanelProps {
    activeContent: ContentType;
    setActiveContent: (content: ContentType) => void;
}

export default function ViewPanel({ activeContent, setActiveContent }: ViewPanelProps) {
    const contentMap: Record<ContentType, React.ReactNode> = {
        home: <div className="p-4"><h2>Home</h2><p>Welcome to the home view.</p></div>,
        teams: <TeamPanel />,
        settings: <div className="p-4"><h2>Settings</h2><p>Manage your preferences.</p></div>,
        profile: <div className="p-4"><h2>Profile</h2><p>View your profile information.</p></div>,
    };

    return (
        <div className="activeContent">
            {contentMap[activeContent]}
        </div>
    );
}