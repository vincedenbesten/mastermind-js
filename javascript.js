
for(row =1; row <= 12 ; row++) {
	for(column = 1; column <= 4; column++) {
    var div = document.createElement("div");
    div.style.backgroundColor="green";
    div.id = "row_" + row + "column_" + column;
    document.getElementById("secenddis").appendChild(div);
  }
}

/*var r = 0;
var c = 0;
function addcolor(kleur) {

  getElementById()
}



function check(gues, answer) {
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
