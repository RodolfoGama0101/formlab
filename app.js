document.getElementById('gerar-cpf').addEventListener('click', function () {
    const cpf = gerarCPF();
    document.getElementById('cpf').value = cpf;

    copiarCPF();
});

document.getElementById('gerar-nome').addEventListener('click', function () {
    nomeAleatorio().then(nome => {
        document.getElementById('nome').value = nome;

        copiarNome();
    });
});

document.getElementById('gerar-nome-sobrenome').addEventListener('click', function () {
    nomeSobrenomeAleatorio().then(nomeCompleto => {
        document.getElementById('nome').value = nomeCompleto;

        copiarNome();
    });
});

document.getElementById('gerar-telefone').addEventListener('click', function () {
    const telefone = gerarNumTelefone();
    document.getElementById('telefone').value = telefone;

    copiarTelefone();
});

document.getElementById('gerar-telefone-celular').addEventListener('click', function () {
    const telefone = gerarNumTelefoneCelular();
    document.getElementById('telefone').value = telefone;

    copiarTelefone();
});

function gerarCPF() {
    const gerarDigito = (base, fator) => {
        let soma = 0;
        for (let i = 0; i < base.length; i++) {
            soma += parseInt(base[i]) * fator--;
        }
        const resto = soma % 11;
        return resto < 2 ? '0' : (11 - resto).toString();
    };

    let cpf = '';
    for (let i = 0; i < 9; i++) {
        cpf += Math.floor(Math.random() * 10);
    }

    cpf += gerarDigito(cpf, 10);
    cpf += gerarDigito(cpf, 11);

    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function copiarCPF() {
    var cpfInput = document.getElementById('cpf');
    cpfInput.select();
    cpfInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(cpfInput.value);

    document.getElementById('pop-up-cpf').style.display = 'block';
    setTimeout(function () {
        document.getElementById('pop-up-cpf').style.display = 'none';
    }, 3000);
}

function copiarNome() {
    var nomeInput = document.getElementById('nome');
    nomeInput.select();
    nomeInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(nomeInput.value);

    document.getElementById('pop-up-nome').style.display = 'block';
    setTimeout(function () {
        document.getElementById('pop-up-nome').style.display = 'none';
    }, 3000);
}

async function nomeAleatorio() {
    try {
        const response = await fetch('nomes.json');
        const data = await response.json();
        const nomes = data.nomes;
        const nome = nomes[Math.floor(Math.random() * nomes.length)];
        return nome;
    } catch (error) {
        console.error('Erro ao carregar o arquivo JSON:', error);
    }
}

async function nomeSobrenomeAleatorio() {
    try {
        const response = await fetch('nomes.json');
        const data = await response.json();
        const nomes = data.nomes;
        const sobrenomes = data.sobrenomes;
        const nome = nomes[Math.floor(Math.random() * nomes.length)];
        const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
        return `${nome} ${sobrenome}`;
    } catch (error) {
        console.error('Erro ao carregar o arquivo JSON:', error);
    }
}

function gerarNumTelefone() {
    const ddd = Math.floor(Math.random() * 90) + 10; 
    const numero = Math.floor(Math.random() * 90000000) + 10000000; 
    return `(${ddd}) ${numero.toString().replace(/(\d{4})(\d{4})/, "$1-$2")}`;
}

function gerarNumTelefoneCelular() {
    const ddd = Math.floor(Math.random() * 90) + 10; 
    const numero = Math.floor(Math.random() * 90000000) + 900000000; 
    return `(${ddd}) ${numero.toString().replace(/(\d{5})(\d{4})/, "$1-$2")}`;
}

function copiarTelefone() {
    var telefoneInput = document.getElementById('telefone');
    telefoneInput.select();
    telefoneInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(telefoneInput.value);

    document.getElementById('pop-up-telefone').style.display = 'block';
    setTimeout(function () {
        document.getElementById('pop-up-telefone').style.display = 'none';
    }, 3000);
}