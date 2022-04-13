const headers = Array.from(document.getElementsByClassName("accordion-header"));

headers.forEach(header => {
    header.addEventListener("click", () => {
        const neighbor = header.nextElementSibling;
        if(neighbor.style.display == "none" || !neighbor.style.display){
            neighbor.style.display = "block";
        }else{
            neighbor.style.display = "none";
        }
    });
});