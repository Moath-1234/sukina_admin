import moment from 'moment';

// Core Service
// Service to handle any date process
class DateService {
    isSame(compare, compareWith, compareBy = 'day') {
        return moment(compare).isSame(moment(compareWith), compareBy);
    }

    diffFromNow(timestamp) {
        return moment(timestamp).fromNow();
    }

    format(date, format = 'MMMM Do YYYY, h:mm:ss a') {
        return moment(date).format(format);
    }

    getDate(date = this.currentDate, format = 'YYYY-MM-DD, HH:mm:ss') {
        return moment(date, format);
    }

    get currentDate() {
        return moment();
    }
}

export const dateService = new DateService();
