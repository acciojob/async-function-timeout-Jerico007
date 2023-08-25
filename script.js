//your JS code here. If required.

let text = document.getElementById("text");
let delay =document.getElementById("delay");
let output =  document.getElementById("output");
let	btn  = document.getElementById("btn");
 btn.addEventListener("click" , Resolve);


async function Resolve(){
	
	let ans = await getMessage();
	output.innerHTML = ans;
}

function getMessage(){
	let prom = new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(text.value);
		},Number(delay.value)*1000);
	})

  let x = prom.then((data)=>{
		return data;
	});
	

	return x;
}


