import React, { useState, useEffect } from 'react';
import characterContent from './character-content';
import CharacterList from '../components/CharacterList';
import ActionsList from '../components/ActionsList';
import ToHitSection from '../components/ToHitSection';
import NotFoundPage from './NotFoundPage';

const CharacterPage = ( {match} ) => {
    const name = match.params.name;
    const character = characterContent.find(character => character.name === name);
    const otherCharacters = characterContent.filter(character => character.name !== name);

    const [characterInfo, setCharacterInfo] = useState({ hits: 0, charAction: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/characters/${name}`);
            const body = await result.json();
            setCharacterInfo(body);
        }
        fetchData();
        }, [name]);

    if (!character) return <NotFoundPage />

    return (
        <>
            <h1>{character.name} </h1>
            <ToHitSection characterName={name} hits={characterInfo.hits} setCharacterInfo={setCharacterInfo} />
            <h3>Class: {character.class}</h3>
            {character.content.map((stat, key) => (
                <p key={key}>{stat}</p>
            ))}
            <ActionsList charAction={characterInfo.charAction} />
            <CharacterList characters={otherCharacters} />
        </>
    );
}

export default CharacterPage;