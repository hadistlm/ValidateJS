function validate(){
	var ale = document.getElementById('ale');
	var email = document.getElementById('in');
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if(document.fom.email.value == ""){
		document.fom.email.focus();
		document.getElementById('kata').innerHTML = "Oops!";
		document.getElementById('maksud').innerHTML = "Email Anda Belum Terisi";
		ale.classList.remove('hidden');
	}else if(!filter.test(email.value)){
	    document.fom.email.focus();
	    document.getElementById('kata').innerHTML = "Oops!";
		document.getElementById('maksud').innerHTML = "Email Anda Tidak Valid";
		ale.classList.remove('hidden');
	}else if(document.fom.kritik.value.trim() == ""){
		document.fom.kritik.focus();
		document.getElementById('kata').innerHTML = "Oops!";
		document.getElementById('maksud').innerHTML = "Saran Anda Belum Terisi";
		ale.classList.remove('hidden');
	}else if(document.fom.kritik.value.length <= 10){
		document.fom.kritik.focus();
		document.getElementById('kata').innerHTML = "Oops!";
		document.getElementById('maksud').innerHTML = "Saran Anda Harus Melebihi 10 karakter";
		ale.classList.remove('hidden');
	}else{
		ale.classList.add('hidden');
		$("#modal-id").modal('show');
		document.getElementById("isi").innerHTML = document.fom.email.value;
		document.getElementById("kri").innerHTML = document.fom.kritik.value;
		//document.fom.reset();
	}
}