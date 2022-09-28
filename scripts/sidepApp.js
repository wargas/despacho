var app = angular.module('spApp', ['angularTrix', 'ngCookies', 'ui.bootstrap', 'ui.toggle', 'ngSanitize']);

//Controller Principal
app.controller('spCtrl', function ($scope, $filter, $cookies) {

    //Seção do Usuário
    $scope.nomeUsuario = "Wargas Delmondes Teixeira";
    $scope.cargoUsuario = "";
    $scope.matrUsuario = "";
    $scope.orgaoUsuario = "";
    $scope.acordoInternacional = false;
    $scope.msgUsuario = [];

    //Seção do Benefício
    $scope.especies = [
        { codigo: '21', descricao: 'Pensão por Morte Urbana' },
        { codigo: '21', descricao: 'Pensão por Morte Rural' },
        { codigo: '93', descricao: 'Pensão por Morte por Acidente de Trabalho' },
        { codigo: '25', descricao: 'Auxílio-Reclusão Urbano' },
        { codigo: '25', descricao: 'Auxílio-Reclusão Rural' },
        { codigo: '31', descricao: 'Benefício por Incapacidade Temporária Urbano' },
        { codigo: '31', descricao: 'Benefício por Incapacidade Temporária Rural' },
        { codigo: '36', descricao: 'Auxílio-Acidente Previdenciário' },
        { codigo: '94', descricao: 'Auxílio-Acidente por Acidente de Trabalho' },
        { codigo: '41', descricao: 'Aposentadoria por Idade Urbana' },
        { codigo: '41', descricao: 'Aposentadoria por Idade Rural' },
        { codigo: '42', descricao: 'Aposentadoria por Tempo de Contribuição' },
        { codigo: '46', descricao: 'Aposentadoria Especial' },
        { codigo: '57', descricao: 'Aposentadoria Especial do Professor' },
        { codigo: '80', descricao: 'Salário-Maternidade Urbano' },
        { codigo: '80', descricao: 'Salário-Maternidade Rural' },
        { codigo: '87', descricao: 'Benefício Assistencial ao Deficiente' },
        { codigo: '88', descricao: 'Benefício Assistencial ao Idoso' },
        { codigo: 'CTC', descricao: 'Certidão de Tempo de Contribuição' }
    ];
    $scope.tipoIdentificador = "Benefício";
    $scope.tamanhoIdentificador = 13;
    $scope.especieSelecionada = $scope.especies[10];
    $scope.especieExibicao = "E/NB";
    $scope.numeroBeneficio = new URLSearchParams(location.search).get('nb');
    $scope.numeroBeneficioValido = false;
    $scope.nomeInteressado = new URLSearchParams(location.search).get('name');
    $scope.tipoDespacho = "Indeferimento";
    $scope.dataDespacho = $filter('date')(new Date(), "dd 'de' MMMM 'de' yyyy");
    $scope.conteudoEditor = "";

    //Campos do(s) Motivo(s)
    $scope.itensMotivoDespacho = {
        chkQualSeg: false,
        chkComprDepend: false,
        chkNaoFiliadoRGPS: false,
        chkComprRestabUniao: false,
        chkComprRural: false,
        chkFaltaCarencia: false,
        chkNaoDeficienteLC142: false,
        chkNaoReqMinimosLC142: false,
        chkFaltaCarenciaAposPQS: false,
        chkRendaSuperior: false,
        chkACPRenda: false,
        chkNaoPrisao: false,
        chkRegimePrisao: false,
        chkAposSoltura: false,
        chkIncluirTextoRenovacaoCarcere: false,
        chkNaoComparecimentoPericia: false,
        chkPericiaContraria: false,
        chkDIIAnteriorFiliacao: false,
        chkFaltaIdade: false,
        chkFaltaTempo: false,
        chkOutroBeneficio: false,
        chkNaoNovasRegrasEC103: false,
        chkNaoFiliado: false,
        chkNaoFatoGerador: false,
        chkNaoAfastamento: false,
        chkAntesParto: false,
        chkJaRecebeu: false,
        chkAdocaoMaior12Anos: false,
        chkNaoConjugeCompanheiro: false,
        chkFaltaCadunico: false,
        chkNaoDeficiente: false,
        chkNaoCompareceuAvaliacao: false,
        chkDependNaoComprovado: false,
        chkNaoComprRPPS: false,
        chkPeriodosJaUtilizados: false,
        chkNaoApresentacaoDadosBasicos: false,
        chkJaPossuiCTC: false,
        chkIncluirTextoEmissaoCTC: false,
        chkNaoCessacaoAuxilio: false,
        chkMotivoConc1: true,
        chkMotivoConc2: true,
        chkMotivoConc3: true,
        chkMotivoConc4: true,
        chkMotivoAn1: false,
        chkMotivoAn2: false,
        chkMotivoAn3: false,
        chkMotivoAn4: false,
        chkMotivoConcApos1: false,
        chkMotivoConcApos2: false,
        chkMotivoConcApos3: false,
        chkDependComprCompanheiro: false,
        chkDependComprConjuge: false,
        chkDependComprExConjuge: false,
        chkDependComprFilhoMaior: false,
        chkDependComprFilhoMenor: false,
        chkDependComprPaiMaeIrmao: false,
        chkDependNaoComprCompanheiro: false,
        chkDependNaoComprConjuge: false,
        chkDependNaoComprExConjuge: false,
        chkDependNaoComprFilhoMaior: false,
        chkDependNaoComprFilhoMenor: false,
        chkDependNaoComprPaiMaeIrmao: false,
        txtDataQualSeg: "",
        txtTipoDependente: "Companheiro(a)",
        txtCarencia: "",
        txtCarenciaAposPQS: "",
        txtRenda: "",
        txtTempoAnos: "",
        txtTempoMeses: "",
        txtTempoDias: "",
        txtOutroBeneficio: "",
        txtTipoInstituidor: "Em Atividade",
        txtBenefInstituidor: "",
        txtTipoAposTempo: "Nova",
        txtTipoRegraTransicao: "Pontos",
        txtTipoAposAntiga: "Integral",
        txtTipoFatoGerador: "Parto",
        txtOrgaoDestinatario: "",
        txtCTCAnterior: "",
        txtAuxilioEmManutencao: ""
    };
    //Campos do(s) Vínculo(s) Empregatício(s)
    $scope.itensVinculo = {
        chkVinculo: false,
        chkDocCTPS: false,
        chkDocFRE: false,
        chkDocContrato: false,
        chkDocAcordo: false,
        chkDocRescisao: false,
        chkDocFGTS: false,
        chkDocRecibos: false,
        chkDocPonto: false,
        chkDocCTC: false,
        chkDocATC: false,
        chkDocOutro: false,
        chkExtempCTPS: false,
        chkExtempCNIS: false,
        chkVicioDoc: false,
        chkAbaixoMinimo:false,
        chkConcomitanciaDebito: false,
        chkAIExtratoOL: false,
        chkAITempoEUA: false,
        chkAITempoEUANaoPrevisto: false,
        chkAITempoItalia: false,
        chkAITempoItaliaNaoPrevisto: false,
        txtVinculoConsiderado: "Não há",
        txtDocCTC: "",
        txtDocATC: "",
        txtOutroDocumento: ""
    };
    //Campos das Contribuições
    $scope.itensContribuicao = {
        chkContribuicao: false,
        txtCIConsiderado: "Não há",
        chkCIAtraso: false,
        chkCIAbaixoMinimo: false,
        chkCIGFIPExtemporanea: false,
        chkCIPlanoSimplificado: false,
        chkCIAposDER: false,
        chkCIAtrasoNaoCarencia: false,
        txtCIAtraso: "",
        txtCIAbaixoMinimo: "",
        txtCIGFIPExtemporanea: "",
        txtCIPlanoSimplificado: "",
        txtCIAposDER: "",
        txtCIAtrasoNaoCarencia: "",
        txtFacultativoConsiderado: "Não há",
        chkFacFBRNaoValidado: false,
        chkFacAbaixoMinimo: false,
        chkFacAtraso: false,
        chkFacAtrasoAposPQS: false,
        chkFacPlanoSimplificado: false,
        chkFacConcomitante: false,
        chkFacAposDER: false,
        chkFacAtrasoNaoCarencia: false,
        chkCIFacDispensaComplementacao: false,
        chkCIFacDispensaAlteracaoDER: false,
        txtFacFBRNaoValidado: "",
        txtFacAbaixoMinimo: "",
        txtFacAtraso: "",
        txtFacAtrasoAposPQS: "",
        txtFacPlanoSimplificado: "",
        txtFacConcomitante: "",
        txtFacAposDER: "",
        txtFacAtrasoNaoCarencia: ""
    };
    //Campos da Atividade Especial
    $scope.itensEspecial = {
        chkEspecial: false,
        chkEnqCatProfissional: false,
        chkEnqAgenteNocivo: false,
        chkEnqNbAnterior: false,
        chkNaoEnqCatProfissional: false,
        chkNaoEnqAgenteNocivo: false,
        chkNaoEnqNbAnterior: false,
        chkNaoEnqAgenteNocivoAusente: false,
        txtEspecialConsiderado: "Não há"
    };
    //Campos da Atividade Rural
    $scope.itensRural = {
        chkRural: true,
        txtRuralConsiderado: "Não há",
        chkSemDocumentos: false,
        chkSemAutodeclaracao: false,
        chkNaoCompoeGrupoFamiliar: false,
        chkMaisQuatroModulos: false,
        chkAtividadeRemunerada: false,
        chkRemuneradaTurismoEmpregados: false,
        chkNaoParticipaAtividade: false,
        chkOutorgaIrregular: false,
        chkNaoIndenizado: false
    };
    //Campos das Exigências
    $scope.itensExigencia = {
        chkExigencia: true,
        txtExigenciaConsiderado: "Não há",
        txtExigenciaParcialNaoCumprida: "",
        txtExigenciaNaoCumprida: "Não apresentou"
    };
    //Campos dos Procedimentos
    $scope.itensProcedimento = {
        chkProcedimento: false,
        chkAvaliacaoSocial: false,
        chkAvaliacaoPericia: false,
        chkAvaliacaoConjunta: false,
        chkAusenciaVagasAgendamento: false,
        chkJustAdministrativa: false,
        chkEncontroContas: false,
        txtAvaliacaoSocial: "Agendada",
        txtAvaliacaoPericia: "Agendada",
        txtAvaliacaoConjunta: "Realizada Negativa",
        txtJustAdministrativa: "Desnecessária",
        txtEncontroContas: "CN",
        txtValorEncontroContas: ""
    };
    //Campos dos Outros
    $scope.itensOutro = {
        chkOutro: false,
        chkAproveitamentoParcial: false,
        chkAutenticacaoDispensada: false,
        chkACP: false,
        chkACPRenda: false,
        chkQualidadeDesemprego: false,
        chkQualidadeNaoDesemprego: false,
        chkQualidade120Contribuicoes: false,
        chkQualidadeNao120Contribuicoes: false,
        chkQualidadeAuxAcidente: false,
        chkCessacaoBeneficio: false,
        chkConsulta: false,
        chkAlteracaoEspecie: false,
        chkAlteracaoNaoEspecie: false,
        chkAlteracaoDER: false,
        chkAlteracaoNaoDER: false,
        chkDERNaoAlterada: false,
        chkProporcional: false,
        chkNaoProporcional: false,
        chkDesistenciaNB: false,
        chkProcessoAnterior: false,
        chkMinimoPBC: false,
        chkInstituidorBPC: false,
        chkSolicitarResiduo: false,
        chkPagtoPosObito: false,
        txtACP: "",
        txtProcessoAnterior: "",
        txtConsultaOrgao: "",
        txtConsultaResposta: "",
        txtBeneficioCessado: "",
        txtValorConsignado: "",
        txtPeriodosAproveitados: ""
    };

    $scope.itensDespacho = {
        motivo: "Trata-se de benefício de " + $scope.especieSelecionada.descricao + " YYYYY em razão de ZZZZZ",
        vinculos: "Os vínculos registrados em CTPS e/ou constantes no CNIS foram",
        contribuicoes: "As contribuições como Contribuinte Individual/Facultativo foram",
        especial: "Não há período de atividade especial a ser reconhecido",
        rural: "Não houve o reconhecimento de período de atividade rural",
        exigencias: "Houve a formulação de exigências, que foram",
        procedimentos: "Foi autorizado o processamento de Justificação Administrativa, que foi",
        outros: "Outras informações personalizadas do Usuário",
        conclusao: "Benefício indeferido, e a tarefa correspondente encerrada, nesta data."
    };

    $scope.carregarInicio = function () {
        $scope.buscarDadosUsuario();
        $scope.montarDespacho();
    };

    $scope.buscarDadosUsuario = function () {
        $scope.nomeUsuario = $cookies.get("nomeusuario");
        $scope.cargoUsuario = $cookies.get("cargousuario");
        $scope.matrUsuario = $cookies.get("matrusuario");
        $scope.orgaoUsuario = $cookies.get("orgaousuario");
        $scope.acordoInternacional = ($cookies.get("acordoInternacional") === 'true'); //Cookie retorna string, essa é uma forma de converter para Boolean


        if (angular.isUndefined($scope.nomeUsuario)) {
            $scope.msgUsuario.push({ texto1: "Atenção! Dados do Usuário não encontrados!", texto2: "Atualize as informações no menu \"Usuário\"." });
        };
    };


    $scope.montarDespacho = function () {

        //Adequação da Interface: Label, tamanho e placeholder do textbox do Nº Benefício/CTC
        if ($scope.especieSelecionada.descricao == 'Certidão de Tempo de Contribuição') {
            $scope.tipoIdentificador = "da CTC";
            $scope.tamanhoIdentificador = 21;
            $scope.numeroBeneficioValido = true;
            $scope.especieExibicao = "CTC";
        } else {
            $scope.tipoIdentificador = "do Benefício";
            $scope.tamanhoIdentificador = 13;
            if ($scope.numeroBeneficio.length > 13) {
                $scope.numeroBeneficio = "";
            };
            $scope.especieExibicao = "E/NB";
        };

        //Primeiro item, sempre presente: Motivo
        $scope.montarMotivo();

        //if checkbox Vínculos, montarVinculo(). Senão, limpar item respectivo
        if ($scope.itensVinculo.chkVinculo) {
            $scope.montarVinculo();
        } else {
            $scope.itensDespacho.vinculos = "";
        };
        //if checkbox Contribuições, montarContribuicao(). Senão, limpar item respectivo
        if ($scope.itensContribuicao.chkContribuicao) {
            $scope.montarContribuicao();
        } else {
            $scope.itensDespacho.contribuicoes = "";
        };
        //if checkbox Especial, montarEspecial(). Senão, limpar item respectivo
        if ($scope.itensEspecial.chkEspecial) {
            $scope.montarEspecial();
        } else {
            $scope.itensDespacho.especial = "";
        };
        //if checkbox Rural, montarRural(). Senão, limpar item respectivo
        if ($scope.itensRural.chkRural) {
            $scope.montarRural();
        } else {
            $scope.itensDespacho.rural = "";
        };
        //if checkbox Exigências, montarExigencia(). Senão, limpar item respectivo
        if ($scope.itensExigencia.chkExigencia) {
            $scope.montarExigencia();
        } else {
            $scope.itensDespacho.exigencias = "";
        };
        //if checkbox Procedimentos, montarProcedimento(). Senão, limpar item respectivo
        if ($scope.itensProcedimento.chkProcedimento) {
            $scope.montarProcedimento();
        } else {
            $scope.itensDespacho.procedimentos = "";
        };
        //if checkbox Outros, montarOutro(). Senão, limpar item respectivo
        if ($scope.itensOutro.chkOutro) {
            $scope.montarOutro();
        } else {
            $scope.itensDespacho.outros = "";
        };
        //Último item, sempre presente: Conclusao. Já montado junto com Motivo.


        $scope.conteudoEditor = "";
        let indiceItem = 1;
        angular.forEach($scope.itensDespacho, function (value, key) {
            if ($scope.itensDespacho[key].length > 0){
                $scope.itensDespacho[key] = indiceItem + ". " + $scope.itensDespacho[key];
                $scope.conteudoEditor += "<p>" + $scope.itensDespacho[key] + "</p>";
                indiceItem++;
            };
        });
    };

    //Item: Motivo do Despacho
    $scope.montarMotivo = function () {
        let tipoDespacho = "";
        let motivoDespacho = "";
        let conclusaoDespacho = "";
        switch ($scope.tipoDespacho) {
            case 'Indeferimento':
                if ($scope.especieSelecionada.descricao == 'Certidão de Tempo de Contribuição') {
                    tipoDespacho = " Indeferida";
                    conclusaoDespacho = "Certidão indeferida, e a tarefa correspondente encerrada nesta data.";
                } else {
                    tipoDespacho = " Indeferido";
                    conclusaoDespacho = "Benefício indeferido, e a tarefa correspondente encerrada nesta data.";
                };
                switch ($scope.especieSelecionada.descricao) {
                    case 'Pensão por Morte Urbana':
                        motivoDespacho = $scope.despachoPensUrbInd();
                        break;
                    case 'Pensão por Morte Rural':
                        motivoDespacho = $scope.despachoPensRurInd();
                        break;
                    case 'Pensão por Morte por Acidente de Trabalho':
                        motivoDespacho = $scope.despachoPensAcidInd();
                        break;
                    case 'Auxílio-Reclusão Urbano':
                        motivoDespacho = $scope.despachoAuxRecUrbInd();
                        break;
                    case 'Auxílio-Reclusão Rural':
                        motivoDespacho = $scope.despachoAuxRecRurInd();
                        break;
                    case 'Benefício por Incapacidade Temporária Urbano':
                        motivoDespacho = $scope.despachoAuxDoeUrbInd();
                        break;
                    case 'Benefício por Incapacidade Temporária Rural':
                        motivoDespacho = $scope.despachoAuxDoeRurInd();
                        break;
                    case 'Auxílio-Acidente Previdenciário':
                        motivoDespacho = $scope.despachoAuxAcidPrevInd();
                        break;
                    case 'Auxílio-Acidente por Acidente de Trabalho':
                        motivoDespacho = $scope.despachoAuxAcidAcidInd();
                        break;
                    case 'Aposentadoria por Idade Urbana':
                        motivoDespacho = $scope.despachoApIdUrbInd();
                        break;
                    case 'Aposentadoria por Idade Rural':
                        motivoDespacho = $scope.despachoApIdRurInd();
                        break;
                    case 'Aposentadoria por Tempo de Contribuição':
                        motivoDespacho = $scope.despachoApTempInd();
                        break;
                    case 'Aposentadoria Especial':
                        motivoDespacho = $scope.despachoApEspInd();
                        break;
                    case 'Aposentadoria Especial do Professor':
                        motivoDespacho = $scope.despachoApProfInd();
                        break;
                    case 'Salário-Maternidade Urbano':
                        motivoDespacho = $scope.despachoSalMatUrbInd();
                        break;
                    case 'Salário-Maternidade Rural':
                        motivoDespacho = $scope.despachoSalMatRurInd();
                        break;
                    case 'Benefício Assistencial ao Deficiente':
                        motivoDespacho = $scope.despachoAssDefInd();
                        break;
                    case 'Benefício Assistencial ao Idoso':
                        motivoDespacho = $scope.despachoAssIdInd();
                        break;
                    case 'Certidão de Tempo de Contribuição':
                        motivoDespacho = $scope.despachoCTCInd();
                        break;
                };
                break;
            case 'Concessão':
                if ($scope.especieSelecionada.descricao == 'Certidão de Tempo de Contribuição') {
                    tipoDespacho = " Concedida";
                    conclusaoDespacho = "Certidão concedida, e a tarefa correspondente encerrada nesta data.";
                } else {
                    tipoDespacho = " Concedido";
                    conclusaoDespacho = "Benefício concedido, e a tarefa correspondente encerrada nesta data.";
                };
                switch ($scope.especieSelecionada.descricao) {
                    case 'Pensão por Morte Urbana':
                        motivoDespacho = $scope.despachoPensUrbConc();
                        break;
                    case 'Pensão por Morte Rural':
                        motivoDespacho = $scope.despachoPensRurConc();
                        break;
                    case 'Pensão por Morte por Acidente de Trabalho':
                        motivoDespacho = $scope.despachoPensAcidConc();
                        break;
                    case 'Auxílio-Reclusão Urbano':
                        motivoDespacho = $scope.despachoAuxRecUrbConc();
                        break;
                    case 'Auxílio-Reclusão Rural':
                        motivoDespacho = $scope.despachoAuxRecRurConc();
                        break;
                    case 'Benefício por Incapacidade Temporária Urbano':
                        motivoDespacho = $scope.despachoAuxDoeUrbConc();
                        break;
                    case 'Benefício por Incapacidade Temporária Rural':
                        motivoDespacho = $scope.despachoAuxDoeRurConc();
                        break;
                    case 'Auxílio-Acidente Previdenciário':
                        motivoDespacho = $scope.despachoAuxAcidPrevConc();
                        break;
                    case 'Auxílio-Acidente por Acidente de Trabalho':
                        motivoDespacho = $scope.despachoAuxAcidAcidConc();
                        break;
                    case 'Aposentadoria por Idade Urbana':
                        motivoDespacho = $scope.despachoApIdUrbConc();
                        break;
                    case 'Aposentadoria por Idade Rural':
                        $scope.itensMotivoDespacho.chkMotivoConc4 = false;
                        motivoDespacho = $scope.despachoApIdRurConc();
                        break;
                    case 'Aposentadoria por Tempo de Contribuição':
                        motivoDespacho = $scope.despachoApTempConc();
                        break;
                    case 'Aposentadoria Especial':
                        motivoDespacho = $scope.despachoApEspConc();
                        break;
                    case 'Aposentadoria Especial do Professor':
                        motivoDespacho = $scope.despachoApProfConc();
                        break;
                    case 'Salário-Maternidade Urbano':
                        motivoDespacho = $scope.despachoSalMatUrbConc();
                        break;
                    case 'Salário-Maternidade Rural':
                        motivoDespacho = $scope.despachoSalMatRurConc();
                        break;
                    case 'Benefício Assistencial ao Deficiente':
                        motivoDespacho = $scope.despachoAssDefConc();
                        break;
                    case 'Benefício Assistencial ao Idoso':
                        motivoDespacho = $scope.despachoAssIdConc();
                        break;
                    case 'Certidão de Tempo de Contribuição':
                        motivoDespacho = $scope.despachoCTCConc();
                        break;
                };
                break;
            case 'Análise':
                tipoDespacho = " objeto de Análise, pendente";
                motivoDespacho = $scope.despachoAnalise();
                if ($scope.especieSelecionada.descricao == 'Certidão de Tempo de Contribuição') {
                    conclusaoDespacho = "Certidão em análise. Tarefa correspondente permanecerá pendente até a conclusão dos procedimentos descritos."
                } else {
                    conclusaoDespacho = "Benefício em análise. Tarefa correspondente permanecerá pendente até a conclusão dos procedimentos descritos."
                };
                break;
        };
        if ($scope.especieSelecionada.descricao == 'Certidão de Tempo de Contribuição') {
            $scope.itensDespacho.motivo = "Trata-se de " + $scope.especieSelecionada.descricao + tipoDespacho + motivoDespacho;
        } else if ($scope.especieSelecionada.descricao == 'Benefício Assistencial ao Deficiente' || $scope.especieSelecionada.descricao == 'Benefício Assistencial ao Idoso') {
            $scope.itensDespacho.motivo = "Trata-se de " + $scope.especieSelecionada.descricao + tipoDespacho + motivoDespacho;
        } else {
            $scope.itensDespacho.motivo = "Trata-se de Benefício de " + $scope.especieSelecionada.descricao + tipoDespacho + motivoDespacho;
        };
        $scope.itensDespacho.conclusao = conclusaoDespacho;
    };
    //Item: Vínculos
    $scope.montarVinculo = function () {
        let conclusaoVinculo = "";
        switch ($scope.itensVinculo.txtVinculoConsiderado) {
            case 'Não há':
                conclusaoVinculo = "Não há vínculos empregatícios a serem considerados, em razão da não apresentação de CTPS ou outros documentos que os comprovem, e inexistência de registros no Cadastro Nacional de Informações Sociais - CNIS.";
                break;
            case 'CNIS':
                conclusaoVinculo = "Foram considerados apenas os vínculos empregatícios regulares constantes no Cadastro Nacional de Informações Sociais - CNIS, consoante art. 19 do Decreto nº 3.048/99, em razão da não apresentação de CTPS ou outros documentos.";
                break;
            case 'Documento e CNIS':
                let listaDocumentos = [];

                if ($scope.itensVinculo.chkDocCTPS) {
                    listaDocumentos.push("Carteira Profissional - CP ou Carteira de Trabalho - CTPS");
                };
                if ($scope.itensVinculo.chkDocFRE) {
                    listaDocumentos.push("Declaração do Empregador acompanhada de Ficha ou Livro de Registro de Empregados");
                };
                if ($scope.itensVinculo.chkDocContrato) {
                    listaDocumentos.push("Contrato Individual de Trabalho");
                };
                if ($scope.itensVinculo.chkDocAcordo) {
                    listaDocumentos.push("Acordo Coletivo de Trabalho");
                };
                if ($scope.itensVinculo.chkDocRescisao) {
                    listaDocumentos.push("Termo de Rescisão do Contrato de Trabalho");
                };
                if ($scope.itensVinculo.chkDocFGTS) {
                    listaDocumentos.push("Extrato Analítico de FGTS");
                };
                if ($scope.itensVinculo.chkDocRecibos) {
                    listaDocumentos.push("Recibos de Pagamento");
                };
                if ($scope.itensVinculo.chkDocPonto) {
                    listaDocumentos.push("Declaração do Empregador acompanhada de Cartão, Livro ou Folha de Ponto");
                };
                if ($scope.itensVinculo.chkDocCTC) {
                    listaDocumentos.push("Certidão de Tempo de Contribuição - CTC do Órgão: " + $scope.itensVinculo.txtDocCTC);
                };
                if ($scope.itensVinculo.chkDocATC) {
                    listaDocumentos.push("Averbação de Tempo de Contribuição - ATC nº " + $scope.itensVinculo.txtDocATC);
                };
                if ($scope.itensVinculo.chkDocOutro) {
                    listaDocumentos.push("Outro(s) Documento(s): " + $scope.itensVinculo.txtOutroDocumento);
                };

                //Opções Acordo Internacional
                if ($scope.itensVinculo.chkAIExtratoOL) {
                    listaDocumentos.push("Extrato de Contribuição encaminhado pelo Organismo de Ligação");
                };

                let qtdDocumentos = listaDocumentos.length;
                conclusaoVinculo = "Foram considerados todos os vínculos regulares constantes no(s) documento(s) apresentado(s)";

                if (qtdDocumentos > 0) {
                    conclusaoVinculo += " (";
                };

                for (i = 0; i < qtdDocumentos; i++) {
                    if (i > 0) {
                        if (i == qtdDocumentos - 1) {
                            conclusaoVinculo += "; e ";
                        } else {
                            conclusaoVinculo += "; ";
                        };
                    };

                    conclusaoVinculo += listaDocumentos[i];
                };

                if (qtdDocumentos > 0) {
                    conclusaoVinculo += ")";
                };

                if ($scope.itensVinculo.chkDocCTC) {
                    conclusaoVinculo += ", e no Cadastro Nacional de Informações Sociais - CNIS, nos termos do §1º e caput, art. 19, art. 19-A, e §1º, art. 19-B, todos do Decreto nº 3.048/99.";
                } else {
                    conclusaoVinculo += ", e no Cadastro Nacional de Informações Sociais - CNIS, nos termos do §1º e caput, art. 19, e §1º, art. 19-B, ambos do Decreto nº 3.048/99.";
                };
                break;
            case 'Documento Parcial e CNIS':
                let listaMotivos = [];

                if ($scope.itensVinculo.chkExtempCTPS) {
                    listaMotivos.push("do registro correspondente ter sido realizado de forma extemporânea na CTPS ou outro documento comprobatório, nos termos do art. 19-B do Decreto nº 3.048/99");
                };
                if ($scope.itensVinculo.chkExtempCNIS) {
                    listaMotivos.push("da extemporaneidade de sua informação no CNIS, nos termos do §2º, art. 19 do Decreto nº 3.048/99");
                };
                if ($scope.itensVinculo.chkVicioDoc) {
                    listaMotivos.push("da impossibilidade de confirmação de sua regularidade por meio de documento apresentado, decorrente da ausência de informação, emenda, rasura ou outro vício que o invalida para tal fim");
                };
                if ($scope.itensVinculo.chkAbaixoMinimo) {
                    listaMotivos.push("da sua remuneração mensal ser inferior ao valor do limite mínimo do salário de contribuição, sem a devida complementação ou agrupamento, nos termos do §14, art. 195 da Constituição Federal, e art. 29 da Emenda Constitucional nº 103/2019");
                };
                if ($scope.especieSelecionada.descricao == 'Certidão de Tempo de Contribuição' && $scope.itensVinculo.chkConcomitanciaDebito) {
                    listaMotivos.push("da concomitância com período(s) de débito, não sendo devida a certificação do período abrangido em nenhuma das atividades, nos termos do § único, art. 444 da Instrução Normativa nº 77/2015");
                };
                
                let qtdMotivos = listaMotivos.length;
                conclusaoVinculo = "Foram considerados apenas os vínculos regulares constantes no(s) documento(s) apresentado(s), e no Cadastro Nacional de Informações Sociais - CNIS. Há período(s) de vínculo(s) que não foi(ram) considerado(s), em razão ";

                for (i = 0; i < qtdMotivos; i++) {
                    if (i > 0) {
                        if (i == qtdMotivos - 1) {
                            conclusaoVinculo += "; e ";
                        } else {
                            conclusaoVinculo += "; ";
                        };
                    };

                    conclusaoVinculo += listaMotivos[i];
                };

                conclusaoVinculo += ".";
                break;
        };

        //OPÇÕES ACORDO INTERNACIONAL
        if ($scope.itensVinculo.chkAITempoEUA) {
            if ($scope.itensVinculo.chkAITempoEUANaoPrevisto) {
                conclusaoVinculo += " Foi solicitado o cômputo do período trabalhado nos Estados Unidos, considerando:<br/>&emsp;&bullet; Acordo de Previdência Social entre Brasil e Estados Unidos, promulgado pelo Decreto nº 9.422, de 25/06/2018;<br/>&emsp;&bullet; Ajuste Administrativo assinado em 30/06/2015.<br/><br/>"
                    + " Contudo, o benefício requerido não foi elencado no acordo entre os dois países, conforme art. 2º transcrito abaixo:<br/><i>&emsp;\"Para fins deste Acordo a legislação aplicável é: (...)<br/>&emsp;b) em relação ao Brasil:<br/>&emsp;(i) a legislação que rege o Regime Geral"
                    + " de Previdência Social, no que se refere aos benefícios de aposentadoria por idade, pensão por morte e aposentadoria por invalidez (...)\"</i>.";
            } else {
                conclusaoVinculo += " Foi solicitado o cômputo do período trabalhado nos Estados Unidos, considerando: <br/>&emsp;&bullet; Acordo de Previdência Social entre Brasil e Estados Unidos, promulgado pelo Decreto nº 9.422, de 25/06/2018;<br/>&emsp;&bullet; Ajuste Administrativo assinado em 30/06/2015.";
            };
        };
        if ($scope.itensVinculo.chkAITempoItalia) {
            if ($scope.itensVinculo.chkAITempoEUA) {
                conclusaoVinculo += "<br/><br/>";
            };

            if ($scope.itensVinculo.chkAITempoItaliaNaoPrevisto) {
                conclusaoVinculo += " Foi solicitado o cômputo do período trabalhado na Itália, considerando:<br/>&emsp;&bullet; Acordo de Migração entre Brasil e Itália, promulgado pelo Decreto nº 57.759, de 8 de fevereiro de 1966;"
                    + "<br/>&emsp;&bullet; Aprovação dada pelo Decreto Legislativo nº 101, de 18 de novembro de 1964;<br/>&emsp;&bullet; Protocolo Adicional ao Acordo de Migração entre Brasil e Itália, de 30 de janeiro de 1974;<br/>&emsp;&bullet; O art. 85 da Lei nº 8.212, de 24 de julho de 1991, e o art. 382 do Regulamento da Previdência Social aprovado pelo Decreto nº 3.048, de 6 de maio de 1999,"
                    + " nos quais estabelecem que os tratados, convenções e outros acordos internacionais onde o Estado estrangeiro ou organismo internacional e o Brasil sejam partes e que versem sobre matéria previdenciária, serão interpretados como lei especial;"
                    + "<br/>&emsp;&bullet; A delegação dada pela Resolução 181/PRES/INSS de 06/03/2012 para esta Agência da Previdência Social de Atendimentos Acordos Internacionais Belo Horizonte para operacionalização dos requerimentos envolvendo os países Brasil - Itália.<br/><br/>"
                    + " Contudo, o benefício requerido não foi elencado no protocolo adicional ao acordo de migração entre os dois países conforme artigo 1º, transcrito abaixo: <br/><i>&emsp;\"ARTIGO 1 <br/>&emsp;1. O presente Protocolo Adicional aplicar - se - á: (...)<br/>"
                    + " &emsp;II - na República Federativa do Brasil, ao regime de Previdência Social do Instituto Nacional de Previdência Social, no que disser respeito a: <br/>&emsp;a) assistência médica, incapacidade de trabalho temporária e permanente, acidentes de trabalho e doenças profissionais; <br/>&emsp;b) velhice; <br/>&emsp;c) invalidez; <br/>&emsp;d) morte\"</i>.";
            } else {
                conclusaoVinculo += " Foi solicitado o cômputo do período trabalhado na Itália, considerando:<br/>&emsp;&bullet; Acordo de Migração entre Brasil e Itália, promulgado pelo Decreto nº 57.759, de 8 de fevereiro de 1966;"
                    + "<br/>&emsp;&bullet; Aprovação dada pelo Decreto Legislativo nº 101, de 18 de novembro de 1964;<br/>&emsp;&bullet; Protocolo Adicional ao Acordo de Migração entre Brasil e Itália, de 30 de janeiro de 1974;<br/>&emsp;&bullet; O art. 85 da Lei nº 8.212, de 24 de julho de 1991, e o art. 382 do Regulamento da Previdência Social aprovado pelo Decreto nº 3.048, de 6 de maio de 1999,"
                    + " nos quais estabelecem que os tratados, convenções e outros acordos internacionais onde o Estado estrangeiro ou organismo internacional e o Brasil sejam partes e que versem sobre matéria previdenciária, serão interpretados como lei especial;"
                    + "<br/>&emsp;&bullet; A delegação dada pela Resolução 181/PRES/INSS de 06/03/2012 para esta Agência da Previdência Social de Atendimentos Acordos Internacionais Belo Horizonte para operacionalização dos requerimentos envolvendo os países Brasil - Itália.";
            };
        };

        $scope.itensDespacho.vinculos = conclusaoVinculo;
    };
    //Item: Contribuições
    $scope.montarContribuicao = function () {
        let conclusaoCI = "";
        let conclusaoFac = "";
        switch ($scope.itensContribuicao.txtCIConsiderado) {
            case 'Não há':
                conclusaoCI = "Não há qualquer indício do exercício de atividade como Contribuinte Individual ou realização de contribuições, em documentos ou no Cadastro Nacional de Informações Sociais - CNIS.";
                break;
            case 'Todos':
                conclusaoCI = "Todas as contribuições como Contribuinte Individual constantes em documentos apresentados e/ou no Cadastro Nacional de Informações Sociais - CNIS foram consideradas, e somadas ao Tempo de Contribuição.";
                break;
            case 'Parcial':
                conclusaoCI = "Há contribuições como Contribuinte Individual constantes em documentos apresentados e/ou no Cadastro Nacional de Informações Sociais - CNIS que não puderam ser consideradas por não atendimento de requisitos previstos na legislação: ";
                let listaMotivos = [];

                if ($scope.itensContribuicao.chkCIAtraso) {
                    listaMotivos.push("o recolhimento das competências " + $scope.itensContribuicao.txtCIAtraso + " foi realizado em atraso, sem a comprovação da atividade, nos termos do §12, art. 216 do Decreto nº 3.048/99");
                };
                if ($scope.itensContribuicao.chkCIAposDER) {
                    listaMotivos.push("o recolhimento das competências " + $scope.itensContribuicao.txtCIAposDER + " foi realizado em atraso após a Data de Entrada do Requerimento - DER, e só poderiam ser consideradas com a sua reafirmação para a data do efetivo recolhimento, nos termos do art. 176-D do Decreto nº 3.048/99");
                };
                if ($scope.itensContribuicao.chkCIAtrasoNaoCarencia) {
                    listaMotivos.push("o recolhimento das competências " + $scope.itensContribuicao.txtCIAtrasoNaoCarencia + " foi realizado em atraso, e por isso não foram computadas para fins de carência, nos termos do inc. II, art. 28 do Decreto nº 3.048/99");
                };
                if ($scope.itensContribuicao.chkCIAbaixoMinimo) {
                    listaMotivos.push("o recolhimento das competências " + $scope.itensContribuicao.txtCIAbaixoMinimo + " foi realizado em valor inferior ao mínimo devido, sem a necessária complementação posterior, nos termos do §3º, inc. I, art. 214 do Decreto nº 3.048/99");
                };
                if ($scope.itensContribuicao.chkCIGFIPExtemporanea) {
                    listaMotivos.push("o recolhimento das competências " + $scope.itensContribuicao.txtCIGFIPExtemporanea + " foi realizado através de GFIPs extemporâneas, sem que houvesse a comprovação das respectivas remunerações, nos termos do §3º, art. 29-A da Lei nº 8.213/91");
                };
                if ($scope.itensContribuicao.chkCIPlanoSimplificado) {
                    listaMotivos.push("o recolhimento das competências " + $scope.itensContribuicao.txtCIPlanoSimplificado + " foi realizado como MEI/Plano Simplificado (5% ou 11% do Salário Mínimo), não complementados, e não são considerados na Certidão/Aposentadoria por Tempo de Contribuição, conforme §§2º e 3º, art. 21 da Lei nº 8.212/91");
                };

                let qtdMotivos = listaMotivos.length;

                for (i = 0; i < qtdMotivos; i++) {
                    if (i > 0) {
                        if (i == qtdMotivos - 1) {
                            conclusaoCI += "; e ";
                        } else {
                            conclusaoCI += "; ";
                        };
                    };

                    conclusaoCI += listaMotivos[i];
                };

                conclusaoCI += ". ";

                break;
        };
        switch ($scope.itensContribuicao.txtFacultativoConsiderado) {
            case 'Não há':
                conclusaoFac = "Não há qualquer indício de contribuições como Facultativo, em documentos ou no Cadastro Nacional de Informações Sociais - CNIS.";
                break;
            case 'Todos':
                conclusaoFac = "Todas as contribuições como Facultativo constantes em documentos apresentados e/ou no Cadastro Nacional de Informações Sociais - CNIS foram consideradas, e somadas ao Tempo de Contribuição.";
                break;
            case 'Parcial':
                conclusaoFac = "Há contribuições como Facultativo constantes em documentos apresentados e/ou no Cadastro Nacional de Informações Sociais - CNIS que não puderam ser consideradas por não atendimento de requisitos previstos na legislação: ";
                let listaMotivos = [];

                if ($scope.itensContribuicao.chkFacAtraso) {
                    listaMotivos.push("o recolhimento das competências " + $scope.itensContribuicao.txtFacAtraso + " foi realizado em atraso, anteriores à inscrição, em desacordo com o §3º, art. 11 do Decreto nº 3.048/99");
                };
                if ($scope.itensContribuicao.chkFacAposDER) {
                    listaMotivos.push("o recolhimento das competências " + $scope.itensContribuicao.txtFacAposDER + " foi realizado em atraso após a Data de Entrada do Requerimento - DER, e só poderiam ser consideradas com a sua reafirmação para a data do efetivo recolhimento, nos termos do art. 176-D do Decreto nº 3.048/99");
                };
                if ($scope.itensContribuicao.chkFacAtrasoNaoCarencia) {
                    listaMotivos.push("o recolhimento das competências " + $scope.itensContribuicao.txtFacAtrasoNaoCarencia + " foi realizado em atraso, e por isso não foram computadas para fins de carência, nos termos do inc. II, art. 28 do Decreto nº 3.048/99");
                };
                if ($scope.itensContribuicao.chkFacFBRNaoValidado) {
                    listaMotivos.push("o recolhimento como Facultativo de Baixa Renda - FBR das competências " + $scope.itensContribuicao.txtFacFBRNaoValidado + " não foram validados, em razão do(a) Requerente não se enquadrar na alínea \"b\", inciso II, §2º do artigo 21 da Lei nº 8.212/91");
                };
                if ($scope.itensContribuicao.chkFacAbaixoMinimo) {
                    listaMotivos.push("o recolhimento das competências " + $scope.itensContribuicao.txtFacAbaixoMinimo + " foi realizado em valor inferior ao mínimo devido, sem a necessária complementação posterior, nos termos do §3º, inc. I, art. 214 do Decreto nº 3.048/99");
                };
                if ($scope.itensContribuicao.chkFacAtrasoAposPQS) {
                    listaMotivos.push("o recolhimento das competências " + $scope.itensContribuicao.txtFacAtrasoAposPQS + " foi realizado em atraso após a perda da Qualidade de Segurado, em desobediência à vedação contida no §4º, art. 11 do Decreto nº 3.048/99");
                };
                if ($scope.itensContribuicao.chkFacPlanoSimplificado) {
                    listaMotivos.push(" o recolhimento das competências " + $scope.itensContribuicao.txtFacPlanoSimplificado + " foi realizado na forma Plano Simplificado (11% do Salário Mínimo), não complementados, e não são considerados na Certidão/Aposentadoria por Tempo de Contribuição, conforme §§2º e 3º, art. 21 da Lei nº 8.212/91");
                };
                if ($scope.itensContribuicao.chkFacConcomitante) {
                    listaMotivos.push(" o recolhimento das competências " + $scope.itensContribuicao.txtFacConcomitante + " é concomitante com atividade de filiação obrigatória ou benefício previdenciário, em desacordo com o disposto nos §§4º, 5º e caput do art. 55 da Instrução Normativa nº 77/2015");
                };

                let qtdMotivos = listaMotivos.length;

                for (i = 0; i < qtdMotivos; i++) {
                    if (i > 0) {
                        if (i == qtdMotivos - 1) {
                            conclusaoFac += "; e ";
                        } else {
                            conclusaoFac += "; ";
                        };
                    };

                    conclusaoFac += listaMotivos[i];
                };

                conclusaoFac += ".";

                break;
        };

        $scope.itensDespacho.contribuicoes = conclusaoCI + " " + conclusaoFac;
        if (($scope.itensContribuicao.txtCIConsiderado == 'Parcial' || $scope.itensContribuicao.txtFacultativoConsiderado == 'Parcial') && ($scope.itensContribuicao.chkCIFacDispensaComplementacao || $scope.itensContribuicao.chkCIFacDispensaAlteracaoDER) && $scope.especieSelecionada.descricao != 'Certidão de Tempo de Contribuição') {
            if ($scope.tipoDespacho === "Indeferimento") {
                if ($scope.itensContribuicao.chkCIFacDispensaComplementacao) {
                    if ($scope.itensContribuicao.chkCIFacDispensaAlteracaoDER) {
                        $scope.itensDespacho.contribuicoes += " Registre-se que foi dispensada a exigência de regularização e reafirmação da Data de Entrada do Requerimento - DER para aproveitamento das competências desconsideradas, pois ainda que o fossem, o(a) Requerente não completaria os requisitos de Tempo de Contribuição e/ou Carência necessários para a concessão do benefício."
                    } else {
                        $scope.itensDespacho.contribuicoes += " Registre-se que foi dispensada a exigência de regularização das competências desconsideradas, pois ainda que o fossem, o(a) Requerente não completaria os requisitos de Tempo de Contribuição e/ou Carência necessários para a concessão do benefício."
                    };
                } else if ($scope.itensContribuicao.chkCIFacDispensaAlteracaoDER) {
                    $scope.itensDespacho.contribuicoes += " Registre-se que foi dispensada a reafirmação da Data de Entrada do Requerimento - DER para aproveitamento das competências desconsideradas, pois verificou-se que ainda assim o(a) Requerente não completaria os requisitos de Tempo de Contribuição e/ou Carência necessários para a concessão do benefício."
                };
            } else if ($scope.tipoDespacho === "Concessão") {
                if ($scope.itensContribuicao.chkCIFacDispensaComplementacao) {
                    if ($scope.itensContribuicao.chkCIFacDispensaAlteracaoDER) {
                        $scope.itensDespacho.contribuicoes += " Registre-se que foi dispensada a exigência de regularização e reafirmação da Data de Entrada do Requerimento - DER para aproveitamento das competências desconsideradas, pois verificou-se que o(a) Requerente já completou os requisitos de Tempo de Contribuição e/ou Carência necessários para a concessão do benefício."
                    } else {
                        $scope.itensDespacho.contribuicoes += " Registre-se que foi dispensada a exigência de regularização das competências desconsideradas, pois verificou-se que o(a) Requerente já completou os requisitos de Tempo de Contribuição e/ou Carência necessários para a concessão do benefício."
                    };
                } else if ($scope.itensContribuicao.chkCIFacDispensaAlteracaoDER) {
                    $scope.itensDespacho.contribuicoes += " Registre-se que foi dispensada a reafirmação da Data de Entrada do Requerimento - DER para aproveitamento das competências desconsideradas, pois verificou-se que o(a) Requerente já completou os requisitos de Tempo de Contribuição e/ou Carência necessários para a concessão do benefício."
                };
            } else if ($scope.tipoDespacho === "Análise") {
                if ($scope.itensContribuicao.chkCIFacDispensaComplementacao) {
                    if ($scope.itensContribuicao.chkCIFacDispensaAlteracaoDER) {
                        $scope.itensDespacho.contribuicoes += " Registre-se que foi dispensada a exigência de regularização e reafirmação da Data de Entrada do Requerimento - DER para aproveitamento das competências desconsideradas, pois verificou-se que as mesmas não serão relevantes para a verificação dos requisitos de Tempo de Contribuição e/ou Carência do benefício no presente momento da análise."
                    } else {
                        $scope.itensDespacho.contribuicoes += " Registre-se que foi dispensada a exigência de regularização das competências desconsideradas, pois verificou-se que as mesmas não serão relevantes para a verificação dos requisitos de Tempo de Contribuição e/ou Carência do benefício no presente momento da análise."
                    };
                } else if ($scope.itensContribuicao.chkCIFacDispensaAlteracaoDER) {
                    $scope.itensDespacho.contribuicoes += " Registre-se que foi dispensada a reafirmação da Data de Entrada do Requerimento - DER para aproveitamento das competências desconsideradas, pois verificou-se que não serão relevantes para a verificação dos requisitos de Tempo de Contribuição e/ou Carência do benefício no presente momento da análise."
                };
            };

        };
    };
    //Item: Especial
    $scope.montarEspecial = function () {
        let conclusaoEspecial = "";
        let listaMotivos = [];
        let qtdMotivos = 0;

        switch ($scope.itensEspecial.txtEspecialConsiderado) {
            case 'Não há':
                conclusaoEspecial = "Não houve a apresentação de documentos para comprovação de Atividade Especial, nem quaisquer períodos enquadrados de outra maneira.";
                break;
            case 'Reconhecida':
                conclusaoEspecial = "Foram apresentados documentos para comprovação de Atividade Especial, e todos foram enquadrados ";
                listaMotivos.length = 0;

                if ($scope.itensEspecial.chkEnqCatProfissional) {
                    listaMotivos.push("por Categoria Profissional até 28/04/1995");
                };
                if ($scope.itensEspecial.chkEnqAgenteNocivo) {
                    listaMotivos.push("por exposição a agentes nocivos/fatores de risco, conforme parecer da Perícia Médica");
                };
                if ($scope.itensEspecial.chkEnqNbAnterior) {
                    listaMotivos.push("pelo aproveitamento de períodos analisados em requerimento anterior, importados para o presente benefício e com reanálise dispensada, nos termos do item 3 do Memorando-Circular Conjunto nº 24 DIRBEN/DIRSAT, de 25/07/2017");
                };
                
                qtdMotivos = listaMotivos.length;

                for (i = 0; i < qtdMotivos; i++) {
                    if (i > 0) {
                        if (i == qtdMotivos - 1) {
                            conclusaoEspecial += "; e ";
                        } else {
                            conclusaoEspecial += "; ";
                        };
                    };

                    conclusaoEspecial += listaMotivos[i];
                };

                conclusaoEspecial += ".";
                if (($scope.especieSelecionada.descricao == 'Certidão de Tempo de Contribuição') && ($scope.itensEspecial.chkEnqCatProfissional || $scope.itensEspecial.chkEnqAgenteNocivo || $scope.itensEspecial.chkEnqNbAnterior)) {
                    conclusaoEspecial += " Registre-se no presente requerimento que o enquadramento seria devido, conforme disciplinado no art. 448 da Instrução Normativa nº 77/2015, e em observância à vedação da emissão de CTC com conversão de tempo de contribuição em atividades especiais, contida no inc. I, art. 96 da Lei nº 8.213/91.";
                };
                break;
            case 'Reconhecida Parcial':
                conclusaoEspecial = "Foram apresentados documentos para comprovação de Atividade Especial, e foram enquadrados parcialmente. Há período(s) não enquadrados em razão ";
                listaMotivos.length = 0;

                if ($scope.itensEspecial.chkNaoEnqCatProfissional) {
                    listaMotivos.push("das atividades descritas não estarem relacionadas nos anexos, não sendo passíveis de enquadramento por Categoria Profissional até 28/04/1995, nos termos do art. 269 da Instrução Normativa nº 77/2015");
                };
                if ($scope.itensEspecial.chkNaoEnqAgenteNocivo) {
                    listaMotivos.push("da não comprovação de exposição a agentes nocivos/fatores de risco, conforme parecer da Perícia Médica, nos termos do art. 297 da Instrução Normativa nº 77/2015");
                };
                if ($scope.itensEspecial.chkNaoEnqAgenteNocivoAusente) {
                    listaMotivos.push("de não terem sido submetidos à análise da Perícia Médica, por conta da ausência de informação de exposição a agentes nocivos/fatores de risco nos documentos apresentados, nos termos do inciso V, art. 296 da Instrução Normativa nº 77/2015");
                };
                if ($scope.itensEspecial.chkNaoEnqNbAnterior) {
                    listaMotivos.push("do aproveitamento de períodos analisados em requerimento anterior, importados para o presente benefício e com reanálise dispensada, nos termos do item 3 do Memorando-Circular Conjunto nº 24 DIRBEN/DIRSAT, de 25/07/2017");
                };
                
                qtdMotivos = listaMotivos.length;

                for (i = 0; i < qtdMotivos; i++) {
                    if (i > 0) {
                        if (i == qtdMotivos - 1) {
                            conclusaoEspecial += "; e ";
                        } else {
                            conclusaoEspecial += "; ";
                        };
                    };

                    conclusaoEspecial += listaMotivos[i];
                };

                conclusaoEspecial += ".";
                if (($scope.especieSelecionada.descricao == 'Certidão de Tempo de Contribuição') && ($scope.itensEspecial.chkNaoEnqCatProfissional || $scope.itensEspecial.chkNaoEnqAgenteNocivo || $scope.itensEspecial.chkNaoEnqAgenteNocivoAusente || $scope.itensEspecial.chkNaoEnqNbAnterior)) {
                    conclusaoEspecial += " Registre-se no presente requerimento que o enquadramento seria devido, conforme disciplinado no art. 448 da Instrução Normativa nº 77/2015, e em observância à vedação da emissão de CTC com conversão de tempo de contribuição em atividades especiais, contida no inc. I, art. 96 da Lei nº 8.213/91.";
                };
                break;
            case 'Não reconhecida':
                conclusaoEspecial = "Foram apresentados documentos para comprovação de Atividade Especial, porém não houve o enquadramento de quaisquer períodos. Há período(s) não enquadrados, em razão ";
                listaMotivos.length = 0;

                if ($scope.itensEspecial.chkNaoEnqCatProfissional) {
                    listaMotivos.push("das atividades descritas não estarem relacionadas nos anexos, não sendo passíveis de enquadramento por Categoria Profissional até 28/04/1995, nos termos do art. 269 da Instrução Normativa nº 77/2015");
                };
                if ($scope.itensEspecial.chkNaoEnqAgenteNocivo) {
                    listaMotivos.push("da não comprovação de exposição a agentes nocivos/fatores de risco, conforme parecer da Perícia Médica, nos termos do art. 297 da Instrução Normativa nº 77/2015");
                };
                if ($scope.itensEspecial.chkNaoEnqAgenteNocivoAusente) {
                    listaMotivos.push("de não terem sido submetidos à análise da Perícia Médica, por conta da ausência de informação de exposição a agentes nocivos/fatores de risco nos documentos apresentados, nos termos do inciso V, art. 296 da Instrução Normativa nº 77/2015");
                };
                if ($scope.itensEspecial.chkNaoEnqNbAnterior) {
                    listaMotivos.push("do aproveitamento de períodos analisados em requerimento anterior, importados para o presente benefício e com reanálise dispensada, nos termos do item 3 do Memorando-Circular Conjunto nº 24 DIRBEN/DIRSAT, de 25/07/2017");
                };

                qtdMotivos = listaMotivos.length;

                for (i = 0; i < qtdMotivos; i++) {
                    if (i > 0) {
                        if (i == qtdMotivos - 1) {
                            conclusaoEspecial += "; e ";
                        } else {
                            conclusaoEspecial += "; ";
                        };
                    };

                    conclusaoEspecial += listaMotivos[i];
                };

                conclusaoEspecial += ".";
                break;
        };

        $scope.itensDespacho.especial = conclusaoEspecial;
    };
    //Item: Rural
    $scope.montarRural = function () {
        let conclusaoRural = "";
        let listaMotivos = [];
        let qtdMotivos = 0;

        switch ($scope.itensRural.txtRuralConsiderado) {
            case 'Não há':
                conclusaoRural = "Não houve a apresentação de documentos para comprovação de Atividade Rural, nem quaisquer períodos reconhecidos de outra maneira.";
                break;
            case 'Reconhecida':
                conclusaoRural = "Foram apresentados documentos para comprovação de Atividade Rural, e os períodos requeridos foram integralmente reconhecidos.";
                break;
            case 'Reconhecida Parcial':
                conclusaoRural = "Foram apresentados documentos para comprovação de Atividade Rural, e os períodos requeridos foram parcialmente reconhecidos. Há período(s) não reconhecido(s), em razão ";
                listaMotivos.length = 0;

                if ($scope.itensRural.chkSemDocumentos){
                    listaMotivos.push("de inexistir cadastro em base governamental e/ou de não terem sido apresentados documentos contemporâneos válidos como Prova Material que permitissem ratificá-lo(s), nos termos dos itens 6 e 7 do Ofício-Circular nº 46, de 13/09/2019");
                };
                if ($scope.itensRural.chkNaoCompoeGrupoFamiliar){
                    listaMotivos.push("dos documentos apresentados como Prova Material estarem em nome de terceiro que não compõe o grupo familiar, considerando o grau de parentesco entre o Titular dos documentos e o(a) Requerente, ou em razão do Casamento deste(a) último(a), nos termos dos incisos I e IV, §1º, art. 39 da Instrução Normativa nº 77/2015");
                };
                if ($scope.itensRural.chkMaisQuatroModulos) {
                    listaMotivos.push("da atividade ser desenvolvida em área superior a 4 (quatro) módulos fiscais, nos termos do item 1, alínea \"a\", inciso VII, art. 9º do Decreto nº 3.048/99");
                };
                if ($scope.itensRural.chkAtividadeRemunerada) {
                    listaMotivos.push("do exercício intercalado de Atividade Remunerada / Urbana, sem a apresentação de prova de retorno do(a) Requerente ao meio Rural, nos termos da alínea \"b\", inciso IV, item 7 do Ofício-Circular nº 46, de 13/09/2019, e §5º, art. 39 da Instrução Normativa nº 77/2015");
                };
                if ($scope.itensRural.chkRemuneradaTurismoEmpregados) {
                    listaMotivos.push("da descaracterização da condição de Segurado Especial, em função do exercício de Atividade Remunerada / Exploração Turística / Utilização de Mão de Obra à razão superior a 120 dias/ano, nos termos das alíneas \"a\", \"b\" e \"c\", inciso II, §10, art. 11 da Lei nº 8.213/91");
                };
                if ($scope.itensRural.chkNaoParticipaAtividade) {
                    listaMotivos.push("do(a) Requerente não participar ativamente das atividades rurais do grupo familiar, situação em que fica descaracterizada a condição de Segurado Especial, nos termos do §6º, art. 11 da Lei nº 8.213/91");
                };
                if ($scope.itensRural.chkOutorgaIrregular) {
                    listaMotivos.push("da descaracterização da condição de Segurado Especial, em função da outorga em parceria/meação/comodato de mais de 50% da propriedade e/ou não exercício de atividade rural por outorgante/outorgado, em desacordo com o disposto no inciso I, §8º, art. 11 da Lei nº 8.213/91");
                };
                if ($scope.itensRural.chkNaoIndenizado) {
                    if ($scope.especieSelecionada.descricao == 'Aposentadoria por Tempo de Contribuição') {
                        listaMotivos.push("da não indenização de período comprovado a partir de Novembro/1991, nos termos do §2º, art. 55 da Lei nº 8.213/91, e art. 189 da Instrução Normativa nº 77/2015");
                    } else if ($scope.especieSelecionada.descricao == 'Certidão de Tempo de Contribuição') {
                        listaMotivos.push("da não indenização de período comprovado, nos termos do inciso IV, art. 96 da Lei nº 8.213/91, e dos incisos VI e VII, art. 445 da Instrução Normativa nº 77/2015");
                    };
                };

                qtdMotivos = listaMotivos.length;
                
                for (i = 0; i < qtdMotivos; i++) {
                    if (i > 0) {
                        if (i == qtdMotivos - 1) {
                            conclusaoRural += "; e ";
                        } else {
                            conclusaoRural += "; ";
                        };
                    };

                    conclusaoRural += listaMotivos[i];
                };

                conclusaoRural += ".";
                break;
            case 'Não reconhecida':
                conclusaoRural = "Foram apresentados documentos para comprovação de Atividade Rural, porém não foi possível o reconhecimento de quaisquer dos períodos requeridos, em razão ";
                listaMotivos.length = 0;

                if ($scope.itensRural.chkSemDocumentos) {
                    listaMotivos.push("de inexistir cadastro em base governamental e/ou de não terem sido apresentados documentos contemporâneos válidos como Prova Material que permitissem ratificá-lo(s), nos termos dos itens 6 e 7 do Ofício-Circular nº 46, de 13/09/2019");
                };
                if ($scope.itensRural.chkSemAutodeclaracao) {
                    listaMotivos.push("de não ter sido apresentada Autodeclaração do Segurado Especial, devidamente preenchida e assinada, nos moldes dos Anexos I/II/III do Ofício-Circular nº 46, de 13/09/2019");
                };
                if ($scope.itensRural.chkNaoCompoeGrupoFamiliar) {
                    listaMotivos.push("dos documentos apresentados como Prova Material estarem em nome de terceiro que não compõe o grupo familiar, considerando o grau de parentesco entre o Titular dos documentos e o(a) Requerente, ou em razão do Casamento deste(a) último(a), nos termos do inciso I e IV, §1º, art. 39 da Instrução Normativa nº 77/2015");
                };
                if ($scope.itensRural.chkMaisQuatroModulos) {
                    listaMotivos.push("da atividade ser desenvolvida em área superior a 4 (quatro) módulos fiscais, nos termos do item 1, alínea \"a\", inciso VII, art. 9º do Decreto nº 3.048/99");
                };
                if ($scope.itensRural.chkAtividadeRemunerada) {
                    listaMotivos.push("do exercício intercalado de Atividade Remunerada / Urbana, sem a apresentação de prova de retorno do(a) Requerente ao meio Rural, nos termos da alínea \"b\", inciso IV, item 7 do Ofício-Circular nº 46, de 13/09/2019, e §5º, art. 39 da Instrução Normativa nº 77/2015");
                };
                if ($scope.itensRural.chkRemuneradaTurismoEmpregados) {
                    listaMotivos.push("da descaracterização da condição de Segurado Especial, em função do exercício de Atividade Remunerada / Exploração Turística / Utilização de Mão de Obra à razão superior a 120 dias/ano, nos termos das alíneas \"a\", \"b\" e \"c\", inciso II, §10, art. 11 da Lei nº 8.213/91");
                };
                if ($scope.itensRural.chkNaoParticipaAtividade) {
                    listaMotivos.push("do(a) Requerente não participar ativamente das atividades rurais do grupo familiar, situação em que fica descaracterizada a condição de Segurado Especial, nos termos do §6º, art. 11 da Lei nº 8.213/91");
                };
                if ($scope.itensRural.chkOutorgaIrregular) {
                    listaMotivos.push("da descaracterização da condição de Segurado Especial, em função da outorga em parceria/meação/comodato de mais de 50% da propriedade e/ou não exercício de atividade rural por outorgante/outorgado, em desacordo com o disposto no inciso I, §8º, art. 11 da Lei nº 8.213/91");
                };
                if ($scope.itensRural.chkNaoIndenizado) {
                    if ($scope.especieSelecionada.descricao == 'Aposentadoria por Tempo de Contribuição') {
                        listaMotivos.push("da não indenização de período comprovado a partir de Novembro/1991, nos termos do §2º, art. 55 da Lei nº 8.213/91, e art. 189 da Instrução Normativa nº 77/2015");
                    } else if ($scope.especieSelecionada.descricao == 'Certidão de Tempo de Contribuição') {
                        listaMotivos.push("da não indenização de período comprovado, nos termos do inciso IV, art. 96 da Lei nº 8.213/91, e dos incisos VI e VII, art. 445 da Instrução Normativa nº 77/2015");
                    };
                };

                qtdMotivos = listaMotivos.length;

                for (i = 0; i < qtdMotivos; i++) {
                    if (i > 0) {
                        if (i == qtdMotivos - 1) {
                            conclusaoRural += "; e ";
                        } else {
                            conclusaoRural += "; ";
                        };
                    };

                    conclusaoRural += listaMotivos[i];
                };

                conclusaoRural += ".";
                break;
        };

        $scope.itensDespacho.rural = conclusaoRural;
    };
    //Item: Exigências
    $scope.montarExigencia = function () {
        let conclusaoExigencia = "";
        switch ($scope.itensExigencia.txtExigenciaConsiderado) {
            case 'Não há':
                conclusaoExigencia = "Não houve a formulação de quaisquer exigências no decorrer da análise do presente requerimento, em razão da documentação apresentada e/ou informações constantes nos sistemas corporativos serem suficientes para a verificação do direito pleiteado.";
                break;
            case 'Cumprida':
                conclusaoExigencia = "Foram formuladas exigências ao(à) Requerente, que foram integralmente cumpridas, e suficientes para a verificação do direito pleiteado.";
                break;
            case 'Cumprida Parcial':
                conclusaoExigencia = "Foram formuladas exigências ao(à) Requerente, cujo cumprimento se deu de forma parcial. Não houve o cumprimento das exigências referentes a " + $scope.itensExigencia.txtExigenciaParcialNaoCumprida + ".";
                break;
            case 'Não cumprida':
                conclusaoExigencia = "Foram formuladas exigências ao(à) Requerente, porém não houve o seu cumprimento.";
                if ($scope.itensExigencia.txtExigenciaNaoCumprida == "Não apresentou") {
                    conclusaoExigencia += " Passados mais de 30 dias da sua comunicação, não houve a apresentação de quaisquer documentos, ou qualquer manifestação a respeito por parte do(a) Requerente, o que resulta no arquivamento do pedido, nos termos do art. 40 da Lei nº 9.784/99.";
                } else if ($scope.itensExigencia.txtExigenciaNaoCumprida == "Não entregue") {
                    conclusaoExigencia += " A correspondência de exigências foi remetida ao endereço do(a) Requerente constante no CNIS e/ou declinado no Requerimento, mas houve falha na entrega. Cabe ao(à) Requerente manter o seu endereço correto/atualizado, nos termos do §3º, art. 665 da IN 77/2015.";
                } else if ($scope.itensExigencia.txtExigenciaNaoCumprida == "Encerramento") {
                    conclusaoExigencia += " Passados mais de 75 dias da sua comunicação, não houve a apresentação de documentos que permitissem o reconhecimento do direito, sendo o pedido encerrado sem análise do mérito, nos termos do §8º, art. 678 da Instrução Normativa nº 77/2015.";
                } else if ($scope.itensExigencia.txtExigenciaNaoCumprida == "Não suficiente") {
                    conclusaoExigencia += " Houve a apresentação de documentos, porém verifica-se que não atendem ao exigido para a correta verificação do direito pleiteado.";
                };

                break;
        };

        $scope.itensDespacho.exigencias = conclusaoExigencia;
    };
    //Item: Procedimentos
    $scope.montarProcedimento = function () {
        let conclusaoProcedimento = "No presente requerimento, houve a necessidade de realização de procedimentos adicionais: ";
        let listaMotivos = [];

        if ($scope.itensProcedimento.chkAvaliacaoSocial) {
            switch ($scope.itensProcedimento.txtAvaliacaoSocial) {
                case 'Agendada':
                    listaMotivos.push("houve o agendamento de Avaliação Social para o(a) Requerente, conforme comprovante anexado ao processo");
                    break;
                case 'Não Agendada':
                    listaMotivos.push("não houve o agendamento de Avaliação Social para o(a) Requerente, em razão da ausência de vagas para este serviço");
                    break;
                case 'Realizada Negativa':
                    listaMotivos.push("o(a) Requerente foi submetido(a) a Avaliação Social, que foi concluída com parecer negativo");
                    break;
                case 'Realizada Positiva':
                    listaMotivos.push("o(a) Requerente foi submetido(a) a Avaliação Social, que foi concluída com parecer positivo");
                    break;
            };
        };

        if ($scope.itensProcedimento.chkAvaliacaoPericia) {
            switch ($scope.itensProcedimento.txtAvaliacaoPericia) {
                case 'Agendada':
                    listaMotivos.push("houve o agendamento de Perícia Médica para o(a) Requerente, conforme comprovante anexado ao processo");
                    break;
                case 'Não Agendada':
                    listaMotivos.push("não houve o agendamento de Perícia Médica para o(a) Requerente, em razão da ausência de vagas para este serviço");
                    break;
                case 'Realizada Negativa':
                    listaMotivos.push("o(a) Requerente foi submetido(a) a avaliação da Perícia Médica, que foi concluída com parecer negativo");
                    break;
                case 'Realizada Positiva':
                    listaMotivos.push("o(a) Requerente foi submetido(a) a avaliação da Perícia Médica, que foi concluída com parecer positivo");
                    break;
            };
        };

        if ($scope.itensProcedimento.chkAvaliacaoConjunta) {
            if ($scope.itensProcedimento.txtAvaliacaoConjunta == "Realizada Negativa") {
                if ($scope.especieSelecionada.descricao == "Aposentadoria por Idade Urbana" || $scope.especieSelecionada.descricao == "Aposentadoria por Tempo de Contribuição") {
                    listaMotivos.push("o(a) Requerente foi submetido(a) a Avaliação Conjunta Biopsicossocial - Social e Médico-Pericial, que concluiu por não reconhecer sua deficiência, ou que a mesma tenha se mantido até a Data de Entrada do Requerimento - DER ou de implementação dos requisitos para o benefício, nos termos do arts. 70-A e 70-D do Decreto nº 3.048/99");
                }
                else if ($scope.especieSelecionada.descricao == "Benefício Assistencial ao Deficiente") {
                    listaMotivos.push("o(a) Requerente foi submetido(a) a Avaliação Conjunta - Social e Médico-Pericial, que concluiu por não reconhecer a sua condição de Pessoa com Deficiência, como definida no §2º, art. 20 da Lei nº 8.742/93");
                }
                else {
                    listaMotivos.push("o(a) Requerente foi submetido(a) a Avaliação Conjunta - Social e Médico-Pericial, que foi concluída com parecer negativo");
                };
            }
            else if ($scope.itensProcedimento.txtAvaliacaoConjunta == "Realizada Positiva") {
                if ($scope.especieSelecionada.descricao == "Aposentadoria por Idade Urbana" || $scope.especieSelecionada.descricao == "Aposentadoria por Tempo de Contribuição") {
                    listaMotivos.push("o(a) Requerente foi submetido(a) a Avaliação Conjunta Biopsicossocial - Social e Médico-Pericial, que concluiu por reconhecer sua deficiência, e sua manutenção até a Data de Entrada do Requerimento - DER ou de implementação dos requisitos para o benefício, nos termos do arts. 70-A e 70-D do Decreto nº 3.048/99");
                }
                else if ($scope.especieSelecionada.descricao == "Benefício Assistencial ao Deficiente") {
                    listaMotivos.push("o(a) Requerente foi submetido(a) a Avaliação Conjunta - Social e Médico-Pericial, que concluiu por reconhecer a sua condição de Pessoa com Deficiência, como definida no §2º, art. 20 da Lei nº 8.742/93");
                }
                else {
                    listaMotivos.push("o(a) Requerente foi submetido(a) a Avaliação Conjunta - Social e Médico-Pericial, que foi concluída com parecer positivo");
                };
            };
        };

        if ($scope.itensProcedimento.chkJustAdministrativa) {
            switch ($scope.itensProcedimento.txtJustAdministrativa) {
                case 'Desnecessária':
                    listaMotivos.push("houve o requerimento de Justificação Administrativa, mas o seu processamento foi dispensado em razão de ter sido possível realizar a comprovação pretendida de maneira conclusiva com base nas informações já anexadas ao processo");
                    break;
                case 'Autorizada':
                    listaMotivos.push("houve o requerimento de Justificação Administrativa, que após análise de requisitos, teve o seu processamento autorizado, nos termos do art. 587 da Instrução Normativa nº 77/2015");
                    break;
                case 'Não Autorizada':
                    listaMotivos.push("houve o requerimento de Justificação Administrativa, porém a mesma não foi autorizada, em razão de não cumprir com seus requisitos de formalização do pedido ou apresentação de início de prova material suficiente para formar convicção quanto ao pretendido, nos termos do art. 151 do Decreto nº 3.048/99 e art. 587 da Instrução Normativa nº 77/2015");
                    break;
                case 'Realizada Eficaz':
                    listaMotivos.push("houve o processamento de Justificação Administrativa, que após análise conclusiva quanto à sua forma e mérito, foi considerada eficaz para a comprovação pretendida, nos termos do inciso II, art. 592 da Instrução Normativa nº 77/2015");
                    break;
                case 'Realizada Ineficaz':
                    listaMotivos.push("houve o processamento de Justificação Administrativa, que após análise conclusiva quanto à sua forma e mérito, foi considerada ineficaz para a comprovação pretendida, nos termos do inciso II, art. 592 da Instrução Normativa nº 77/2015");
                    break;
            };

        };
        if ($scope.itensProcedimento.chkEncontroContas) {
            if ($scope.itensProcedimento.txtEncontroContas == "CN") {
                listaMotivos.push("houve a realização de Encontro de Contas com benefício indevido/incompatível, que resultou em Débito - Consignação no valor de R$ " + $scope.itensProcedimento.txtValorEncontroContas);
            } else if ($scope.itensProcedimento.txtEncontroContas == "CP") {
                listaMotivos.push("houve a realização de Encontro de Contas com benefício indevido/incompatível, que resultou em Crédito - Complemento Positivo no valor de R$ " + $scope.itensProcedimento.txtValorEncontroContas);
            };
        };

        let qtdMotivos = listaMotivos.length;

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    conclusaoProcedimento += "; e ";
                } else {
                    conclusaoProcedimento += "; ";
                };
            };

            conclusaoProcedimento += listaMotivos[i];
        };

        conclusaoProcedimento += ".";

        if ((($scope.itensProcedimento.chkAvaliacaoPericia && $scope.itensProcedimento.txtAvaliacaoPericia == "Não Agendada") || ($scope.itensProcedimento.chkAvaliacaoSocial && $scope.itensProcedimento.txtAvaliacaoSocial == "Não Agendada")) && $scope.itensProcedimento.chkAusenciaVagasAgendamento) {
            conclusaoProcedimento += " O(a) Requerente será posteriormente comunicado(a) sobre a data de agendamento do(s) procedimento(s) faltante(s)."
        }

        $scope.itensDespacho.procedimentos = conclusaoProcedimento;
    };
    //Item: Outros
    $scope.montarOutro = function () {
        let conclusaoOutro = "Cabe registrar, ainda, que no presente pedido ";
        let listaMotivos = [];

        if ($scope.itensOutro.chkAproveitamentoParcial) {
            if ($scope.itensOutro.txtPeriodosAproveitados != "") {
                listaMotivos.push("houve o aproveitamento parcial dos períodos de contribuição, conforme indicado pelo Requerente, nos termos do §11, art. 130 do Decreto nº 3.048/99: " + $scope.itensOutro.txtPeriodosAproveitados);
            } else {
                listaMotivos.push("houve o aproveitamento parcial dos períodos de contribuição, conforme indicado pelo Requerente, nos termos do §11, art. 130 do Decreto nº 3.048/99");
            };
        };
        if ($scope.itensOutro.chkAutenticacaoDispensada) {
            listaMotivos.push("foram considerados documentos de cópia simples, cuja apresentação dos originais para fins de autenticação foi dispensada, nos termos do §2º, art. 19-B do Decreto nº 3.048/99");
        };
        if ($scope.itensOutro.chkProcessoAnterior) {
            listaMotivos.push("houve o aproveitamento dos documentos e informações constantes no(s) processo(s) anterior(es) de nº " + $scope.itensOutro.txtProcessoAnterior + ", em observância ao disposto no art. 685 da IN nº 77/2015");
        };
        if ($scope.itensOutro.chkACP) {
            listaMotivos.push("houve a utilização da Ação Civil Pública - ACP nº " + $scope.itensOutro.txtACP);
        };
        if ($scope.itensOutro.chkQualidadeDesemprego) {
            listaMotivos.push("houve o acréscimo de 12 meses ao prazo de manutenção da qualidade de segurado, em razão da condição de desempregado(a) comprovada por registro em órgão próprio, nos termos do §2º, art. 13 do Decreto nº 3.048/99");
        };
        if ($scope.itensOutro.chkQualidadeNaoDesemprego) {
            listaMotivos.push("não houve o acréscimo de 12 meses ao prazo de manutenção da qualidade de segurado, em razão de não ter sido comprovada a condição de desempregado(a) por registro em órgão próprio, ou do mesmo ter sido realizado fora do prazo de manutenção da qualidade de segurado relativo ao último vínculo, como disposto no §2º, art. 13 do Decreto nº 3.048/99, e §§4º e 5º, art. 137 da IN nº 77/2015");
        };
        if ($scope.itensOutro.chkQualidade120Contribuicoes) {
            listaMotivos.push("houve o acréscimo de 12 meses ao prazo de manutenção da qualidade de segurado, em razão de ter somado mais de 120 contribuições mensais sem perda da qualidade de segurado, nos termos do §1º, art. 13 do Decreto nº 3.048/99, e §2º, art. 137 da IN 77/2015");
        };
        if ($scope.itensOutro.chkQualidadeNao120Contribuicoes) {
            listaMotivos.push("não houve o acréscimo de 12 meses ao prazo de manutenção da qualidade de segurado, em razão de não ter somado mais de 120 contribuições mensais sem perda da qualidade de segurado, nos termos do §1º, art. 13 do Decreto nº 3.048/99, e §2º, art. 137 da IN 77/2015");
        };
        if ($scope.itensOutro.chkQualidadeAuxAcidente) {
            listaMotivos.push("não houve o aproveitamento do benefício de Auxílio-Acidente para manutenção da qualidade de segurado, nos termos do inc. I, art. 13 do Decreto nº 3.048/99");
        };
        if ($scope.itensOutro.chkConsulta) {
            listaMotivos.push("houve a realização de consulta ao/à " + $scope.itensOutro.txtConsultaOrgao + ", que retornou com a resposta " + $scope.itensOutro.txtConsultaResposta);
        };
        if ($scope.itensOutro.chkAlteracaoEspecie) {
            listaMotivos.push("houve a alteração da Espécie do Benefício de XX para YY, com a autorização do(a) Requerente, nos termos do § único e caput, art. 176-E do Decreto nº 3.048/99");
        };
        if ($scope.itensOutro.chkAlteracaoNaoEspecie) {
            listaMotivos.push("não houve a alteração da Espécie do Benefício, em razão da não autorização pelo(a) Requerente, nos termos do § único, art. 176-E do Decreto nº 3.048/99");
        };
        if ($scope.itensOutro.chkAlteracaoDER) {
            listaMotivos.push("houve a reafirmação da Data de Entrada do Requerimento - DER para o dia em que completou o direito ao benefício, com a autorização do(a) Requerente, nos termos do art. 176-D do Decreto nº 3.048/99");
        };
        if ($scope.itensOutro.chkAlteracaoNaoDER) {
            listaMotivos.push("não houve a reafirmação da Data de Entrada do Requerimento - DER para o dia em que completaria o direito ao benefício, em razão da manifestação expressa em contrário do(a) Requerente, nos termos do art. 176-D do Decreto nº 3.048/99");
        };
        if ($scope.itensOutro.chkDERNaoAlterada) {
            listaMotivos.push("não houve a reafirmação da Data de Entrada do Requerimento - DER, considerando que o(a) Requerente ainda não completaria os requisitos para a concessão do benefício");
        };
        if ($scope.especieSelecionada.codigo == '42' && $scope.itensOutro.chkProporcional) {
            listaMotivos.push("o(a) Requerente concordou com a concessão da Aposentadoria na sua forma Proporcional, nos termos do §2º, art. 235 da IN nº 77/2015");
        };
        if ($scope.especieSelecionada.codigo == '42' && $scope.itensOutro.chkNaoProporcional) {
            listaMotivos.push("o(a) Requerente não concordou com a concessão da Aposentadoria na sua forma Proporcional, nos termos do §2º, art. 235 da IN nº 77/2015");
        };
        if ($scope.itensOutro.chkDesistenciaNB) {
            listaMotivos.push("houve a desistência, pelo(a) Requerente, de outro Benefício em manutenção incompatível");
        };
        if ($scope.itensOutro.chkCessacaoBeneficio) {
            if ($scope.especieSelecionada.codigo == 'CTC') {
                listaMotivos.push("houve a cessação de benefício de Auxílio-Acidente, Auxílio-Suplementar ou Abono de Permanência em Serviço, de E/NB " + $scope.itensOutro.txtBeneficioCessado + ", em razão da emissão da Certidão de Tempo de Contribuição, nos termos do art. 450 da IN nº 77/2015, e art. 129 do Decreto nº 3.048/99");
            } else {
                listaMotivos.push("houve a cessação de benefício cuja acumulação é vedada, de E/NB " + $scope.itensOutro.txtBeneficioCessado + ", nos termos do art. 528 da IN nº 77/2015, e art. 167 do Decreto nº 3.048/99");
            };
        };
        if ($scope.itensOutro.chkMinimoPBC) {
            listaMotivos.push("houve a informação do salário mínimo nas competências sem remuneração comprovada e/ou constante no Cadastro Nacional de Informações Sociais - CNIS, nos termos do §2º, art. 36 do Decreto nº 3.048/99");
        };
        if (($scope.especieSelecionada.codigo == '21' || $scope.especieSelecionada.codigo == '93') && $scope.itensOutro.chkInstituidorBPC) {
            listaMotivos.push("verificou-se que o(a) Instituidor(a) era titular de Benefício de Prestação Continuada - BPC, de caráter assistencial e pessoal, cessado com a morte de seu titular e sem a transmissão na forma de Pensão aos seus Dependentes, nos termos do art. 23 do Decreto nº 6.214/07");
        };
        if (($scope.especieSelecionada.codigo == '21' || $scope.especieSelecionada.codigo == '93') && $scope.itensOutro.chkSolicitarResiduo) {
            listaMotivos.push("verificou-se a existência de valor não recebido até a data do óbito do(a) Instituidor(a), devendo o(a) Requerente solicitá-lo por meio do serviço \"Solicitar Valor Não Recebido até a Data do Óbito do Beneficiário\", através do Meu INSS ou pelo telefone 135");
        };
        if (($scope.especieSelecionada.codigo == '21' || $scope.especieSelecionada.codigo == '93') && $scope.itensOutro.chkPagtoPosObito) {
            let txtConsig = "houve a Consignação dos valores recebidos após a data do óbito do(a) Instituidor(a), no benefício anterior"; 
            if ($scope.itensOutro.txtValorConsignado != "") {
                txtConsig += " e no total de R$ " + $scope.itensOutro.txtValorConsignado;
            };
            txtConsig += ", conforme autorização do(a) Requerente registrada no ato do protocolo";
            listaMotivos.push(txtConsig);
        };

        let qtdMotivos = listaMotivos.length;

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    conclusaoOutro += "; e ";
                } else {
                    conclusaoOutro += "; ";
                };
            };

            conclusaoOutro += listaMotivos[i];
        };

        conclusaoOutro += ".";
        
        $scope.itensDespacho.outros = conclusaoOutro;
    };

    //FUNÇÕES DE MONTAGEM: INDEFERIMENTO
    //Indeferimento > Pensão Urbana
    $scope.despachoPensUrbInd = function () {
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkQualSeg) {
            listaMotivos.push("do(a) Instituidor(a) ter perdido a Qualidade de Segurado em " + $scope.itensMotivoDespacho.txtDataQualSeg + ", nos termos dos arts. 13 e 14 do Decreto nº 3.048/99");
        };

        if ($scope.itensMotivoDespacho.chkComprDepend) {
            let listaDependentes = [];

            if ($scope.itensMotivoDespacho.chkDependNaoComprCompanheiro) {
                listaDependentes.push("Companheiro(a)");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprConjuge) {
                listaDependentes.push("Cônjuge");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprExConjuge) {
                listaDependentes.push("Ex-Cônjuge");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprFilhoMenor) {
                listaDependentes.push("Filho(a) Menor");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprFilhoMaior) {
                listaDependentes.push("Filho(a) Maior Inválido(a)");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprPaiMaeIrmao) {
                listaDependentes.push("Pai/Mãe/Irmã(o)");
            };
            
            let qtdDependentes = listaDependentes.length;
            let conclusaoDependentes = "de não ficar comprovada a condição de Dependente";

            if (qtdDependentes > 0) {
                conclusaoDependentes += " - ";
            };

            for (i = 0; i < qtdDependentes; i++) {
                if (i > 0) {
                    if (i == qtdDependentes - 1) {
                        conclusaoDependentes += " e ";
                    } else {
                        conclusaoDependentes += ", ";
                    };
                };

                conclusaoDependentes += listaDependentes[i];
            };

            if (qtdDependentes > 1) {
                conclusaoDependentes += " dos(as) Requerentes";
            } else {
                conclusaoDependentes += " do(a) Requerente";
            };

            conclusaoDependentes += " em relação ao(à) Instituidor(a), nos termos do art. 16 do Decreto nº 3.048/99";

            listaMotivos.push(conclusaoDependentes);
        };

        if ($scope.itensMotivoDespacho.chkComprDepend && $scope.itensMotivoDespacho.chkDependNaoComprConjuge && $scope.itensMotivoDespacho.chkComprRestabUniao) {
            listaMotivos.push("do(a) Requerente não comprovar o restabelecimento do vínculo conjugal, posterior à declaração de separação de fato registrada em requerimento anterior, nos termos do art. 373 da Instrução Normativa nº 77/2015");
        };

        if ($scope.itensMotivoDespacho.chkNaoFiliadoRGPS) {
            listaMotivos.push("de não ficar comprovada a filiação do(a) Instituidor(a) ao RGPS na data do fato gerador, nos termos dos arts. 9º e 10 do Decreto nº 3.048/99");
        };

        if ($scope.itensMotivoDespacho.chkOutroBeneficio) {
            listaMotivos.push("do(a) Requerente ser titular de benefício incompatível na Data de Entrada do Requerimento - DER, sob E/NB " + $scope.itensMotivoDespacho.txtOutroBeneficio + ", nos termos do art. 167 do Decreto nº 3.048/99");
        };

        if ($scope.itensMotivoDespacho.chkJaRecebeu) {
            listaMotivos.push("de ter sido verificado, em consulta ao Sistema Único de Benefícios - SUB, que o(a) Requerente é Titular de benefício de Pensão por Morte ativo/em manutenção referente ao mesmo fato-gerador");
        };


        let qtdMotivos = listaMotivos.length;
        let motivosIndeferimento = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosIndeferimento += "; e ";
                } else {
                    motivosIndeferimento += "; ";
                };
            };

            motivosIndeferimento += listaMotivos[i];
        };

        motivosIndeferimento += ".";

        if (!$scope.itensMotivoDespacho.chkQualSeg && !$scope.itensMotivoDespacho.chkNaoFiliadoRGPS) {
            motivosIndeferimento += " A Qualidade de Segurado do(a) Instituidor(a) ficou estabelecida, ";
            if ($scope.itensMotivoDespacho.txtTipoInstituidor == "Em Atividade") {
                motivosIndeferimento += "em virtude de se encontrar em atividade ou em período de manutenção dessa condição na data do óbito.";
            }
            else if ($scope.itensMotivoDespacho.txtTipoInstituidor == "Em Benefício") {
                motivosIndeferimento += "em virtude de ser Titular do benefício previdenciário E/NB " + $scope.itensMotivoDespacho.txtBenefInstituidor + " na data do óbito.";
            }
            else if ($scope.itensMotivoDespacho.txtTipoInstituidor == "Desdobrado") {
                motivosIndeferimento += "em virtude do presente benefício ser desdobrado com benefício de Pensão por Morte previamente concedido a outro dependente, sob E/NB " + $scope.itensMotivoDespacho.txtBenefInstituidor + ".";
            };
        };

        return motivosIndeferimento;
    };
    //Indeferimento > Pensão Rural
    $scope.despachoPensRurInd = function () {
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkQualSeg) {
            listaMotivos.push("do(a) Instituidor(a) ter perdido a Qualidade de Segurado em " + $scope.itensMotivoDespacho.txtDataQualSeg + ", nos termos dos arts. 13 e 14 do Decreto nº 3.048/99");
        };

        if ($scope.itensMotivoDespacho.chkComprDepend) {
            let listaDependentes = [];

            if ($scope.itensMotivoDespacho.chkDependNaoComprCompanheiro) {
                listaDependentes.push("Companheiro(a)");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprConjuge) {
                listaDependentes.push("Cônjuge");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprExConjuge) {
                listaDependentes.push("Ex-Cônjuge");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprFilhoMenor) {
                listaDependentes.push("Filho(a) Menor");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprFilhoMaior) {
                listaDependentes.push("Filho(a) Maior Inválido(a)");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprPaiMaeIrmao) {
                listaDependentes.push("Pai/Mãe/Irmã(o)");
            };

            let qtdDependentes = listaDependentes.length;
            let conclusaoDependentes = "de não ficar comprovada a condição de Dependente";

            if (qtdDependentes > 0) {
                conclusaoDependentes += " - ";
            };

            for (i = 0; i < qtdDependentes; i++) {
                if (i > 0) {
                    if (i == qtdDependentes - 1) {
                        conclusaoDependentes += " e ";
                    } else {
                        conclusaoDependentes += ", ";
                    };
                };

                conclusaoDependentes += listaDependentes[i];
            };

            if (qtdDependentes > 1) {
                conclusaoDependentes += " dos(as) Requerentes";
            } else {
                conclusaoDependentes += " do(a) Requerente";
            };

            conclusaoDependentes += " em relação ao(à) Instituidor(a), nos termos do art. 16 do Decreto nº 3.048/99";

            listaMotivos.push(conclusaoDependentes);
        };

        if ($scope.itensMotivoDespacho.chkComprDepend && $scope.itensMotivoDespacho.chkDependNaoComprConjuge && $scope.itensMotivoDespacho.chkComprRestabUniao) {
            listaMotivos.push("do(a) Requerente não comprovar o restabelecimento do vínculo conjugal, posterior à declaração de separação de fato registrada em requerimento anterior, nos termos do art. 373 da Instrução Normativa nº 77/2015");
        };

        if ($scope.itensMotivoDespacho.chkComprRural) {
            listaMotivos.push("de não ficar comprovada a condição de Trabalhador Rural do(a) Instituidor(a), nos termos do inc. IV, art. 18 do Decreto nº 3.048/99");
        };

        if ($scope.itensMotivoDespacho.chkNaoFiliadoRGPS) {
            listaMotivos.push("de não ficar comprovada a filiação do(a) Instituidor(a) ao RGPS na data do fato gerador, nos termos dos arts. 9º e 10 do Decreto nº 3.048/99");
        };

        if ($scope.itensMotivoDespacho.chkOutroBeneficio) {
            listaMotivos.push("do(a) Requerente ser titular de benefício incompatível na Data de Entrada do Requerimento - DER, sob E/NB " + $scope.itensMotivoDespacho.txtOutroBeneficio + ", nos termos do art. 167 do Decreto nº 3.048/99");
        };

        if ($scope.itensMotivoDespacho.chkJaRecebeu) {
            listaMotivos.push("de ter sido verificado, em consulta ao Sistema Único de Benefícios - SUB, que o(a) Requerente é Titular de benefício de Pensão por Morte ativo/em manutenção referente ao mesmo fato-gerador");
        };

        let qtdMotivos = listaMotivos.length;
        let motivosIndeferimento = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosIndeferimento += "; e ";
                } else {
                    motivosIndeferimento += "; ";
                };
            };

            motivosIndeferimento += listaMotivos[i];
        };

        motivosIndeferimento += ".";

        if (!$scope.itensMotivoDespacho.chkQualSeg && !$scope.itensMotivoDespacho.chkNaoFiliadoRGPS) {
            motivosIndeferimento += " A Qualidade de Segurado do(a) Instituidor(a) ficou estabelecida, ";
            if ($scope.itensMotivoDespacho.txtTipoInstituidor == "Em Atividade") {
                motivosIndeferimento += "em virtude de se encontrar em atividade ou em período de manutenção dessa condição na data do óbito.";
            }
            else if ($scope.itensMotivoDespacho.txtTipoInstituidor == "Em Benefício") {
                motivosIndeferimento += "em virtude de ser Titular do benefício previdenciário E/NB " + $scope.itensMotivoDespacho.txtBenefInstituidor + " na data do óbito.";
            }
            else if ($scope.itensMotivoDespacho.txtTipoInstituidor == "Desdobrado") {
                motivosIndeferimento += "em virtude do presente benefício ser desdobrado com benefício de Pensão por Morte previamente concedido a outro dependente, sob E/NB " + $scope.itensMotivoDespacho.txtBenefInstituidor + ".";
            };
        };

        return motivosIndeferimento;
    };
    //Indeferimento > Pensão por Acidente de Trabalho
    $scope.despachoPensAcidInd = function () {
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkQualSeg) {
            listaMotivos.push("do(a) Instituidor(a) ter perdido a Qualidade de Segurado em " + $scope.itensMotivoDespacho.txtDataQualSeg + ", nos termos dos arts. 13 e 14");
        };

        if ($scope.itensMotivoDespacho.chkComprDepend) {
            let listaDependentes = [];

            if ($scope.itensMotivoDespacho.chkDependNaoComprCompanheiro) {
                listaDependentes.push("Companheiro(a)");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprConjuge) {
                listaDependentes.push("Cônjuge");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprExConjuge) {
                listaDependentes.push("Ex-Cônjuge");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprFilhoMenor) {
                listaDependentes.push("Filho(a) Menor");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprFilhoMaior) {
                listaDependentes.push("Filho(a) Maior Inválido(a)");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprPaiMaeIrmao) {
                listaDependentes.push("Pai/Mãe/Irmã(o)");
            };

            let qtdDependentes = listaDependentes.length;
            let conclusaoDependentes = "de não ficar comprovada a condição de Dependente";

            if (qtdDependentes > 0) {
                conclusaoDependentes += " - ";
            };

            for (i = 0; i < qtdDependentes; i++) {
                if (i > 0) {
                    if (i == qtdDependentes - 1) {
                        conclusaoDependentes += " e ";
                    } else {
                        conclusaoDependentes += ", ";
                    };
                };

                conclusaoDependentes += listaDependentes[i];
            };

            if (qtdDependentes > 1) {
                conclusaoDependentes += " dos(as) Requerentes";
            } else {
                conclusaoDependentes += " do(a) Requerente";
            };

            conclusaoDependentes += " em relação ao(à) Instituidor(a), nos termos do art. 16";

            listaMotivos.push(conclusaoDependentes);
        };

        if ($scope.itensMotivoDespacho.chkOutroBeneficio) {
            listaMotivos.push("do(a) Requerente ser titular de benefício incompatível na Data de Entrada do Requerimento - DER, sob E/NB " + $scope.itensMotivoDespacho.txtOutroBeneficio + ", nos termos do art. 167");
        };

        if ($scope.itensMotivoDespacho.chkJaRecebeu) {
            listaMotivos.push("de ter sido verificado, em consulta ao Sistema Único de Benefícios - SUB, que o(a) Requerente é Titular de benefício de Pensão por Morte ativo/em manutenção referente ao mesmo fato-gerador");
        };

        let qtdMotivos = listaMotivos.length;
        let motivosIndeferimento = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosIndeferimento += "; e ";
                } else {
                    motivosIndeferimento += "; ";
                };
            };

            motivosIndeferimento += listaMotivos[i];
        };

        if (qtdMotivos > 1) {
            motivosIndeferimento += ", todos";
        };

        motivosIndeferimento += " do Decreto nº 3.048/99.";

        if (!$scope.itensMotivoDespacho.chkQualSeg) {
            motivosIndeferimento += " A Qualidade de Segurado do(a) Instituidor(a) ficou estabelecida, ";
            if ($scope.itensMotivoDespacho.txtTipoInstituidor == "Em Atividade") {
                motivosIndeferimento += "em virtude de se encontrar em atividade ou em período de manutenção dessa condição na data do óbito.";
            }
            else if ($scope.itensMotivoDespacho.txtTipoInstituidor == "Em Benefício") {
                motivosIndeferimento += "em virtude de ser Titular do benefício previdenciário E/NB " + $scope.itensMotivoDespacho.txtBenefInstituidor + " na data do óbito.";
            }
            else if ($scope.itensMotivoDespacho.txtTipoInstituidor == "Desdobrado") {
                motivosIndeferimento += "em virtude do presente benefício ser desdobrado com benefício de Pensão por Morte previamente concedido a outro dependente, sob E/NB " + $scope.itensMotivoDespacho.txtBenefInstituidor + ".";
            };
        };

        return motivosIndeferimento;
    };
    //Indeferimento > Auxílio-Reclusão Urbano
    $scope.despachoAuxRecUrbInd = function () {
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkFaltaCarencia) {
            listaMotivos.push("do(a) Instituidor(a) não atingir a Carência exigida no inc. IV, art. 25 da Lei nº 8.213/91, tendo completado apenas " + $scope.itensMotivoDespacho.txtCarencia + " contribuições mensais");
        };
        if ($scope.itensMotivoDespacho.chkQualSeg) {
            listaMotivos.push("do(a) Instituidor(a) ter perdido a Qualidade de Segurado, em " + $scope.itensMotivoDespacho.txtDataQualSeg + ", nos termos dos arts. 13 e 14 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkFaltaCarenciaAposPQS) {
            listaMotivos.push("do(a) Instituidor(a) não atingir a Carência exigida após ter perdido a Qualidade de Segurado, nos termos do art. 27-A da Lei nº 8.213/91, tendo completado apenas " + $scope.itensMotivoDespacho.txtCarenciaAposPQS + " contribuições mensais a partir da nova filiação");
        };
        if ($scope.itensMotivoDespacho.chkRendaSuperior) {
            listaMotivos.push("do último Salário de Contribuição / Renda Média do(a) Instituidor(a) ser superior ao limite definido no caput do art. 116 do Decreto nº 3.048/99 / §3º do art. 80 da Lei nº 8.213/91, apurada em R$ " + $scope.itensMotivoDespacho.txtRenda);
        };
        if ($scope.itensMotivoDespacho.chkComprDepend) {
            let listaDependentes = [];

            if ($scope.itensMotivoDespacho.chkDependNaoComprCompanheiro) {
                listaDependentes.push("Companheiro(a)");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprConjuge) {
                listaDependentes.push("Cônjuge");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprExConjuge) {
                listaDependentes.push("Ex-Cônjuge");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprFilhoMenor) {
                listaDependentes.push("Filho(a) Menor");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprFilhoMaior) {
                listaDependentes.push("Filho(a) Maior Inválido(a)");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprPaiMaeIrmao) {
                listaDependentes.push("Pai/Mãe/Irmã(o)");
            };

            let qtdDependentes = listaDependentes.length;
            let conclusaoDependentes = "de não ficar comprovada a condição de Dependente";

            if (qtdDependentes > 0) {
                conclusaoDependentes += " - ";
            };

            for (i = 0; i < qtdDependentes; i++) {
                if (i > 0) {
                    if (i == qtdDependentes - 1) {
                        conclusaoDependentes += " e ";
                    } else {
                        conclusaoDependentes += ", ";
                    };
                };

                conclusaoDependentes += listaDependentes[i];
            };

            if (qtdDependentes > 1) {
                conclusaoDependentes += " dos(as) Requerentes";
            } else {
                conclusaoDependentes += " do(a) Requerente";
            };

            conclusaoDependentes += " em relação ao(à) Instituidor(a), nos termos do art. 16 do Decreto nº 3.048/99";

            listaMotivos.push(conclusaoDependentes);
        };
        if ($scope.itensMotivoDespacho.chkNaoPrisao) {
            listaMotivos.push("de não ficar comprovada a Reclusão do(a) Instituidor(a), nos termos do §2º, art. 116 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkRegimePrisao) {
            listaMotivos.push("do Regime de Prisão do(a) Instituidor(a) não ser Fechado, como exigido no caput do art. 80 da Lei nº 8.213/91");
        };
        if ($scope.itensMotivoDespacho.chkAposSoltura) {
            listaMotivos.push("do Requerimento ter sido realizado após a soltura do(a) Instituidor(a), conforme vedação contida no art. 119 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkJaRecebeu) {
            let textoJaRecebeu = "de ter sido verificado, em consulta ao Sistema Único de Benefícios - SUB, que o(a) Requerente é Titular de benefício de Auxílio-Reclusão ativo/em manutenção referente ao mesmo fato-gerador";
            if ($scope.itensMotivoDespacho.chkIncluirTextoRenovacaoCarcere) {
                textoJaRecebeu += ". Caso o(a) Requerente deseje prorrogar/renovar o benefício, deverá solicitá-lo por meio do serviço \"Renovar Declaração de Cárcere/Reclusão\", através do Meu INSS";
            };
            listaMotivos.push(textoJaRecebeu);
        };

        let qtdMotivos = listaMotivos.length;
        let motivosIndeferimento = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosIndeferimento += "; e ";
                } else {
                    motivosIndeferimento += "; ";
                };
            };

            motivosIndeferimento += listaMotivos[i];
        };


        motivosIndeferimento += ".";
        return motivosIndeferimento;
    };
    //Indeferimento > Auxílio-Reclusão Rural
    $scope.despachoAuxRecRurInd = function () {
        let listaMotivos = [];
        
        if ($scope.itensMotivoDespacho.chkFaltaCarencia) {
            listaMotivos.push("do(a) Instituidor(a) não atingir a Carência exigida no inc. IV, art. 25 da Lei nº 8.213/91, tendo completado apenas " + $scope.itensMotivoDespacho.txtCarencia + " meses de atividade rural");
        };
        if ($scope.itensMotivoDespacho.chkQualSeg) {
            listaMotivos.push("do(a) Instituidor(a) ter perdido a Qualidade de Segurado, em " + $scope.itensMotivoDespacho.txtDataQualSeg + ", nos termos dos arts. 13 e 14 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkFaltaCarenciaAposPQS) {
            listaMotivos.push("do(a) Instituidor(a) não atingir a Carência exigida após ter perdido a Qualidade de Segurado, nos termos do art. 27-A da Lei nº 8.213/91, tendo completado apenas " + $scope.itensMotivoDespacho.txtCarenciaAposPQS + " meses de atividade rural a partir da nova filiação");
        };
        if ($scope.itensMotivoDespacho.chkRendaSuperior) {
            listaMotivos.push("do último Salário de Contribuição / Renda Média do(a) Instituidor(a) ser superior ao limite definido no caput do art. 116 do Decreto nº 3.048/99 / §3º do art. 80 da Lei nº 8.213/91, apurada em R$ " + $scope.itensMotivoDespacho.txtRenda);
        };
        if ($scope.itensMotivoDespacho.chkComprDepend) {
            let listaDependentes = [];

            if ($scope.itensMotivoDespacho.chkDependNaoComprCompanheiro) {
                listaDependentes.push("Companheiro(a)");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprConjuge) {
                listaDependentes.push("Cônjuge");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprExConjuge) {
                listaDependentes.push("Ex-Cônjuge");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprFilhoMenor) {
                listaDependentes.push("Filho(a) Menor");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprFilhoMaior) {
                listaDependentes.push("Filho(a) Maior Inválido(a)");
            };
            if ($scope.itensMotivoDespacho.chkDependNaoComprPaiMaeIrmao) {
                listaDependentes.push("Pai/Mãe/Irmã(o)");
            };

            let qtdDependentes = listaDependentes.length;
            let conclusaoDependentes = "de não ficar comprovada a condição de Dependente";

            if (qtdDependentes > 0) {
                conclusaoDependentes += " - ";
            };

            for (i = 0; i < qtdDependentes; i++) {
                if (i > 0) {
                    if (i == qtdDependentes - 1) {
                        conclusaoDependentes += " e ";
                    } else {
                        conclusaoDependentes += ", ";
                    };
                };

                conclusaoDependentes += listaDependentes[i];
            };

            if (qtdDependentes > 1) {
                conclusaoDependentes += " dos(as) Requerentes";
            } else {
                conclusaoDependentes += " do(a) Requerente";
            };

            conclusaoDependentes += " em relação ao(à) Instituidor(a), nos termos do art. 16 do Decreto nº 3.048/99";

            listaMotivos.push(conclusaoDependentes);
        };
        if ($scope.itensMotivoDespacho.chkNaoPrisao) {
            listaMotivos.push("de não ficar comprovada a Reclusão do(a) Instituidor(a), nos termos do §2º, art. 116 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkRegimePrisao) {
            listaMotivos.push("do Regime de Prisão do(a) Instituidor(a) não ser Fechado, como exigido no caput do art. 80 da Lei nº 8.213/91");
        };
        if ($scope.itensMotivoDespacho.chkAposSoltura) {
            listaMotivos.push("do Requerimento ter sido realizado após a soltura do(a) Instituidor(a), conforme vedação contida no art. 119 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkJaRecebeu) {
            let textoJaRecebeu = "de ter sido verificado, em consulta ao Sistema Único de Benefícios - SUB, que o(a) Requerente é Titular de benefício de Auxílio-Reclusão ativo/em manutenção referente ao mesmo fato-gerador";
            if ($scope.itensMotivoDespacho.chkIncluirTextoRenovacaoCarcere) {
                textoJaRecebeu += ". Caso o(a) Requerente deseje prorrogar/renovar o benefício, deverá solicitá-lo por meio do serviço \"Renovar Declaração de Cárcere/Reclusão\", através do Meu INSS";
            };
            listaMotivos.push(textoJaRecebeu);
        };
        if ($scope.itensMotivoDespacho.chkComprRural) {
            listaMotivos.push("de não ficar comprovada a condição de Trabalhador Rural - Segurado Especial do(a) Instituidor(a), nos termos do §6º e inc. IV, art. 18 do Decreto nº 3.048/99");
        };

        let qtdMotivos = listaMotivos.length;
        let motivosIndeferimento = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosIndeferimento += "; e ";
                } else {
                    motivosIndeferimento += "; ";
                };
            };

            motivosIndeferimento += listaMotivos[i];
        };


        motivosIndeferimento += ".";
        return motivosIndeferimento;
    };
    //Indeferimento > Auxílio-Doença Urbano
    $scope.despachoAuxDoeUrbInd = function () {
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkFaltaCarencia) {
            listaMotivos.push("do(a) Requerente não atingir a Carência exigida no inc. I, art. 25 da Lei nº 8.213/91, tendo completado apenas " + $scope.itensMotivoDespacho.txtCarencia + " contribuições mensais");
        };
        if ($scope.itensMotivoDespacho.chkFaltaCarenciaAposPQS) {
            listaMotivos.push("do(a) Requerente não atingir a Carência exigida após ter perdido a Qualidade de Segurado, nos termos do art. 27-A da Lei nº 8.213/91, tendo completado apenas " + $scope.itensMotivoDespacho.txtCarenciaAposPQS + " contribuições mensais a partir da nova filiação");
        };
        if ($scope.itensMotivoDespacho.chkQualSeg) {
            listaMotivos.push("do(a) Requerente ter perdido a Qualidade de Segurado, em " + $scope.itensMotivoDespacho.txtDataQualSeg + ", nos termos dos arts. 13 e 14 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkNaoComparecimentoPericia) {
            listaMotivos.push("do(a) Requerente não ter comparecido à avaliação da Perícia Médica no local/data/hora agendados, procedimento indispensável para reconhecimento da incapacidade para o trabalho, nos termos do art. 75-A do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkPericiaContraria) {
            listaMotivos.push("de não ficar reconhecida a incapacidade para o trabalho do(a) Requerente, após avaliação da Perícia Médica, nos termos do art. 71 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkDIIAnteriorFiliacao) {
            listaMotivos.push("da avaliação da Perícia Médica ter fixado a Data de Início da Incapacidade - DII em data anterior ao ingresso do(a) Requerente no RGPS, nos termos do §1º, art. 71 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkOutroBeneficio) {
            listaMotivos.push("do(a) Requerente ser titular de benefício incompatível na Data de Entrada do Requerimento - DER, sob E/NB " + $scope.itensMotivoDespacho.txtOutroBeneficio + ", nos termos do art. 167 do Decreto nº 3.048/99");
        };

        let qtdMotivos = listaMotivos.length;
        let motivosIndeferimento = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosIndeferimento += "; e ";
                } else {
                    motivosIndeferimento += "; ";
                };
            };

            motivosIndeferimento += listaMotivos[i];
        };

        motivosIndeferimento += ".";
        return motivosIndeferimento;
    };
    //Indeferimento > Auxílio-Doença Rural
    $scope.despachoAuxDoeRurInd = function () {
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkFaltaCarencia) {
            listaMotivos.push("do(a) Requerente não atingir a Carência exigida no inc. I, art. 25 da Lei nº 8.213/91, tendo completado apenas " + $scope.itensMotivoDespacho.txtCarencia + " meses de atividade rural");
        };
        if ($scope.itensMotivoDespacho.chkFaltaCarenciaAposPQS) {
            listaMotivos.push("do(a) Requerente não atingir a Carência exigida após ter perdido a Qualidade de Segurado, nos termos do art. 27-A da Lei nº 8.213/91, tendo completado apenas " + $scope.itensMotivoDespacho.txtCarenciaAposPQS + " meses de atividade rural a partir da nova filiação");
        };
        if ($scope.itensMotivoDespacho.chkQualSeg) {
            listaMotivos.push("do(a) Requerente ter perdido a Qualidade de Segurado, em " + $scope.itensMotivoDespacho.txtDataQualSeg + ", nos termos dos arts. 13 e 14 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkComprRural) {
            listaMotivos.push("de não ficar comprovada a condição de Trabalhador Rural - Segurado Especial do(a) Requerente, nos termos do inc. IV, art. 18 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkNaoComparecimentoPericia) {
            listaMotivos.push("do(a) Requerente não ter comparecido à avaliação da Perícia Médica no local/data/hora agendados, procedimento indispensável para reconhecimento da incapacidade para o trabalho, nos termos do art. 75-A do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkPericiaContraria) {
            listaMotivos.push("de não ficar reconhecida a incapacidade para o trabalho do(a) Requerente, após avaliação da Perícia Médica, nos termos do art. 71 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkDIIAnteriorFiliacao) {
            listaMotivos.push("da avaliação da Perícia Médica ter fixado a Data de Início da Incapacidade - DII em data anterior ao ingresso do(a) Requerente no RGPS, nos termos do §1º, art. 71 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkOutroBeneficio) {
            listaMotivos.push("do(a) Requerente ser titular de benefício incompatível na Data de Entrada do Requerimento - DER, sob E/NB " + $scope.itensMotivoDespacho.txtOutroBeneficio + ", nos termos do art. 167 do Decreto nº 3.048/99");
        };

        let qtdMotivos = listaMotivos.length;
        let motivosIndeferimento = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosIndeferimento += "; e ";
                } else {
                    motivosIndeferimento += "; ";
                };
            };

            motivosIndeferimento += listaMotivos[i];
        };

        motivosIndeferimento += ".";
        return motivosIndeferimento;
    };
    //Indeferimento > Auxílio-Acidente Previdenciário
    $scope.despachoAuxAcidPrevInd = function () {
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkPericiaContraria) {
            listaMotivos.push("de não ficar reconhecida a redução da capacidade laborativa, decorrente de sequela definitiva resultante de consolidação das lesões do acidente, nos termos do art. 104");
        };
        if ($scope.itensMotivoDespacho.chkOutroBeneficio) {
            listaMotivos.push("do recebimento de benefício de Aposentadoria, sob E/NB " + $scope.itensMotivoDespacho.txtOutroBeneficio + ", nos termos do §2º, art. 104");
        };

        let qtdMotivos = listaMotivos.length;
        let motivosIndeferimento = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosIndeferimento += "; e ";
                } else {
                    motivosIndeferimento += "; ";
                };
            };

            motivosIndeferimento += listaMotivos[i];
        };

        if (qtdMotivos > 1) {
            motivosIndeferimento += ", todos";
        };

        motivosIndeferimento += " do Decreto nº 3.048/99.";

        return motivosIndeferimento;
    };
    //Indeferimento > Auxílio-Acidente por Acidente de Trabalho
    $scope.despachoAuxAcidAcidInd = function () {
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkPericiaContraria) {
            listaMotivos.push("de não ficar reconhecida a redução da capacidade laborativa, decorrente de sequela definitiva resultante de consolidação das lesões do acidente de trabalho, nos termos do art. 104 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkOutroBeneficio) {
            listaMotivos.push("do recebimento de benefício de Aposentadoria, sob E/NB " + $scope.itensMotivoDespacho.txtOutroBeneficio + ", nos termos do §2º, art. 104 do Decreto nº 3.048/99");
        };

        let qtdMotivos = listaMotivos.length;
        let motivosIndeferimento = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosIndeferimento += "; e ";
                } else {
                    motivosIndeferimento += "; ";
                };
            };

            motivosIndeferimento += listaMotivos[i];
        };

        motivosIndeferimento += ".";
        return motivosIndeferimento;
    };
    //Indeferimento > Aposentadoria por Idade Urbana
    $scope.despachoApIdUrbInd = function () {
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkNaoNovasRegrasEC103) {
            $scope.itensMotivoDespacho.chkFaltaCarencia = false;
            $scope.itensMotivoDespacho.chkFaltaIdade = false;
            $scope.itensMotivoDespacho.chkNaoDeficienteLC142 = false;
            $scope.itensMotivoDespacho.chkNaoReqMinimosLC142 = false;
            listaMotivos.push("do(a) Requerente não completar os requisitos para a Aposentadoria Programada introduzidos pela Emenda Constitucional nº 103/2019 (Idade: 62 anos (mulher) / 65 anos (homem), Tempo de Contribuição: 15 anos (mulher) / 20 anos (homem), Carência: 180 contribuições), nos termos do art. 51 do Decreto nº 3.048/99; não se enquadrar na Regra de Transição descrita no art. 18 da mesma Emenda Constitucional nº 103/2019; e não possuir direito adquirido ao benefício na sua regra anterior, descrita no inc. I, art. 188-A do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkFaltaCarencia) {
            listaMotivos.push("do(a) Requerente não atingir a Carência exigida, tendo completado apenas " + $scope.itensMotivoDespacho.txtCarencia + " contribuições mensais, número inferior ao exigido no inc. II, art. 29 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkFaltaIdade) {
            listaMotivos.push("do(a) Requerente não ter completado a idade mínima exigida para a sua concessão, nos termos do art. 51 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkNaoDeficienteLC142) {
            $scope.itensMotivoDespacho.chkNaoReqMinimosLC142 = false;
            listaMotivos.push("do(a) Requerente não comprovar a condição de Pessoa com Deficiência em avaliação médica e funcional, para fins da LC nº 142/2013, nos termos do art. 70-A do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkNaoReqMinimosLC142) {
            $scope.itensMotivoDespacho.chkNaoDeficienteLC142 = false;
            listaMotivos.push("do(a) Requerente não cumprir os requisitos mínimos necessários para a Aposentadoria por Idade da Pessoa com Deficiência, para fins da LC nº 142/2013 (Idade: 55 anos (mulher) / 60 anos (homem), Carência: 180 contribuições), nos termos do art. 70-C do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkOutroBeneficio) {
            listaMotivos.push("do(a) Requerente ser titular de benefício incompatível na Data de Entrada do Requerimento - DER, sob E/NB " + $scope.itensMotivoDespacho.txtOutroBeneficio + ", nos termos do art. 167 do Decreto nº 3.048/99");
        };


        let qtdMotivos = listaMotivos.length;
        let motivosIndeferimento = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosIndeferimento += "; e ";
                } else {
                    motivosIndeferimento += "; ";
                };
            };

            motivosIndeferimento += listaMotivos[i];
        };

        motivosIndeferimento += ".";

        return motivosIndeferimento;
    };
    //Indeferimento > Aposentadoria por Idade Rural
    $scope.despachoApIdRurInd = function () {
        $scope.itensMotivoDespacho.chkNaoNovasRegrasEC103 = false;
        let listaMotivos = [];
        
        if ($scope.itensMotivoDespacho.chkFaltaCarencia) {
            listaMotivos.push("do(a) Requerente não atingir a Carência exigida, tendo completado apenas " + $scope.itensMotivoDespacho.txtCarencia + " meses de Atividade Rural, número inferior ao exigido no inc. II, art. 29 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkFaltaIdade) {
            listaMotivos.push("do(a) Requerente não ter completado a idade mínima exigida para a sua concessão, nos termos do caput do art. 56 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkQualSeg) {
            listaMotivos.push("do(a) Requerente não comprovar o efetivo exercício de atividade Rural no período imediatamente anterior à Data de Entrada do Requerimento - DER ou ao mês em que completou o requisito etário, mantendo tal condição somente até " + $scope.itensMotivoDespacho.txtDataQualSeg + ", nos termos do §1º, art. 56 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkOutroBeneficio) {
            listaMotivos.push("do(a) Requerente ser titular de benefício incompatível na Data de Entrada do Requerimento - DER, sob E/NB " + $scope.itensMotivoDespacho.txtOutroBeneficio + ", nos termos do art. 167 do Decreto nº 3.048/99");
        };

        let qtdMotivos = listaMotivos.length;
        let motivosIndeferimento = " em razão ";
        
        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosIndeferimento += "; e ";
                } else {
                    motivosIndeferimento += "; ";
                };
            };

            motivosIndeferimento += listaMotivos[i];
        };

        motivosIndeferimento += ".";
        return motivosIndeferimento;
    };
    //Indeferimento > Aposentadoria por Tempo de Contribuição
    $scope.despachoApTempInd =  function () {
        let listaMotivos = [];
        let tempoTotal = "";

        if ($scope.itensMotivoDespacho.chkFaltaTempo || $scope.itensMotivoDespacho.chkNaoNovasRegrasEC103) {
            if ($scope.itensMotivoDespacho.txtTempoAnos != "") {
                tempoTotal += $scope.itensMotivoDespacho.txtTempoAnos + " anos ";
            };
            if ($scope.itensMotivoDespacho.txtTempoMeses != "") {
                if ($scope.itensMotivoDespacho.txtTempoAnos != "" && $scope.itensMotivoDespacho.txtTempoDias == "") {
                    tempoTotal += "e ";
                };
                tempoTotal += $scope.itensMotivoDespacho.txtTempoMeses + " meses ";
            };
            if ($scope.itensMotivoDespacho.txtTempoDias != "") {
                if ($scope.itensMotivoDespacho.txtTempoAnos != "" || $scope.itensMotivoDespacho.txtTempoMeses != "") {
                    tempoTotal += "e ";
                };
                tempoTotal += $scope.itensMotivoDespacho.txtTempoDias + " dias ";
            };
        };


        if ($scope.itensMotivoDespacho.chkNaoNovasRegrasEC103) {
            $scope.itensMotivoDespacho.chkFaltaTempo = false;
            $scope.itensMotivoDespacho.chkFaltaCarencia = false;
            $scope.itensMotivoDespacho.chkNaoDeficienteLC142 = false;
            $scope.itensMotivoDespacho.chkNaoReqMinimosLC142 = false;
            listaMotivos.push("do(a) Requerente não completar os requisitos para a Aposentadoria Programada introduzidos pela Emenda Constitucional nº 103/2019 (Idade: 62 anos (mulher) / 65 anos (homem), Tempo de Contribuição: 15 anos (mulher) / 20 anos (homem), Carência: 180 contribuições), nos termos do art. 51 do Decreto nº 3.048/99; não se enquadrar em nenhuma das Regras de Transição instituídas pela mesma Emenda Constitucional nº 103/2019; e não possuir direito adquirido ao benefício na sua regra anterior, descrita na alínea \"b\", inc. II, art. 188-A do Decreto nº 3.048/99, tendo completado apenas " + tempoTotal + "de Tempo de Contribuição até a Data de Entrada do Requerimento - DER");
        };
        if ($scope.itensMotivoDespacho.chkFaltaTempo) {
            listaMotivos.push("do(a) Requerente não atingir o Tempo de Contribuição mínimo necessário, tendo completado apenas " + tempoTotal + "de contribuição até a Data de Entrada do Requerimento - DER, nos termos do art. 188-A do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkFaltaCarencia) {
            listaMotivos.push("do(a) Requerente não atingir a Carência exigida, tendo completado apenas " + $scope.itensMotivoDespacho.txtCarencia + " contribuições mensais, nos termos do inc. II, art. 29 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkNaoDeficienteLC142) {
            $scope.itensMotivoDespacho.chkNaoReqMinimosLC142 = false;
            listaMotivos.push("do(a) Requerente não comprovar a condição de pessoa com Deficiência em avaliação médica e funcional, para fins da LC nº 142/2013, nos termos do art. 70-A do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkNaoReqMinimosLC142) {
            $scope.itensMotivoDespacho.chkNaoDeficienteLC142 = false;
            listaMotivos.push("do(a) Requerente não cumprir os requisitos mínimos necessários para a Aposentadoria por Tempo de Contribuição da Pessoa com Deficiência, para fins da LC nº 142/2013 (Tempo de Contribuição: 20 anos (mulher) / 25 anos (homem), Carência: 180 contribuições), nos termos do art. 70-B do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkOutroBeneficio) {
            listaMotivos.push("do(a) Requerente ser titular de benefício incompatível na Data de Entrada do Requerimento - DER, sob E/NB " + $scope.itensMotivoDespacho.txtOutroBeneficio + ", nos termos do art. 167 do Decreto nº 3.048/99");
        };
        
        let qtdMotivos = listaMotivos.length;
        let motivosIndeferimento = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosIndeferimento += "; e ";
                } else {
                    motivosIndeferimento += "; ";
                };
            };

            motivosIndeferimento += listaMotivos[i];
        };

        motivosIndeferimento += ".";
        return motivosIndeferimento;
    };
    //Indeferimento > Aposentadoria Especial
    $scope.despachoApEspInd =  function () {
        let listaMotivos = [];
        let tempoTotal = "";

        if ($scope.itensMotivoDespacho.chkFaltaTempo || $scope.itensMotivoDespacho.chkNaoNovasRegrasEC103) {
            if ($scope.itensMotivoDespacho.txtTempoAnos != "") {
                tempoTotal += $scope.itensMotivoDespacho.txtTempoAnos + " anos ";
            };
            if ($scope.itensMotivoDespacho.txtTempoMeses != "") {
                tempoTotal += $scope.itensMotivoDespacho.txtTempoMeses + " meses ";
            };
            if ($scope.itensMotivoDespacho.txtTempoDias != "") {
                tempoTotal += " e " + $scope.itensMotivoDespacho.txtTempoDias + " dias ";
            };
        };

        if ($scope.itensMotivoDespacho.chkNaoNovasRegrasEC103) {
            $scope.itensMotivoDespacho.chkFaltaTempo = false;
            $scope.itensMotivoDespacho.chkFaltaCarencia = false;
            listaMotivos.push("do(a) Requerente não completar os requisitos para a Aposentadoria Especial introduzidos pela Emenda Constitucional nº 103/2019 (Idade: 55/58/60 anos, Tempo de Exposição: 15/20/25 anos, Carência: 180 meses), nos termos do art. 64 do Decreto nº 3.048/99; não se enquadrar na Regra de Transição descrita no art. 21 da mesma Emenda Constitucional nº 103/2019; e não possuir direito adquirido ao benefício na sua regra anterior, descrita no inc. III, art. 188-A do Decreto nº 3.048/99, tendo enquadrado em tal condição apenas " + tempoTotal + "até a Data de Entrada do Requerimento - DER");
        };
        if ($scope.itensMotivoDespacho.chkFaltaTempo) {
            listaMotivos.push("do(a) Requerente não comprovar o exercício de Atividade Especial pelo período mínimo exigido de 15, 20 ou 25 anos, tendo enquadrado em tal condição apenas " + tempoTotal + "até a Data de Entrada do Requerimento - DER, nos termos do inc. III, art. 188-A do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkFaltaCarencia) {
            listaMotivos.push("do(a) Requerente não atingir a Carência exigida, tendo completado apenas " + $scope.itensMotivoDespacho.txtCarencia + " contribuições mensais, nos termos do inc. II, art. 29 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkOutroBeneficio) {
            listaMotivos.push("do(a) Requerente ser titular de benefício incompatível na Data de Entrada do Requerimento - DER, sob E/NB " + $scope.itensMotivoDespacho.txtOutroBeneficio + ", nos termos do art. 167 do Decreto nº 3.048/99");
        };

        let qtdMotivos = listaMotivos.length;
        let motivosIndeferimento = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosIndeferimento += "; e ";
                } else {
                    motivosIndeferimento += "; ";
                };
            };

            motivosIndeferimento += listaMotivos[i];
        };

        motivosIndeferimento += ".";
        return motivosIndeferimento;
    };
    //Indeferimento > Aposentadoria Especial do Professor
    $scope.despachoApProfInd =  function () {
        let listaMotivos = [];
        let tempoTotal = "";

        if ($scope.itensMotivoDespacho.chkFaltaTempo || $scope.itensMotivoDespacho.chkNaoNovasRegrasEC103) {
            if ($scope.itensMotivoDespacho.txtTempoAnos != "") {
                tempoTotal += $scope.itensMotivoDespacho.txtTempoAnos + " anos ";
            };
            if ($scope.itensMotivoDespacho.txtTempoMeses != "") {
                tempoTotal += $scope.itensMotivoDespacho.txtTempoMeses + " meses ";
            };
            if ($scope.itensMotivoDespacho.txtTempoDias != "") {
                tempoTotal += " e " + $scope.itensMotivoDespacho.txtTempoDias + " dias ";
            };
        };

        if ($scope.itensMotivoDespacho.chkNaoNovasRegrasEC103) {
            $scope.itensMotivoDespacho.chkFaltaTempo = false;
            $scope.itensMotivoDespacho.chkFaltaCarencia = false;
            listaMotivos.push("do(a) Requerente não completar os requisitos para a Aposentadoria do Professor introduzidos pela Emenda Constitucional nº 103/2019 (Idade: 57 anos (mulher) / 60 anos (homem), Tempo de Magistério: 25 anos, Carência: 180 meses), nos termos do art. 54 do Decreto nº 3.048/99; não se enquadrar em nenhuma das Regras de Transição instituídas pela mesma Emenda Constitucional nº 103/2019; e não possuir direito adquirido ao benefício na sua regra anterior, descrita na alínea \"a\", inc. II, art. 188-A do Decreto nº 3.048/99, tendo completado apenas " + tempoTotal + "em funções de Magistério até a Data de Entrada do Requerimento - DER");
        };
        if ($scope.itensMotivoDespacho.chkFaltaTempo) {
            listaMotivos.push("do(a) Requerente não comprovar atividade em funções de Magistério pelo período mínimo exigido de 30 anos (homens) ou 25 anos (mulheres), tendo reconhecido em tal condição apenas " + tempoTotal + "até a Data de Entrada do Requerimento - DER, nos termos da alínea \"a\", inc. II, art. 188-A do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkFaltaCarencia) {
            listaMotivos.push("do(a) Requerente não atingir a Carência exigida, tendo completado apenas " + $scope.itensMotivoDespacho.txtCarencia + " contribuições mensais, nos termos do inc. II, art. 29 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkOutroBeneficio) {
            listaMotivos.push("do(a) Requerente ser titular de benefício incompatível na Data de Entrada do Requerimento - DER, sob E/NB " + $scope.itensMotivoDespacho.txtOutroBeneficio + ", nos termos do art. 167 do Decreto nº 3.048/99");
        };

        let qtdMotivos = listaMotivos.length;
        let motivosIndeferimento = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosIndeferimento += "; e ";
                } else {
                    motivosIndeferimento += "; ";
                };
            };

            motivosIndeferimento += listaMotivos[i];
        };

        motivosIndeferimento += ".";
        return motivosIndeferimento;
    };
    //Indeferimento > Salário-Maternidade Urbano
    $scope.despachoSalMatUrbInd = function () {
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkFaltaCarencia) {
            listaMotivos.push("da Requerente não atingir a Carência exigida no inc. III, art. 29 do Decreto nº 3.048/99, tendo completado apenas " + $scope.itensMotivoDespacho.txtCarencia + " contribuições mensais");
        };
        if ($scope.itensMotivoDespacho.chkQualSeg) {
            listaMotivos.push("da Requerente ter perdido a Qualidade de Segurada, em " + $scope.itensMotivoDespacho.txtDataQualSeg + ", nos termos dos arts. 13 e 14 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkFaltaCarenciaAposPQS) {
            listaMotivos.push("da Requerente não atingir a Carência exigida após ter perdido a Qualidade de Segurada, nos termos do art. 27-A da Lei nº 8.213/91, tendo completado apenas " + $scope.itensMotivoDespacho.txtCarenciaAposPQS + " contribuições mensais a partir da nova filiação");
        };
        if ($scope.itensMotivoDespacho.chkNaoFiliado) {
            listaMotivos.push("de não ficar comprovada a condição de filiada ao RGPS da Requerente na data do fato gerador, nos termos do art. 71 da Lei nº 8.213/91");
        };
        if ($scope.itensMotivoDespacho.chkNaoFatoGerador) {
            listaMotivos.push("da Requerente não comprovar o fato gerador (28 dias antes do Parto: Atestado Médico; Parto: Certidão de Nascimento; Adoção: Termo de Guarda; Aborto: Atestado Médico específico), nos termos dos arts. 93 e 93-A do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkNaoAfastamento) {
            listaMotivos.push("da Requerente não ter se afastado da sua atividade remunerada após o fato gerador, como exigido pelo art. 71-C da Lei nº 8.213/91");
        };
        if ($scope.itensMotivoDespacho.chkAntesParto) {
            listaMotivos.push("do Requerimento ter sido realizado antes do parto, com a Requerente em período de manutenção da qualidade de segurada, nos termos do §3º, inc. III, art. 101 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkEmpregada) {
            listaMotivos.push("da Requerente manter a condição de Empregada na data do fato gerador, situação em que a responsabilidade pelo pagamento do benefício é da Empresa Empregadora, nos termos do §1º, art. 72 da Lei nº 8.213/91");
        };
        if ($scope.itensMotivoDespacho.chkJaRecebeu) {
            listaMotivos.push("de ter sido verificado, em consulta ao Sistema Único de Benefícios - SUB, que a Requerente já foi Titular de benefício de Salário-Maternidade anterior referente ao mesmo fato-gerador");
        };
        if ($scope.itensMotivoDespacho.chkAdocaoMaior12Anos) {
            listaMotivos.push("da criança já ter mais de doze anos de idade na data da adoção, nos termos do art. 93-A do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkNaoConjugeCompanheiro) {
            listaMotivos.push("do(a) Requerente não comprovar a condição de Cônjuge/Companheiro sobrevivente em relação à Segurada falecida, nos termos do art. 93-B do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkConjugeCompanheiroQualSeg) {
            listaMotivos.push("da falta de Qualidade de Segurado do(a) Requerente Cônjuge/Companheiro sobrevivente, como exigido pelo art. 93-B do Decreto nº 3.048/99");
        };
        

        let qtdMotivos = listaMotivos.length;
        let motivosIndeferimento = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosIndeferimento += "; e ";
                } else {
                    motivosIndeferimento += "; ";
                };
            };

            motivosIndeferimento += listaMotivos[i];
        };

        motivosIndeferimento += ".";
        return motivosIndeferimento;
    };
    //Indeferimento > Salário-Maternidade Rural
    $scope.despachoSalMatRurInd = function () {
        let listaMotivos = [];
        
        if ($scope.itensMotivoDespacho.chkComprRural) {
            listaMotivos.push("de não ficar comprovada a condição de Trabalhadora Rural da Requerente no período imediatamente anterior ao fato gerador, nos termos do §2º, art. 93 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkFaltaCarencia) {
            listaMotivos.push("da Requerente não atingir a Carência exigida, tendo comprovado apenas " + $scope.itensMotivoDespacho.txtCarencia + " meses de Atividade Rural, número inferior ao exigido no  inc. III, art. 29 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkFaltaCarenciaAposPQS) {
            listaMotivos.push("da Requerente não atingir a Carência exigida após ter perdido a Qualidade de Segurada, nos termos do art. 27-A da Lei nº 8.213/91, tendo completado apenas " + $scope.itensMotivoDespacho.txtCarenciaAposPQS + " contribuições mensais a partir da nova filiação");
        };
        if ($scope.itensMotivoDespacho.chkQualSeg) {
            listaMotivos.push("da Requerente ter perdido a Qualidade de Segurada, em " + $scope.itensMotivoDespacho.txtDataQualSeg + ", nos termos dos arts. 13 e 14 do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkNaoFiliado) {
            listaMotivos.push("de não ficar comprovada a condição de filiada ao RGPS da Requerente na data do fato gerador, nos termos do art. 71 da Lei nº 8.213/91");
        };
        if ($scope.itensMotivoDespacho.chkNaoFatoGerador) {
            listaMotivos.push("da Requerente não comprovar o fato gerador (28 dias antes do Parto: Atestado Médico; Parto: Certidão de Nascimento; Adoção: Termo de Guarda; Aborto: Atestado Médico específico), nos termos dos arts. 93 e 93-A do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkNaoAfastamento) {
            listaMotivos.push("da Requerente não ter se afastado da sua atividade remunerada após o fato gerador, como exigido pelo art. 71-C da Lei nº 8.213/91");
        };
        if ($scope.itensMotivoDespacho.chkEmpregada) {
            listaMotivos.push("da Requerente manter a condição de Empregada na data do fato gerador, situação em que a responsabilidade pelo pagamento do benefício é da Empresa Empregadora, nos termos do §1º, art. 72 da Lei nº 8.213/91");
        };
        if ($scope.itensMotivoDespacho.chkJaRecebeu) {
            listaMotivos.push("de ter sido verificado, em consulta ao Sistema Único de Benefícios - SUB, que a Requerente já foi Titular de benefício de Salário-Maternidade anterior referente ao mesmo fato-gerador");
        };
        if ($scope.itensMotivoDespacho.chkAdocaoMaior12Anos) {
            listaMotivos.push("da criança já ter mais de doze anos de idade na data da adoção, nos termos do art. 93-A do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkNaoConjugeCompanheiro) {
            listaMotivos.push("do(a) Requerente não comprovar a condição de Cônjuge/Companheiro sobrevivente em relação à Segurada falecida, nos termos do art. 93-B do Decreto nº 3.048/99");
        };
        if ($scope.itensMotivoDespacho.chkConjugeCompanheiroQualSeg) {
            listaMotivos.push("da falta de Qualidade de Segurado do(a) Requerente Cônjuge/Companheiro sobrevivente, como exigido pelo art. 93-B do Decreto nº 3.048/99");
        };

        let qtdMotivos = listaMotivos.length;
        let motivosIndeferimento = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosIndeferimento += "; e ";
                } else {
                    motivosIndeferimento += "; ";
                };
            };

            motivosIndeferimento += listaMotivos[i];
        };

        motivosIndeferimento += ".";
        return motivosIndeferimento;
    };
    //Indeferimento > Benefício Assistencial ao Deficiente
    $scope.despachoAssDefInd = function () {
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkObitoRequerente) {
            $scope.itensMotivoDespacho.chkRendaSuperior = false;
            $scope.itensMotivoDespacho.chkACPRenda = false;
            $scope.itensMotivoDespacho.chkFaltaCadunico = false;
            $scope.itensMotivoDespacho.chkNaoDeficiente = false;
            $scope.itensMotivoDespacho.chkOutroBeneficio = false;
            listaMotivos.push("do óbito do(a) Requerente, sendo dispensada a avaliação dos demais requisitos, nos termos do § único, art. 15 da Portaria Conjunta nº 3, de 21/09/2018");
        };
        if ($scope.itensMotivoDespacho.chkRendaSuperior) {
            if ($scope.itensMotivoDespacho.chkACPRenda) {
                listaMotivos.push("da Renda per Capita do Grupo Familiar ser superior a 1/4 do Salário Mínimo, apurada em R$ " + $scope.itensMotivoDespacho.txtRenda + ", nos termos do §3º, art. 20 da Lei nº 8.742/93. Não houve a comprovação de comprometimento de renda determinado na Ação Civil Pública - ACP nº 5044874-22.2013.404.7100-RS, cujo cumprimento está regulamentado pelo Memorando-Circular Conjunto nº 58, de 16/11/2016");
            } else {
                listaMotivos.push("da Renda per Capita do Grupo Familiar ser superior a 1/4 do Salário Mínimo, apurada em R$ " + $scope.itensMotivoDespacho.txtRenda + ", nos termos do §3º, art. 20 da Lei nº 8.742/93");
            };
        };
        if ($scope.itensMotivoDespacho.chkFaltaCadunico) {
            listaMotivos.push("de não existir ou estar desatualizada há mais de 2 anos a inscrição do Grupo Familiar no Cadastro Único, em desacordo com o exigido no §2º e caput do art. 12 do Decreto nº 6.214/07");
        };
        if ($scope.itensMotivoDespacho.chkNaoDeficiente) {
            listaMotivos.push("do(a) Requerente não atender ao critério de deficiência para acesso ao benefício, nos termos dos §§ 2º e 6º, art. 20 da Lei nº 8.742/93");
        };
        if ($scope.itensMotivoDespacho.chkNaoCompareceuAvaliacao) {
            listaMotivos.push("do(a) Requerente não ter comparecido à Avaliação Social e/ou Médico-Pericial, procedimentos indispensáveis para verificação do direito ao benefício, nos termos do §1º e caput, art. 16 do Decreto nº 6.214/07");
        };
        if ($scope.itensMotivoDespacho.chkOutroBeneficio) {
            listaMotivos.push("do(a) Requerente ser titular de outro benefício no âmbito da Seguridade Social ou outro regime na Data de Entrada do Requerimento - DER, sob E/NB " + $scope.itensMotivoDespacho.txtOutroBeneficio + ", nos termos do art. 5º do Decreto nº 6.214/07");
        };
                        
        let qtdMotivos = listaMotivos.length;
        let motivosIndeferimento = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosIndeferimento += "; e ";
                } else {
                    motivosIndeferimento += "; ";
                };
            };

            motivosIndeferimento += listaMotivos[i];
        };

        motivosIndeferimento += ".";
        return motivosIndeferimento;
    };
    //Indeferimento > Benefício Assistencial ao Idoso
    $scope.despachoAssIdInd = function () {
        let listaMotivos = [];
        if ($scope.itensMotivoDespacho.chkObitoRequerente) {
            $scope.itensMotivoDespacho.chkRendaSuperior = false;
            $scope.itensMotivoDespacho.chkFaltaCadunico = false;
            listaMotivos.push("do óbito do Requerente, sendo dispensada a avaliação dos demais requisitos, nos termos do § único, art. 15 da Portaria Conjunta nº 3, de 21/09/2018");
        };
        if ($scope.itensMotivoDespacho.chkRendaSuperior) {
            if ($scope.itensMotivoDespacho.chkACPRenda) {
                listaMotivos.push("da Renda per Capita do Grupo Familiar ser superior a 1/4 do Salário Mínimo, apurada em R$ " + $scope.itensMotivoDespacho.txtRenda + ", nos termos do §3º, art. 20 da Lei nº 8.742/93. Não houve a comprovação de comprometimento de renda determinado na Ação Civil Pública - ACP nº 5044874-22.2013.404.7100-RS, cujo cumprimento está regulamentado pelo Memorando-Circular Conjunto nº 58, de 16/11/2016");
            } else {
                listaMotivos.push("da Renda per Capita do Grupo Familiar ser superior a 1/4 do Salário Mínimo, apurada em R$ " + $scope.itensMotivoDespacho.txtRenda + ", nos termos do §3º, art. 20 da Lei nº 8.742/93");
            };
        };
        if ($scope.itensMotivoDespacho.chkFaltaCadunico) {
            listaMotivos.push("da inscrição do Grupo Familiar no Cadastro Único não existir ou estar desatualizada há mais de 2 anos, em desacordo com o exigido no §2º e caput do art. 12 do Decreto nº 6.214/07");
        };
        if ($scope.itensMotivoDespacho.chkOutroBeneficio) {
            listaMotivos.push("do(a) Requerente ser titular de outro benefício no âmbito da Seguridade Social ou outro regime na Data de Entrada do Requerimento - DER, sob E/NB " + $scope.itensMotivoDespacho.txtOutroBeneficio + ", nos termos do art. 5º do Decreto nº 6.214/07");
        };

        let qtdMotivos = listaMotivos.length;
        let motivosIndeferimento = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosIndeferimento += "; e ";
                } else {
                    motivosIndeferimento += "; ";
                };
            };

            motivosIndeferimento += listaMotivos[i];
        };

        motivosIndeferimento += ".";
        return motivosIndeferimento;
    };
    //Indeferimento > Certidão de Tempo de Contribuição
    $scope.despachoCTCInd = function () {
        let listaMotivos = [];
        if ($scope.itensMotivoDespacho.chkNaoApresentacaoDadosBasicos) {
            listaMotivos.push("da não informação de dados básicos necessários para sua emissão, nos termos do §1º, art. 438 da Instrução Normativa nº 77/2015");
        };
        if ($scope.itensMotivoDespacho.chkNaoComprRPPS) {
            listaMotivos.push("da não comprovação de vinculação do(a) Requerente a Regime Próprio de Previdência - RPPS, nos termos do art. 10 da Portaria MPS nº 154/2008");
        };
        if ($scope.itensMotivoDespacho.chkPeriodosJaUtilizados) {
            listaMotivos.push("da impossibilidade de certificação de períodos de vinculação ao Regime Geral da Previdência Social - RGPS, considerando já terem sido aproveitados na concessão de Aposentadoria, nos termos do inc. II, art. 11 da Portaria MPS nº 154/2008");
        };
        if ($scope.itensMotivoDespacho.chkJaPossuiCTC) {
            let textoJaPossuiCTC = "da existência de Certidão de Tempo de Contribuição já concedida, de nº " + $scope.itensMotivoDespacho.txtCTCAnterior + ", tratando-se de documento único e para o qual não foi solicitada revisão, nos termos do art. 439 da Instrução Normativa nº 77/2015, e art. 16 da Portaria MPS nº 154/2008"
            if ($scope.itensMotivoDespacho.chkIncluirTextoEmissaoCTC) {
                textoJaPossuiCTC += ". Caso o(a) Requerente deseje reemiti-la, deverá fazer login no Meu INSS (meu.inss.gov.br) e selecionar, no menu lateral, a opção \"Emissão de Certidão de Tempo de Contribuição - CTC\" e clicar em \"Baixar Documento\"";
            };
            listaMotivos.push(textoJaPossuiCTC);
        };
        if ($scope.itensMotivoDespacho.chkNaoCessacaoAuxilio) {
            let textoNaoCessacaoAuxilio = "da não opção do Requerente pela cessação de benefício de Auxílio-Acidente, Auxílio-Suplementar ou Abono de Permanência em Serviço";
            if ($scope.itensMotivoDespacho.txtAuxilioEmManutencao != "") {
                textoNaoCessacaoAuxilio += ", de E/NB " + $scope.itensMotivoDespacho.txtAuxilioEmManutencao;
            };

            textoNaoCessacaoAuxilio += ", nos termos do art. 450 da Instrução Normativa nº 77/2015, e art. 129 do Decreto nº 3.048/99";
            listaMotivos.push(textoNaoCessacaoAuxilio);
        };


        let qtdMotivos = listaMotivos.length;
        let motivosIndeferimento = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosIndeferimento += "; e ";
                } else {
                    motivosIndeferimento += "; ";
                };
            };

            motivosIndeferimento += listaMotivos[i];
        };

        motivosIndeferimento += ".";
        return motivosIndeferimento;
    };

    //FUNÇÕES DE MONTAGEM: CONCESSÃO
    //Concessão > Pensão Urbana
    $scope.despachoPensUrbConc = function () {
        let listaMotivos = [];
        
        if ($scope.itensMotivoDespacho.chkMotivoConc1) {
            if ($scope.itensMotivoDespacho.txtTipoInstituidor == "Em Atividade") {
                listaMotivos.push("de ter ficado comprovada a Qualidade de Segurado do(a) Instituidor(a), que se encontrava em atividade ou em período de manutenção dessa condição na data do óbito");
            } else if ($scope.itensMotivoDespacho.txtTipoInstituidor == "Em Benefício")
            {
                listaMotivos.push("de ter ficado comprovada a Qualidade de Segurado do(a) Instituidor(a), que a mantinha em razão de ser Titular do benefício previdenciário E/NB " + $scope.itensMotivoDespacho.txtBenefInstituidor + " na data do óbito");
            } else if ($scope.itensMotivoDespacho.txtTipoInstituidor == "Desdobrado") {
                listaMotivos.push("de ter ficado estabelecida a Qualidade de Segurado do(a) Instituidor(a), em virtude do presente benefício ser desdobrado com benefício de Pensão por Morte previamente concedido a outro dependente, sob E/NB " + $scope.itensMotivoDespacho.txtBenefInstituidor);
            };
        };
        if ($scope.itensMotivoDespacho.chkMotivoConc2) {
            let listaDependentes = [];

            if ($scope.itensMotivoDespacho.chkDependComprCompanheiro) {
                listaDependentes.push("Companheiro(a)");
            };
            if ($scope.itensMotivoDespacho.chkDependComprConjuge) {
                listaDependentes.push("Cônjuge");
            };
            if ($scope.itensMotivoDespacho.chkDependComprExConjuge) {
                listaDependentes.push("Ex-Cônjuge");
            };
            if ($scope.itensMotivoDespacho.chkDependComprFilhoMenor) {
                listaDependentes.push("Filho(a) Menor");
            };
            if ($scope.itensMotivoDespacho.chkDependComprFilhoMaior) {
                listaDependentes.push("Filho(a) Maior Inválido(a)");
            };
            if ($scope.itensMotivoDespacho.chkDependComprPaiMaeIrmao) {
                listaDependentes.push("Pai/Mãe/Irmã(o)");
            };

            let qtdDependentes = listaDependentes.length;
            let conclusaoDependentes = "de ter ficado comprovada a condição de Dependente";

            if (qtdDependentes > 0) {
                conclusaoDependentes += " - ";
            };

            for (i = 0; i < qtdDependentes; i++) {
                if (i > 0) {
                    if (i == qtdDependentes - 1) {
                        conclusaoDependentes += " e ";
                    } else {
                        conclusaoDependentes += ", ";
                    };
                };

                conclusaoDependentes += listaDependentes[i];
            };

            if (qtdDependentes > 1) {
                conclusaoDependentes += " dos(as) Requerentes em relação ao(à) Instituidor(a)";
            } else {
                conclusaoDependentes += " do(a) Requerente em relação ao(à) Instituidor(a)";
            };

            if ($scope.itensMotivoDespacho.chkDependNaoComprovado) {
                conclusaoDependentes += ". Houve, porém, o indeferimento parcial em razão da não comprovação da condição de Dependente";

                let listaNaoDependentes = [];

                if ($scope.itensMotivoDespacho.chkDependNaoComprCompanheiro) {
                    listaNaoDependentes.push("Companheiro(a)");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprConjuge) {
                    listaNaoDependentes.push("Cônjuge");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprExConjuge) {
                    listaNaoDependentes.push("Ex-Cônjuge");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprFilhoMenor) {
                    listaNaoDependentes.push("Filho(a) Menor");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprFilhoMaior) {
                    listaNaoDependentes.push("Filho(a) Maior Inválido(a)");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprPaiMaeIrmao) {
                    listaNaoDependentes.push("Pai/Mãe/Irmã(o)");
                };

                let qtdNaoDependentes = listaNaoDependentes.length;

                if (qtdNaoDependentes > 0) {
                    conclusaoDependentes += " - ";
                };

                for (i = 0; i < qtdNaoDependentes; i++) {
                    if (i > 0) {
                        if (i == qtdNaoDependentes - 1) {
                            conclusaoDependentes += " e ";
                        } else {
                            conclusaoDependentes += ", ";
                        };
                    };

                    conclusaoDependentes += listaNaoDependentes[i];
                };

                conclusaoDependentes += " em relação ao(à) Instituidor(a), nos termos do art. 16 do Decreto nº 3.048/99";
            };

            listaMotivos.push(conclusaoDependentes);
        };

        let qtdMotivos = listaMotivos.length;
        let motivosConcessao = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosConcessao += "; e ";
                } else {
                    motivosConcessao += "; ";
                };
            };

            motivosConcessao += listaMotivos[i];
        };

        if ($scope.itensMotivoDespacho.chkMotivoConc4) {
            motivosConcessao += ". O valor da renda mensal do benefício de Pensão por Morte corresponde a 50% (cinquenta por cento) do valor da Aposentadoria recebida pelo Instituidor ou daquela a que teria direito"
                                 + " se fosse aposentado por incapacidade permanente na data do óbito, acrescida de 10% (dez por cento) por dependente, até o limite de 100% (cem por cento)";
        };

        motivosConcessao += ".";

        return motivosConcessao;
    };
    //Concessão > Pensão Rural
    $scope.despachoPensRurConc = function () {
        let listaMotivos = [];
                
        if ($scope.itensMotivoDespacho.chkMotivoConc1) {
            if ($scope.itensMotivoDespacho.txtTipoInstituidor == "Em Atividade") {
                listaMotivos.push("de ter ficado comprovada a Qualidade de Segurado do(a) Instituidor(a), que exerceu Atividade Rural ou estava em período de manutenção dessa condição na data do óbito");
            } else if ($scope.itensMotivoDespacho.txtTipoInstituidor == "Em Benefício") {
                listaMotivos.push("de ter ficado comprovada a Qualidade de Segurado do(a) Instituidor(a), que a mantinha em razão de ser Titular do benefício previdenciário E/NB " + $scope.itensMotivoDespacho.txtBenefInstituidor + " na data do óbito");
            } else if ($scope.itensMotivoDespacho.txtTipoInstituidor == "Desdobrado") {
                listaMotivos.push("de ter ficado estabelecida a Qualidade de Segurado do(a) Instituidor(a), em virtude do presente benefício ser desdobrado com benefício de Pensão por Morte previamente concedido a outro dependente, sob E/NB " + $scope.itensMotivoDespacho.txtBenefInstituidor);
            };
        };
        if ($scope.itensMotivoDespacho.chkMotivoConc2) {
            let listaDependentes = [];

            if ($scope.itensMotivoDespacho.chkDependComprCompanheiro) {
                listaDependentes.push("Companheiro(a)");
            };
            if ($scope.itensMotivoDespacho.chkDependComprConjuge) {
                listaDependentes.push("Cônjuge");
            };
            if ($scope.itensMotivoDespacho.chkDependComprExConjuge) {
                listaDependentes.push("Ex-Cônjuge");
            };
            if ($scope.itensMotivoDespacho.chkDependComprFilhoMenor) {
                listaDependentes.push("Filho(a) Menor");
            };
            if ($scope.itensMotivoDespacho.chkDependComprFilhoMaior) {
                listaDependentes.push("Filho(a) Maior Inválido(a)");
            };
            if ($scope.itensMotivoDespacho.chkDependComprPaiMaeIrmao) {
                listaDependentes.push("Pai/Mãe/Irmã(o)");
            };

            let qtdDependentes = listaDependentes.length;
            let conclusaoDependentes = "de ter ficado comprovada a condição de Dependente";

            if (qtdDependentes > 0) {
                conclusaoDependentes += " - ";
            };

            for (i = 0; i < qtdDependentes; i++) {
                if (i > 0) {
                    if (i == qtdDependentes - 1) {
                        conclusaoDependentes += " e ";
                    } else {
                        conclusaoDependentes += ", ";
                    };
                };

                conclusaoDependentes += listaDependentes[i];
            };

            if (qtdDependentes > 1) {
                conclusaoDependentes += " dos(as) Requerentes em relação ao(à) Instituidor(a)";
            } else {
                conclusaoDependentes += " do(a) Requerente em relação ao(à) Instituidor(a)";
            };

            if ($scope.itensMotivoDespacho.chkDependNaoComprovado) {
                conclusaoDependentes += ". Houve, porém, o indeferimento parcial em razão da não comprovação da condição de Dependente";

                let listaNaoDependentes = [];

                if ($scope.itensMotivoDespacho.chkDependNaoComprCompanheiro) {
                    listaNaoDependentes.push("Companheiro(a)");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprConjuge) {
                    listaNaoDependentes.push("Cônjuge");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprExConjuge) {
                    listaNaoDependentes.push("Ex-Cônjuge");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprFilhoMenor) {
                    listaNaoDependentes.push("Filho(a) Menor");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprFilhoMaior) {
                    listaNaoDependentes.push("Filho(a) Maior Inválido(a)");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprPaiMaeIrmao) {
                    listaNaoDependentes.push("Pai/Mãe/Irmã(o)");
                };

                let qtdNaoDependentes = listaNaoDependentes.length;

                if (qtdNaoDependentes > 0) {
                    conclusaoDependentes += " - ";
                };

                for (i = 0; i < qtdNaoDependentes; i++) {
                    if (i > 0) {
                        if (i == qtdNaoDependentes - 1) {
                            conclusaoDependentes += " e ";
                        } else {
                            conclusaoDependentes += ", ";
                        };
                    };

                    conclusaoDependentes += listaNaoDependentes[i];
                };

                conclusaoDependentes += " em relação ao(à) Instituidor(a), nos termos do art. 16 do Decreto nº 3.048/99";
            };

            listaMotivos.push(conclusaoDependentes);
        };

        let qtdMotivos = listaMotivos.length;
        let motivosConcessao = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosConcessao += "; e ";
                } else {
                    motivosConcessao += "; ";
                };
            };

            motivosConcessao += listaMotivos[i];
        };

        if ($scope.itensMotivoDespacho.chkMotivoConc4) {
            motivosConcessao += ". O valor da renda mensal do benefício de Pensão por Morte corresponde a 50% (cinquenta por cento) do valor da Aposentadoria recebida pelo Instituidor ou daquela a que teria direito"
                + " se fosse aposentado por incapacidade permanente na data do óbito, acrescida de 10% (dez por cento) por dependente, até o limite de 100% (cem por cento)";
        };

        motivosConcessao += ".";

        return motivosConcessao;
    };
    //Concessão > Pensão por Acidente de Trabalho
    $scope.despachoPensAcidConc = function () {
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkMotivoConc1) {
            if ($scope.itensMotivoDespacho.txtTipoInstituidor == "Em Atividade") {
                listaMotivos.push("de ter ficado comprovada a Qualidade de Segurado do(a) Instituidor(a), que se encontrava em atividade ou em período de manutenção dessa condição na data do óbito");
            } else if ($scope.itensMotivoDespacho.txtTipoInstituidor == "Em Benefício") {
                listaMotivos.push("de ter ficado comprovada a Qualidade de Segurado do(a) Instituidor(a), que a mantinha em razão de ser Titular do benefício previdenciário E/NB " + $scope.itensMotivoDespacho.txtBenefInstituidor + " na data do óbito");
            } else if ($scope.itensMotivoDespacho.txtTipoInstituidor == "Desdobrado") {
                listaMotivos.push("de ter ficado estabelecida a Qualidade de Segurado do(a) Instituidor(a), em virtude do presente benefício ser desdobrado com benefício de Pensão por Morte previamente concedido a outro dependente, sob E/NB " + $scope.itensMotivoDespacho.txtBenefInstituidor);
            };
        };
        if ($scope.itensMotivoDespacho.chkMotivoConc2) {
            let listaDependentes = [];

            if ($scope.itensMotivoDespacho.chkDependComprCompanheiro) {
                listaDependentes.push("Companheiro(a)");
            };
            if ($scope.itensMotivoDespacho.chkDependComprConjuge) {
                listaDependentes.push("Cônjuge");
            };
            if ($scope.itensMotivoDespacho.chkDependComprExConjuge) {
                listaDependentes.push("Ex-Cônjuge");
            };
            if ($scope.itensMotivoDespacho.chkDependComprFilhoMenor) {
                listaDependentes.push("Filho(a) Menor");
            };
            if ($scope.itensMotivoDespacho.chkDependComprFilhoMaior) {
                listaDependentes.push("Filho(a) Maior Inválido(a)");
            };
            if ($scope.itensMotivoDespacho.chkDependComprPaiMaeIrmao) {
                listaDependentes.push("Pai/Mãe/Irmã(o)");
            };

            let qtdDependentes = listaDependentes.length;
            let conclusaoDependentes = "de ter ficado comprovada a condição de Dependente";

            if (qtdDependentes > 0) {
                conclusaoDependentes += " - ";
            };

            for (i = 0; i < qtdDependentes; i++) {
                if (i > 0) {
                    if (i == qtdDependentes - 1) {
                        conclusaoDependentes += " e ";
                    } else {
                        conclusaoDependentes += ", ";
                    };
                };

                conclusaoDependentes += listaDependentes[i];
            };

            if (qtdDependentes > 1) {
                conclusaoDependentes += " dos(as) Requerentes em relação ao(à) Instituidor(a)";
            } else {
                conclusaoDependentes += " do(a) Requerente em relação ao(à) Instituidor(a)";
            };

            if ($scope.itensMotivoDespacho.chkDependNaoComprovado) {
                conclusaoDependentes += ". Houve, porém, o indeferimento parcial em razão da não comprovação da condição de Dependente";

                let listaNaoDependentes = [];

                if ($scope.itensMotivoDespacho.chkDependNaoComprCompanheiro) {
                    listaNaoDependentes.push("Companheiro(a)");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprConjuge) {
                    listaNaoDependentes.push("Cônjuge");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprExConjuge) {
                    listaNaoDependentes.push("Ex-Cônjuge");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprFilhoMenor) {
                    listaNaoDependentes.push("Filho(a) Menor");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprFilhoMaior) {
                    listaNaoDependentes.push("Filho(a) Maior Inválido(a)");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprPaiMaeIrmao) {
                    listaNaoDependentes.push("Pai/Mãe/Irmã(o)");
                };

                let qtdNaoDependentes = listaNaoDependentes.length;

                if (qtdNaoDependentes > 0) {
                    conclusaoDependentes += " - ";
                };

                for (i = 0; i < qtdNaoDependentes; i++) {
                    if (i > 0) {
                        if (i == qtdNaoDependentes - 1) {
                            conclusaoDependentes += " e ";
                        } else {
                            conclusaoDependentes += ", ";
                        };
                    };

                    conclusaoDependentes += listaNaoDependentes[i];
                };

                conclusaoDependentes += "em relação ao(à) Instituidor(a), nos termos do art. 16 do Decreto nº 3.048/99";
            };

            listaMotivos.push(conclusaoDependentes);
        };
        if ($scope.itensMotivoDespacho.chkMotivoConc3) {
            listaMotivos.push("de ter sido reconhecido o nexo entre a causa mortis e o acidente/doença ocupacional, pela Perícia Médica, nos termos do art. 337 do Decreto nº 3.048/99");
        };

        let qtdMotivos = listaMotivos.length;
        let motivosConcessao = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosConcessao += "; e ";
                } else {
                    motivosConcessao += "; ";
                };
            };

            motivosConcessao += listaMotivos[i];
        };

        if ($scope.itensMotivoDespacho.chkMotivoConc4) {
            motivosConcessao += ". O valor da renda mensal do benefício de Pensão por Morte corresponde a 50% (cinquenta por cento) do valor da Aposentadoria recebida pelo Instituidor ou daquela a que teria direito"
                + " se fosse aposentado por incapacidade permanente na data do óbito, acrescida de 10% (dez por cento) por dependente, até o limite de 100% (cem por cento)";
        };

        motivosConcessao += ".";

        return motivosConcessao;
    };
    //Concessão > Auxílio-Reclusão Urbano
    $scope.despachoAuxRecUrbConc = function (){
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkMotivoConc1) {
            listaMotivos.push("de ter ficado comprovada a Qualidade de Segurado, Renda Média apurada inferior ao limite e Carência do(a) Instituidor(a)");
        };
        if ($scope.itensMotivoDespacho.chkMotivoConc2) {
            let listaDependentes = [];

            if ($scope.itensMotivoDespacho.chkDependComprCompanheiro) {
                listaDependentes.push("Companheiro(a)");
            };
            if ($scope.itensMotivoDespacho.chkDependComprConjuge) {
                listaDependentes.push("Cônjuge");
            };
            if ($scope.itensMotivoDespacho.chkDependComprExConjuge) {
                listaDependentes.push("Ex-Cônjuge");
            };
            if ($scope.itensMotivoDespacho.chkDependComprFilhoMenor) {
                listaDependentes.push("Filho(a) Menor");
            };
            if ($scope.itensMotivoDespacho.chkDependComprFilhoMaior) {
                listaDependentes.push("Filho(a) Maior Inválido(a)");
            };
            if ($scope.itensMotivoDespacho.chkDependComprPaiMaeIrmao) {
                listaDependentes.push("Pai/Mãe/Irmã(o)");
            };

            let qtdDependentes = listaDependentes.length;
            let conclusaoDependentes = "de ter ficado comprovada a condição de Dependente";

            if (qtdDependentes > 0) {
                conclusaoDependentes += " - ";
            };

            for (i = 0; i < qtdDependentes; i++) {
                if (i > 0) {
                    if (i == qtdDependentes - 1) {
                        conclusaoDependentes += " e ";
                    } else {
                        conclusaoDependentes += ", ";
                    };
                };

                conclusaoDependentes += listaDependentes[i];
            };

            if (qtdDependentes > 1) {
                conclusaoDependentes += " dos(as) Requerentes em relação ao(à) Instituidor(a)";
            } else {
                conclusaoDependentes += " do(a) Requerente em relação ao(à) Instituidor(a)";
            };

            if ($scope.itensMotivoDespacho.chkDependNaoComprovado) {
                conclusaoDependentes += ". Houve, porém, o indeferimento parcial em razão da não comprovação da condição de Dependente";

                let listaNaoDependentes = [];

                if ($scope.itensMotivoDespacho.chkDependNaoComprCompanheiro) {
                    listaNaoDependentes.push("Companheiro(a)");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprConjuge) {
                    listaNaoDependentes.push("Cônjuge");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprExConjuge) {
                    listaNaoDependentes.push("Ex-Cônjuge");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprFilhoMenor) {
                    listaNaoDependentes.push("Filho(a) Menor");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprFilhoMaior) {
                    listaNaoDependentes.push("Filho(a) Maior Inválido(a)");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprPaiMaeIrmao) {
                    listaNaoDependentes.push("Pai/Mãe/Irmã(o)");
                };

                let qtdNaoDependentes = listaNaoDependentes.length;

                if (qtdNaoDependentes > 0) {
                    conclusaoDependentes += " - ";
                };

                for (i = 0; i < qtdNaoDependentes; i++) {
                    if (i > 0) {
                        if (i == qtdNaoDependentes - 1) {
                            conclusaoDependentes += " e ";
                        } else {
                            conclusaoDependentes += ", ";
                        };
                    };

                    conclusaoDependentes += listaNaoDependentes[i];
                };

                conclusaoDependentes += "em relação ao(à) Instituidor(a), nos termos do art. 16 do Decreto nº 3.048/99";
            };

            listaMotivos.push(conclusaoDependentes);
        };

        let qtdMotivos = listaMotivos.length;
        let motivosConcessao = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosConcessao += "; e ";
                } else {
                    motivosConcessao += "; ";
                };
            };

            motivosConcessao += listaMotivos[i];
        };

        motivosConcessao += ".";
        return motivosConcessao;
    };
    //Concessão > Auxílio-Reclusão Rural
    $scope.despachoAuxRecRurConc = function (){
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkMotivoConc1) {
            listaMotivos.push("de ter ficado comprovada a Renda Média apurada inferior ao limite, a Atividade Rural e Carência nessa condição pelo(a) Instituidor(a)");
        };
        if ($scope.itensMotivoDespacho.chkMotivoConc2) {
            let listaDependentes = [];

            if ($scope.itensMotivoDespacho.chkDependComprCompanheiro) {
                listaDependentes.push("Companheiro(a)");
            };
            if ($scope.itensMotivoDespacho.chkDependComprConjuge) {
                listaDependentes.push("Cônjuge");
            };
            if ($scope.itensMotivoDespacho.chkDependComprExConjuge) {
                listaDependentes.push("Ex-Cônjuge");
            };
            if ($scope.itensMotivoDespacho.chkDependComprFilhoMenor) {
                listaDependentes.push("Filho(a) Menor");
            };
            if ($scope.itensMotivoDespacho.chkDependComprFilhoMaior) {
                listaDependentes.push("Filho(a) Maior Inválido(a)");
            };
            if ($scope.itensMotivoDespacho.chkDependComprPaiMaeIrmao) {
                listaDependentes.push("Pai/Mãe/Irmã(o)");
            };

            let qtdDependentes = listaDependentes.length;
            let conclusaoDependentes = "de ter ficado comprovada a condição de Dependente";

            if (qtdDependentes > 0) {
                conclusaoDependentes += " - ";
            };

            for (i = 0; i < qtdDependentes; i++) {
                if (i > 0) {
                    if (i == qtdDependentes - 1) {
                        conclusaoDependentes += " e ";
                    } else {
                        conclusaoDependentes += ", ";
                    };
                };

                conclusaoDependentes += listaDependentes[i];
            };

            if (qtdDependentes > 1) {
                conclusaoDependentes += " dos(as) Requerentes em relação ao(à) Instituidor(a)";
            } else {
                conclusaoDependentes += " do(a) Requerente em relação ao(à) Instituidor(a)";
            };

            if ($scope.itensMotivoDespacho.chkDependNaoComprovado) {
                conclusaoDependentes += ". Houve, porém, o indeferimento parcial em razão da não comprovação da condição de Dependente";

                let listaNaoDependentes = [];

                if ($scope.itensMotivoDespacho.chkDependNaoComprCompanheiro) {
                    listaNaoDependentes.push("Companheiro(a)");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprConjuge) {
                    listaNaoDependentes.push("Cônjuge");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprExConjuge) {
                    listaNaoDependentes.push("Ex-Cônjuge");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprFilhoMenor) {
                    listaNaoDependentes.push("Filho(a) Menor");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprFilhoMaior) {
                    listaNaoDependentes.push("Filho(a) Maior Inválido(a)");
                };
                if ($scope.itensMotivoDespacho.chkDependNaoComprPaiMaeIrmao) {
                    listaNaoDependentes.push("Pai/Mãe/Irmã(o)");
                };

                let qtdNaoDependentes = listaNaoDependentes.length;

                if (qtdNaoDependentes > 0) {
                    conclusaoDependentes += " - ";
                };

                for (i = 0; i < qtdNaoDependentes; i++) {
                    if (i > 0) {
                        if (i == qtdNaoDependentes - 1) {
                            conclusaoDependentes += " e ";
                        } else {
                            conclusaoDependentes += ", ";
                        };
                    };

                    conclusaoDependentes += listaNaoDependentes[i];
                };

                conclusaoDependentes += "em relação ao(à) Instituidor(a), nos termos do art. 16 do Decreto nº 3.048/99";
            };

            listaMotivos.push(conclusaoDependentes);
        };

        let qtdMotivos = listaMotivos.length;
        let motivosConcessao = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosConcessao += "; e ";
                } else {
                    motivosConcessao += "; ";
                };
            };

            motivosConcessao += listaMotivos[i];
        };

        motivosConcessao += ".";
        return motivosConcessao;
    };
    //Concessão > Auxílio-Doença Urbano
    $scope.despachoAuxDoeUrbConc = function () {
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkMotivoConc1) {
            listaMotivos.push("ter comprovado a Qualidade de Segurado na data do fato gerador");
        };
        if ($scope.itensMotivoDespacho.chkMotivoConc2) {
            listaMotivos.push("ter comprovado a Carência em número de contribuições exigida na Data de Entrada do Requerimento - DER");
        };
        if ($scope.itensMotivoDespacho.chkMotivoConc3) {
            listaMotivos.push("ter reconhecida a incapacidade para o trabalho em avaliação da Perícia Médica");
        };

        let qtdMotivos = listaMotivos.length;
        let motivosConcessao = " em razão do(a) Requerente ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosConcessao += "; e ";
                } else {
                    motivosConcessao += "; ";
                };
            };

            motivosConcessao += listaMotivos[i];
        };

        motivosConcessao += ".";
        return motivosConcessao;
    };
    //Concessão > Auxílio-Doença Rural
    $scope.despachoAuxDoeRurConc = function () {
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkMotivoConc1) {
            listaMotivos.push("ter comprovado a Qualidade de Segurado na data do fato gerador");
        };
        if ($scope.itensMotivoDespacho.chkMotivoConc2) {
            listaMotivos.push("ter comprovado a Carência em número de meses de Atividade Rural exigida na Data de Entrada do Requerimento - DER");
        };
        if ($scope.itensMotivoDespacho.chkMotivoConc3) {
            listaMotivos.push("ter reconhecida a incapacidade para o trabalho em avaliação da Perícia Médica");
        };

        let qtdMotivos = listaMotivos.length;
        let motivosConcessao = " em razão do(a) Requerente ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosConcessao += "; e ";
                } else {
                    motivosConcessao += "; ";
                };
            };

            motivosConcessao += listaMotivos[i];
        };

        motivosConcessao += ".";
        return motivosConcessao;
    };
    //Concessão > Auxílio-Acidente Previdenciário
    $scope.despachoAuxAcidPrevConc = function () {
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkMotivoConc1) {
            listaMotivos.push("de ficar reconhecida a redução da capacidade laborativa do(a) Requerente, decorrente de sequela definitiva resultante de consolidação das lesões do acidente, nos termos do art. 104 do Decreto nº 3.048/99");
        };

        let qtdMotivos = listaMotivos.length;
        let motivosConcessao = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosConcessao += "; e ";
                } else {
                    motivosConcessao += "; ";
                };
            };

            motivosConcessao += listaMotivos[i];
        };

        motivosConcessao += ".";
        return motivosConcessao;
    };
    //Concessão > Auxílio-Acidente por Acidente de Trabalho
    $scope.despachoAuxAcidAcidConc = function () {
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkMotivoConc1) {
            listaMotivos.push("de ficar reconhecida a redução da capacidade laborativa do(a) Requerente, decorrente de sequela definitiva resultante de consolidação das lesões do acidente de trabalho, nos termos do art. 104 do Decreto nº 3.048/99");
        };

        let qtdMotivos = listaMotivos.length;
        let motivosConcessao = " em razão ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosConcessao += "; e ";
                } else {
                    motivosConcessao += "; ";
                };
            };

            motivosConcessao += listaMotivos[i];
        };

        motivosConcessao += ".";
        return motivosConcessao;
    };
    //Concessão > Aposentadoria por Idade Urbana
    $scope.despachoApIdUrbConc = function (){
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkMotivoConc1) {
            $scope.itensMotivoDespacho.chkMotivoConc4 = false;
            listaMotivos.push("ter completado a Idade mínima exigida");
        };
        if ($scope.itensMotivoDespacho.chkMotivoConc2) {
            $scope.itensMotivoDespacho.chkMotivoConc4 = false;
            listaMotivos.push("ter completado quinze anos de contribuição");
        };
        if ($scope.itensMotivoDespacho.chkMotivoConc3) {
            $scope.itensMotivoDespacho.chkMotivoConc4 = false;
            listaMotivos.push("ter comprovado a Carência em número de contribuições exigida na Data de Entrada do Requerimento - DER");
        };

        if ($scope.itensMotivoDespacho.chkMotivoConc4) {
            $scope.itensMotivoDespacho.chkMotivoConc1 = false;
            $scope.itensMotivoDespacho.chkMotivoConc2 = false;
            $scope.itensMotivoDespacho.chkMotivoConc3 = false;
            listaMotivos.push("ter completado a Idade mínima exigida, e a Carência em número de contribuições na condição de pessoa com deficiência exigida na Data de Entrada do Requerimento - DER, nos termos do art. 70-A, e §1º e caput, art. 70-C do Decreto nº 3.048/99");
        }
        
        let qtdMotivos = listaMotivos.length;
        let motivosConcessao = " em razão do(a) Requerente ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosConcessao += "; e ";
                } else {
                    motivosConcessao += "; ";
                };
            };

            motivosConcessao += listaMotivos[i];
        };

        motivosConcessao += ".";
        return motivosConcessao;
    };
    //Concessão > Aposentadoria por Idade Rural
    $scope.despachoApIdRurConc = function (){
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkMotivoConc1) {
            listaMotivos.push("ter completado a Idade mínima exigida");
        };
        if ($scope.itensMotivoDespacho.chkMotivoConc3) {
            listaMotivos.push("ter comprovado a Carência em número de meses de Atividade Rural mínima exigida na Data de Entrada do Requerimento - DER");
        };
        
        let qtdMotivos = listaMotivos.length;
        let motivosConcessao = " em razão do(a) Requerente ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosConcessao += "; e ";
                } else {
                    motivosConcessao += "; ";
                };
            };

            motivosConcessao += listaMotivos[i];
        };

        motivosConcessao += ", nos termos do art. 56 do Decreto nº 3.048/99.";
        return motivosConcessao;
    };
    //Concessão > Aposentadoria por Tempo de Contribuição
    $scope.despachoApTempConc = function (){
        let tempoTotal = "";

        if ($scope.itensMotivoDespacho.txtTempoAnos != "") {
            tempoTotal += $scope.itensMotivoDespacho.txtTempoAnos + " anos ";
        };
        if ($scope.itensMotivoDespacho.txtTempoMeses != "") {
            if ($scope.itensMotivoDespacho.txtTempoAnos != "" && $scope.itensMotivoDespacho.txtTempoDias == "") {
                tempoTotal += "e ";
            };
            tempoTotal += $scope.itensMotivoDespacho.txtTempoMeses + " meses ";
        };
        if ($scope.itensMotivoDespacho.txtTempoDias != "") {
            if ($scope.itensMotivoDespacho.txtTempoAnos != "" || $scope.itensMotivoDespacho.txtTempoMeses != "") {
                tempoTotal += "e ";
            };
            tempoTotal += $scope.itensMotivoDespacho.txtTempoDias + " dias ";
        };


        let motivosConcessao = " em razão de ter completado os requisitos para ";
        
        if ($scope.itensMotivoDespacho.txtTipoAposTempo == "Nova") {
            motivosConcessao += "a concessão na sua forma Programada, definida no art. 19 da Emenda Constitucional nº 103/2019";
        } else if ($scope.itensMotivoDespacho.txtTipoAposTempo == "Transição") {
            switch ($scope.itensMotivoDespacho.txtTipoRegraTransicao) {
                case 'Pontos':
                    motivosConcessao += "a sua concessão através da regra de transição de \"Pontos\", definida no art. 15 da Emenda Constitucional nº 103/2019";
                    break;
                case 'Idade':
                    motivosConcessao += "a sua concessão através da regra de transição de \"Idade\", definida no art. 16 da Emenda Constitucional nº 103/2019";
                    break;
                case 'Pedagio50':
                    motivosConcessao += "a sua concessão através da regra de transição de \"50% Pedágio\", definida no art. 17 da Emenda Constitucional nº 103/2019";
                    break;
                case 'Pedagio100':
                    motivosConcessao += "a sua concessão através da regra de transição de \"100% Pedágio\", definida no art. 20 da Emenda Constitucional nº 103/2019";
                    break;
            };
        } else if ($scope.itensMotivoDespacho.txtTipoAposTempo == "Antiga") {
            motivosConcessao += "a concessão na sua forma ";
            if ($scope.itensMotivoDespacho.txtTipoAposAntiga == "Integral") {
                motivosConcessao += "Integral, definida no art. 56 do Decreto nº 3.048/99";
            } else if ($scope.itensMotivoDespacho.txtTipoAposAntiga == "Proporcional") {
                motivosConcessao += "Proporcional, com a qual concorda expressamente, definida no art. 188 do Decreto nº 3.048/99";
            };
        } else if ($scope.itensMotivoDespacho.txtTipoAposTempo == "LC142") {
            motivosConcessao += "a sua concessão na condição de Pessoa com Deficiência, definida nos arts. 70-A e 70-B do Decreto nº 3.048/99";
        };
        
        motivosConcessao += ", com o total de " + tempoTotal + "de Contribuição até a Data de Entrada do Requerimento - DER.";
        
        return motivosConcessao;
    };
    //Concessão > Aposentadoria Especial
    $scope.despachoApEspConc = function () {
        let tempoTotal = "";

        if ($scope.itensMotivoDespacho.txtTempoAnos != "") {
            tempoTotal += $scope.itensMotivoDespacho.txtTempoAnos + " anos ";
        };
        if ($scope.itensMotivoDespacho.txtTempoMeses != "") {
            tempoTotal += $scope.itensMotivoDespacho.txtTempoMeses + " meses ";
        };
        if ($scope.itensMotivoDespacho.txtTempoDias != "") {
            tempoTotal += " e " + $scope.itensMotivoDespacho.txtTempoDias + " dias ";
        };


        let motivosConcessao = " em razão de ter completado os requisitos para ";

        if ($scope.itensMotivoDespacho.txtTipoAposTempo == "Nova") {
            motivosConcessao += "a concessão na sua forma definida no inc. I, §1º, art. 19 da Emenda Constitucional nº 103/2019, com o total enquadrado de " + tempoTotal + " de efetiva exposição a agentes nocivos/fatores de risco até a Data de Entrada do Requerimento - DER.";
        } else if ($scope.itensMotivoDespacho.txtTipoAposTempo == "Transição") {
            motivosConcessao += "a sua concessão através da regra de transição definida no art. 21 da Emenda Constitucional nº 103/2019, com o total enquadrado de " + tempoTotal + " de efetiva exposição a agentes nocivos/fatores de risco até a Data de Entrada do Requerimento - DER.";
        } else if ($scope.itensMotivoDespacho.txtTipoAposTempo == "Antiga") {
            motivosConcessao += "a concessão na sua forma definida no art. 64 do Decreto nº 3.048/99, com o total de " + tempoTotal + " enquadrados por categoria profissional e/ou exposição a agentes nocivos até a Data de Entrada do Requerimento - DER.";
        };

        return motivosConcessao;
    };
    //Concessão > Aposentadoria Especial do Professor
    $scope.despachoApProfConc = function (){
        let tempoTotal = "";

        if ($scope.itensMotivoDespacho.txtTempoAnos != "") {
            tempoTotal += $scope.itensMotivoDespacho.txtTempoAnos + " anos ";
        };
        if ($scope.itensMotivoDespacho.txtTempoMeses != "") {
            tempoTotal += $scope.itensMotivoDespacho.txtTempoMeses + " meses ";
        };
        if ($scope.itensMotivoDespacho.txtTempoDias != "") {
            tempoTotal += " e " + $scope.itensMotivoDespacho.txtTempoDias + " dias ";
        };


        let motivosConcessao = " em razão de ter completado os requisitos para ";
        
        if ($scope.itensMotivoDespacho.txtTipoAposTempo == "Nova") {
            motivosConcessao += "a concessão na sua forma definida no inc. II, §1º, art. 19 da Emenda Constitucional nº 103/2019";
        } else if ($scope.itensMotivoDespacho.txtTipoAposTempo == "Transição") {
            switch ($scope.itensMotivoDespacho.txtTipoRegraTransicao) {
                case 'Pontos':
                    motivosConcessao += "a sua concessão através da regra de transição de \"Pontos\", definida no §3º e caput, art. 15 da Emenda Constitucional nº 103/2019";
                    break;
                case 'Idade':
                    motivosConcessao += "a sua concessão através da regra de transição de \"Idade\", definida no §2º e caput, art. 16 da Emenda Constitucional nº 103/2019";
                    break;
                case 'Pedagio100':
                    motivosConcessao += "a sua concessão através da regra de transição de \"100% Pedágio\", definida no §1º e caput, art. 20 da Emenda Constitucional nº 103/2019";
                    break;
                default:
                    motivosConcessao += "a sua concessão através de uma das regras de transição definidas nos arts. 15, 16 ou 20 da Emenda Constitucional nº 103/2019";
            };
        } else if ($scope.itensMotivoDespacho.txtTipoAposTempo == "Antiga") {
            motivosConcessao += "a concessão na sua forma definida no §1º, art. 56 do Decreto nº 3.048/99";
        };
        
        motivosConcessao += ", com o total de " + tempoTotal + " em funções de magistério até a Data de Entrada do Requerimento - DER.";
        
        return motivosConcessao;
    };
    //Concessão > Salário-Maternidade Urbano
    $scope.despachoSalMatUrbConc = function (){
        let listaMotivos = [];

        listaMotivos.push("ter comprovado o Fato Gerador - " + $scope.itensMotivoDespacho.txtTipoFatoGerador);

        if ($scope.itensMotivoDespacho.chkMotivoConc1) {
            listaMotivos.push("; ter comprovado a Qualidade de Segurada naquela data; e ter comprovado a Carência exigida de 10 contribuições até tal data");
        } else
        {
            listaMotivos.push("; e ter comprovado a Qualidade de Segurada naquela data");
        };

        let motivosConcessao = " em razão da Requerente " + listaMotivos[0] + listaMotivos[1] + ".";

        return motivosConcessao;
    };
    //Concessão > Salário-Maternidade Rural
    $scope.despachoSalMatRurConc = function (){
        let listaMotivos = [];

        listaMotivos.push("ter comprovado o Fato Gerador - " + $scope.itensMotivoDespacho.txtTipoFatoGerador);

        if ($scope.itensMotivoDespacho.chkMotivoConc1) {
            listaMotivos.push("; ter comprovado a Qualidade de Segurada naquela data; e ter comprovado a Carência exigida de 10 meses de Atividade Rural até tal data");
        } else
        {
            listaMotivos.push("; e ter comprovado a Qualidade de Segurada naquela data");
        };

        let motivosConcessao = " em razão da Requerente " + listaMotivos[0] + listaMotivos[1] + ".";

        return motivosConcessao;
    };
    //Concessão > Benefício Assistencial ao Deficiente
    $scope.despachoAssDefConc = function (){
        let motivosConcessao = " em razão ";
        if ($scope.itensMotivoDespacho.chkMotivoConc1) {
            motivosConcessao += "de ficar comprovada a inscrição do Grupo Familiar no CadÚnico (atualizado há menos de 2 anos), a Renda per Capita inferior a 1/4 do Salário-Mínimo, e a condição de Deficiente (após avaliações Social e Médica-Pericial) na Data de Entrada do Requerimento - DER"
        };

        motivosConcessao += ".";

        return motivosConcessao;
    };
    //Concessão > Benefício Assistencial ao Idoso
    $scope.despachoAssIdConc = function (){
        let motivosConcessao = " em razão ";
        if ($scope.itensMotivoDespacho.chkMotivoConc1) {
            motivosConcessao += "de ficar comprovada a inscrição do Grupo Familiar no CadÚnico (atualizado há menos de 2 anos), a Renda per Capita inferior a 1/4 do Salário-Mínimo, e a Idade mínima de 65 anos na Data de Entrada do Requerimento - DER"
        }; 

        motivosConcessao += ".";

        return motivosConcessao;
    };
    //Concessão > Certidão de Tempo de Contribuição
    $scope.despachoCTCConc = function () {
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkMotivoConc1) {
            listaMotivos.push("ter comprovado a vinculação a Regime Próprio de Previdência - RPPS");
        };
        if ($scope.itensMotivoDespacho.chkMotivoConc2) {
            listaMotivos.push("ter comprovado a existência de períodos de vinculação ao Regime Geral da Previdência Social - RGPS passíveis de aproveitamento em contagem recíproca");
        };

        let qtdMotivos = listaMotivos.length;
        let motivosConcessao = " em razão do(a) Requerente ";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosConcessao += "; e ";
                } else {
                    motivosConcessao += "; ";
                };
            };

            motivosConcessao += listaMotivos[i];
        };

        if ($scope.itensMotivoDespacho.txtOrgaoDestinatario != "") {
            motivosConcessao += ", tendo como Órgão de Destino: " + $scope.itensMotivoDespacho.txtOrgaoDestinatario;
        };

        if ($scope.itensMotivoDespacho.chkIncluirTextoEmissaoCTC) {
            motivosConcessao += ". Para emitir a Certidão, deverá fazer login no Meu INSS (meu.inss.gov.br) e selecionar, no menu lateral, a opção \"Emissão de Certidão de Tempo de Contribuição - CTC\" e clicar em \"Baixar Documento\". " +
                                "A confirmação da sua veracidade poderá ser feita por meio do site https://meu.inss.gov.br/central/autenticidade.html, informando o código contido no rodapé da Certidão";
        };

        motivosConcessao += ".";
        return motivosConcessao;
    };

    //FUNÇÃO DE MONTAGEM: ANÁLISE
    //Válida para todas as espécies
    $scope.despachoAnalise = function () {
        
        let listaMotivos = [];

        if ($scope.itensMotivoDespacho.chkMotivoAn1) {
            listaMotivos.push(" da necessidade de apresentação de outros documentos");
        };
        if ($scope.itensMotivoDespacho.chkMotivoAn2) {
            listaMotivos.push(" da necessidade de realização de procedimentos adicionais");
        };
        if ($scope.itensMotivoDespacho.chkMotivoAn3) {
            listaMotivos.push(" da necessidade de permanecer sobrestado");
        };
        if ($scope.itensMotivoDespacho.chkMotivoAn4) {
            listaMotivos.push(" da solicitação de cópia de processo anterior, nos termos do art. 685 da Instrução Normativa nº 77/2015");
        };

        let qtdMotivos = listaMotivos.length;
        let motivosAnalise = " em razão";

        for (i = 0; i < qtdMotivos; i++) {
            if (i > 0) {
                if (i == qtdMotivos - 1) {
                    motivosAnalise += "; e ";
                } else {
                    motivosAnalise += "; ";
                };
            };

            motivosAnalise += listaMotivos[i];
        };
        
        motivosAnalise += ".";

        return motivosAnalise;
    };


    //Validação do NB digitado antes da formatação
    $scope.validaNB = function (nbEntrada) {
        let somaDigitos;
        let valorDigito;
        let nbValido = false;

        //Cálculo sequencial por posições do NB digitado
        //Posição 1
        somaDigitos = parseInt(nbEntrada.substr(0, 1)) * 2;
        //Posição 2
        somaDigitos += parseInt(nbEntrada.substr(1, 1)) * 9;
        //Posição 3
        somaDigitos += parseInt(nbEntrada.substr(2, 1)) * 8;
        //Posição 4
        somaDigitos += parseInt(nbEntrada.substr(3, 1)) * 7;
        //Posição 5
        somaDigitos += parseInt(nbEntrada.substr(4, 1)) * 6;
        //Posição 6
        somaDigitos += parseInt(nbEntrada.substr(5, 1)) * 5;
        //Posição 7
        somaDigitos += parseInt(nbEntrada.substr(6, 1)) * 4;
        //Posição 8
        somaDigitos += parseInt(nbEntrada.substr(7, 1)) * 3;
        //Posição 9
        somaDigitos += parseInt(nbEntrada.substr(8, 1)) * 2;

        //Cálculo do Dígito Verificador
        valorDigito = somaDigitos % 11;
        if (valorDigito == 0 || valorDigito == 1) {
            valorDigito = 0;
        } else {
            valorDigito = 11 - valorDigito;
        };

        //Validação do NB digitado
        if (parseInt(nbEntrada.substr(9, 1)) == valorDigito) {
            nbValido = true;
        } else {
            nbValido = false;
        };

        return nbValido;
    };

    //Formatação do NB após perder foco
    $scope.formataNB = function () {
        let numParcial = "";
        numParcial = $scope.numeroBeneficio;
        numParcial = numParcial.replace(/[^0-9]/g, '');

        if ($scope.especieSelecionada.descricao == 'Certidão de Tempo de Contribuição') {
            if (numParcial > 17) {
                numParcial = numParcial.substr(0, 17);
            };
            numParcial = "00000000000000000" + numParcial;
            numParcial = numParcial.substr(-17);
            numParcial = numParcial.substr(0, 8) + "." + numParcial.substr(8, 1) + "." + numParcial.substr(9, 5) + "/" + numParcial.substr(14, 2) + "-" + numParcial.substr(16,1);
        } else { 
            if (numParcial > 10) {
                numParcial = numParcial.substr(0, 10);
            };
            numParcial = "0000000000" + numParcial;
            numParcial = numParcial.substr(-10);

            $scope.numeroBeneficioValido = $scope.validaNB(numParcial);

            numParcial = numParcial.substr(0, 3) + "." + numParcial.substr(3, 3) + "." + numParcial.substr(6, 3) + "-" + numParcial.substr(9, 1);
        };
        
        $scope.numeroBeneficio = numParcial;
    };

    //Remoção de formatação do NB ao ganhar foco
    $scope.desformataNB = function () {
        let numParcial = $scope.numeroBeneficio;
        numParcial = numParcial.replace(/\./g, "");
        numParcial = numParcial.replace(/\-/g, "");
        numParcial = numParcial.replace(/\//g, "");
        $scope.numeroBeneficio = numParcial;
    };

    //Limpa/Reinicia Uso:
    $scope.Reiniciar = function () {
        $scope.especieSelecionada = $scope.especies[0];
        $scope.numeroBeneficio = "";
        $scope.nomeInteressado = "";
        $scope.tipoDespacho = "Indeferimento";
        $scope.conteudoEditor = "";

        $scope.itensMotivoDespacho.chkQualSeg = false;
        $scope.itensMotivoDespacho.chkComprDepend = false;
        $scope.itensMotivoDespacho.chkComprRural = false;
        $scope.itensMotivoDespacho.chkFaltaCarencia = false;
        $scope.itensMotivoDespacho.chkNaoDeficienteLC142 = false;
        $scope.itensMotivoDespacho.chkFaltaCarenciaAposPQS = false;
        $scope.itensMotivoDespacho.chkRendaSuperior = false;
        $scope.itensMotivoDespacho.chkNaoPrisao = false;
        $scope.itensMotivoDespacho.chkRegimePrisao = false;
        $scope.itensMotivoDespacho.chkAposSoltura = false;
        $scope.itensMotivoDespacho.chkFaltaIdade = false;
        $scope.itensMotivoDespacho.chkFaltaTempo = false;
        $scope.itensMotivoDespacho.chkNaoFatoGerador = false;
        $scope.itensMotivoDespacho.chkNaoAfastamento = false;
        $scope.itensMotivoDespacho.chkJaRecebeu = false;
        $scope.itensMotivoDespacho.chkFaltaCadunico = false;
        $scope.itensMotivoDespacho.chkNaoDeficiente = false;
        $scope.itensMotivoDespacho.chkMotivoConc1 = true;
        $scope.itensMotivoDespacho.chkMotivoConc2 = true;
        $scope.itensMotivoDespacho.chkMotivoAn1 = false;
        $scope.itensMotivoDespacho.chkMotivoAn2 = false;
        $scope.itensMotivoDespacho.chkMotivoAn3 = false;
        $scope.itensMotivoDespacho.txtDataQualSeg = "";
        $scope.itensMotivoDespacho.txtTipoDependente = "Companheiro(a)";
        $scope.itensMotivoDespacho.txtCarencia = "";
        $scope.itensMotivoDespacho.txtCarenciaAposPQS = "";
        $scope.itensMotivoDespacho.txtRenda = "";
        $scope.itensMotivoDespacho.txtTempoAnos = "";
        $scope.itensMotivoDespacho.txtTempoMeses = "";
        $scope.itensMotivoDespacho.txtTempoDias = "";
        $scope.itensMotivoDespacho.txtTipoInstituidor = "Em Benefício";
        $scope.itensMotivoDespacho.txtBenefInstituidor = "";
        $scope.itensMotivoDespacho.txtTipoAposTempo = "Integral";
        $scope.itensMotivoDespacho.txtTipoFatoGerador = "Parto";

        $scope.itensVinculo.chkVinculo = true;
        $scope.itensVinculo.chkExtempCTPS = false;
        $scope.itensVinculo.chkExtempCNIS = false;
        $scope.itensVinculo.txtVinculoConsiderado = "Não há";

        $scope.itensContribuicao.chkContribuicao = true;
        $scope.itensContribuicao.txtCIConsiderado = "Não há";
        $scope.itensContribuicao.chkCIAtraso = false;
        $scope.itensContribuicao.chkCIAbaixoMinimo = false;
        $scope.itensContribuicao.chkCIGFIPExtemporanea = false;
        $scope.itensContribuicao.chkCIPlanoSimplificado = false;
        $scope.itensContribuicao.txtCIAtraso = "";
        $scope.itensContribuicao.txtCIAbaixoMinimo = "";
        $scope.itensContribuicao.txtCIGFIPExtemporanea = "";
        $scope.itensContribuicao.txtCIPlanoSimplificado = "";
        $scope.itensContribuicao.txtFacultativoConsiderado = "Não há";
        $scope.itensContribuicao.chkFacFBRNaoValidado = false;
        $scope.itensContribuicao.chkFacAbaixoMinimo = false;
        $scope.itensContribuicao.chkFacAtraso = false;
        $scope.itensContribuicao.chkFacAtrasoAposPQS = false;
        $scope.itensContribuicao.chkFacPlanoSimplificado = false;
        $scope.itensContribuicao.chkFacConcomitante = false;
        $scope.itensContribuicao.txtFacFBRNaoValidado = "";
        $scope.itensContribuicao.txtFacAbaixoMinimo = "";
        $scope.itensContribuicao.txtFacAtraso = "";
        $scope.itensContribuicao.txtFacAtrasoAposPQS = "";
        $scope.itensContribuicao.txtFacPlanoSimplificado = "";
        $scope.itensContribuicao.txtFacConcomitante = "";

        $scope.itensEspecial.chkEspecial = true;
        $scope.itensEspecial.chkEnqCatProfissional = false;
        $scope.itensEspecial.chkEnqAgenteNocivo = false;
        $scope.itensEspecial.chkEnqNbAnterior = false;
        $scope.itensEspecial.chkNaoEnqCatProfissional = false;
        $scope.itensEspecial.chkNaoEnqAgenteNocivo = false;
        $scope.itensEspecial.chkNaoEnqNbAnterior = false;
        $scope.itensEspecial.chkNaoEnqAgenteNocivoAusente = false;
        $scope.itensEspecial.txtEspecialConsiderado = "Não há";

        $scope.itensRural.chkRural = true;
        $scope.itensRural.txtRuralConsiderado = "Não há";
        $scope.itensRural.chkSemDocumentos = false;
        $scope.itensRural.chkNaoCompoeGrupoFamiliar = false;
        $scope.itensRural.chkMaisQuatroModulos = false;
        $scope.itensRural.chkAtividadeRemunerada = false;
        $scope.itensRural.chkRemuneradaTurismoEmpregados = false;

        $scope.itensExigencia.chkExigencia = true;
        $scope.itensExigencia.txtExigenciaConsiderado = "Não há";
        $scope.itensExigencia.txtExigenciaParcialNaoCumprida = "";
        $scope.itensExigencia.txtExigenciaNaoCumprida = "Não apresentou";

        $scope.itensProcedimento.chkProcedimento = true;
        $scope.itensProcedimento.chkAvaliacaoPericia = false;
        $scope.itensProcedimento.chkAvaliacaoSocial = false;
        $scope.itensProcedimento.chkJustAdministrativa = false;
        $scope.itensProcedimento.chkEncontroContas = false;
        $scope.itensProcedimento.txtAvaliacaoPericia = "Agendada";
        $scope.itensProcedimento.txtAvaliacaoSocial = "Agendada";
        $scope.itensProcedimento.txtJustAdministrativa = "Desnecessária";
        $scope.itensProcedimento.txtEncontroContas = "CN";
        $scope.itensProcedimento.txtValorEncontroContas = "";

        $scope.itensOutro.chkOutro = true;
        $scope.itensOutro.chkACP = false;
        $scope.itensOutro.chkConsulta = false;
        $scope.itensOutro.chkAlteracaoEspecie = false;
        $scope.itensOutro.chkAlteracaoNaoEspecie = false;
        $scope.itensOutro.chkAlteracaoDER = false;
        $scope.itensOutro.chkAlteracaoNaoDER = false;
        $scope.itensOutro.chkProporcional = false;
        $scope.itensOutro.chkNaoProporcional = false;
        $scope.itensOutro.chkDesistenciaNB = false;
        $scope.itensOutro.txtACP = "";
        $scope.itensOutro.txtConsulta = "";

        $scope.testeAba = "active";

        $scope.montarDespacho();
    };

    //Imprime Despacho conforme consta no Editor em uma nova aba
    $scope.imprimirDespacho = function () {
        $scope.formataNB();

        if ($scope.especieSelecionada.descricao == 'Certidão de Tempo de Contribuição') {
            if ($scope.numeroBeneficio == "" || $scope.numeroBeneficio == "00000000.0.00000/00-0" || $scope.nomeInteressado.trim() == "") {
                alert("Número da Certidão de Tempo de Contribuição / Interessado não preenchido(s) ou inválido(s).");
            } else {
                localStorage.setItem("nomeUsuario", $scope.nomeUsuario);
                localStorage.setItem("cargoUsuario", $scope.cargoUsuario);
                localStorage.setItem("matrUsuario", $scope.matrUsuario);
                localStorage.setItem("orgaoUsuario", $scope.orgaoUsuario);
                localStorage.setItem("conteudoEditor", $scope.conteudoEditor);
                localStorage.setItem("especieDespacho", $scope.especieExibicao);
                localStorage.setItem("nbDespacho", $scope.numeroBeneficio);
                localStorage.setItem("interessadoDespacho", $scope.nomeInteressado);
                localStorage.setItem("tipoDespacho", $scope.tipoDespacho);

                $scope.url = 'Impressao.html';
            };
        } else if ($scope.numeroBeneficio == "" || $scope.numeroBeneficio == "000.000.000-0" || $scope.numeroBeneficioValido == false || $scope.nomeInteressado.trim() == ""){
            alert("Número do Benefício / Interessado não preenchido(s) ou inválido(s).");
        } else {
            localStorage.setItem("nomeUsuario", $scope.nomeUsuario);
            localStorage.setItem("cargoUsuario", $scope.cargoUsuario);
            localStorage.setItem("matrUsuario", $scope.matrUsuario);
            localStorage.setItem("orgaoUsuario", $scope.orgaoUsuario);
            localStorage.setItem("conteudoEditor", $scope.conteudoEditor);
            localStorage.setItem("especieDespacho", $scope.especieExibicao);
            localStorage.setItem("nbDespacho", $scope.especieSelecionada.codigo + "/" + $scope.numeroBeneficio);
            localStorage.setItem("interessadoDespacho", $scope.nomeInteressado);
            localStorage.setItem("tipoDespacho", $scope.tipoDespacho);

            $scope.url = 'impressao.html';
        };
    };
});