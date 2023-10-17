import React from 'react'
import EventRow from './EventRow'
import SearchBar from './SearchBar'

const EventList = () => {
    const events = [{
        name: "Event 1",
        date: "2020-01-01",
        location: "Location 1"
    },{
        name: "Event 2",
        date: "2020-01-02",
        location: "Location 2"
    }

]
  return (
    
<div className="event-list-main">
			<div className="event-list-outer">
            <SearchBar/>
				<div className="event-list-inner">
					<table className="event-table min-w-full leading-normal">
						<thead>
							<tr>
								<th
									className="table-headers">
									
                                    Data
								</th>
								<th
									className="table-headers">
									Event
								</th>
								<th
									className="table-headers">
									Location
								</th>
							</tr>
						</thead>
						<tbody>
                                {events.map((event) => <EventRow event={event}/>)}
						</tbody>
					</table>

				</div>
			</div>
		
	</div>
  )
}

export default EventList