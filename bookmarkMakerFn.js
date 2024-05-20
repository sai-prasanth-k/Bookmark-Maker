let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let submitBtnEl = document.getElementById("submitBtn");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let bookmarksListEl = document.getElementById("bookmarksList");

let formData = {
    name:"",
    url:""
}
siteNameInputEl.addEventListener("change", function(event){
    formData.name = event.target.value;
});
siteUrlInputEl.addEventListener("change", function(event){
    formData.url = event.target.value;
});

function validateBookmark(formData) {
    siteNameErrMsgEl.textContent = "";
    siteUrlErrMsgEl.textContent = "";
    let {name, url} = formData;
    if (name === "" && url === "") {
        siteNameErrMsgEl.textContent = "Required*";
        siteUrlErrMsgEl.textContent ="Required*";
    }else if (name === "") {
        siteNameErrMsgEl.textContent ="Required*";
    }else if (url === "") {
        siteUrlErrMsgEl.textContent ="Required*";
    }
}

bookmarkFormEl.addEventListener("submit", function(){
    validateBookmark(formData);
});

function addToSavedList(formData){
    validateBookmark(formData);
    let {name, url} = formData;
    
    let eachBookmarkListEl = document.createElement("li");
    eachBookmarkListEl.classList.add("site-container", "custom-list", "p-3", "mb-3");
    bookmarksListEl.appendChild(eachBookmarkListEl);
    
    let listContainerEl = document.createElement("div");
    listContainerEl.classList.add("list-custom");
    eachBookmarkListEl.appendChild(listContainerEl);
    
    let siteheadingEl = document.createElement("h1");
    siteheadingEl.classList.add("list-custom");
    siteheadingEl.textContent = name;
    listContainerEl.appendChild(siteheadingEl);
    
    let siteUrlEl = document.createElement("a");
    siteUrlEl.href = url;
    siteUrlEl.textContent = url;
    listContainerEl.appendChild(siteUrlEl);
}

submitBtnEl.addEventListener("click", function(event){
    event.preventDefault();
    addToSavedList(formData);
});