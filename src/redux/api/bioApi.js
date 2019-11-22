import axios from 'axios';

const url = 'http://localhost:8000/people/';
const url2 = 'http://localhost:8000/people/';
class BioApi {
    static async fetchBio() {
        return axios.get(url);
    }

    static async getOnePerson(id) {
        return axios.get(`${url}person/${id}`);
    }

    static async handleSubmit(data) {
        return axios.post('https://bio-back.herokuapp.com/people/people', data);
    }

    static async login(data) {
        return axios.post('https://bio-back.herokuapp.com/user/login', data);
    }

    //REGISTER
    static async register(data){
        return axios.post('http://localhost:8000/user/register', data);
    }
    //get auto data
    static async getAutoData() {
        return axios.get('http://localhost:8000/people/auto');
    }

    //Submit feeds
    static async submitFeed(data){
        return axios.post('https://bio-back.herokuapp.com/feed', data);
    }

    //Get feeds
    static async getFeed(){
        return axios.get('http://localhost:8000/feed');
    }

    //Approve
    static async approve(id){
        return axios.put(`http://localhost:8000/feed/${id}`);
    }
}

export default BioApi;