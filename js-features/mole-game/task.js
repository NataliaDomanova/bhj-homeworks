
let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

for (let index = 1; index < 10; index++) {
 
	function getHole (index) {
		let holeClick = document.getElementById(`hole${index}`);
		return holeClick;
	}
		let hole = getHole (index);

	hole.onclick = function() {
		if (hole.className.includes("hole_has-mole") === true) {
			dead.textContent ++;
      
		} else {
			lost.textContent ++;
    }

    if (dead.textContent == 10 ) {
      alert ("Вы победили!"); 
      dead.textContent = 0;
      lost.textContent = 0;
    } 
    if (lost.textContent == 5) {
        alert ("Вы проиграли");
        dead.textContent = 0;
        lost.textContent = 0;
        }
    }

  }

