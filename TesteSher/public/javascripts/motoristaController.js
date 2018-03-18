angular.module('App')
    .controller('motoristaController', function ($scope, motoristaProxy) {
    function init() {
        motoristaProxy.ListarTodos().then(function (entidades) {
            $scope.entidades = entidades;
        }, function (error) {
            console.log(error);
        });
    }

    $scope.Adicionar = function () {
        motoristaProxy.Adicionar({ motorista: $scope.motorista }).then(function (newEntidade) {
            $scope.entidades.push(newEntidade);
            motoristaProxy.ListarTodos().then(function (entidades) {
                $scope.entidades = entidades;
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
    };

    $scope.AlterarStatus = function (entidade) {
        motoristaProxy.Alterar(entidade).then(function (newEntidade) {
            $scope.entidades.push(newEntidade);
            motoristaProxy.ListarTodos().then(function (entidades) {
                $scope.entidades = entidades;
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
    };

    init();
});