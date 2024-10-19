function toggle(e){
    const button = e.target;
    const divId = button.dataset.targetId;
    const div = document.getElementById(divId);
    if(divId != 'music'){
        if(div.classList.contains("hidden")){
            div.classList.remove("hidden");
            div.classList.add("show")
        }
        else{
            div.classList.remove("show");
            div.classList.add("hidden")
        }
    }
    else if(div.classList.contains("highlight")){
        div.classList.remove("highlight");
    }
    else{
        div.classList.add("highlight");
    }
}