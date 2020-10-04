$(".seven-wonders").append('<div class="Petra1">Petra</div>')
$(".Petra1").append('<br>')
$(".seven-wonders").append('<div class="Petra2"></div>')
$(".Petra1").append('<img id="image-petra" src="file:///C:/Users/aqrab/OneDrive/Desktop/petra.jfif"/>')
$(".seven-wonders").append('<div class="Petra3" style="display: none">petra in jordan</div>')

$(".Petra1").append('<br>')
$(".Petra1").append('<button id="go-to">go to</button>')
$(".Petra3").append('<button id="return">return</button>')



$('#go-to').click(function(){
		$(".Petra1").hide()
		$(".Petra3").show()
})
	$('#return').click(function(){
		$(".Petra1").show()
		$(".Petra3").hide()
})


