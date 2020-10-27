import { CatOwner, Cat } from "./index"

test("係数1,5回遊んだ後に空腹確認", () => {
  const cat = new Cat(1)
  const owner = new CatOwner()

  for (let i = 0; i < 5; i++) {
    cat.play()
  }
  expect(owner.checkHungry(cat)).toMatch("お腹すいてない")
})

test("係数1、9回遊んだ後に空腹確認", () => {
  const cat = new Cat(1)
  const owner = new CatOwner()

  for (let i = 0; i < 9; i++) {
    cat.play()
  }
  expect(owner.checkHungry(cat)).toMatch("お腹すいたー")
})

test("係数1、10回遊んだ後に空腹確認", () => {
  const cat = new Cat(1)
  const owner = new CatOwner()

  for (let i = 0; i < 10; i++) {
    cat.play()
  }
  expect(() => owner.checkHungry(cat)).toThrow("イヤイヤイヤイヤイヤイヤイヤイヤ")
})

test("係数2、2回遊んだ後に空腹確認", () => {
  const cat = new Cat(2)
  const owner = new CatOwner()

  for (let i = 0; i < 2; i++) {
    cat.play()
  }
  expect(owner.checkHungry(cat)).toMatch("お腹すいてない")
})

test("【必須】係数2、3回遊んだ後に空腹確認", () => {
  const cat = new Cat(2)
  const owner = new CatOwner()

  for (let i = 0; i < 3; i++) {
    cat.play()
  }
  expect(owner.checkHungry(cat)).toMatch("お腹すいたー")
})


