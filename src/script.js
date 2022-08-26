"use strict";
var iconArrow = document.querySelectorAll(".icon-arrow");
var details = document.querySelectorAll("details");
var carrousel = document.querySelector(".carrousel");
var listOptions = document.querySelectorAll(".list_options");
var handleEmail = document.querySelector("#handleEmail");
var menuMobileButton = document.querySelector("#menu__icon");
var closeMenuMobile = document.querySelector("#btn_close");
var tabInfo = [
    {
        title: "Bookmark in one click",
        content: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    },
    {
        title: "Inteligent Search",
        content: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },
    {
        title: "Share your bookmarks",
        content: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    },
];
Array.from(details).map(function (detail, index) {
    detail.addEventListener("click", function () {
        if (!details[index].open) {
            iconArrow[index].classList.toggle("icon-arrow--down");
        }
        else {
            iconArrow[index].classList.remove("icon-arrow--down");
        }
    });
});
Array.from(listOptions).map(function (list, index) {
    list.addEventListener("click", function () {
        list.classList.add("list_active");
        carrousel === null || carrousel === void 0 ? void 0 : carrousel.classList.add("slideUp");
        Array.from(listOptions).forEach(function (list) {
            Number(list.id) != index && list.classList.remove("list_active");
        });
        var img = carrousel === null || carrousel === void 0 ? void 0 : carrousel.children[0].children[0];
        var h2 = carrousel === null || carrousel === void 0 ? void 0 : carrousel.children[1].children[0];
        var p = carrousel === null || carrousel === void 0 ? void 0 : carrousel.children[1].children[1];
        img.src = "images/illustration-features-tab-".concat(index + 1, ".svg");
        h2.textContent = tabInfo[index].title;
        p.textContent = tabInfo[index].content;
        setTimeout(function () {
            carrousel === null || carrousel === void 0 ? void 0 : carrousel.classList.remove("slideUp");
        }, 1000);
    });
});
handleEmail === null || handleEmail === void 0 ? void 0 : handleEmail.addEventListener("click", function () {
    var inputEmail = document.querySelector("#input_email");
    var inputDiv = document.querySelector("#input_div");
    if (inputEmail.value === "") {
        inputEmail.classList.add("error");
        if (inputEmail.className === "error") {
            inputDiv === null || inputDiv === void 0 ? void 0 : inputDiv.insertAdjacentHTML("beforeend", "<div class=\"warning error_message\">\n          <p>Whoops, make sure it's an email</p>\n        </div>\n        <p class=\"warning error_icon\">\n          <img src=\"images/icon-error.svg\" alt=\"icon error\">\n        </p>\n        ");
        }
    }
    if (inputEmail.value != "") {
        inputEmail.classList.remove("error");
        var warning = document.querySelectorAll(".warning");
        console.log(warning);
        for (var i = 0; i < warning.length; i++) {
            warning[i].remove();
        }
    }
});
menuMobileButton === null || menuMobileButton === void 0 ? void 0 : menuMobileButton.addEventListener("click", function () {
    var _a, _b;
    (_a = document.querySelector('#menu_open')) === null || _a === void 0 ? void 0 : _a.classList.remove('close');
    (_b = document.querySelector('#menu_open')) === null || _b === void 0 ? void 0 : _b.classList.add('open');
});
closeMenuMobile === null || closeMenuMobile === void 0 ? void 0 : closeMenuMobile.addEventListener("click", function () {
    var _a, _b;
    (_a = document.querySelector('#menu_open')) === null || _a === void 0 ? void 0 : _a.classList.remove('open');
    (_b = document.querySelector('#menu_open')) === null || _b === void 0 ? void 0 : _b.classList.add('close');
});
