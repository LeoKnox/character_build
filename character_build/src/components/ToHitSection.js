import React from 'react';

const ToHitSection = ({characterName, hits, setCharacterInfo}) => {
    const attack = async () => {
        const result = await fetch(`/api/characters/${characterName}/hits`, {
            method: 'post',
        });
        const body = await result.json();
        setCharacterInfo(body);
    }
    return (
        <div>
            <button onClick={() => attack()} className="hitButton">Hit</button>
            <p>{characterName} has been hit {hits} times.</p>
        </div>
    );
}

export default ToHitSection;