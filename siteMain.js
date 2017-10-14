$(document).ready(function(){

	animation();

	function animation(){
		var count = 1;
		var ani = setInterval(function(){

			console.log(count);
			if (count < 10){
				var frame = 'sy000' + count.toString() + '.jpg'; 	
			}
			else{
				var frame = 'sy00' + count.toString() + '.jpg';
			}
			document.getElementById('pic').src = frame;
			if(count === 90){
				clearInterval(ani);
				window.location.href = 'https://google.com'
			}
			else{
				count++;
			}	
		}, 100);
	}

})