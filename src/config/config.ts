import { ConfigType } from "@/config/config.type";



const CONFIG:ConfigType = {
    SECRET_KEY: import.meta.env.VITE_BASE_CRYPTO_KEY,
    IV:import.meta.env.VITE_BASE_CRYPTO_IV
};


export{
    CONFIG
}