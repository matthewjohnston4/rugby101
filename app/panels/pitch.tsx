import FullPitch from '../svgs/fullPitch';

export default function PitchPanel() {
    return (
        <div className="contentPanel pitchContent">
            <h2>The Pitch</h2>
            <div className='fullPitch'>
                <FullPitch />
            </div>
        </div>
    );
}