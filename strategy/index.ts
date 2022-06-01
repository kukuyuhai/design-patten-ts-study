interface Strategy {
  pay(val: String): void;
}

class ECNYStrategy implements Strategy {
  pay(val: String): void {
    console.log("使用数字人民币支付", val);
  }
}

class UnionPayStrategy implements Strategy {
  pay(val: String): void {
    console.log("使用银联支付", val);
  }
}

//  定义一个Context类， setStrategy会会根据不同的场景调整context的执⾏策略
class Context {
  private strategy!: Strategy;
  private value: String;

  constructor(value: String) {
    this.value = value;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public execute() {
    this.strategy.pay(this.value);
  }
}

const payContext: Context = new Context("100元");

payContext.setStrategy(new ECNYStrategy());

// 执行

payContext.execute();
