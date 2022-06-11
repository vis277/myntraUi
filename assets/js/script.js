// for men section
let menHidden = document.getElementById("men-hidden-reveal");

menHidden.onmouseover = function () {
  let reveal = document.getElementById("men-hidden-card-reveal");
  reveal.style.display = "block";
  document.body.style.backgroundColor = "rgb(192 192 192 / 41%)";
};

menHidden.onmouseout = function () {
  let reveal = document.getElementById("men-hidden-card-reveal");
  reveal.style.display = "none";
  document.body.style.backgroundColor = "rgb(192 192 192 / 41%)";
  document.body.style.backgroundColor = "white";
};

let cardwrapper = document.getElementById("cardwrapper");

cardwrapper.onmouseout = function () {
  let reveal = document.getElementById("men-hidden-card-reveal");
  reveal.style.display = "none";
  document.body.style.backgroundColor = "white";
};
// for women section
let womenHidden = document.getElementById("women-hidden-reveal");

womenHidden.onmousemove = function () {
  let reveal = document.getElementById("women-hidden-card-reveal");
  reveal.style.display = "block";
  document.body.style.backgroundColor = "rgb(192 192 192 / 41%)";
};

womenHidden.onmouseout = function () {
  let reveal = document.getElementById("women-hidden-card-reveal");
  reveal.style.display = "none";
  document.body.style.backgroundColor = "rgb(192 192 192 / 41%)";
  document.body.style.backgroundColor = "white";
};

let womencardwrapper = document.getElementById("women-cardwrapper");

womencardwrapper.onmouseout = function () {
  let reveal = document.getElementById("women-hidden-card-reveal");
  reveal.style.display = "none";
  document.body.style.backgroundColor = "white";
};

// for kids
let kidsHidden = document.getElementById("kids-hidden-reveal");

kidsHidden.onmousemove = function () {
  let reveal = document.getElementById("kids-hidden-card-reveal");
  reveal.style.display = "block";
  document.body.style.backgroundColor = "rgb(192 192 192 / 41%)";
};

kidsHidden.onmouseout = function () {
  let reveal = document.getElementById("kids-hidden-card-reveal");
  reveal.style.display = "none";
  document.body.style.backgroundColor = "rgb(192 192 192 / 41%)";
  document.body.style.backgroundColor = "white";
};

let kidscardwrapper = document.getElementById("kids-cardwrapper");

kidscardwrapper.onmouseout = function () {
  let reveal = document.getElementById("kids-hidden-card-reveal");
  reveal.style.display = "none";
  document.body.style.backgroundColor = "white";
};

// for home
let homeHidden = document.getElementById("home-hidden-reveal");
homeHidden.onmousemove = function () {
  let reveal = document.getElementById("home-hidden-card-reveal");
  reveal.style.display = "block";
  document.body.style.backgroundColor = "rgb(192 192 192 / 41%)";
};
homeHidden.onmouseout = function () {
  let reveal = document.getElementById("home-hidden-card-reveal");
  reveal.style.display = "none";
  document.body.style.backgroundColor = "rgb(192 192 192 / 41%)";
  document.body.style.backgroundColor = "white";
};
let homecardwrapper = document.getElementById("home-cardwrapper");

homecardwrapper.onmouseout = function () {
  let reveal = document.getElementById("home-hidden-card-reveal");
  reveal.style.display = "none";
  document.body.style.backgroundColor = "white";
};
// beauty section
let beautyHidden = document.getElementById("beauty-hidden-reveal");
beautyHidden.onmousemove = function () {
  let reveal = document.getElementById("beauty-hidden-card-reveal");
  reveal.style.display = "block";
  document.body.style.backgroundColor = "rgb(192 192 192 / 41%)";
};
beautyHidden.onmouseout = function () {
  let reveal = document.getElementById("beauty-hidden-card-reveal");
  reveal.style.display = "none";
  document.body.style.backgroundColor = "rgb(192 192 192 / 41%)";
  document.body.style.backgroundColor = "white";
};
let beautycardwrapper = document.getElementById("beauty-cardwrapper");

