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
                e.target.value = "sajt-200"
                break;
            case "mushroom":
                e.target.value = "sajt-200"
                break;
            case "chili":
                e.target.value = "sajt-200"
                break;
        }
    }
} 
document.querySelector("#cheese").addEventListener('change', (e) => addToSelect(e))
document.querySelector("#ham").addEventListener('change', (e) => addToSelect(e))
document.querySelector("#corn").addEventListener('change', (e) => addToSelect(e))
document.querySelector("#mushroom").addEventListener('change', (e) => addToSelect(e))
document.querySelector("#chili").addEventListener('change', (e) => addToSelect(e))