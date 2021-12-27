type Combinable = string | number;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString();

  return a + b;
}

const result = add("Max", "Min") as string; // Either do typecasting
result.split(" ");

// ----------------------or---------------------

type Combinable2 = string | number;

// Either do function overloads define the function.
function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: string, b: number): string;
function add1(a: number, b: string): string;
function add1(a: Combinable2, b: Combinable2) {
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString();

  return a + b;
}

const result1 = add1("Max", "Min");
result1.split(" ");
