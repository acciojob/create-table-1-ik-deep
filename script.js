function insert_Row() {
    //Write your code here
	const table = document.getElementById("sampleTable");
  let newtr = document.createElement("tr");
	let td1 = document.createElement("td");
	td1.innerText="New Cell1"
   let td2 = document.createElement("td");
	td2.innerText = "New Cell2"
// const row = `<td>New Cell1</td> 
//   <td>New Cell2</td>`;
// newtr.innerHTML=row;
	newtr.appendChild(td1);
	newtr.appendChild(td2);
table.prepend(newtr) ;
  
  
}
