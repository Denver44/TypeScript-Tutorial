interface ErrorContainer {
  [prop: string]: string;
}
// THis [] helps us to add as many props and any props we don't have to define it earlier.

const errorBag: ErrorContainer = {
  1: "Not correctId",
  email: "Not a Valid email",
  username: "Not a Valid username",
};
