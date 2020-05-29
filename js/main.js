
//sliders
var slider = document.getElementById('song-volume');
//var updateSliderValue = document.getElementById('slider-update-value');

noUiSlider.create(slider, {
	start: [ 50 ],
	behaviour: 'snap',
    connect: [true, false],
	range: {
		'min': [   0 ],
		'max': [ 100 ]
	}
});

/*slider.addEventListener('click', function(){
	slider.noUiSlider.updateSlider({
		tooltips: true,
		pips:null
	});
});*/

//check if slider is updating
/*slider.noUiSlider.on('update', function (values, handle) {
    rangeSliderValueElement.innerHTML = values[handle];
});*/

