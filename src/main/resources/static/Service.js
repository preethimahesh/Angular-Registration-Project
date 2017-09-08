(function () {
    'use strict';

    angular.module('myModule')
        .factory('Regservice', Regservice);
    Regservice.$inject = ['$http'];

    function Regservice($http) {

        return {
            getdetail: getdetail,
            postReg: postReg,
            updatedata: updatedata,
            deletedata: deletedata

        };

        function getdetail() {
            return $http.get('http://localhost:8085/Registration')
                .then(getdataSuccess)
                .catch(getdataFailure);

            function getdataSuccess(response) {
                return response.data;
            };

            function getdataFailure(response) {
                console.log(response.statusText);
            };

        }


        function postReg(postdata) {
            console.log(JSON.stringify(postdata));

            return $http.post('http://localhost:8085/Registration', postdata)
                .then(postdataSuccess)
                .catch(postdataFailure);

            function postdataSuccess(response) {
                return response.data;
            };

            function postdataFailure(response) {
                console.log(response.statusText);
            };
        }

        function updatedata(item,id) {
            return $http.post('http://localhost:8085/Registration',item,id)
                .then(updatedataSuccess)
                .catch(updatedataFailure);

            function updatedataSuccess(response) {
                console.log("sucessss");
                console.log(JSON.stringify(response.data));
                return response.data;
            };

            function updatedataFailure(response) {
                 console.log("sucessss");
                console.log(response.statusText);
            };
        }

        function deletedata(id) {
            return $http.delete('http://localhost:8085/Registration/' + id)
                .then(deletedataSuccess)
                .catch(deletedataFailure);

            function deletedataSuccess(response) {
                return response.data;
            };

            function deletedataFailure(response) {
                console.log(response.statusText);
            };
        }
    }


})();