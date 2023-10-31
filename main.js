class Aluno {
    constructor() {
        this.id = 1;
        this.ObjArray = [];
        this.idAtualizar = null;
    };

    lerDados() {
        let estud = {};
        estud.id = this.id;
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

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_idade = tr.insertCell();
            let td_email = tr.insertCell();
            let td_cpf = tr.insertCell();
            let td_acao = tr.insertCell();

            td_id.innerText = this.ObjArray[i].id;
            td_nome.innerText = this.ObjArray[i].nome;
            td_idade.innerText = this.ObjArray[i].idade;
            td_email.innerText = this.ObjArray[i].email;
            td_cpf.innerText = this.ObjArray[i].cpf;

            let imgEdit = document.createElement("img");
            imgEdit.src = "edit.png";
            imgEdit.setAttribute(
                "onclick",
                "aluno.editar(" + JSON.stringify(this.ObjArray[i]) + ")"
            )
            td_acao.appendChild(imgEdit);

            let imgExc = document.createElement("img");
            imgExc.src = "delete.png";
            imgExc.setAttribute(
                "onclick",
                "aluno.excluir(" + this.ObjArray[i].id + ")"
            );
            td_acao.appendChild(imgExc);
        };
    };

    cadastrar() {
        let alunoSalvo = this.lerDados();
        if (this.validarCampos(alunoSalvo)) {
            if (this.idAtualizar == null) {
                this.adicionar(alunoSalvo);
                this.id++;
            } else {
                console.log(this.idAtualizar);
                this.atualizar(this.idAtualizar, alunoSalvo);
            };
        };
        this.inserirCampos();
    };

    excluir(id) {
        if (confirm("DESEJA REALMENTE EXCLUIR O PRODUTO?")) {
          let tbody = document.getElementById("tbody");
          for (let i = 0; i < this.ObjArray.length; i++) {
            if (this.ObjArray[i].id == id) {
              this.ObjArray.splice(i, 1); //Exclui o valor da array na posição (i, 1)
              tbody.deleteRow(i);
            };
          };
        };
      };

    editar(novoAluno) {
        this.idAtualizar = novoAluno.id;
        document.getElementById("nomeAluno").value = novoAluno.nome;
        document.getElementById("idadeAluno").value = novoAluno.idade;
        document.getElementById("emailAluno").value = novoAluno.email;
        document.getElementById("cpfAluno").value = novoAluno.cpf;
        document.getElementById("cadAluno").innerHTML = "ATUALIZAR";
    };

    atualizar(id, aluno) {
        for (let i = 0; i < this.ObjArray.length; i++) {
            if (this.ObjArray[i].id == id) {
                this.ObjArray[i].nome = aluno.nome;
                this.ObjArray[i].idade = aluno.idade;
                this.ObjArray[i].email = aluno.email;
                this.ObjArray[i].cpf = aluno.cpf;
            };
        };
    };
};

let aluno = new Aluno();