import React from 'react';

export const ContactInfo = ({contact}) => {
    return (
        <div>
            <h3>{contact?.name}</h3>
        </div>
    )
}