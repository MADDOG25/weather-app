import axios from 'axios';
//Herramienta asincrona para peticiones
export const ajax = async options => await axios.request(options).then(response => response.data);