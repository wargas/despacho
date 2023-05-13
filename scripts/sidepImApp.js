var app = angular.module('spApp', []);
app.controller('siCtrl', function ($scope, $filter, $window) {
    $scope.dataDespacho = $filter('date')(new Date(), "dd 'de' MMMM 'de' yyyy");
    $scope.nomeUsuario = localStorage.getItem("nomeUsuario");
    $scope.matrUsuario = localStorage.getItem("matrUsuario");
    $scope.cargoUsuario = localStorage.getItem("cargoUsuario");
    $scope.orgaoUsuario = localStorage.getItem("orgaoUsuario");
    $scope.conteudoDespacho = localStorage.getItem("conteudoEditor");
    $scope.especieDespacho = localStorage.getItem("especieDespacho");
    $scope.nbDespacho = localStorage.getItem("nbDespacho");
    $scope.interessadoDespacho = localStorage.getItem("interessadoDespacho");
    $scope.tipoDespacho = localStorage.getItem("tipoDespacho");

    document.getElementById("conteudo").innerHTML = $scope.conteudoDespacho.replace(/(<\/?)div>/g, '$1p>');

    $window.document.title = $scope.tipoDespacho + " - " + $scope.nbDespacho;
    
});