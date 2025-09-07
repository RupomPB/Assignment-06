
const loadCategories = ()=>{
    const url = "https://openapi.programming-hero.com/api/categories";

    fetch(url)
    .then(res => res.json())
    .then((json) => displayCategories(json.categories))
}

const displayCategories =(plants)=>{
    console.log(plants);

    const categoriesContainer = document.getElementById("categories-container");
    // categoriesContainer.innerHTML = "";

    for(let plant of plants){
        console.log(plant)

        const btnPlant = document.createElement("div");
        btnPlant.innerHTML = `
        
            <button class="btn btn-outline btn-success w-full text-lg">${plant.category_name}</button>

        `

        categoriesContainer.appendChild(btnPlant);
    }

}

loadCategories()