'use strict'; 



const products = [
    {title: "toothbrush",
     price: 400,
     desc: "this is a high class toothbrush. bla bla. ",
    categori: "bathroom",
    rating: {
        rate: 4.5,
        count: 3400
    }
    },
    {title: "soap",
     price: 30,
     desc: "this is a good class soap. It is used to get clean bla bla. ",
     categori: "bathroom",
      rating: {
        rate: 4.5,
        count: 3400
    }
    },
    {title: "water bottle",
     price: 200,
     desc: "A good wate rbottle for keeping you hidrated. bla bla. ",
     categori: "household",
      rating: {
        rate: 4.5,
        count: 4000
    }
    },
    {title: "Electric bass Fender Jazz",
     price: 1100,
     desc: "The original base that all music lovers would kill for. bla bla. ",
      rating: {
        rate: 3.5,
        count: 3400
    }
    },
    ];



/* for (let index =0; index < products.length; index++){
    console.log(products[index]); 
} */

/* 
for (const products of products){
    console.log(products); 
}  */

/* for (const product of products){
   /
    let productCard= `<article><h2>${product.title}</h2><p>${product.desc}</p></article>`
productContent += productCard; 
     
    console.log(products); 
}; 
document.querySelector("main").innerHTML += productCard;

 */


const productInfo = document.createElement("section");

for (const product of products){
const productArticle = document.createElement("article");
const productHeader = document.createElement("h2");
productHeader.innerHTML = product.title;
const productDescription = document.createElement("p");
productDescription.innerText = product.desc;

productArticle.appendChild(productHeader);
productArticle.appendChild(productDescription);
productInfo.appendChild(productArticle);
}

document.querySelector("main").appendChild(productInfo); 