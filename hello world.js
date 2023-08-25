<script>
  // Find the <ul> element with the id "items"
  const itemsList = document.getElementById("items");

  // Get all <li> elements within the <ul> with class "list-group-item"
  const listItems = itemsList.getElementsByClassName("list-group-item");

  // Loop through the list items and add "Hello World" before each
  for (const listItem of listItems) {
    listItem.textContent = "Hello World " + listItem.textContent;
  }
</script>
