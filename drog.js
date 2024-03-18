const boxex = document.querySelectorAll(".box"),
image = document.querySelector(".image");

boxex.forEach((box) => {
	box.addEventListener("dragover", (e) =>{
		e.preventDefault();
		console.log("dragging");
		box.classList.add("hoverred");
	});
	box.addEventListener("dragleave", () =>{
	box.classList.remove("hoverred");
	});
	box.addEventListener("drop", () =>{
    box.appendChild(image);		
	box.classList.remove("hoverred");
	});
});

