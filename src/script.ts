export {};

const iconArrow = document.querySelectorAll(".icon-arrow");
const details = document.querySelectorAll("details");
const carrousel = document.querySelector(".carrousel");
const listOptions = document.querySelectorAll(".list_options");
const handleEmail = document.querySelector("#handleEmail");
const menuMobileButton = document.querySelector("#menu__icon");
const closeMenuMobile = document.querySelector("#btn_close");

const tabInfo = [
  {
    title: "Bookmark in one click",
    content:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    title: "Inteligent Search",
    content:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    title: "Share your bookmarks",
    content:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

Array.from(details).map((detail, index) => {
  detail.addEventListener("click", () => {
    if (!details[index].open) {
      iconArrow[index].classList.toggle("icon-arrow--down");
    } else {
      iconArrow[index].classList.remove("icon-arrow--down");
    }
  });
});

Array.from(listOptions).map((list, index) => {
  list.addEventListener("click", () => {
    list.classList.add("list_active");
    carrousel?.classList.add("slideUp");

    Array.from(listOptions).forEach((list) => {
      Number(list.id) != index && list.classList.remove("list_active");
    });

    let img = carrousel?.children[0].children[0] as HTMLImageElement;
    let h2 = carrousel?.children[1].children[0] as HTMLElement;
    let p = carrousel?.children[1].children[1] as HTMLElement;

    img.src = `../public/images/illustration-features-tab-${index + 1}.svg`;
    h2.textContent = tabInfo[index].title;
    p.textContent = tabInfo[index].content;

    setTimeout(() => {
      carrousel?.classList.remove("slideUp");
    }, 1000);
  });
});

handleEmail?.addEventListener("click", () => {
  const inputEmail = document.querySelector("#input_email") as HTMLInputElement;
  const inputDiv = document.querySelector("#input_div");

  if (inputEmail.value === "") {
    inputEmail.classList.add("error");

    if (inputEmail.className === "error") {
      inputDiv?.insertAdjacentHTML(
        "beforeend",
        `<div class="warning error_message">
          <p>Whoops, make sure it's an email</p>
        </div>
        <p class="warning error_icon">
          <img src="./public/images/icon-error.svg" alt="icon error">
        </p>
        `
      );
    }
  }

  if (inputEmail.value != "") {
    inputEmail.classList.remove("error");
    const warning = document.querySelectorAll(".warning");
    console.log(warning);

    for (let i = 0; i < warning.length; i++) {
      warning[i].remove();
    }
  }
});

menuMobileButton?.addEventListener("click", () => {
  document.querySelector('#menu_open')?.classList.remove('close');
  document.querySelector('#menu_open')?.classList.add('open');
});

closeMenuMobile?.addEventListener("click", () => {
  document.querySelector('#menu_open')?.classList.remove('open');
  document.querySelector('#menu_open')?.classList.add('close');
})