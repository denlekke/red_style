// Adds a Collages search field to the top search bar between Torrents and Artists.
(function () {
  "use strict";

  function addCollageSearchbar() {
    var searchbars = document.getElementById("searchbars");
    var torrentsItem = document.getElementById("searchbar_torrents");
    if (!searchbars || !torrentsItem || !torrentsItem.parentNode) {
      return;
    }
    if (document.getElementById("searchbar_collages")) {
      return;
    }

    var listItem = document.createElement("li");
    listItem.id = "searchbar_collages";

    var hiddenLabel = document.createElement("span");
    hiddenLabel.className = "hidden";
    hiddenLabel.textContent = "Collages: ";

    var form = document.createElement("form");
    form.className = "search_form";
    form.name = "collages";
    form.action = "https://redacted.sh/collages.php";
    form.method = "get";

    var hiddenAction = document.createElement("input");
    hiddenAction.type = "hidden";
    hiddenAction.name = "action";
    hiddenAction.value = "search";

    var input = document.createElement("input");
    input.id = "collagessearch";
    input.type = "text";
    input.name = "search";
    input.placeholder = "Collages";
    input.value = "Collages";
    input.setAttribute("size", "17");
    input.setAttribute("spellcheck", "false");
    input.setAttribute("accesskey", "c");
    input.onfocus = function () {
      if (this.value === "Collages") {
        this.value = "";
      }
    };
    input.onblur = function () {
      if (this.value === "") {
        this.value = "Collages";
      }
    };

    form.appendChild(hiddenAction);
    form.appendChild(input);
    listItem.appendChild(hiddenLabel);
    listItem.appendChild(form);

    torrentsItem.parentNode.insertBefore(listItem, torrentsItem.nextSibling);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addCollageSearchbar);
  } else {
    addCollageSearchbar();
  }
})();
