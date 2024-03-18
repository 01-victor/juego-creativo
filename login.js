const $submit = document.getElementById("submit"),
$password = document.getElementById("password"),
$nombre = document.getElementById("nombre"),
$visible = document.getElementById("visible");

document.addEventListener("change", (e)=>{
	if(e.target === $visible){
    if ($visible.checked === false) $password.type = "password";
    else $password.type = "text";
	}
});
document.addEventListener("click", (e)=>{
	if(e.target === $submit){
	if($password.value !== "" && $nombre.value !== ""){
		e.preventDefault();
		window.location.href = "menu.html";
	}
	}
});