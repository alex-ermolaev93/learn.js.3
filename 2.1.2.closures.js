function sayHiBay( firstName, lastName) {
    console.log( 'hello, ' + getFullName() );
    console.log( 'bay, ' + getFullName() );

    function getFullName() {
        return firstName + ' ' + lastName;
    }
}
sayHiBay( 'alex', 'ronin');