export const sourceUnit = document.getElementById('source-unit');
export const targetUnit = document.getElementById('target-unit');
export const inputField = document.getElementById('input');
export const outputField = document.getElementById('output');

export function convert(item) {
  if (
    item.getSourceUnit().toLowerCase() ===
      sourceUnit.options[sourceUnit.selectedIndex].value.toLowerCase() &&
    item.getTargetUnit().toLowerCase() ===
      targetUnit.options[targetUnit.selectedIndex].value.toLowerCase()
  ) {
    outputField.value = `${+inputField.value * item.getConversionCost()}`;
  } else if (
    sourceUnit.options[sourceUnit.selectedIndex].value.toLowerCase() ===
    targetUnit.options[targetUnit.selectedIndex].value.toLowerCase()
  ) {
    outputField.value = `${+inputField.value}`;
  }
}

export function clearInputs() {
  inputField.value = '';
  outputField.value = '';
}

export function clearOptions() {
  const length = sourceUnit.options.length;
  for (let i = length - 1; i > 0; i--) {
    sourceUnit.options[i] = null;
    targetUnit.options[i] = null;
  }
}

export function initiliazeUnits(units) {
  units.forEach((unit) => {
    const firstOption = new Option(unit, unit.toLowerCase());
    sourceUnit.add(firstOption, undefined);
    const secondOption = new Option(unit, unit.toLowerCase());
    targetUnit.add(secondOption, undefined);
  });
}

export function fahrenheitConversion(sourceUnit, targetUnit, sourceUnitValue) {
  if (sourceUnit === 'c' && targetUnit === 'f') {
    return +sourceUnitValue * (9 / 5) + 32;
  } else if (sourceUnit === 'c' && targetUnit === 'k') {
    return +sourceUnitValue + 273;
  } else if (sourceUnit === 'f' && targetUnit === 'c') {
    return (5 / 9) * (+sourceUnitValue - 32);
  } else if (sourceUnit === 'f' && targetUnit === 'k') {
    return (5 / 9) * (+sourceUnitValue - 32) + 273;
  } else if (sourceUnit === 'k' && targetUnit === 'c') {
    return +sourceUnitValue - 273;
  } else if (sourceUnit === 'k' && targetUnit === 'f') {
    return (9 / 5) * (+sourceUnitValue - 273) + 32;
  } else if (sourceUnit === targetUnit) {
    return +sourceUnitValue;
  } else {
    return null;
  }
}
