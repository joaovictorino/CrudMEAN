angular.module('App')
    .controller('passageiroController', function ($scope, passageiroProxy) {
    function init() {
        passageiroProxy.ListarTodos().then(function (entidades) {
            $scope.entidades = entidades;
        }, function (error) {
            console.log(error);
        });
    }

    $scope.Adicionar = function () {
        passageiroProxy.Adicionar({ passageiro: $scope.passageiro }).then(function (newEntidade) {
            $scope.entidades.push(newEntidade);
            passageiroProxy.ListarTodos().then(function (entidades) {
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