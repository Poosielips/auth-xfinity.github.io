import "./main.pcss";
import form from "platco-ui-common/components/form/form";
import input from "platco-ui-common/components/input/input";
import secondarySubmitButton from "./components/submitButton/secondarySubmitButton";
import trimOnChange from "./components/input/trimOnChange";
import loadingOnClick from "./components/button/loadingOnClick";
import lineItem from "./components/line-item";
import modalTrigger from "./components/modal-trigger";
import webauthnSupport from "./components/webauthn/support";

form();
input();
secondarySubmitButton();
trimOnChange();
loadingOnClick();
lineItem();
modalTrigger();
webauthnSupport();
