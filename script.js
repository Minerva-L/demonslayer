// Obtener una referencia a la tabla
var table = document.getElementById('miTabla');

// Realizar la llamada al endpoint
fetch('https://api.jikan.moe/v4/anime/38000/news')
  .then(response => response.json())
  .then(data => {
    // Recorrer los datos obtenidos
    data.data.forEach(item => {
      // Crear una nueva fila(row)
      var row = document.createElement('tr');

      // Crear las celdas y asignar los valores
      var titleCell = document.createElement('td');
      titleCell.textContent = item.title;
      row.appendChild(titleCell);

      var dateCell = document.createElement('td');
      dateCell.textContent = item.date;
      row.appendChild(dateCell);

      var authorCell = document.createElement('td');
      authorCell.textContent = item.author_username;
      row.appendChild(authorCell);

      var urlCell = document.createElement('td');
      var urlLink = document.createElement('a');
      urlLink.href = item.url;
      urlLink.textContent = item.url;
      urlCell.appendChild(urlLink);
      row.appendChild(urlCell);

      var imageCell = document.createElement('td');
      var image = document.createElement('img');
      image.src = item.images.jpg.image_url;
      image.alt = item.tittle;
      image.style.width = '100px'; // Establecer el ancho de la imagen
      imageCell.appendChild(image);
      row.appendChild(imageCell);

      // Agregar la fila a la tabla
      table.appendChild(row);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });
