import React from 'react'

export const CalendarEvent = ({ event }) => {

    const { title, user } = event;

    return (
        <>
            <strong>{ title } </strong>
            <label> - { user.name }</label>
        </>
    )
}
