var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modalNoButton = document.querySelector(".modal__action--negative");
// console.log(backdrop)
// console.dir(selectPlanButton)
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // cara lain
    // modal.className = "open"; //css mesti ditambahkan juga
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

// backdrop.addEventListener("click", closeModal);
backdrop.addEventListener("click", function () {
  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

modalNoButton.addEventListener("click", closeModal);

function closeModal() {
  // modal.style.display = "none";
  // backdrop.style.display = "none";
  modal.classList.remove('open')
  backdrop.classList.remove('open')
}

toggleButton.addEventListener("click", function () {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});
