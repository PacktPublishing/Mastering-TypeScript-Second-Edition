var phonecatApp = angular.module('phonecatApp', []);

interface IScope {
    phones : IPhone[];
}
interface IPhone {
    name: string;
    snippet: string;
}

class PhoneListController {
    myScope: IScope;
    constructor($scope, $http: ng.IHttpService, Phone) {
        this.myScope = $scope;
        this.myScope.phones = Phone.query();
        $scope.orderProp = 'age';
        _.bindAll(this, 'GetPhonesSuccess');
    }
    GetPhonesSuccess(data: IPhone []) {
        this.myScope.phones = data;
    }
}

