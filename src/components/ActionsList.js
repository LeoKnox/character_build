import React from 'react';

const ActionsList = ({ charAction }) => (
    <>
    <h3>Actions:</h3>
    {charAction.map((action, key) => (
        <div key={key}>
            <h4>{action.username}</h4>
            <p>{action.text}</p>
        </div>
    ))}
    </>
);

export default ActionsList