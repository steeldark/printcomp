function xxx(name){
javascript:{
for(var NomedaEmpresa=name,conteudo="",targets=document.getElementById(atob("cHJpbnQtY29udGFpbmVy")).innerHTML,indices=[],elemento=atob("UFJPVE9DT0xP"),idx=targets.indexOf(elemento);-1!=idx;)indices.push(idx),idx=targets.indexOf(elemento,idx+1);for(var indicesEnd=[],elemento=atob("Q09OU1VMVEU="),idx=targets.indexOf(elemento);-1!=idx;)indicesEnd.push(idx),idx=targets.indexOf(elemento,idx+1);0==indicesEnd.length&&(indicesEnd[0]=targets.indexOf(atob("QVVURU5USUNBQ0FP"))+204);for(var newres=[],i=0;i<indices.length;i++)newres.push(targets.slice(indices[i],indicesEnd[i]));conteudo=(conteudo+=NomedaEmpresa+"<br><br>"+newres[0]).split('<div style="border-bottom: solid 1px;border-bottom-style: dashed;width: 100%;max-width: 240px;margin: 8px 0px;"></div>').join("<br>----------------------------------------<br>");for(indices=[],elemento=atob("VkFMT1IgQ09CUkFETw=="),idx=conteudo.indexOf(elemento);-1!=idx;)indices.push(idx),idx=conteudo.indexOf(elemento,idx+1);for(var indF=0;indF<indices.length;indF++)for(var temp="",indL=indices[indF]+13;indL<conteudo.indexOf("<br><br>",indices[indF]);indL++)temp+=conteudo[indL];conteudo=conteudo.replace(/<br> */g,"\n"),navigator.clipboard.writeText(conteudo);}
}
