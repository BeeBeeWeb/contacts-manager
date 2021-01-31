import React from 'react';

export const ContactList = ({ contacts, onClick}) => {
    return (
        <ol>
            {contacts.map((contact) => {
                return (
                    <li
                        key={contact.id}
                        onClick={e => onClick(contact, e)}
                    >
                        {contact.name}
                    </li>
                )
            })}
        </ol>
    )
}