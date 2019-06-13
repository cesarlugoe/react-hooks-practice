import  { useState, useEffect } from 'react';
import axios from 'axios';

// Aqui extrajimos la logica de hooks fuera de la funcion del componente para poder ser reutilizada
// en el caso de que otro componente quiera buscar recursos desde 'jsonplaceholder.com'
const useResources = resource => {
   const [resources, setResources] = useState([]);

   const fetchResource = async (resource) => {
       const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
       setResources(response.data);
    }
 
    // useEffect verificara que en el segundo argumento '[resource]' si ese valor es distinto a la primera
    // vez que el componente se renderizo, si es distinto, volverá a ejecutar la funcion.
 
    // Si pasamos como segundo argumento un empty array es equivalente a componentDidMount
    useEffect(() => {
       fetchResource(resource);
    }, [resource]);

    return resources;
};

export default useResources;