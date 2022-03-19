function xxx(){
var pTaxaConv = ['1.00','1.00','2.00','2.00','2.00','2.00','2.00','2.00','2.00','2.00','2.00'];
var pValues = [];
var conteudo = '';
var pTotal = 0;
var pValorPago = 0;
pValorServico = 0;
var pTroco = 0;
var pHeader = '<br>----------------------------------------<br>GAMENET - PAGAMENTO DE CONTAS<br>TEL: (37)99953-5519<br>CARMO DO CAJURU-MG CIDADE NOVA<br>----------------------------------------<br>';
/*function pad(b,n){return b+'                                        '.slice(n.toString().length+b.toString().length)+n;}*/

function pad(str, padDIR, partspt = '-', padsize = 41, pad = ' ') {
	var padding = Array(padsize).join(pad);
	if (typeof str === 'undefined') return pad;
	if (padDIR === 'L') { return (padding + str).slice(-padding.length);} 
	if (padDIR === 'R') { return (str + padding).substring(0, padding.length);}
	if (padDIR === 'C') { var pDL = padsize - str.length; if(pDL & 1) pDL += 1; padding = Array(pDL / 2).join(pad); return padding + str + padding;}
	if (padDIR === 'M') { var parts = str.split(partspt); for (var a = 1; a < parts.length; a++){ parts[0] += padding.slice(str.length)+parts[a];} return parts[0];}
}

function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}
var targets =  document.body.cloneNode(true).innerHTML;
for(var indices=[],elemento="PROTOCOLO",idx=targets.indexOf(elemento);-1!=idx;)indices.push(idx),idx=targets.indexOf(elemento,idx+1);
for(var indicesEnd=[],elemento="CONSULTE",idx=targets.indexOf(elemento);-1!=idx;)indicesEnd.push(idx),idx=targets.indexOf(elemento,idx+1);
if(indicesEnd.length == 0) {indicesEnd[0] = targets.indexOf('AUTENTICACAO') + 204;}
var newres=[];
for( var i = 0; i < indices.length; i++ ) { 
   newres.push(targets.slice(indices[i],indicesEnd[i]));
} 
var unique = newres.filter(onlyUnique);
for( var i = 0; i < unique.length; i++ ) { 
   conteudo += pHeader + unique[i];
} 
conteudo = conteudo.split('<div style="border-bottom: solid 1px;border-bottom-style: dashed;width: 100%;max-width: 240px;margin: 8px 0px;"></div>').join('<br>----------------------------------------<br>');
for(var indices=[],elemento="VALOR COBRADO",idx=conteudo.indexOf(elemento);-1!=idx;)indices.push(idx),idx=conteudo.indexOf(elemento,idx+1);
for(var indF = 0; indF < indices.length; indF++) {
	var temp = '';
	for(var indL = indices[indF] + 13; indL < conteudo.indexOf('<br><br>',indices[indF]); indL++){
		temp += conteudo[indL];
	}
	temp = temp.replace(/ /g,'');
	temp = temp.replace(',','.');
	pValues.push(temp);
	if(Number(temp) <= 100.0) pValues.push(pTaxaConv[0]);
	if(Number(temp) > 100.0 & Number(temp) < 200.0) pValues.push(pTaxaConv[1]);
	if(Number(temp) >= 200.0 & Number(temp) < 300.0) pValues.push(pTaxaConv[2]);
	if(Number(temp) >= 300.0 & Number(temp) < 400.0) pValues.push(pTaxaConv[3]);
	if(Number(temp) >= 400.0 & Number(temp) < 500.0) pValues.push(pTaxaConv[4]);
	if(Number(temp) >= 500.0 & Number(temp) < 600.0) pValues.push(pTaxaConv[5]);
	if(Number(temp) >= 600.0 & Number(temp) < 700.0) pValues.push(pTaxaConv[6]);
	if(Number(temp) >= 700.0 & Number(temp) < 800.0) pValues.push(pTaxaConv[7]);
	if(Number(temp) >= 800.0 & Number(temp) < 900.0) pValues.push(pTaxaConv[8]);
	if(Number(temp) >= 900.0 & Number(temp) < 1000.0) pValues.push(pTaxaConv[9]);
	if(Number(temp) >= 1000.0) pValues.push(pTaxaConv[10]);
}
conteudo = conteudo.replace(/<br> */g,'\n');
conteudo += '\n----------------------------------------\n'+pad('TAXA DE CONVENIENCIA','C')+'\n';
for (var x=0; x < pValues.length; x++) {
	pTotal += Number(pValues[x]);
	pValues[x] = pValues[x].replace('.',',');
	
	if(x%2 == 0) conteudo += pad(pad('VALOR: R$ -' + pValues[x],'M','-',18) + '- TAXA: R$ '+ pValues[x+1],'M') + '\n';
}
pValorPago = prompt("Insira o Valor Pago Pelo Cliente?");
pValorServico = prompt("Insira o Valor Cobrado Pelo Serviço?");
if(pValorPago == '') pValorPago = 0.0;
if(pValorServico == '') pValorServico = 0.0;
pValorPago = parseFloat(pValorPago.toString().replace(',','.'));
pValorServico = parseFloat(pValorServico.toString().replace(',','.'));
pTotal = pTotal + pValorServico;
pTroco = pValorPago - pTotal;
if(pValorPago == '') pTroco = 0.0;
pValorPago = pValorPago.toFixed(2);
pValorServico = pValorServico.toFixed(2);
pTotal = pTotal.toFixed(2);
pTotal = pTotal + (Number(pTotal) % 1 === 0 ? '.00' : '');
pTroco = pTroco.toFixed(2);
conteudo += pad('VALOR EM DINHEIRO: -R$ ' + pValorPago.toString().replace('.',','),'M') + '\n' + pad('VALOR DO SERVIÇO: -R$ ' + pValorServico.toString().replace('.',','),'M') + '\n' + pad('VALOR TOTAL COBRADO: -R$ ' + pTotal.toString().replace('.',','),'M') + '\n' + pad('TROCO: -R$ ' + pTroco.toString().replace('.',','),'M') + '\n----------------------------------------\n';
navigator.clipboard.writeText(conteudo);
}