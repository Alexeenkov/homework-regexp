export default class Validator {
  validateUsername(name) {
    const regExpOne = /^[^\W\d_][\w-]+[^\W\d_]$/g;
    const regExpTwo = /\d{3}/;

    if (regExpOne.test(name) && !regExpTwo.test(name)) {
      this.name = name;
      return true;
    }
    throw new Error(`Имя ${name} некорректно`);
  }
}