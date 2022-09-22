class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }
  get peek() {
    return this.items[this.top];
  }

  push(item) {
    this.top += 1;
    this.items[this.top] = item;
  }

  pop(item) {
    this.top -= 1;
    delete this.items[this.top];
  }
}

describe("My stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toStrictEqual({});
  });

  it("can push item to the top", () => {
    stack.push("avocado");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("avocado");
  });

  it("can pop off", () => {

  });
});
