let row = document.querySelector('.row')


fetch('https://api.tvmaze.com/show')
.then(response =>response.json())
.then(data =>{
    console.log(data)
    data.forEach(element =>{
        row.innerHTML+=`<div class="col-4 py-3"  >
        <div class="card" style="width: 18rem;">
          <img src="${element.image.medium}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><b>Name</b>:${element.name}</h5>
            <p class="card-text"><b>Language</b>:${element.language}</p>
            <p class="card-text"><b>Genres</b>:${element.genres}</p>
            <p class="card-text"><b>Imdb</b>:${element.externals.imdb}</p>
            


            <a href="#" class="btn btn-primary">Start waching</a>
          </div>
        </div>
      </div>`
    })
})