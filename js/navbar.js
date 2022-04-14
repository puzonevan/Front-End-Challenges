function dropdown(){
    const navItems = document.getElementsByClassName("nav-link-r");
    Array.from(navItems).forEach(item => {
        if(item.className === "nav-link-r"){
            item.className += " responsive";
        }else{
            item.className = "nav-link-r";
        }
    })
}