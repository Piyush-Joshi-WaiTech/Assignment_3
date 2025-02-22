document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebarToggle");
  const navbarDropdownBtn = document.getElementById("navbarDropdownBtn");
  const navbarDropdownMenu = document.getElementById("navbarDropdownMenu");
  const body = document.body;

  function isMobileView() {
    return window.innerWidth <= 992;
  }

  // ✅ Sidebar Toggle for Mobile View
  if (sidebar && sidebarToggle) {
    sidebarToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      if (isMobileView()) {
        sidebar.classList.toggle("collapsed");
      }
    });

    // Close sidebar when clicking outside (only in mobile view)
    body.addEventListener("click", function (e) {
      if (
        isMobileView() &&
        !sidebar.classList.contains("collapsed") &&
        !sidebar.contains(e.target) &&
        !sidebarToggle.contains(e.target) &&
        (!navbarDropdownBtn || !navbarDropdownBtn.contains(e.target)) // Prevent navbar button from closing sidebar
      ) {
        sidebar.classList.add("collapsed");
      }
    });

    sidebar.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  } else {
    console.error("Error: Sidebar or toggle button not found.");
  }

  // ✅ Navbar Dropdown Toggle
  if (navbarDropdownBtn && navbarDropdownMenu) {
    navbarDropdownBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      navbarDropdownMenu.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.body.addEventListener("click", function (e) {
      if (
        navbarDropdownMenu.classList.contains("show") &&
        !navbarDropdownMenu.contains(e.target) &&
        !navbarDropdownBtn.contains(e.target)
      ) {
        navbarDropdownMenu.classList.remove("show");
      }
    });

    navbarDropdownMenu.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent menu from closing when clicking inside
    });
  } else {
    console.error("Error: Navbar toggle or dropdown menu not found.");
  }
});
