const phonesDetails = async(searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    loadData(phones, isShowAll);
}


const loadData = (data, isShowAll) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.textContent = '';
console.log(data)
    if(data.length > 13){
      document.getElementById('show-more').classList.remove('hidden');
    }else{
      document.getElementById('show-more').classList.add('hidden');
    }

    if(!isShowAll){
      data = data.slice(0,12);
    }else{
      document.getElementById('show-more').classList.add('hidden');
    }

    data.map(data => {
        const cardDiv = document.createElement("div");
        cardDiv.classList = 'card max-w-96 mx-auto bg-teal-100 shadow-xl text-black pt-8 m-4';

        cardDiv.innerHTML = `
        <figure><img src="${data.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${data.phone_name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-center">
                    <button onclick="showDetails('${data.slug}')" onclick="my_modal_5.showModal()" class="btn btn-primary">Show Details</button>
                  </div>
                </div>
        `;
    
    cardContainer.appendChild(cardDiv);

    });
    showLoading(false);
}

const showDetails = async (id) => {
  console.log(id)
  
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const individualData = await res.json();
  console.log(individualData)
}

const search = (isShowAll) => {
  const input = document.getElementById("search-text");
  const searchText = input.value;

  phonesDetails(searchText, isShowAll);
  showLoading(true);
}


const showMore = () => {
  search(true)
}

function showLoading(isLoading){
  const loading = document.getElementById("loading");
  if(isLoading){
    loading.classList.remove("hidden");
  }
  else{
    loading.classList.add("hidden");
  }
}