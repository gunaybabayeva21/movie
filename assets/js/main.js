let row = document.querySelector('.row')


// fetch('https://api.tvmaze.com/show')
// .then(response =>response.json())
// .then(data =>{
//     console.log(data)

$.ajax({
  method:"GET",
  url:"https://api.tvmaze.com/shows"
}).done((data)=>{
  console.log(data)
    data.forEach(element =>{
        row.innerHTML+=`<div class="col-4 py-3 " >
        <div class="card" style="width: 18rem; background-color: rgb(35, 35, 78);">
          <img src="${element.image.medium}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title" style="color: white;"><b>Name</b>:${element.name}</h5>
          <p class="card-text" style="color: white;"><b>Language</b>:${element.language}</p>
          <p class="card-text" style="color: white;"><b>Genres</b>:${element.genres}</p>
          <p class="card-text" style="color: white;"><b>Rating</b>:${element.rating.average}</p>
            


            <a href="details.html?id=${element.id}" class="btn btn-primary">Start waching</a>
          </div>
        </div>
      </div>`
    })
  })