(function() {
    'use strict';

    angular
        .module('test3App')
        .controller('OfferController', OfferController);

    OfferController.$inject = ['$scope', '$state', 'Offer', 'OfferSearch'];

    function OfferController ($scope, $state, Offer, OfferSearch) {
        var vm = this;
        
        vm.offers = [];
        vm.search = search;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {
            Offer.query(function(result) {
                vm.offers = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            OfferSearch.query({query: vm.searchQuery}, function(result) {
                vm.offers = result;
            });
        }    }
})();
