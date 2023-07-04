const id = 2; // El valor del ID que deseas consultar

fetch(`https://apex.oracle.com/pls/apex/encuentro/rest/sell/${id}`)
  .then(response => response.json())
  .then(data => {
    // Aquí puedes manipular los datos de la respuesta
    console.log(data);
  })
  .catch(error => {
    // Manejo de errores
    console.error(error);
  });