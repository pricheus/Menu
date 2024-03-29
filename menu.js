//items list
const menuList = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, 
        hammock freegan copper mug whatever
     cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

//1-menu
const menu = document.querySelector("menu");

window.addEventListener("DOMContentLoaded", displayMenu(menuList));
function displayMenu(menuList) {
  let renderMenu = menuList.map(function (menuItem) {
    return `<section class="mealContainer">
        <img
          src=${menuItem.img}
          alt="${menuItem.title}"
        />
        <aside>
          <h4 class="${menuItem.category}">${menuItem.title} <span class="mealPrice">${menuItem.price}</span></h4>
          <span class="underline"></span>
          <p>
            ${menuItem.desc}
          </p>
        </aside>
      </section>`;
  });
  menu.innerHTML = renderMenu.join("");
}

//3-btns
const btnContainer = document.querySelector(".btnContainers");

// const renderBtns = menuList.map(function (btn) {
//   return `<button class="${btn.category}" data-id="${btn.category}">${btn.category}</button>`;
// });

// btnContainer.innerHTML = renderBtns.join("");

//2-filtering functionnality on btns
const btns = document.querySelectorAll("button");

btns.forEach(function (btn) {
  btn.onclick = function (e) {
    const data_id = e.currentTarget.dataset.id;

    const filter = menuList.filter(function (item) {
      if (item.category === data_id) {
        return item;
      }
    });
    if (data_id === "all") {
      displayMenu(menuList);
    } else {
      displayMenu(filter);
    }
  };
});
