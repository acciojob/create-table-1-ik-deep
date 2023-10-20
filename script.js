function insert_Row() {
    //Write your code here
	const table = document.getElementById("sampleTable");
  let newtr = document.createElement("tr");
const row = `<td>New cell1</td> 
  <td>New cell2</td>`;
newtr.innerHTML=row;
table.prepend(newtr) ;
  
  
}
