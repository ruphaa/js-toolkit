const openTab = function (e, tab) {
  // Hide all the visible tab content
  Array.from(document.querySelectorAll(".content")).forEach((content) => {
    content.classList.add("hide");
  });

  //   Remove the active class from all the tabs
  Array.from(document.querySelectorAll("button")).forEach((btn) => {
    btn.classList.remove("active");
  });

  //   Add active class to the selected tab
  e.target.classList.add("active");
  //   Find the tab content to be displayed and remove the hide class
  let $tab = document.querySelector(`#${tab}`);
  $tab.classList.remove("hide");
};
