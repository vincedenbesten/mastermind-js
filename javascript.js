var rows = 12;
var gues = [];
var addcolumn = 1;
var colors = ['red','blue','yellow','pink','green','orange'];
var answer =[colors[Math.floor(Math.random()*6)],colors[Math.floor(Math.random()*6)],colors[Math.floor(Math.random()*6)],colors[Math.floor(Math.random()*6)]];
var checkrow = 1;
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
	if (gues[0,1,2,3] == answer[0,1,2,3]) {
		alert("win!");
	}else {
	for (var check = 0; check < 4; check++) {
		for(var i = 0; i< 4;i++){
			if(gues[check] == answer[i])
			document.getElementById('row_' + rows + 'bolletje_'+(check +1)).style.backgroundColor = "navy";

		}
		if (gues[check] == answer[check]) {
			document.getElementById('row_' + rows + 'bolletje_'+(check +1)).style.backgroundColor = "Black";
		}

	}
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
		guescopy = gues;
		gues = [];
		console.log(gues);
		console.log(guescopy);
	}else {
		addcolumn ++;
	}
}


/*

for (var i = 0; i < answer.length; i++) {
	answercopy[i] = answer[i];
}

for (var i = 0; i < gues.length; i++) {
	if (answer[i] == gues[i]) {
		checked[i] = 2;
	}
}


for (var i = 0; i < gues.length; i++) {
	for (var j = 0; j < answer.length; i++) {
		if (gues[i] == answercopy[j]) {
			checked[i] = 1;
			answercopy[i] = -1;
		} else {
			checked[i] = 0;
		}
	}
}*/
