import testModule from './testModule';
import '../stylesheets/style.css';

var testFunction = function() {
    console.log('this is a test function');
};

var testObject = {
    'testString': 'this is a test object',
    'testInt': 2
};

var testString = 'This is a test string.';

export {
    testModule,
    testFunction,
    testObject,
    testString
}