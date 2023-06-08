import {getJSON} from 'jquery';

const racesData = getJSON('G:\Website\TTRPG\TTRPG-Character-Creator\data\races.json');
const options = [
    { value: '1', text: 'Option 1' },
    { value: '2', text: 'Option 2' },
    { value: '3', text: 'Option 3' },
  ];
let i = 0;
window.onload = function(){
    for (const option of options) {
        const newOption = document.createElement('option');
        newOption.value = option.value;
        newOption.textContent = option.text;
        document.getElementById('race-select')?.appendChild(newOption);
        i++;
      }
}
