import React from 'react';
import { Link } from 'react-router-dom';

const CharacterList = ({characters}) => (
    <>
        {characters.map((char, key) => (
            <p key={key}>
            <Link to={`/character/${char.name}`} key={key} className="characterList">
                {char.name} : {char.class}
            </Link>
            </p>
        ))}
    </>
);

export default CharacterList;