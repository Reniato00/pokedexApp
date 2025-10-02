import axios from "axios";

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    timeout: 5000,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error(`Error ${error.response.status}:`, error.response.data);
    } else if (error.request) {
      console.error("No hubo respuesta del servidor:", error.request);
    } else {
      console.error("Error en la configuración:", error.message);
    }
    return Promise.reject(error); // lo mandas al catch del componente
  }
);

export default api;