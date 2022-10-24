(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();



// const element = document.getElementById('home')
// // alert(element)
// let lastScrollTop = 0;
// element.onscroll = (e)=>{
// if (element.scrollTop < lastScrollTop){
//       // upscroll 
//       alert("scrolling up")
//       return;
//    } 
//    lastScrollTop = element.scrollTop <= 0 ? 0 : element.scrollTop;
//     if (element.scrollTop + element.offsetHeight>= element.scrollHeight ){
//        console.log("End");
//        alert("end");
//     }
// }