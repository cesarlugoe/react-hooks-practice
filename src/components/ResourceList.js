import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
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

   return (
      <div>
         {resources.map((resource, index) => {
            return <div key={index}>{resource.title}</div>
         })}
      </div>
   )
   
}

export default ResourceList;
