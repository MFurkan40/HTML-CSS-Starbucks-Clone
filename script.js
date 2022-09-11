//! Tıklanacak bölümlerin hepsini bir değişkene atayalım
const buttons = document.querySelectorAll(".footer-ul");


//! Tıklanacak bölümlerin her birine tıklandığında çalıştıracağı fonksiyonu verelim
buttons.forEach((item, index) => {
    const header = item.querySelector(".footer-ul-header");
    header.addEventListener("click", () => {
        item.classList.toggle("open");

        //! Açılacak listeleri bir değişkene atayalım
        const footerList = item.querySelectorAll(".footer-up-ul");
        //! Ters çevirmek için ok işaretlerini de değişkene atadık
        const arrows = document.querySelectorAll(".footer-btn");
        

        if(item.classList.contains("open")) {
            footerList.forEach((list, index) => {
                list.style.height = `${list.scrollHeight}px`;
            })
            arrows.forEach((arrow, index) => {
                arrow.style.transform = "rotate(180deg)";
            });
        }else {
            footerList.forEach((list, index) => {
                list.style.height = "0px";
            });
            arrows.forEach((arrow, index) => {
                arrow.style.transform = "rotate(360deg)";
            });
        };
    });
});