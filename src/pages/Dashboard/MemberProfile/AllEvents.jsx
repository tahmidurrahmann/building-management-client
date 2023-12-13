import { Helmet } from "react-helmet-async";
import useEvents from "../../../hooks/useEvents";
import Loading from "../../../Loading/Loading";
import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import ErrorBoundary from "./ErrorBoundary";

const AllEvents = () => {

    const [allEvents, isEvents] = useEvents();

    const [events, setEvents] = useState({});

    const localizer = momentLocalizer(moment)

    useEffect(() => {
        if (allEvents?.length) {
            allEvents?.map(event => setEvents(event))
        }
    }, [allEvents])

    const event = [{
        title: events?.title,
        start: events?.startDate,
        end: events?.endDate
    }];

    if (isEvents) {
        return <Loading></Loading>
    }

    return (
        <div className="max-w-screen-xl mx-auto">
            <Helmet>
                <title>All Events | THE GLASS HOUSE</title>
            </Helmet>
            <h1 className="text-xl md:text-3xl font-bold py-6">All Events</h1>
            <ErrorBoundary>
                <Calendar
                    localizer={localizer}
                    events={event}
                    className="p-4"
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                />
            </ErrorBoundary>
        </div>
    );
};

export default AllEvents;