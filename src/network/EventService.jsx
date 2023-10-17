import BaseService from "./BaseService";


class EventService extends BaseService {
    getEvents = () => {
        return this.get("events");
    }

    getEvent = (id) => {
        return this.get("events/" + id);
    }
}

