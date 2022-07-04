//----- Библиотеки js -----//
import $ from "jquery";
import "slick-carousel";

global.jQuery = $;
global.$ = $;




import { accordion } from "./modules/accordion";
import { tabs } from "./modules/tabs";
import { form } from "./modules/form";
import { tel } from "./modules/tel";
import { slider } from "./modules/slider";
import { navigation } from "./modules/navigation";
import { header } from "./modules/header";




accordion();
tabs();
form();
tel();
slider();
navigation();
header();

