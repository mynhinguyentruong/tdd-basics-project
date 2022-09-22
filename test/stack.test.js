class Stack {
  constructor() {
    this.top = -1;
    this.items = {}
  }
}

describe("My stack", () => {
  it("is created empty", () => {
    const stack = new Stack();

    expect(stack.top).toBe(-1);
    expect(stack.items).toStrictEqual({})
  });

  it.todo("can push item to the top");

  it.todo("can pop off");
});
