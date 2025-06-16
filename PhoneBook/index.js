"use strict";

// Array of contact objects
const contacts = [
  {
    name: "Alhaitham",
    phone: "0525252525",
    email: "alhaitham@gmail.com",
    address: "Sumeru",
    age: 30,
    avatar: "./img/Alhaitham.webp",
  },
  {
    name: "Kinich",
    phone: "0585858585",
    email: "kinich@gmail.com",
    address: "Sumeruro",
    age: 15,
    avatar: "./img/Kinich.webp",
  },
  {
    name: "Eula",
    phone: "0505050505",
    email: "Eula@gmail.com",
    address: "Sume",
    age: 29,
    avatar: "./img/Eula.webp",
  },
  {
    name: "Wriothesley",
    phone: "0545454545",
    email: "wriothesley@gmail.com",
    address: "Sume",
    age: 29,
    avatar: "./img/Wriothesley.webp",
  },
];

// DOM elements
const contactList = document.querySelector(".contact-list");
const deleteAllBtn = document.getElementById("delete-all");

// Popups
const popupInfo = document.getElementById("popup");        // info popup
const popupEdit = document.getElementById("popup-edit");   // edit popup
const popupAdd = document.getElementById("popup-add");     // add popup

// Forms
const formEdit = document.getElementById("form-edit-contact");
const formAdd = document.getElementById("form-add-contact");

// Edit form inputs
const inputEditName = document.getElementById("edit-name");
const inputEditPhone = document.getElementById("edit-phone");
const inputEditEmail = document.getElementById("edit-email");
const inputEditAddress = document.getElementById("edit-address");
const inputEditAge = document.getElementById("edit-age");
const inputEditAvatar = document.getElementById("edit-avatar");

// Add form inputs
const inputAddName = document.getElementById("add-name");
const inputAddPhone = document.getElementById("add-phone");
const inputAddEmail = document.getElementById("add-email");
const inputAddAddress = document.getElementById("add-address");
const inputAddAge = document.getElementById("add-age");
const inputAddAvatar = document.getElementById("add-avatar");

// Buttons
const addContactBtn = document.getElementById("add-contact");
const closeAddBtn = document.getElementById("close-popup-add");

let currentEditIndex = null;

// Create a single contact item element
function createContactItem(contact, index) {
  const li = document.createElement("li");
  li.className = "contact-item";

  li.innerHTML = `
    <img class="avatar" src="${contact.avatar}" alt="${contact.name}" />
    <div class="contact-info">
      <h3>${contact.name}</h3>
      <p>${contact.phone}</p>
    </div>
    <div class="contact-actions">
      <button class="info-btn" title="Info">ℹ️</button>
      <button class="edit-btn" title="Edit">✏️</button>
      <button class="remove-btn" title="Remove">🗑️</button>
    </div>
  `;

  // Delete one contact
  const deleteOneBtn = li.querySelector(".remove-btn");
  deleteOneBtn.addEventListener("click", () => {
    contacts.splice(index, 1); // حذف من المصفوفة
    renderContacts();
  });

  // Show info popup
  const infoBtn = li.querySelector(".info-btn");
  infoBtn.addEventListener("click", () => {
    document.getElementById("popup-name").textContent = contact.name;
    document.getElementById("popup-phone").textContent = contact.phone;
    document.getElementById("popup-email").textContent = contact.email || "N/A";
    document.getElementById("popup-address").textContent = contact.address || "N/A";
    document.getElementById("popup-age").textContent = contact.age || "N/A";
    document.getElementById("popup-avatar").src = contact.avatar;
    document.getElementById("popup-avatar").alt = contact.name;
    popupInfo.style.display = "flex";
  });

  // Edit contact popup
  const editBtn = li.querySelector(".edit-btn");
  editBtn.addEventListener("click", () => {
    currentEditIndex = index;
    inputEditName.value = contact.name;
    inputEditPhone.value = contact.phone;
    inputEditEmail.value = contact.email;
    inputEditAddress.value = contact.address;
    inputEditAge.value = contact.age;
    inputEditAvatar.value = contact.avatar;

    popupEdit.style.display = "flex";
  });

  return li;
}

// Close popup buttons all together
const closeButtons = document.querySelectorAll(".close-btn");

// All popups array
const popups = [popupInfo, popupEdit, popupAdd];

// Function to close any open popup
function closeVisiblePopup() {
  popups.forEach(popup => {
    if (popup.style.display === "flex") {
      popup.style.display = "none";
    }
  });
}

// Attach close function to all close buttons
closeButtons.forEach(btn => {
  btn.addEventListener("click", closeVisiblePopup);
});

// Render contacts list
function renderContacts() {
  contactList.innerHTML = "";
  contacts.forEach((contact, index) => {
    const item = createContactItem(contact, index);
    contactList.appendChild(item);
  });
}

// Submit edit form
formEdit.addEventListener("submit", (e) => {
  e.preventDefault();

  if (currentEditIndex !== null) {
    contacts[currentEditIndex] = {
      name: inputEditName.value,
      phone: inputEditPhone.value,
      email: inputEditEmail.value,
      address: inputEditAddress.value,
      age: inputEditAge.value ? Number(inputEditAge.value) : null,
      avatar: inputEditAvatar.value || "./img/default-avatar.png",
    };

    renderContacts();
    popupEdit.style.display = "none";
    currentEditIndex = null;
  }
});

// Open add contact popup when clicking Add button
addContactBtn.addEventListener("click", () => {
  // Clear add form fields
  inputAddName.value = "";
  inputAddPhone.value = "";
  inputAddEmail.value = "";
  inputAddAddress.value = "";
  inputAddAge.value = "";
  inputAddAvatar.value = "";

  popupAdd.style.display = "flex";
});

// Close add popup on close button
closeAddBtn.addEventListener("click", () => {
  popupAdd.style.display = "none";
});

// Submit add form
formAdd.addEventListener("submit", (e) => {
  e.preventDefault();

  contacts.push({
    name: inputAddName.value,
    phone: inputAddPhone.value,
    email: inputAddEmail.value,
    address: inputAddAddress.value,
    age: inputAddAge.value ? Number(inputAddAge.value) : null,
    avatar: inputAddAvatar.value || "./img/default-avatar.png",
  });

  renderContacts();
  popupAdd.style.display = "none";
});

// Delete all contacts
deleteAllBtn.addEventListener("click", () => {
  contacts.length = 0;
  renderContacts();
});

// Initial rendering
renderContacts();
