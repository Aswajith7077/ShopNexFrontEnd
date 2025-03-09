

const BASE_URL = 'http://localhost:9000/api/'



const enum API_ENDPOINTS {
  LOGIN_ENDPOINT = `auth/login`,
  SIGNIN_ENDPOINT = `auth/add_user`,
  GET_PRODUCTS_ENDPOINT = `products/list_products`,
  SEARCH_PRODUCTS_ENDPOINT = `products/search`,
  GET_DETAILS_ENDPOINT = `products/get_details`
}


const getEndPoint = (endpoint:API_ENDPOINTS) => {
    const normalized_url = BASE_URL.endsWith('/') ? BASE_URL : `${BASE_URL}/`;
    return `${normalized_url}${endpoint}`;
}

const getEndModifiedGetPoint = (
  endpoint: API_ENDPOINTS,
  params?: Record<string, string | number>
): string => {
  if (!params) return endpoint; // If no params, return as is

  return Object.keys(params).reduce(
    (url, key) => url.replace(`{${key}}`, String(params[key])),
    endpoint
  );
};

export{
    BASE_URL,
    getEndPoint,
    getEndModifiedGetPoint,
    API_ENDPOINTS,
}