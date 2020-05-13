import axios from 'axios';

const url = 'https://randomuser.me/api/?results=10'

function getUsers() {
    return axios.get(url);
}

export default getUsers;