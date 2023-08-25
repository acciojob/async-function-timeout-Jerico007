//your JS code here. If required.

let text = "";
let delay = 0;

let	btn  = document.getElementById("btn");
 btn.addEventListener("click" , Resolve);


async function Resolve(){
	text  = document.getElementById("text").value;
	delay = Number(document.getElementById("delay").value);
	let ans = await getMessage();
	 document.getElementById("output").innerHTML = ans;
}

function getMessage(){
	let prom = new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(text);
		},delay*1000);
	})

  let x = prom.then((data)=>{
		return data;
	});

	return x;
}


