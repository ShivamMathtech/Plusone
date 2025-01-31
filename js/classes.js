var classData = [
  {
    Title: "Mommy Time",
    time: "1 hr",
    price: "25",
    imgPath: "../img/y1.jpg",
  },
  {
    Title: "Mom Plus One",
    time: "1 hr",
    price: "25",
    imgPath: "../img/y2.jpg",
  },
  {
    Title: "Mom to Be",
    time: "1 hr",
    price: "25",
    imgPath: "../img/y3.jpg",
  },
  {
    Title: "Mom to Be",
    time: "1 hr",
    price: "25",
    imgPath: "../img/y4.jpg",
  },
  {
    Title: "Mommy Time",
    time: "1 hr",
    price: "25",
    imgPath: "../img/y5.jpg",
  },
  {
    Title: "Mom to Be",
    time: "1 hr",
    price: "25",
    imgPath: "../img/y6.jpg",
  },
];

for (var item of classData) {
  var servicecont = document.createElement("div");
  servicecont.innerHTML = `
  <div class="row m-0">
      <div class="col-md-4">
        <div class="card rounded-0">
          <div class="card-img-top">
            <img src="${item.imgPath}" alt="" />
          </div>
          <div class="card-body p-4">
            <div class="card-title">
              <h6><b>${item.Title}</b></h6>
              <p class="text-muted"> ${item.price}</p>
              <p class="text-muted">${item.price}</p>
              <button class="mybtn btn rounded-0">Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
      <div class="card rounded-0">
          <div class="card-img-top">
            <img src="${item.imgPath}" alt="" />
          </div>
          <div class="card-body p-4">
            <div class="card-title">
              <h6><b>${item.Title}</b></h6>
              <p class="text-muted"> ${item.price}</p>
              <p class="text-muted">${item.price}</p>
              <button class="mybtn btn rounded-0">Book Now</button>
            </div>
          </div>
          </div>
      <div class="col-md-4">
      <div class="card rounded-0">
          <div class="card-img-top">
            <img src="${item.imgPath}" alt="" />
          </div>
          <div class="card-body p-4">
            <div class="card-title">
              <h6><b>${item.Title}</b></h6>
              <p class="text-muted"> ${item.price}</p>
              <p class="text-muted">${item.price}</p>
              <button class="mybtn btn rounded-0">Book Now</button>
            </div>
          </div>
          </div>
    </div>
  `;
  document.getElementById("services-card-container").appendChild(servicecont);
}
