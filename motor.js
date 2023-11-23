let  adulto_alcool = prompt('Quantos adultos consomem álcool?');
let adulto_zero_alcool = prompt('Quantos adultos não bebem álcool?'); 
let crianca =  prompt('Quantas crianças estarão presente no churrasco?');
let adultos = Number(adulto_alcool) + Number(adulto_zero_alcool);

let carne = Number(adultos) * 0.4 + Number(crianca) * 0.2;
let acompanhamentos = Number(crianca) * 0.2 + Number(adultos) * 0.2;
let cerveja = adulto_alcool * 2;
let refrigerante = Number(adultos) * 0.5 + Number(crianca) * 0.5;
let agua = Number(adultos) * 0.4 + Number(crianca) * 0.4;

alert(`A quantidade de carne necessária será de ${carne}KG`);
alert(`A quantidade de acompanhamentos necessária será de ${acompanhamentos}KG`);
alert(`A quantidade de cerveja necessária será de ${cerveja}L`);
alert(`A quantidade de refrigerante necessária será de ${refrigerante}L`);
alert(`A quantidade de água necessária será de ${agua}L`);