beautycardwrapper.onmouseout = function () {
  let reveal = document.getElementById("beauty-hidden-card-reveal");
  reveal.style.display = "none";
  document.body.style.backgroundColor = "white";
};
// studio section
let studioHidden = document.getElementById("studio-hidden-reveal");
studioHidden.onmousemove = function () {
  let reveal = document.getElementById("studio-hidden-card-reveal");
  reveal.style.display = "block";
  document.body.style.backgroundColor = "rgb(192 192 192 / 41%)";
};
studioHidden.onmouseout = function () {
  let reveal = document.getElementById("studio-hidden-card-reveal");
  reveal.style.display = "none";
  document.body.style.backgroundColor = "rgb(192 192 192 / 41%)";
  document.body.style.backgroundColor = "white";
};
let studiocardwrapper = document.getElementById("studio-cardwrapper");

studiocardwrapper.onmouseout = function () {
  let reveal = document.getElementById("studio-hidden-card-reveal");
  reveal.style.display = "none";
  document.body.style.backgroundColor = "white";
};

//for profile section
let profile = document.getElementById("profile-main");
profile.onmouseover = function () {
  let profilehiiden = document.getElementById("hidden-profile");
  profilehiiden.style.display = "block";
  document.body.style.backgroundColor = "rgb(192 192 192 / 41%)";
};
profile.onmouseout = function () {
  let profilehiiden = document.getElementById("hidden-profile");
  profilehiiden.style.display = "none";
  document.body.style.backgroundColor = "white";
};
// header ends here

//bundle hide and show
let bundle = document.getElementById("bundle-id");
bundle.onclick = imagechange;
let rotation = 0;
let mainTopId = document.getElementById("main-top-id");
// let mainBottomLeft=document.getElementById("main-bottom-left-id");
function imagechange() {
  let bundleimage = document.getElementById("image-bundle");
  let bundlehidden = document.getElementById("bundle-hide-show");
  let countryimage = document.getElementById("image-country");
  let sizeimage = document.getElementById("image-size");
  let countryhidden = document.getElementById("country-hide-show");
  let sizehidden = document.getElementById("size-hide-show");
  // let mainTopId=document.getElementById('main-top-id');
  // let mainBottomLeft=document.getElementById("main-bottom-left-id");
  rotation = rotation + 180;
  if (rotation === 360) {
    // 360 means rotate back to 0

    rotation = 0;
  }
  if (rotation == 180) {
    bundlehidden.style.display = "block";
    countryhidden.style.display = "none";
    sizehidden.style.display = "none";
    mainTopId.style.border = "0";
    // mainBottomLeft.style.borderTop="1px solid rgb(192 192 192 / 41%)";
  } else {
    bundlehidden.style.display = "none";
    countryhidden.style.display = "none";
    sizehidden.style.display = "none";
    mainTopId.style.border = "1px solid rgb(192 192 192 / 41%)";
    // mainBottomLeft.style.borderRight="1px solid rgb(192 192 192 / 41%); ";
    // mainBottomLeft.style.borderTop="0";
  }
  bundleimage.style.transform = `rotate(${rotation}deg)`;
  sizeimage.style.transform = `rotate(0deg)`;
  countryimage.style.transform = `rotate(0deg)`;
}

//country hide and show
let country = document.getElementById("country-id");
country.onclick = imagechange2;
let rotation2 = 0;
function imagechange2() {
  let countryimage = document.getElementById("image-country");
  let bundleimage = document.getElementById("image-bundle");
  let sizeimage = document.getElementById("image-size");
  let bundlehidden = document.getElementById("bundle-hide-show");
  let countryhidden = document.getElementById("country-hide-show");
  let sizehidden = document.getElementById("size-hide-show");
  rotation2 = rotation2 + 180;
  if (rotation2 === 360) {
    rotation2 = 0;
  }
  if (rotation2 == 180) {
    countryhidden.style.display = "block";
    bundlehidden.style.display = "none";
    sizehidden.style.display = "none";
    mainTopId.style.border = "0";
    // mainBottomLeft.style.borderTop="1px solid rgb(192 192 192 / 41%)";
  } else {
    countryhidden.style.display = "none";
    bundlehidden.style.display = "none";
    sizehidden.style.display = "none";
    mainTopId.style.border = "1px solid rgb(192 192 192 / 41%)";
    // mainBottomLeft.style.borderRight="1px solid rgb(192 192 192 / 41%); ";
    // mainBottomLeft.style.borderTop="0";
  }
  countryimage.style.transform = `rotate(${rotation2}deg)`;
  bundleimage.style.transform = `rotate(0deg)`;
  sizeimage.style.transform = `rotate(0deg)`;
}

