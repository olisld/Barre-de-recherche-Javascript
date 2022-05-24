// Rempli le tableau avec des données provenant d'une API

const addDataInTable = async () => {
    const data = await fetch("https://picsum.photos/v2/list?page=1&limit=40");
    const pictures = await data.json();
    const table = document.getElementById("table");
    pictures?.map((el) => {
      table.innerHTML += `
        <tr>
            <td class="js-author">${el.author}</td>
            <td>${el.id}</td>
            <td><img width="250px" height="170px" src="${el.download_url}" alt="" /></td>
        </tr>
      `;
    });
  };
  
  addDataInTable();
