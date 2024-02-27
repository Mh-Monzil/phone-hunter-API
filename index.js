console.log("Starting")

const phonesDetails = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/phones?search=iphone");
    const data =await res.json();
    const phones = data.data;
    // console.log(phones);
    loadData(phones);
}

phonesDetails();

const loadData = (data) => {
    const cardContainer = document.getElementById("card-container");
    console.log(data);

    data.map(data => {

        const cardDiv = document.createElement("div");
        cardDiv.classList = 'card max-w-96 mx-auto bg-teal-100 shadow-xl text-black pt-8 m-4';

        console.log(data.phone_name);

        cardDiv.innerHTML = `
        <figure><img src="${data.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${data.phone_name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
        `;
    
    cardContainer.appendChild(cardDiv);

    });

}
