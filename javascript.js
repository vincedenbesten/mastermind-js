var rows = 12;
var gues = [];
var addcolumn = 1;
var colors = ['red','blue','yellow','pink','green','orange'];
var answer =[colors[Math.floor(Math.random()*6)],colors[Math.floor(Math.random()*6)],colors[Math.floor(Math.random()*6)],colors[Math.floor(Math.random()*6)]];
console.log(answer);

function start() {
	rows = document.getElementById("myNumber").value;
	document.getElementById("Spelregels").style.display = "none";


	for(c =1; c <= rows ; c++) {
		var div = document.createElement("div");
		div.id = "nakijkrow_" + c;
		div.className = "nakijkrows";
		document.getElementById("results").appendChild(div);

		for(b = 1; b <= 4; b++) {
	    var div = document.createElement("div");
			div.className = "result";
	    div.id = "row_" + c + "bolletje_" + b;
	    document.getElementById("nakijkrow_" + c).appendChild(div);
	  }
	}

	for(row =1; row <= rows ; row++) {
		for(column = 1; column <= 4; column++) {
	    var div = document.createElement("div");
			div.className = "bolekes";
	    div.id = "row_" + row + "column_" + column;
	    document.getElementById("secenddis").appendChild(div);
	  }
	}
}

function checkgues() {
	console.log("test");
	for (var check = 0; check < 4; check++) {
		for(var i = 0; i< 4;i++){
			if(gues[check] == answer[i])
			document.getElementById('row_' + rows + 'bolletje_'+(check +1)).style.backgroundColor = "yellow";

		}
		if (gues[check] == answer[check]) {
			document.getElementById('row_' + rows + 'bolletje_'+(check +1)).style.backgroundColor = "Black";
		}

	}
	if (gues[0] == answer[0] && gues[1] == answer[1]&& gues[2] == answer[2]&& gues[3] == answer[3]) {
		alert("win!");
		location.reload();
	}
}
function addcolor(kleur) {
	gues.push(kleur)
	document.getElementById("row_" + rows + "column_" + addcolumn).style.backgroundColor = kleur;
	console.log(gues);
	if (addcolumn == 4) {
		checkgues();
		rows --;
		addcolumn = 1;
		gues = [];
		if(rows == 0){alert('lose');
		location.reload();}
	}else {
		addcolumn ++;
	}
}
