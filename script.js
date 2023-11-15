//your JS code here. If required.
const list = document.getElementById("level");
let parent ;
let count = 0;
while(parent){
	parent = list.parentNode;
	count++;
}
console.log(count);
