import nav from "./nav";
import {top, bottom} from "./footer";
import makeButton from "./button";

import {red, blue, makeColorStyle} from "./button-styles";

makeButton("but");
makeColorStyle("mustard");

console.log(top, bottom);
console.log(nav());