// size hide and show

let size = document.getElementById("size-id");
size.onclick = rotate3;
let rotatation3 = 0;
function rotate3() {
  let sizeimage = document.getElementById("image-size");
  let bundleimage = document.getElementById("image-bundle");
  let countryimage = document.getElementById("image-country");
  let sizehidden = document.getElementById("size-hide-show");
  let bundlehidden = document.getElementById("bundle-hide-show");
  let countryhidden = document.getElementById("country-hide-show");
  rotatation3 = rotatation3 + 180;
  if (rotatation3 == 360) {
    rotatation3 = 0;
  }

  if (rotatation3 == 180) {
    sizehidden.style.display = "flex";
    bundlehidden.style.display = "none";
    countryhidden.style.display = "none";
    mainTopId.style.border = "0";
    // mainBottomLeft.style.borderTop="1px solid rgb(192 192 192 / 41%)";
  } else {
    sizehidden.style.display = "none";
    bundlehidden.style.display = "none";
    countryhidden.style.display = "none";
    mainTopId.style.border = "1px solid rgb(192 192 192 / 41%)";
    // mainBottomLeft.style.borderRight="1px solid rgb(192 192 192 / 41%); ";
    // mainBottomLeft.style.borderTop="0";
  }
  sizeimage.style.transform = `rotate(${rotatation3}deg)`;
  bundleimage.style.transform = `rotate(0deg)`;
  countryimage.style.transform = `rotate(0deg)`;
}

// For sort hover

let sorthover = document.getElementById("sort-id");

sorthover.onmouseover = function sort() {
  let sorthidden = document.getElementById("sort-hover-id");
  sorthidden.style.display = "block";
  let sortinside = document.getElementById("sort-inside");
  sortinside.style.border = "0";
};
sorthover.onmouseout = function sort() {
  let sorthidden = document.getElementById("sort-hover-id");
  sorthidden.style.display = "none";
};

// brand search feature
let brandsearchclick = document.getElementById("brand-search-click");

brandsearchclick.onclick = function () {
  let brandsearcid = document.getElementById("brand-search-id");
  brandsearcid.style.display = "none";

  let brandsearchinputid = document.getElementById("brand-search-input-id");
  brandsearchinputid.style.display = "block";

  let brandcrossimage = document.getElementById("brand-cross-image-id");
  brandcrossimage.style.display = "block";
};

let brandcrossimage = document.getElementById("brand-cross-image-id");
brandcrossimage.onclick = function () {
  let brandsearcid = document.getElementById("brand-search-id");
  brandsearcid.style.display = "flex";

  let brandsearchinputid = document.getElementById("brand-search-input-id");
  brandsearchinputid.style.display = "none";

  let brandcrossimage = document.getElementById("brand-cross-image-id");
  brandcrossimage.style.display = "none";
};

// color search features
let colorsearchclick = document.getElementById("color-search-click");

colorsearchclick.onclick = function () {
  let colorsearcid = document.getElementById("color-search-id");
  colorsearcid.style.display = "none";

  let colorsearchinputid = document.getElementById("color-search-input-id");
  colorsearchinputid.style.display = "block";

  let colorcrossimage = document.getElementById("color-cross-image-id");
  colorcrossimage.style.display = "block";
};

let colorcrossimage = document.getElementById("color-cross-image-id");
colorcrossimage.onclick = function () {
  let colorsearcid = document.getElementById("color-search-id");
  colorsearcid.style.display = "flex";

  let colorsearchinputid = document.getElementById("color-search-input-id");
  colorsearchinputid.style.display = "none";

  let colorcrossimage = document.getElementById("color-cross-image-id");
  colorcrossimage.style.display = "none";
};

// Card section

