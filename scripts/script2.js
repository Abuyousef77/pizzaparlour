
	function pingpongfn(){
		var num= document.forms["myform"]["number"].value;
		var array=[];
		if (num == "") {
			alert("Please enter a number ");
			return false;
		}
		if (num == 0) {
			alert("Enter a number > or =  1");
			return false;
		}
		for(var i=1; i<= num; i++){
			if (i % 3 === 0 && i % 5 === 0) {
				array.push("pingpong");
			}
			else if (i % 5 === 0) {
				array.push("pong");
			}
			else if (i % 3 === 0) {
				array.push("ping");
			}
			else {
				array.push(i);
			}
		}
		len= array.length;
		text = "<ul>";
		for (i = 0; i < len; i++) {
			text += "<li>" + array[i] + "</li>";
		}
		text += "</ul>";
		document.getElementById("result").innerHTML = text;
	};
