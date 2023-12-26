const get_data = async () => {
  var container = document.getElementById("container");
  try {
    const url = "https://s3.amazonaws.com/open-to-cors/assignment.json";
    var data = await fetch(url);
    data = await data.json();
    data = data.products;
    var arr = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key];

        arr.push({
          key: key,
          popularity: element.popularity,
          price: element.price,
          subcategory: element.subcategory,
          title: element.title,
        });
      }
    }
    arr.sort((a, b) => b.popularity - a.popularity);
    for (var i = 0; i < arr.length; i++) {
      let new_child = document.createElement("div");
      new_child.className = "child";
      new_child.innerHTML = `
            <h2 class="child-title">Popularity: ${arr[i].popularity}</h2>
            <h3 class="child-info">Price: ${arr[i].price}</h3>
            <h4 class="child-info">Subcategory: ${arr[i].subcategory}</h4>
            <h5 class="child-info">Title: ${arr[i].title}</h5>
            <div class="child-separator"></div>
          `;
      container.appendChild(new_child);
    }
  } catch (error) {
    console.log("error: " + error);
  }
};
