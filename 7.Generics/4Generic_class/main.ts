class StorageClass<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  popItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new StorageClass<string>();
textStorage.addItem("10");
textStorage.addItem("20");
textStorage.addItem("30");
textStorage.addItem("40");
console.log(textStorage.getItems());
textStorage.popItem("30");
console.log(textStorage.getItems());

// But the error will be come when we deal with the objects.
// So Generic class is advisable to use it with primitive datatype like string boolean number

const textStorage1 = new StorageClass<object>();
textStorage1.addItem({ num: "10" });
textStorage1.addItem({ num: "20" });

console.log(textStorage1.getItems());
textStorage1.popItem({ num: "10" });
console.log(textStorage1.getItems());

// As the object are reference datatype so thats why it will br create a diff for addItem call and PopItem call for num =10

const textStorage12 = new StorageClass<object>();
const ob1 = { num: 10 };
const ob2 = { num: 20 };
textStorage12.addItem(ob1);
textStorage12.addItem(ob2);
console.log(textStorage12.getItems());
textStorage12.popItem(ob1);
console.log(textStorage12.getItems());
