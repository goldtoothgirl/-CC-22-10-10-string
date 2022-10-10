// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }
  
  camelize("EquipmentClass name");
  camelize("Equipment className");
  camelize("equipment class name");
  camelize("Equipment Class Name");

  

//   Time: 663ms Passed: 1Failed: 3Exit Code: 1
// Test Results:
// Tests
// test
// Test Passed: Value == ''
// toCamelCase('the_stealth_warrior') did not return correct value - Expected: 'theStealthWarrior', instead got: 'the_stealth_warrior'
// toCamelCase('The-Stealth-Warrior') did not return correct value - Expected: 'TheStealthWarrior', instead got: 'the-Stealth-Warrior'
// toCamelCase('A-B-C') did not return correct value - Expected: 'ABC', instead got: 'a-B-C'
// Completed in 2ms
// Completed in 5ms