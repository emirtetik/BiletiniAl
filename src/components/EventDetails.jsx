import React from 'react'
import EventList from './EventList'

const EventDetails = () => {
    const event = {}

    
    return (
        <div className='event_card' >
        <EventList />
          <Image src={event.image} width={400} height={400} alt={event.title} />
          <h1>{event.city}</h1>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </div>
      )
}

export default EventDetails