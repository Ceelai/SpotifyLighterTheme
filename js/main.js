
//sliders
var slider = document.getElementById('song-volume');

noUiSlider.create(slider, {
    start: [ 90 ],
    connect: [true, false],
	range: {
		'min': [   0 ],
		'max': [ 100 ]
	}
});

//check if slider is updating
/*slider.noUiSlider.on('update', function (values, handle) {
    rangeSliderValueElement.innerHTML = values[handle];
});*/

