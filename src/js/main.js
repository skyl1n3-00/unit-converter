import { distance, data, weight } from './RelationValues';
import {
  clearInputs,
  clearOptions,
  convert,
  fahrenheitConversion,
} from './functions';
import {
  targetUnit,
  sourceUnit,
  inputField,
  outputField,
  initiliazeUnits,
} from './functions';

const select = document.getElementById('selection');

select.addEventListener('change', (e) => {
  const selectedOptionText = select.options[
    select.selectedIndex
  ].value.toLowerCase();
  switch (selectedOptionText) {
    case 'distance':
      {
        clearInputs();
        clearOptions();
        const units = ['Km', 'Dm', 'M', 'Mm'];
        initiliazeUnits(units);
      }
      break;

    case 'data':
      {
        clearInputs();
        clearOptions();
        const units = ['Tb', 'Gb', 'Mb'];
        initiliazeUnits(units);
      }
      break;

    case 'temperature':
      {
        clearInputs();
        clearOptions();
        const units = ['C', 'F', 'K'];
        initiliazeUnits(units);
      }
      break;

    case 'weight': {
      clearInputs();
      clearOptions();
      const units = ['Lb', 'Kg', 'G'];
      initiliazeUnits(units);
    }
  }
});

inputField.addEventListener('input', (e) => {
  const selectedOptionText = select.options[
    select.selectedIndex
  ].value.toLowerCase();
  switch (selectedOptionText) {
    case 'distance':
      {
        distance.forEach((item) => {
          convert(item);
        });
      }
      break;
    case 'data':
      {
        data.forEach((item) => {
          convert(item);
        });
      }
      break;

    case 'temperature':
      {
        outputField.value = fahrenheitConversion(
          sourceUnit.options[sourceUnit.selectedIndex].value.toLowerCase(),
          targetUnit.options[targetUnit.selectedIndex].value.toLowerCase(),
          +inputField.value
        );
      }
      break;
    case 'weight': {
      weight.forEach((item) => {
        convert(item);
      });
    }
  }
});
