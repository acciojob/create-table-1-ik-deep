function insert_Row() {
    //Write your code here
	const table = document.getElementById("sampleTable");
  let newtr = document.createElement("tr");
const row = `<td>New Cell1</td> 
  <td>New Cell2</td>`;
newtr.innerHTML=row;
table.prepend(newtr) ;
  
  
}
