const patients = ['Everson', 'Botelho', 'Rodolfo'];

do {
  let list = 'Lista de Pacientes:\n';
  for (let i = 0; i < patients.length; i++) {
    list += `${i + 1}º ${patients[i]}\n`;
  }

  const option = prompt(`${list}\nEscolha uma opção:\n1. Novo paciente\n2. Consultar paciente\n3. Sair`);

  if (option === '1') {

    const newPatient = prompt('Digite o nome do novo paciente:');
    if (newPatient) {
      patients.push(newPatient);
      alert(`${newPatient} chegou, e agora esta na fila.`);
    }
  } else if (option === '2') {
    if (patients.length > 0) {
      const consultedPatient = patients.shift();
      alert(`Paciente consultado: ${consultedPatient}`);
    } else {
      alert('Amigo não tem nenhum paciente na fila.');
    }
  } else if (option === '3') {
    alert('O programa foi encerrado.');
    break;
  } else {
    alert('escolha uma das 3 opções anteriormente mostrada');
  }
} while (true);
