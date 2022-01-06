
function FormatString(str: string, ...val: string[]) {
    for (let index = 0; index < val.length; index++) {
      str = str.replace("{index}", val[index]);
    }
    return str;
  }

function addNumbers(a: number, b: number) { 
    return a + b; 
} 

var sum: number = addNumbers(10, 15) 

console.log('Sum of the two numbers is: ' +sum); 

var planRunCompareBasePageUrl: string = "https://dev-marvel2.zooxlabs.com/plan/run/{0}/compare/{1}";

console.log(planRunCompareBasePageUrl); 