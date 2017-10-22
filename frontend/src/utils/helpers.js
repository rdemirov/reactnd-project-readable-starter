import moment from 'moment';

const formatDate = (date) => (moment(new Date(date)).format('YYYY-MM-DD'));

export default {
    formatDate
}