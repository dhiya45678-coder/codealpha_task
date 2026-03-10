const input = document.getElementById("imageInput");
const gallery = document.getElementById("gallery");

input.addEventListener("change", function(){

const file = this.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload = function(e){

const card = document.createElement("div");
card.className = "card";

const img = document.createElement("img");
img.src = e.target.result;

const deleteBtn = document.createElement("button");
deleteBtn.className = "delete-btn";
deleteBtn.innerHTML = "✖";

deleteBtn.onclick = function(){
card.remove();
}

card.appendChild(img);
card.appendChild(deleteBtn);

gallery.appendChild(card);

}

reader.readAsDataURL(file);

});