import axios from 'axios-cache-adapter';

const cache = axios.setup({
    baseURL:'https://akabab.github.io/superhero-api/api',
    cache:{
        maxAge: 20 * 60 * 1000
    } 
})

export default cache;