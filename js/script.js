function showTable()
{
	x=document.getElementById("tbno").value;
	//convert string to number
	tableno=parseInt(x);
	
	showdiv=document.getElementById("showarea");
	
	txt="<table border='1'>";
	for(row=1;row<=10;row++)
	{
	
	txt+="<tr>";
	txt+="<td>"+tableno+"</td>";
	txt+="<td>X</td>";
	txt+="<td>"+row+"</td>";
	txt+="<td>=</td>";
	txt+="<td>"+(row*tableno)+"</td>";
	
	txt+="</tr>";
	}
	txt+="</table>";
	//alert(txt);
	showdiv.innerHTML=txt;
	
}
