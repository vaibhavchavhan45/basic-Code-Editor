function run(){
	var code = document.getElementById("code").value;
	var result_box = document.getElementById("result");
	result_box.innerHTML = code;

	var hide_fieldset1 = document.getElementById("firstfieldset");
	hide_fieldset1.style.display = "none";

	var show_fieldset2 = document.getElementById("secondfieldset");
	show_fieldset2.style.display = "block";
	show_fieldset2.setAttribute("class","animate__animated animate__slideInRight");

	var hide_first_button = document.getElementById("runbtn");
	hide_first_button.style.display = "none";

	var show_second_button = document.getElementById("codebtn");
	show_second_button.style.display = "block";
}

function returns(){
	var hide_fieldset2 = document.getElementById("secondfieldset");
	hide_fieldset2.style.display = "none";

	var show_fieldset1 = document.getElementById("firstfieldset");
	show_fieldset1.style.display = "block";
	show_fieldset1.setAttribute("class","animate__animated animate__slideInLeft");

	var hide_second_button = document.getElementById("codebtn");
	hide_second_button.style.display = "none";

	var show_first_button = document.getElementById("runbtn");
	show_first_button.style.display = "block";
}