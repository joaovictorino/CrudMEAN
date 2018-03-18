angular.module('App')
    .controller('corridaController', function ($scope, corridaProxy, motoristaProxy, passageiroProxy) {
    function init() {
        corridaProxy.ListarTodos().then(function (entidades) {
            $scope.entidades = entidades;
        }, function (error) {
            console.log(error);
            });
        motoristaProxy.ListarTodosAtivos().then(function (entidades) {
            $scope.motoristas = entidades;
        }, function (error) {
            console.log(error);
            });
        passageiroProxy.ListarTodos().then(function (entidades) {
            $scope.passageiros = entidades;
        }, function (error) {
            console.log(error);
        });
    }

    $scope.Adicionar = function () {
        corridaProxy.Adicionar({ corrida: $scope.corrida }).then(function (newEntidade) {
            $scope.entidades.push(newEntidade);
            corridaProxy.ListarTodos().then(function (entidades) {
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