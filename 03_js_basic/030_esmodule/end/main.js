// POINT ESModuleの使い方
import functionB, { hello, User } from "./module.js";
hello();
functionB();
const user = new User('Tom');
user.hello();
