const btnMobile = document.querySelector("#btn-mobile");
const navigation = document.querySelector("#nav");

function enableStyleInBody(arg) {
  if (arg.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.removeProperty("overflow");
  }
}
btnMobile.addEventListener("click", (event) => {
  navigation.classList.toggle("active");
  enableStyleInBody(navigation);
});

const navigationItems = document.querySelectorAll("#nav ul li a");

navigationItems.forEach((element) => {
  element.addEventListener("click", (event) => {
    navigation.classList.remove("active");
    enableStyleInBody(navigation);
  });
});
