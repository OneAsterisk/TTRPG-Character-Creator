// races.mjs
// @ts-check
import {getJSON} from 'jquery'
export function getRaces(){
    
    const racesData = getJSON('G:\Website\TTRPG\TTRPG-Character-Creator\data\races.json');
    
    let i = 0;
    var select = document.getElementById('race-select');
    window.onload = function(){
        let option = new Option('1','hello');
        // @ts-ignore
        select.innerHTML += "<option value="+option.value+">" + option.text+"</option>";
    }
}

