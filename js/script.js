const addToSelect = (e) => {
    if(e.target.checked){
        switch (e.target.id){
            case "cheese":
                e.target.value = "sajt-200"
                break;
            case "ham":
                e.target.value = "sonka-250"
                break;
            case "corn":
                e.target.value = "kukorica-150"
                break;
            case "mushroom":
                e.target.value = "gomba-200"
                break;
            case "chili":
                e.target.value = "chili paprika-230"
                break;
        }
    } else{
        e.target.value = ""
    }
} 
document.querySelector("#cheese").addEventListener('change', (e) => addToSelect(e))
document.querySelector("#ham").addEventListener('change', (e) => addToSelect(e))
document.querySelector("#corn").addEventListener('change', (e) => addToSelect(e))
document.querySelector("#mushroom").addEventListener('change', (e) => addToSelect(e))
document.querySelector("#chili").addEventListener('change', (e) => addToSelect(e))

document.querySelector("#order-button").addEventListener("click", e => {
    if(document.querySelector("#pizza-select").value == "" || document.querySelector("#db").value == ""){
        alert("Válasszon ki egy pizzát a listából és írja be a darabszámot!")
    }
})