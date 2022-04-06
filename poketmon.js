for (i = 0; i <= 151; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => response.json())
    .then((data) => {
      const container = document.querySelector(".container");
      const article = document.createElement("article");
      const text = document.createElement("div");
      const img = document.createElement("img");
      const id = document.createElement("span");
      const name = document.createElement("span");
      const pokettypes = document.createElement("span");
      const weight = document.createElement("span");
      name.innerText = `Name : ${data.name}`;
      id.innerText = `NO.${data.id}`;
      pokettypes.innerText = `Types : ${data.types[0].type.name}`;
      weight.innerText = `Weight : ${data.weight}`;
      id.setAttribute("class", "id");
      name.setAttribute("class", "name");
      text.setAttribute("class", "text");
      img.setAttribute("src", data.sprites.front_default);
      img.setAttribute("class", "img");
      text.appendChild(id);
      text.appendChild(name);
      text.appendChild(pokettypes);
      text.appendChild(weight);
      article.appendChild(img);
      article.appendChild(text);
      container.appendChild(article);
      console.log(data);
    });
}
