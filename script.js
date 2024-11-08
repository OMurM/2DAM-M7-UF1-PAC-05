document.addEventListener("DOMContentLoaded", () => {
    fetch('https://raw.')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "application/xml");
        
        const menuContainer = document.getElementById("menu");
  
        xmlDoc.querySelectorAll("GRUP").forEach(grup => {
          const grupDiv = document.createElement("div");
          grupDiv.classList.add("GRUP");
  
          const grupName = document.createElement("h2");
          grupName.classList.add("NOM");
          grupName.textContent = grup.querySelector("NOM").textContent;
          grupDiv.appendChild(grupName);
  
          grup.querySelectorAll("PLAT").forEach(plat => {
            const platDiv = document.createElement("div");
            platDiv.classList.add("PLAT");
  
            const platName = document.createElement("p");
            platName.classList.add("NOM");
            platName.textContent = plat.querySelector("NOM").textContent;
            platDiv.appendChild(platName);
  
            const platDesc = document.createElement("p");
            platDesc.classList.add("DESCRIPCIO");
            platDesc.textContent = plat.querySelector("DESCRIPCIO").textContent;
            platDiv.appendChild(platDesc);
  
            const platPrice = document.createElement("p");
            platPrice.classList.add("PREU");
            platPrice.textContent = plat.querySelector("PREU").textContent + " €";
            platDiv.appendChild(platPrice);

            grupDiv.appendChild(platDiv);
          });
  
          menuContainer.appendChild(grupDiv);
        });
      })
      .catch(error => console.error("Error al cargar el XML:", error));
  });
  