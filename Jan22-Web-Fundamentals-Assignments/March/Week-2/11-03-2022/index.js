let getData = function (response) {
    return response.json();
  };
  
  let handleData = function (res) {
    let gifsData = res.data;
    let parent = document.getElementById("container");
    for (let i = 0; i < 10; i++) {
      let new_elem = document.createElement("img");
      new_elem.setAttribute("src", gifsData[i].images.fixed_height.url);
      parent.appendChild(new_elem);
    }
  };
  
  fetch(
    "https://api.giphy.com/v1/gifs/trending?api_key=TwDN7TTZNbYa3RS0npJXkBLumGfo73P9"
  
  )
    .then(getData)
    .then(handleData);
  
  let handle_search = function (response) {
    return response.json();
  };
  
  let handle_search_data = function (json) {
    let data = json.data;
    console.log(data[0].url);
    let searched_image_container = document.getElementById(
      "search_image_container"
    );
    let searched_image = document.createElement("img");
    searched_image.setAttribute("src", data[0].images.fixed_height.url);
    searched_image_container.appendChild(searched_image);
  };
  
  let search_data = function () {
    let container = document.getElementById("container");
    container.style.display = "none";
    let input_feild = document.getElementById("input_feild");
    let user_input = input_feild.value;
    let apiKey = "TwDN7TTZNbYa3RS0npJXkBLumGfo73P9";
  
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${user_input}`
    )
      .then(handle_search)
      .then(handle_search_data);
  };
  
  let btn = document.getElementById("btn");
  btn.addEventListener("click", search_data);