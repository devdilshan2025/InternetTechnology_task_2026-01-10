// function clickAction(){

// }

fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {

    let root = document.getElementById("root");

    data.products.forEach(element => {

      root.innerHTML += `
        <div class="card m-2" style="width: 18rem;">
          <img src="${element.images[0]}" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.category}</p>
            <a href="#" class="btn btn-primary">$${element.price}</a>
          </div>
        </div>
      `;
    });

  });