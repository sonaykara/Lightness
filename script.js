console.log(darkness);

slider = document.getElementById('darkness');

slider.addEventListener('change', updateDarkness);
slider.addEventListener('mousemove', updateDarkness);


function updateDarkness(){
	var darkness = slider.value;
	bodie = document.getElementById('page');
	console.log(bodie);
	console.log(darkness);
	newColor = `rgb(${darkness}, ${darkness}, ${darkness})`;
	bodie.style.backgroundColor = newColor;
	features = document.getElementsByClassName('features');
	for(i=0;i<features.length;i++){
		features[i].style.backgroundColor = newColor;
	}
}