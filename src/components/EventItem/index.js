import './index.css'

const EventItem = props => {
  console.log(props)
  const {eventDetails, isActive, setActiveEventId} = props
  console.log(eventDetails)
  const {imageUrl, name, location, id} = eventDetails

  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
