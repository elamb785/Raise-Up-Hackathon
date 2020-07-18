import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Event from '../components/Event/Event';

export default function Home() {
  const [events, setEvents] = useState([])
 
  useEffect(() => {
    const getEvents = async () => {
     const res = await axios.get('/events')
     setEvents(res.data)
    }
    getEvents()
  }, [])

  return(
    <>
    <h1>Home</h1>
    {
      events && <>
      {events.map(event => {
        return <Event key={event.id} event={event}/>
      })}
      </>
    }
    </>
  )
}
