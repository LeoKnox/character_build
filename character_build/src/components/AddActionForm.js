import React, { useState } from 'react';

const AddActionForm = ({ characterName, setCharacterInfo }) => {
    const [username, setCharacterName] = useState('');
    const [actionText, setActionText] = useState('');

    const addAction = async () => {
        const result = await fetch(`/api/characters/${characterName}/charAction`,
            {
                method: 'post',
                body: JSON.stringify({ username, text: actionText }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const body = await result.json();
            console.log("!!" + actionText);
            setCharacterInfo(body);
            setCharacterName('');
            setActionText('');
    }

    return (
    <div className="actionTime">
        <h3>Action Time It!</h3>
        <label>
            Name:
            <input 
                type="text" value={username} 
                onChange={(event) => setCharacterName(event.target.value)}
            />
        </label>
        <label>
            Action:
            <textarea rows="4" cols="50"
                value={actionText}
                onChange={(event) => setActionText(event.target.value)}
            />
        </label>
            <button onClick={() => addAction()}>Add Action</button>
    </div>
);
}

export default AddActionForm;