angular.module('App')
    .service('corridaProxy', function ($http, $q) {
    this.ListarTodos = function() {
        var deferred = $q.defer();
        $http.get('corrida/listar').then(function (result) {
            deferred.resolve(result.data);
        }, function (error) {
            deferred.resolve(error);
        });
        return deferred.promise;
    };
    this.Adicionar = function(novo) {
        var deferred = $q.defer();
        $http.post('corrida', novo).then(function (result) {
            deferred.resolve(result.data.Entidade);
        }, function (error) {
            deferred.resolve(error);
        });
        return deferred.promise;
    };
});