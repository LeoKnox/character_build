import React, { useState, useEffect } from 'react';
import characterContent from './character-content';
import CharacterList from '../components/CharacterList';
import NotFoundPage from './NotFoundPage';

const CharacterPage = ( {match} ) => {
    const name = match.params.name;
    const character = characterContent.find(character => character.name === name);
    const otherCharacters = characterContent.filter(character => character.name !== name);

    const [characterInfo, setCharacterInfo] = useState({ hits: 0, comments: [] });

    useEffect(() => {
        setCharacterInfo ({ 
            hits: Math.ceil(Math.random()*10)
        }, [name]);
    })

    if (!character) return <NotFoundPage />

    return (
        <>
            <h1>{character.name} </h1>
            <p>{character.name} has been hit {characterInfo.hits} times.</p>
            <h3>Class: {character.class}</h3>
            {character.content.map((stat, key) => (
                <p key={key}>{stat}</p>
            ))}
            <CharacterList characters={otherCharacters} />
        </>
    );
}

export default CharacterPage;