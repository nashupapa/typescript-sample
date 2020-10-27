/**
 * Catクラス
*/
export class Cat {

  private hungerPoint: number       // HungerPoint
  private hungerCoefficient: number // ハラヘリ係数
  private isHungry: boolean         // ハラ減り状態

  /**
   * コンストラクタ
   * @param {number} - "ハラヘリ係数"
   */
  constructor(hungerCoefficient: number) {
    this.hungerPoint = 0
    this.hungerCoefficient = hungerCoefficient
    this.isHungry = false
  }

  /**
   * お腹が減っているか否かを返します
   * @return {string} - "お腹すいたー" or "お腹すいてない"
   */
  public informHungry(): string {

    this.checkRampage()
    return this.isHungry ? "お腹すいたー" : "お腹すいてない"

  }

  /**
   * えさを食べます
   * @param {string} - "おやつ" or "キャットフード"
   */
  public eatFood(food: string) {

    this.checkRampage()

    if (food == "おやつ") {
      if (this.hungerPoint >= 0) {
        this.hungerPoint -= 40
      }
    } else if (food == "キャットフード") {
      this.hungerPoint = 0

    } else {
      throw new Error("それは食べないよ")
    }

    if (this.hungerPoint < 60) {
      this.isHungry = false
    }

  }

  /**
   * 遊びます
   */
  public play() {

    this.checkRampage()
    this.hungerPoint += 10 * this.hungerCoefficient

    if (this.hungerPoint >= 60) {
      this.isHungry = true
    }

  }

  /**
   * 暴れる状態チェック
   */
  private checkRampage() {
    if (this.hungerPoint >= 100) {
      throw new Error("イヤイヤイヤイヤイヤイヤイヤイヤ")
    }
  }

}

/**
 * CatOwnerクラス
*/
export class CatOwner {

  /**
   * 空腹状態をチェックします
   * @param {Cat} - Catクラス
   * @return {string} "お腹すいたー" or "お腹すいてない"
   */
  public checkHungry(cat: Cat): string {
    return cat.informHungry()
  }

  /**
   * 餌を与えます
   * @param {Cat} - Catクラス
   * @param {string} "おやつ" or "キャットフード"
   */
  public giveFood(cat: Cat, food: string) {
    cat.eatFood(food)
  }

}
