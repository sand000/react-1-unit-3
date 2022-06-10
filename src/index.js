
import navbar from "../components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

import "../styles/style.css";

import axios from 'axios';

async function fetchData(){
    let res =  await axios.get('https://fakestoreapi.com/products/category/electronics');
    console.log(res.data);

    append(res.data);
}
fetchData();


let append = (data) =>{

    let container = document.getElementById("container");
        data.forEach((el) =>{
            let div = document.createElement("div");

            let p = document.createElement("p");
            p.innerText = el.title; 

            let img = document.createElement("img");
            img.src = el.image;
            img.setAttribute("id","img")

            div.append(img, p);
            container.append(div);
        });  
}