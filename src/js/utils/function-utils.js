
const result = document.querySelector(".result");

function renderNotFound(isLoading){
    const notFound = document.querySelector(".not-found");

    if(isLoading) {
        result.classList.add("result_displaynone");
        notFound.classList.add("not-found_activ");
    } else{
        result.classList.remove("result_displaynone");
        notFound.classList.remove("not-found_activ");
    }

}









export {renderNotFound};
