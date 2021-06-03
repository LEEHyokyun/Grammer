variable = require("./module_export");
//console.log(a);

const print_string = require("./module_export");
const print_string_require = require("./module_export");
const print_string_prototype_require = new print_string();
console.log(print_string_prototype_require.do);
