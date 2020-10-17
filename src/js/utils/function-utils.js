
const result = document.querySelector(".result");

function renderPreloader(isLoading) {
    const preloader = document.querySelector(".preloader");


    if (isLoading) {
        preloader.classList.add("preloader_activ");
        result.classList.add("result_displaynone")
    } else{
       preloader.classList.remove("preloader_activ");

        }
}

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









export {renderPreloader, renderNotFound};
