const tab = () => {
    const tabs = document.querySelectorAll(".card-detail__change");
    const title = document.querySelector(".card-details__title");
    const price = document.querySelector(".card-details__price");
    const image = document.querySelector(".card__image_item")
    const titles = document.querySelector(".face_title")


    const colors = [{
            name: "Graphite",
            memory: "64GB",
            price: 75000,
            rom: 64,
            image: "img/iPhone-graphite.webp",
            title: "Apple iPhone 13 Pro 64GB"
        },
        {
            name: "Silver",
            memory: "128GB",
            price: 100000,
            rom: 128,
            image: "img/iPhone-silver.webp",
            title: "Apple iPhone 13 Pro 128GB"
        },
        {
            name: "Sky Blue",
            memory: "256GB",
            price: 135000,
            rom: 256,
            image: "img/iPhone-sierra_blue.webp",
            title: "Apple iPhone 13 Pro 256GB"
        }
    ]

    const changeColor = (index) => {
        title.textContent = `Смартфон Apple iPhone 13 Pro ${colors[index].memory} ${colors[index].name}`;
        price.textContent = `${colors[index].price}₽`;
        image.setAttribute("src", colors[index].image);
        titles.textContent = `${colors[index].title}`
    }


    const changeActiveTabs = (indexClickedTab) => {
        tabs.forEach((element, index) => {
            element.classList.remove("active")
            if (index === indexClickedTab) {
                element.classList.add("active")
            }

            changeColor(indexClickedTab);
        })
    }

    tabs.forEach((element, index) => {
        element.addEventListener("click", () => {
            changeActiveTabs(index);
        })
    })

    changeColor(0);
}

tab();