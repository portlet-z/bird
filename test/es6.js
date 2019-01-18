class Animal {
  constructor(name = '默认参数', age = 0) {
    this.name = name
    this.age = age
  }

  say() {
    console.log(this.name, this.age)
  }


}

class Cat extends Animal {
  constructor(name, age) {
    super(name, age)
  }

  say() {
    super.say()
    console.log('sub class say')
  }
}

let cat = new Cat('cat', 3)
cat.say()