//ורד נגאר 325523017 
//מוחמד ריאן 327640835
"use strict";

const tabsData = [
  {
    title: "Web Development",
    text: "We build modern and responsive websites for your business.",
    img: "./img/events1.jpg",
    link: "https://example.com/web",
  },
  {
    title: "Graphic Design",
    text: "Our team creates stunning visual designs that stand out.",
    img: "./img/events2.jpg",
    link: "https://example.com/design",
  },
  {
    title: "Marketing",
    text: "Grow your brand with targeted marketing strategies.",
    img: "./img/events3.jpg",
    link: "https://example.com/marketing",
  },
];

const buttonsContainer = document.getElementById("tabs-buttons");
const contentContainer = document.getElementById("tab-content");

tabsData.forEach((tab, index) => {
  const button = document.createElement("button");
  button.textContent = tab.title;

  if (index === 0) {
    button.classList.add("active");
    displayTab(index);
  }

  button.addEventListener("click", () => {
    document
      .querySelectorAll(".tabs-buttons button")
      .forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    displayTab(index);
  });

  buttonsContainer.appendChild(button);
});

function displayTab(index) {
  const tab = tabsData[index];
  contentContainer.innerHTML = `
    <img src="${tab.img}" alt="${tab.title}">
    <h3>${tab.title}</h3>
    <p>${tab.text}</p>
    <a href="${tab.link}" target="_blank">Learn More</a>
  `;
}

// task#1

const events = [
  {
    name: "Music Festival",
    image: "./img/events1.jpg",
    date: "2025-06-15",
  },
  {
    name: "Art Exhibition",
    image: "./img/events2.jpg",
    date: "2025-07-01",
  },
  {
    name: "Tech Conference",
    image: "./img/events3.jpg",
    date: "2025-08-10",
  },
  {
    name: "City Marathon",
    image: "./img/events4.jpg",
    date: "2025-09-05",
  },
];

const gallery = document.querySelector(".gallery");

events.forEach((event) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${event.image}" alt="${event.name}">
    <div class="overlay">
      <h3>${event.name}</h3>
      <p>${event.date}</p>
    </div>
  `;

  const overlay = card.querySelector(".overlay");

  card.onmouseover = () => {
    overlay.style.display = "block";
  };

  card.onmouseout = () => {
    overlay.style.display = "none";
  };

  gallery.appendChild(card);
});
