(function () {
    'use strict'

    angular
        .module('Calculadora', [])
        .controller('Calc', Calc);
    
    function Calc($scope, $log) {

        $scope.listaProyectos = [
            { nombre: "A", lenguaje: "Visual C#", tipo: "Web", horas: 1000 },
           { nombre: "B", lenguaje: "Visual Basic", tipo: "Mobile", horas: 250 },
           { nombre: "C", lenguaje: "TypeScript", tipo: "Web", horas: 2000 }
        ];

        $scope.setData = function () {
            //Enviroment variables
            $scope.hideNonConfigurableParams = false;

            //Configurable Factors
            $scope.NumberOfYears = 3;
            $scope.NumberOfUsers = 150;

            $scope.CostOfE3License = 20;
            $scope.NumberOfITResources = 3;

            //Current Costs 
            $scope.CostPerITResource = 65000;
            $scope.CostPerMobileWorker = 93750;
            $scope.CostPerKnowledgeWorker = 60000;

            //Implementation/Migration
            $scope.ProfesionalServices = 0;
            $scope.Training = 5000;

            //Hardware
            $scope.CostPerServer = 7000;
            $scope.HardwareList = [
                { name: 'Exchange Servers', number: 2, total: 0 },
                { name: 'SharePoint Servers', number: 3, total: 0 },
                { name: 'Lync Servers', number: 2, total: 0 }
            ];
            $scope.HardwareTotalServers = 0;
            $scope.HardwareTotalCost = 0;

            //Support
            $scope.NumberOfResources = 0.75;

            //ThirdParty Software
            $scope.ThirdPartyList = [
                { name: 'Antivirus cost per year', cost: 1800 },
                { name: 'Backup agents per years', cost: 3600 }
            ];
            $scope.ThirdPartyTotal = 0;

            //Microsoft Licenses
            $scope.MicrosoftLiensesList = [
                { name: 'Office professional', unitPrice: 508, cost: 0 },
                { name: 'Exchange Standar', unitPrice: 708, cost: 0 },
                { name: 'Sharepoint Standar', unitPrice: 4926, cost: 0 },
                { name: 'Lync Standar', unitPrice: 708, cost: 0 },
                { name: 'CALs', unitPrice: 195, cost: 0 }
            ];
            $scope.MicrosoftLiensesTotal = 0;

            //DataCenter
            $scope.DataCenterCostPerServerPerYear = 500;
            $scope.DataCenterTotal = 0;

            //Comparision Result Definition List
            $scope.ComparisonResultList = [
                { name: 'IT Resources', years: [] },
                { name: 'Hardware', years: [] },
                { name: 'Data Center', years: [] },
                { name: 'Perpetual Licenses', years: [] },
                { name: 'Office 365 Subscription', years: [] },
                { name: 'Third Party Software', years: [] },
            ];

            angular.forEach($scope.ComparisonResultList, function (value, key) {
                value.years.push({ OnPremise: 0, Office365: 0 });
                value.years.push({ OnPremise: 0, Office365: 0 });
                value.years.push({ OnPremise: 0, Office365: 0 });
                value.years.push({ OnPremise: 0, Office365: 0 });
            });
        }

        //Calculos 
        $scope.Calculus = function () {
            //Implementation/Migration
            $scope.ProfesionalServices = 5000 + ($scope.NumberOfUsers * 5);

            //Hardware
            $scope.HardwareTotalServers = 0;
            $scope.HardwareTotalCost = 0;
            angular.forEach($scope.HardwareList, function (value, key) {
                value.total = value.number * $scope.CostPerServer;
                $scope.HardwareTotalServers = $scope.HardwareTotalServers + value.number;
                $scope.HardwareTotalCost = $scope.HardwareTotalCost + value.total;
            });

            //third Party software
            $scope.ThirdPartyTotal = 0;
            angular.forEach($scope.ThirdPartyList, function (value, key) {
                $scope.ThirdPartyTotal = value.cost + $scope.ThirdPartyTotal;
            });

            //Microsoft Licenses
            $scope.MicrosoftLiensesTotal = 0;
            angular.forEach($scope.MicrosoftLiensesList, function (value, key) {
                value.cost = value.unitPrice * $scope.NumberOfUsers;
                $scope.MicrosoftLiensesTotal = $scope.MicrosoftLiensesTotal + value.cost;
            });

            //DataCenter
            $scope.DataCenterTotal = 500;

            //Comparison Results

        }//Calculus end
        
        

        $scope.verDetalle = function (proyecto) {

            $scope.proyectoDetalle = proyecto;
            $log.log(proyecto);
        }

        $scope.setData();

    };
})();