/*
 * These values will eventually be placed
 * onto the page during its creation,
 * or loaded from a back-end database through
 * an XHR call. 
*/
var randomNumberWithinRange = function(from, to) {
	return Math.round(from + (Math.random() * (to - from)));
};

var example_factors = [{
	label : 'Blood Count',
	score : randomNumberWithinRange(31,79),
	details : [
		{
			label : 'Hemoglobin',
			score : randomNumberWithinRange(31,79),
			value : (randomNumberWithinRange(12,18) + ' g/dL')
		},
		{
			label : 'Homatocrit',
			score : randomNumberWithinRange(31,79),
			value : (randomNumberWithinRange(37,52) + '%')
		},
		{
			label : 'Red Blood Count',
			score : randomNumberWithinRange(81,95),
			value : ((randomNumberWithinRange(55,65) / 10) + ' mil/cmm')
		},

		{
			label : 'White Cell Count',
			score : randomNumberWithinRange(81,95),
			value : (randomNumberWithinRange(11000,14000) + ' ccm')
		},
		{
			label : 'CD4 Count',
			score : randomNumberWithinRange(31,79)
		}]
},{
	label   : 'Total Cholesterol',
	score   : randomNumberWithinRange(31, 79),
	value : (randomNumberWithinRange(140,250) + ' mg/dL'),
	details : [
		{
			label : 'LDL',
			score : randomNumberWithinRange(31,79),
			value : (randomNumberWithinRange(80, 190) + ' mg/dL')
		},
		{
			label : 'HDL',
			score : randomNumberWithinRange(31,79),
			value : (randomNumberWithinRange(30,80) + ' mg/dL')
		},
		{
			label : 'Triglycerides',
			score : randomNumberWithinRange(31,79),
			value : (randomNumberWithinRange(90, 160) + ' mg/dL')
		}]
},{
	label : 'Waist Circumference',
	score : randomNumberWithinRange(31,79),
	value : (randomNumberWithinRange(32,40) + ' in.')
},{
	label : 'Weight',
	score : randomNumberWithinRange(31,79),
	value : (randomNumberWithinRange(140,250) + ' lbs.')
},{
	label : 'Happiness',
	score : randomNumberWithinRange(21,79)
},{
	label : 'Sleep',
	score : randomNumberWithinRange(21,79)
},{
	label : 'Medications',
	score : randomNumberWithinRange(21,79)
},{
	label : 'Glucose',
	score : randomNumberWithinRange(21,79),
},{
	label : 'Blood Pressure',
	score : randomNumberWithinRange(21,79),
},{
	label : 'Vaccinations',
	score : randomNumberWithinRange(21,79)
},{
	label : 'Alcohol, Drugs',
	score : randomNumberWithinRange(21,79)
},{
	label : 'Environment',
	score : randomNumberWithinRange(21,79)
},{
	label : 'Personal History',
	score : randomNumberWithinRange(21,79)
},{
	label : 'Family History',
	score : randomNumberWithinRange(21,79)
},{
	label : 'Exercise',
	score : randomNumberWithinRange(21,79),
	details : [
		{
			label : 'running',
			score : randomNumberWithinRange(31,79)
		}]
},{
	label : 'Caloric Intake',
	score : randomNumberWithinRange(31,79)
}];
var hg
window.onload = function(){
	hg = new HGraph({
		container   : document.getElementById("viz"),
		hoverevents : true,
		userdata    : {
			overallScore : randomNumberWithinRange(31,79),
			factors      : example_factors,	
		},
	});
	hg.initialize();

	$("#zoom_btn").click(function(){
		var s = hg.isZoomed;
		if(!s){
			$(this).find("span").addClass("zoomed");
			hg.zoomIn();
		}else{
			$(this).find("span").removeClass("zoomed");
			hg.zoomOut();
		}
	});
	
	$("#connector_btn").click(function(){
		var t = hg.toggleConnections();
		if(!t){
			$(this).find("span").addClass("toggled");
		} else {
			$(this).find("span").removeClass("toggled");
		}
	});
	
	$("#info_btn").click(function(){
		var r = $(this).hasClass("risen");
		
		if(!r){
			$("#info_panel").stop().animate({
				"bottom" : "0px",
			},300);
			$(this).addClass("risen");
		} else {
			$("#info_panel").stop().animate({
				"bottom" : "-300px",
			},300);
			$(this).removeClass("risen");
		}
		
	});
	
	$('.graph_nav_opt').on("mousedown",function(){
		$(this).removeClass("grad1").addClass("grad2");
	}).on("mouseup",function(){
		$(this).removeClass("grad2").addClass("grad1");
	});
	

}






