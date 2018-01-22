var rows = 12;

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

var gues = [];
var addrow = 12;
var addcolumn = 1;

if (addcolumn == 4) {
	
}

function addcolor(kleur) {
	gues.push(kleur)
	document.getElementById("row_" + addrow + "column_" + addcolumn).style.backgroundColor = kleur;
	if (addcolumn == 4) {
		addrow --;
		addcolumn = 1;
	}else {
		addcolumn ++;
	}
	console.log(gues);
}

/*function check(gues, answer) {
	if (gues.lengt < answer.length) {
		return false;
	}
}


var answercopy = []

for (var i = 0; i < answer.length; i++) {
	answercopy[i] = answer[i];
}


var checked = [];


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
