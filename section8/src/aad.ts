const enum Bool {
  True,
  False,
  FileNotFound,
}
let value = Bool.FileNotFound;
// let value2 = Bool[0]; // ERROR! - A const enum member can only be accessed using a string literal.
