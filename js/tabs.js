const tabs = [
    {
        title: "London", 
        content: "This is not the city."
    }, 
    {
        title: "Paris", 
        content: "This is not the city."
    }, 
    {
        title: "New York", 
        content: "This is not the city."
    }, 
]

const tabNav = document.getElementById("tab-navigation");
const tabContent = document.getElementById("tab-content");
let active = "";


tabs.forEach(tab => {
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerHTML = tab.title;
    button.setAttribute("class", "tab-button");
    
    tabNav.appendChild(button);

    button.addEventListener("click", () =>{

        // Current tab highlighted
        Array.from(tabNav.children).forEach(button => button.classList.remove("active"));
        button.classList.add("active");

        if(tab.title == active){
            tabContent.classList.remove("fade");
            button.classList.remove("active");
            active = "";
        }else{
            tabContent.children[0].innerHTML = tab.title; 
            tabContent.children[1].innerHTML = tab.content;
            tabContent.classList.add("fade");
            active = tab.title;
        }
        
    });
});

const toggle = document.getElementById("toggle");
const tabContainer = document.getElementById("tabs");
toggle.addEventListener("click", () => {
    tabContainer.style.flexDirection = tabContainer.style.flexDirection == "column" || !tabContainer.style.flexDirection ? "row" : "column";
    tabNav.style.flexDirection = tabNav.style.flexDirection == "row" || !tabNav.style.flexDirection ? "column" : "row";
});

