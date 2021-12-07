const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    dateTime: {
        type: String,
        required: true
    },
    linkToOriginalPost: {
        type: String,
        required: true
    },
    detailDateTime: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    organizationInfo: [
        {
            name: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            }
        }
    ],
    splitTime: {
        dayOfTheWeek: {
            type: String,
            required: true
        },
        month: {
            type: String,
            required: true
        },
        dayOfTheMonth: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        },
        startTime: {
            type: String,
            required: true
        },
        endTime: {
            type: String,
        },
        am_pm: {
            type: String,
            required: true
        },
        isUTC: {
            type: Boolean,
            required: true
        },
    },
    endTime: {
        type: String,
    },
    ticket: {
        type: Boolean,
        required: true
    },
    ticketLink: {
        type: String
    },
    eventBy: {
        type: String,
    },
    location: {
        type: String,
    },
    category: [
        {
            type: String,
        }
    ],
    dateObject: {
        type: String,
        required: true
    },
});

const Event = mongoose.model("event", eventSchema);

module.exports = Event;