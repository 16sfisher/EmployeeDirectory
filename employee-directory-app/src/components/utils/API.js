import axios from 'axios';

const url = 'https://randomuser.me/api/?results=50'

function getUsers() {
    return axios.get(url);
}

export default getUsers;