const items = [
    {
      img: "images/fb1.png",
      id: "1"
    },
    {
        img: "images/fb2.png",
        id: "2"
    },
    {
        img: "images/fb3.png",
        id: "3"
    },
    {
        img: "images/fb4.png",
        id: "4"
    },
    {
        img: "images/fb5.png",
        id: "5"
    }
]
//variables
const image = document.querySelector(".picture");
const dots = document.querySelectorAll(".dot");

dots.forEach(dot => {
    dot.addEventListener("click", e => {
        dots.forEach(btn => {
          btn.classList.remove("active");
        })
        let element = e.target;
        let id = element.dataset.id;
        element.classList.add("active");
        let item = items.find(obj => obj.id === id);
        image.src = item.img;
    })
})