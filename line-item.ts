import type { PrismLineitem } from "@prism-ui/core/dist/components/prism-lineitem";

function setAttrPropAsParsedValue(lineItem: PrismLineitem) {
  const attr = lineItem.getAttribute("attr");
  if (attr) {
    lineItem.attr = JSON.parse(attr);
  }
}

export default (): void => {
  const lineItems = document.querySelectorAll<PrismLineitem>("prism-lineitem");
  lineItems.forEach(setAttrPropAsParsedValue);
};
