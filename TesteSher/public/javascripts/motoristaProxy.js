angular.module('App')
    .service('motoristaProxy', function ($http, $q) {
    this.ListarTodos = function () {
        var deferred = $q.defer();
        $http.get('motorista/listar').then(function (result) {
            deferred.resolve(result.data);
        }, function (error) {
            deferred.resolve(error);
        });
        return deferred.promise;
        };
    this.ListarTodosAtivos = function () {
        var deferred = $q.defer();
        $http.get('motorista/listar?status=true').then(function (result) {
            deferred.resolve(result.data);
        }, function (error) {
            deferred.resolve(error);
        });
        return deferred.promise;
    };
    this.Adicionar = function (novo) {
        var deferred = $q.defer();
        $http.post('motorista', novo).then(function (result) {
            deferred.resolve(result.data.Entidade);
        }, function (error) {
            deferred.resolve(error);
        });
        return deferred.promise;
    };
    this.Alterar = function (editado) {
        var deferred = $q.defer();
        $http.post('motorista/alterar', editado).then(function (result) {
            deferred.resolve(result.data.Entidade);
        }, function (error) {
            deferred.resolve(error);
        });
        return deferred.promise;
    };
});