var ECNYStrategy = /** @class */ (function () {
    function ECNYStrategy() {
    }
    ECNYStrategy.prototype.pay = function (val) {
        console.log("使用数字人民币支付", val);
    };
    return ECNYStrategy;
}());
var UnionPayStrategy = /** @class */ (function () {
    function UnionPayStrategy() {
    }
    UnionPayStrategy.prototype.pay = function (val) {
        console.log("使用银联支付", val);
    };
    return UnionPayStrategy;
}());
//  定义一个Context类， setStrategy会会根据不同的场景调整context的执⾏策略
var Context = /** @class */ (function () {
    function Context(value) {
        this.value = value;
    }
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context.prototype.execute = function () {
        this.strategy.pay(this.value);
    };
    return Context;
}());
var payContext = new Context("100元");
payContext.setStrategy(new ECNYStrategy());
// 执行
payContext.execute();
