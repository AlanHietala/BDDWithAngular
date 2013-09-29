'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('workflowDemoApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should add a new person from the newPerson variable to the attendeeList when the add button is clicked', function () {
        expect(scope.addPerson).toBeDefined();
        expect(scope.newPerson).toBeDefined();

        scope.newPerson = 'newpersonname';
        scope.addPerson();
        expect(scope.attendeeList.length).toBe(1);
        expect(scope.attendeeList[0].name).toBe('newpersonname')

    });

    it('should clear add person when we add the person to the list', function() {
        scope.newPerson = 'newpersonname';
        scope.addPerson();
        expect(scope.newPerson).toBe('');
    });
    it('should have a list of attendees', function () {
        expect(scope.attendeeList).toBeDefined();
    });

    it('should add a person with the properties name and present when adding', function () {
        scope.newPerson = 'newpersonname';
        scope.addPerson();
        expect(scope.attendeeList[0].present).toBeDefined();
        expect(scope.attendeeList[0].name).toBeDefined();
    });

    it('should not add a person when the newPerson variable is blank', function () {
        scope.newPerson = '';
        scope.addPerson();
        expect(scope.attendeeList.length).toBe(0);
    });


});
