const fox_btn = document.getElementById("fox_btn");
const dog_btn = document.getElementById("dog_btn");
const fox_result = document.getElementById("fox_result");
const dog_result = document.getElementById("dog_result");

const fox_card = document.getElementById("fox_img");

fox_btn.addEventListener("click", getRandomFox);
dog_btn.addEventListener("click", getRandomDog);

function getRandomFox() {
  fetch("https://randomfox.ca/floof/")
    .then((res) => res.json())
    .then((data) => {
      fox_card.innerHTML = `<img src=${data.image} alt="fox" class="card-img-top" style="max-height: 250px;max-width: 250px;"
        />`;
    });
}

function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      if (data.url.includes(".mp4")) {
        getRandomDog();
      } else {
        dog_result.innerHTML = `<img src=${data.url} alt="dog" style="max-height: 250px;max-width: 250px;"/>`;
      }
    });
}