var products = [
  {
    image: "./assets/image/t-shirt-1.jpg",
    price: 200,
    brand: "Roadster",
    deletedPrice: 1500,
    description: "Blue Striped Polo T-Shirt",
    OFF: "(87% OFF)",
    Message: "Only few Left!",
    rating: 3,
    promoted: "no",
  },
  {
    image: "./assets/image/t-shirt-2.jpg",
    price: 200,
    brand: "Roadster",
    deletedPrice: 1500,
    description: "Blue Striped Polo T-Shirt",
    OFF: "(60% OFF)",
    Message: "Only few Left!",
    rating: 3,
    promoted: "no",
  },
  {
    image: "./assets/image/t-shirt-3.jpg",
    price: 200,
    brand: "Roadster",
    deletedPrice: 1500,
    description: "Blue Striped Polo T-Shirt",
    OFF: "(60% OFF)",
    Message: "Only few Left!",
    rating: 3,
    promoted: "yes",
  },
  {
    image: "./assets/image/t-shirt-4.jpg",
    price: 200,
    brand: "Roadster",
    deletedPrice: 1500,
    description: "Blue Striped Polo T-Shirt",
    OFF: "(60% OFF)",
    Message: "Only few Left!",
    rating: 3,
    promoted: "no",
  },
  {
    image: "./assets/image/t-shirt-1.jpg",
    price: 200,
    brand: "Roadster",
    deletedPrice: 1500,
    description: "Blue Striped Polo T-Shirt",
    OFF: "(87% OFF)",
    Message: "Only few Left!",
    rating: 3,
    promoted: "yes",
  },
  {
    image: "./assets/image/t-shirt-2.jpg",
    price: 200,
    brand: "Roadster",
    deletedPrice: 1500,
    description: "Blue Striped Polo T-Shirt",
    OFF: "(60% OFF)",
    Message: "Only few Left!",
    rating: 3,
    promoted: "no",
  },
  {
    image: "./assets/image/t-shirt-3.jpg",
    price: 200,
    brand: "Roadster",
    deletedPrice: 1500,
    description: "Blue Striped Polo T-Shirt",
    OFF: "(60% OFF)",
    Message: "Only few Left!",
    rating: 3,
    promoted: "no",
  },
  {
    image: "./assets/image/t-shirt-4.jpg",
    price: 200,
    brand: "Roadster",
    deletedPrice: 1500,
    description: "Blue Striped Polo T-Shirt",
    OFF: "(60% OFF)",
    Message: "Only few Left!",
    rating: 3,
    promoted: "yes",
  },
];
var list = document.getElementById("list-myntra-card");

for (i = 0; i < products.length; i++) {
  if (products[i].promoted == "yes") {
    var div = document.createElement("div");
    div.className = "main-container-myntra-card";
    div.innerHTML = `<div class="image-container-myntra=card"><img class="image-myntra-card" src=${
      products[i].image
    } alt="Loading" ></div>
    <div class="brand-myntra-card"><span class=brand-span-myntra=card>${
      products[i].brand
    }</span></div>
    <div class="description-myntra-card>${products[i].description}</div>
    <div class="price-myntra-card"><span class="span-price-myntra-card"> Rs ${
      products[i].price
    }</span><span class="original-price-myntra-card"> Rs ${
      products[i].deletedPrice
    }</span><span class="off-myntra-card">${products[i].OFF}</span></div>
    <div class="message-myntra-card">${products[i].Message}</div>
    <div class="rating-myntra-card"> ${
      products[i].rating
    } &#9734; | ${Math.floor(Math.random() * 10 + 1)}k</div>
    <div class="arrow-myntra-card">
      <span class="test3-myntra-card">NEW SEASON</span>
       <span class="test4-myntra-card"></span>
        <span class="test5-myntra-card"></span>
      </div>`;
    // if(products[i].promoted=='yes'){
    //     div.innerHTML=`<div class="arrow">
    //     <span class="test3">NEW SEASON</span>
    //     <span class="test4"></span>
    //     <span class="test5"></span>
    //   </div>`
    // }
    list.appendChild(div);
  } else {
    var div = document.createElement("div");
    div.className = "main-container-myntra-card";
    div.innerHTML = `<div class="image-container-myntra-card"><img class="image-myntra-card" src=${products[i].image} alt="Loading" ></div>
    <div class="brand-myntra-card"><span class=brand-span-myntra-card>${products[i].brand}</span></div>
    <div class="description-myntra-card">${products[i].description}</div>
    <div class="price-myntra-card"><span class="span-price-myntra-card"> Rs ${products[i].price}</span><span class="original-price-myntra-card"> Rs ${products[i].deletedPrice}</span><span class="off-myntra-card">${products[i].OFF}</span></div>
    <div class="message-myntra-card">${products[i].Message}</div>`;
    list.appendChild(div);
  }
}
