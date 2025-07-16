"use strict";
var import_shared_utils = require("@./shared-utils");
var import_utils = require("./utils");
console.log("Hello World");
console.log((0, import_shared_utils.formatMessage)("Backend"));
console.log("Server started at:", (0, import_shared_utils.getCurrentTimestamp)());
const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" }
];
console.log("Sample users:", users);
console.log("Greeting first user:", (0, import_utils.greetUser)(users[0].name));
console.log("Adding user IDs:", (0, import_utils.addNumbers)(users[0].id, users[1].id));
console.log("Backend is ready!");
//# sourceMappingURL=main.js.map
