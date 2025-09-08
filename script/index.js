



const removeActive =()=>{
    const plantButtons = document.querySelectorAll(".plant-btn");
    // console.log(plantButtons);
    plantButtons.forEach(button =>button.classList.remove("active"));
}

// modal details 
const loadPlantDetail= (id)=>{
    const url= `https://openapi.programming-hero.com/api/plant/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPlantDetails(data.plants));

}

displayPlantDetails =(details)=>{
    console.log(details);

    const detailsBox = document.getElementById("plant-details-container");
    detailsBox.innerHTML = `
    
    <div>
            <div
                            class="bg-white space-y-2  p-2 shadow-xl flex flex-col justify-between rounded-lg">

                            <h1 class="font-bold text-lg">${details.name}</h1>
                            <img class="object-cover w-[100%] h-[250px] rounded-lg" src="${details.image}" alt="">




                            <div class="">
                                <h1 class="text-lg "><span class="font-bold">Category</span>- ${details.category}</h1>
                                <p><span class="mt-3"><span class="font-bold">Price</span>- $ ${details.price}</span></p>
                            </div>
                            <div>
                                <p>${details.description}}</p>
                            </div>
            </div>

        </div>
    
    `
    document.getElementById("Details_Modal").showModal();

}


// each plant btn functions
loadPlantData = (id) => {
    // console.log(id);

    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {

        removeActive();
        const clickPlantBtn =document.getElementById(`plant-btn-${id}`);
        // console.log(clickPlantBtn)
        clickPlantBtn.classList.add("active");
        displayPlantData(data.plants);
    });
}




displayPlantData = (plants) => {
    // console.log(plants)

    const eachPlant = document.getElementById("all-plants-container");
    eachPlant.innerHTML = "";


    plants.forEach(plant => {
        // console.log(plant)

        const btnEachPlant = document.createElement("div");
        btnEachPlant.innerHTML =`
        
         <div class="bg-white space-y-2 w-[340px] h-[480px] p-2 shadow-xl flex flex-col justify-between rounded-lg">

                <img class="object-cover w-[100%] h-[180px] rounded-lg" src="${plant.image}" alt="">
                    <h1 id="loadPlantDetail(${plant.id})" class="font-bold text-lg">${plant.name}</h1>

                        <p>${plant.description}</p>
                                

                    <div class="flex justify-between items-center">
                                <h1 class="bg-green-200 py-2 px-4 rounded-2xl">${plant.category}</h1>
                                <p><span class="font-bold">$${plant.price}</span></p>
                            </div>
                            <button class="btn bg-green-700 w-full px-8 py-2 text-white rounded-3xl">Add to Cart
                            </button>
                    </div>

        
        `
        eachPlant.appendChild(btnEachPlant);


    });
}

// all categories show functions 
const loadCategories = () => {
    const url = "https://openapi.programming-hero.com/api/categories";

    fetch(url)
        .then(res => res.json())
        .then((json) => displayCategories(json.categories));
}

const displayCategories = (elements) => {
    // console.log(plants);
    
    const categoriesContainer = document.getElementById("categories-container");
    // categoriesContainer.innerHTML = "";

    for (let element of elements) {
        console.log(element);

        const btnPlant = document.createElement("div");
        btnPlant.innerHTML = `
        
            <button id="plant-btn-${element.id}" onclick ="loadPlantData(${element.id})" class="hover:bg-[#00d390] h-12   w-full text-lg  text-black plant-btn">${element.category_name}</button>

        `

        categoriesContainer.appendChild(btnPlant);
    }

}

loadCategories()


// all plants data function
const loadAllPlants = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(data => displayAllPlants(data.plants));
}

const displayAllPlants = (plants) => {
    // console.log(plants)
    for (let plant of plants) {
        // console.log(plant)

        const loadAllPlantsContainer = document.getElementById("all-plants-container");


        const allPlant = document.createElement("div");
        allPlant.innerHTML = `
        
             <div class="bg-white space-y-2 w-[340px] h-[480px] p-2 shadow-xl flex flex-col justify-between rounded-lg">

                <img class="object-cover w-[100%] h-[180px] rounded-lg" src="${plant.image}" alt="">
                    <h1 onclick="loadPlantDetail(${plant.id})" class="font-bold text-lg">${plant.name}</h1>

                        <p>${plant.description}</p>
                                

                    <div class="flex justify-between items-center">
                                <h1 class="bg-green-200 py-2 px-4 rounded-2xl">${plant.category}</h1>
                                <p><span class="font-bold">$${plant.price}</span></p>
                            </div>
                            <button class="btn bg-green-700 w-full px-8 py-2 text-white rounded-3xl">Add to Cart
                            </button>
                    </div>

        `
        loadAllPlantsContainer.appendChild(allPlant);
    }
}

loadAllPlants();