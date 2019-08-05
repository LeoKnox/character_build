import React from 'react';
import CharacterList from '../components/CharacterList';
import characterContent from './character-content';

const CharactersListPage = () => {
    return (
        <>
            <h1>Characters</h1>
            <CharacterList characters={characterContent} /> 
        </>
    );
};

export default CharactersListPage;