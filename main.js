class Aluno {
    constructor() {
        this.ObjArray = [];
    };

    lerDados() {
        let estud = {};
        estud.nome = document.getElementById("nomeAluno").value;
        estud.idade = document.getElementById("idadeAluno").value;
        estud.email = document.getElementById("emailAluno").value;
        estud.cpf = document.getElementById("cpfAluno").value;
        return estud;
    };

    validarCampos(aluno) {
        let alerta = "";
        if (aluno.nome == "") {
            alerta += "-Digite o Nome do Aluno\n";
        };
        if (aluno.idade == "") {
            alerta += "-Digite a Idade do Aluno\n";
        };
        if (aluno.email == "") {
            alerta += "-Digite o E-mail do Aluno\n";
        };
        if (aluno.cpf == "") {
            alerta += "-Digite o CPF do Aluno\n";
        }
        if (alerta != "") {
            alert(alerta)
            return false;
        }
        return true;
    };

    cancelar() {
        document.getElementById("nomeAluno").value = "";
        document.getElementById("idadeAluno").value = "";
        document.getElementById("emailAluno").value = "";
        document.getElementById("cpfAluno").value = "";
    };

    adicionar(aluno) {
        this.ObjArray.push(aluno);
        this.cancelar();
    };

    inserirCampos() {
        let tbody = document.getElementById("tbody");
        tbody.innerText = "";

        for (let i = 0; i < this.ObjArray.length; i++) {
            let tr = tbody.insertRow();

            let td_nome = tr.insertCell();
            let td_idade = tr.insertCell();
            let td_email = tr.insertCell();
            let td_cpf = tr.insertCell();

            td_nome.innerText = this.ObjArray[i].nome;
            td_idade.innerText = this.ObjArray[i].idade;
            td_email.innerText = this.ObjArray[i].email;
            td_cpf.innerText = this.ObjArray[i].cpf;

            let imgEdit = document.createElement("img");
            imgEdit.src = "editar.png";
            td_acao.appendChild(imgEdit);
            let imgExc = document.createElement("img");
            imgExc.src = "excluir.png";
            td_acao.appendChild(imgExc);
        };
    };

    cadastrar() {
        let alunoSalvo = this.lerDados();
        if (this.validarCampos(alunoSalvo)) {
            this.adicionar(alunoSalvo);
            this.inserirCampos();
        };
    };

};

let aluno = new Aluno();