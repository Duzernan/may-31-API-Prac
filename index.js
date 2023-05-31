

async function fetchDummyInfo() {
    try {

        let response = await fetch("https://dummyjson.com/products")

        let translatedData = await response.json()

        let completeData = translatedData.products

        return completeData

    } catch(error) {
        console.log(error)
    }

}

async function renderData() {

    let productContainer = document.getElementById("products-container")

    let productsData = await fetchDummyInfo();

    for(let i = 0; i < productsData.length; i++) {

        let currentProductSingle = productsData[i]

        let newProductSingle = document.createElement("p")

        newProductSingle.innerText = `Product: ${productsData[i].title} Description: ${productsData[i].description}`
        newProductSingle.style.border = "2px solid blue";

        productContainer.appendChild(newProductSingle)

    }

}

renderData();


async function fetchDummyInfoPost() {
    try {

        let response = await fetch("https://dummyjson.com/posts")

        let translatedData = await response.json()

        let allPostData = translatedData.posts

        return allPostData

    } catch(error) {
        console.log(error)
    }

}

async function renderPost() {

    let postContainer = document.getElementById("posts-container")

    let postData = await fetchDummyInfo();

    for(let i = 0; i < postData.length; i++) {

        let currentPostSingle = postData[i]

        let newPostSingle = document.createElement("p")

        newPostSingle.innerText = `Product: ${postData[i].title} Description: ${postData[i].description}`
        newPostSingle.style.border = "2px solid red";

        postContainer.appendChild(newPostSingle)

    }

}

renderPost();