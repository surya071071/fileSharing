const dropZone=document.querySelector(".drop-zone")
const FileInput=document.querySelector("#fileinput")
const browseBtn=document.querySelector(".browseBtn")
dropZone.addEventListener("dragover",(e)=>{
   e.preventDefault();
    if(!dropZone.classList.contains("dragged")){
        dropZone.classList.add("dragged")
    }
})
dropZone.addEventListener("dragleave",()=>{
    dropZone.classList.remove("dragged")
})
dropZone.addEventListener("drop",(e)=>{
    e.preventDefault();
    dropZone.classList.remove("dragged");
    const files=e.dataTransfer.files
    console.log(files);
    if(files.length)
    {
        FileInput.files=files;
    }
})
browseBtn.addEventListener("click",()=>{
    FileInput.click()
})
const uploadFiles=()=>{
    const files=FileInput.files[0];
    const formData=new FormData()
    formData.append(files);
    const xhr=new XMLHttpRequest();
    xhr.onreadystatechange=()=>{
        console.log(xhr.readyState)
    }
}