

const BASE_URL = 'http://localhost:9000/api/'



const enum API_ENDPOINTS {
    LOGIN_ENDPOINT = `users/login`,
    SIGNIN_ENDPOINT = `users/signin`,
    GET_PRODUCTS_ENDPOINT = `products/list_products`

}


const getEndPoint = (endpoint:API_ENDPOINTS) => {
    const base_url = import.meta.env.BASE_URL || BASE_URL;
    const normalized_url = BASE_URL.endsWith('/') ? BASE_URL : `${BASE_URL}/`;
    console.log(`${normalized_url}${endpoint}`);
    return `${normalized_url}${endpoint}`;
}


export{
    BASE_URL,
    getEndPoint,
    API_ENDPOINTS,
}