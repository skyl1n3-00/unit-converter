export default class Relation {
  constructor(sourceUnit, targetUnit, conversionCost = null) {
    this.sourceUnit = sourceUnit;
    this.targetUnit = targetUnit;
    this.conversionCost = conversionCost;
  }

  getSourceUnit() {
    return this.sourceUnit;
  }

  getTargetUnit() {
    return this.targetUnit;
  }

  getConversionCost() {
    return this.conversionCost;
  }
}
