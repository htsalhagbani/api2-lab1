let url = "https://fakestoreapi.com/products";
let itemBox = document.getElementById('ItemBox');

fetch(url)
    .then(response => response.json())
    .then(data => {        
        data.forEach(item => {
            let col = document.createElement('div');
            col.className = 'col-md-4 col-sm-6 mb-3';

            let Box = document.createElement('div');
            Box.className = 'Box';

            let name = document.createElement('h6');
            name.className = 'title';
            name.textContent = item.title;

            let img = document.createElement('img');
            img.src = item.image;
            img.className = 'image';

            let price = document.createElement('p');
            price.className = 'price';
            price.textContent = item.price;

            Box.appendChild(img);
            Box.appendChild(name);
            Box.appendChild(price);
            col.appendChild(Box);

            itemBox.appendChild(col);
        });
    })
    

