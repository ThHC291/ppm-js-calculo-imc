let buttonCalculate = document.getElementById('calculate');
let resultImc = document.getElementById('result-imc');
let resultStatus = document.getElementById('result-status');

buttonCalculate.addEventListener('click', () => {
  let height = document.getElementById('height').value;
  let weight = document.getElementById('weight').value;

  clearFields();  

  if( ! height > 0 && weight > 0 ) {
    alert('Campos altura e peso nao preenchidos corretamente!');
    return;
  };

  const imc = getImc(weight, height);
  const { status, color } = statusOf( imc );

  resultImc.innerText = 'IMC é: ' + imc.toFixed(2);
  resultStatus.innerText = status;
  resultStatus.classList.add( color );

  return;

});

const clearFields = () => {
  resultImc.innerText = '';
  resultStatus.innerText = '';
  resultStatus.className = '';
}

const getImc = ( weight, height ) => weight / (height * height);

const statusOf = ( imc ) => {

  if (imc < 16) return { status: 'MAGREZA GRAVE', color: 'red' };
  if (imc >= 16 && imc < 17) return { status: 'MAGREZA MODERADA', color: 'orange' };
  if (imc >= 17 && imc < 18.50) return { status: 'MAGREZA LEVE', color: 'blue' };
  if (imc >= 18.50 && imc < 25) return { status: 'SAUDÁVEL', color: 'green' };
  if (imc >= 25 && imc < 30) return { status: 'SOBREPESO', color: 'blue' };
  if (imc >= 30 && imc < 35) return { status: 'OBESIDADE GRAU I', color: 'orange' };
  if (imc >= 35 && imc < 40) return { status: 'OBESIDADE GRAU II', color: 'red' };

  return { status: 'OBESIDADE GRAU III', color: 'red' };
}
