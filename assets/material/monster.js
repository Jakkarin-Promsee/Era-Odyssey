// Fetch the JSON file
fetch("/assets/material/monster.json")
  .then((response) => response.json())
  .then((monsters) => {
    const monstersContainer = document.getElementById("monsters-container");

    monsters.forEach((monster) => {
      const monsterDiv = document.createElement("div");
      monsterDiv.className = "monster";

      const blogDiv = document.createElement("div");
      blogDiv.className = "blog";

      const nameP = document.createElement("p");
      nameP.className = "name";
      nameP.textContent = monster.name;

      const detailP = document.createElement("p");
      detailP.className = "detail";
      detailP.textContent = `[ ${monster.size} ]`;

      const ageP = document.createElement("p");
      ageP.className = "age";
      ageP.textContent = `[ ${monster.age} ]`;

      const img = document.createElement("img");
      img.src = monster.imgSrc;
      img.alt = "";

      blogDiv.appendChild(nameP);
      blogDiv.appendChild(detailP);
      blogDiv.appendChild(ageP);
      blogDiv.appendChild(img);

      monsterDiv.appendChild(blogDiv);

      monstersContainer.appendChild(monsterDiv);
    });
  })
  .catch((error) => console.error("Error fetching monsters data:", error));
