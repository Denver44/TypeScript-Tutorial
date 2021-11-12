let userInput: unknown, userName: string;
userInput = 5;
userInput = "Max";
// userName = userInput; // This we can't to because unknown is more restrictive

// NOTE :- UNKNOWN CAN HOLD ANY DATATYPE.
// BUT FOR EXAMPLE YOU HAVE A CONTAINER WHICH CAN HOLD A STRING AND U WANT THAT IT SHOULD HOLD UNKNOWN THEN U NEED TO DO ONE EXTRA TYPE CHECK.

if (typeof userInput === "string") {
  userName = userInput;
}

let userInput1: any, userName1: string;

userInput1 = 5;
userInput1 = "Max";
userName1 = userInput1; // As any is not restrictive so we can do it.

// NOTE: Any is much better thn unknown,
