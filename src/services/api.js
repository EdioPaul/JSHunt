import axios from 'axios';

//URL base de onde vai partir todas as requisições
const api = axios.create({ 
    baseURL: 'https://rocketseat-node.herokuapp.com/api'
});

export default api;