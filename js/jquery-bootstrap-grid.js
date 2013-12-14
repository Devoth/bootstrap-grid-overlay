function addGridOverlay () {
	// create a helper to view the grid
	var gridOverlay = $('<div class="gridOverlay"><div class="container"><div class="row"><\/div><\/div><\/div>');
	gridOverlay.appendTo('body');
	for (var i = 1; i <= 12; i++) {
		$('.gridOverlay .container .row').append('<div class="col-xs-1"><div class="grid"><\/div>');
	};
}
addGridOverlay();
