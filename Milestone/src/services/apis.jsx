
const BASE_URL = 'http://localhost:5000/api/v1';

export const endpoints = {
    LOGIN_API: BASE_URL + '/login',
    SIGNUP_API: BASE_URL + '/signup',
    LOGOUT_API: BASE_URL + '/logout',
    Dashboard: BASE_URL + '/dashboard',

    createEvent: BASE_URL + '/dashboard/manageEvents/create-event',
    getAllEvents: BASE_URL + '/dashboard/manageEvents/all-events',
    updateEvent: BASE_URL + '/dashboard/manageEvents/update-event',
    deleteEvent: BASE_URL + '/dashboard/manageEvents/delete-event',

    getAllUsers: BASE_URL + '/dashboard/manageUsers/getAllUsers',
    getParticipants: BASE_URL + '/dashboard/manageUsers/getParticipants',
    getCoordinators: BASE_URL + '/dashboard/manageUsers/getCoordinators'
}
