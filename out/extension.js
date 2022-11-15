"use strict";
/*
References:
https://code.visualstudio.com/api/references/vscode-api#languages.registerCompletionItemProvider
https://github.com/microsoft/vscode-extension-samples/blob/main/completions-sample/src/extension.ts
https://shopify.dev/api/liquid/objects
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const address_1 = require("./objects/address");
const article_1 = require("./objects/article");
const block_1 = require("./objects/block");
const blog_1 = require("./objects/blog");
const cart_1 = require("./objects/cart");
const collection_1 = require("./objects/collection");
const color_1 = require("./objects/color");
const comment_1 = require("./objects/comment");
const company_address_1 = require("./objects/company_address");
const company_location_1 = require("./objects/company_location");
const country_1 = require("./objects/country");
const currency_1 = require("./objects/currency");
const customer_1 = require("./objects/customer");
const discount_allocation_1 = require("./objects/discount_allocation");
const discount_application_1 = require("./objects/discount_application");
const external_video_1 = require("./objects/external_video");
const filter_1 = require("./objects/filter");
const filter_value_1 = require("./objects/filter_value");
const focal_point_1 = require("./objects/focal_point");
const font_1 = require("./objects/font");
const forloop_1 = require("./objects/forloop");
const form_1 = require("./objects/form");
const form_errors_1 = require("./objects/form_errors");
const fufillment_1 = require("./objects/fufillment");
const generic_file_1 = require("./objects/generic_file");
const gift_card_1 = require("./objects/gift_card");
const group_1 = require("./objects/group");
const image_1 = require("./objects/image");
const image_presentation_1 = require("./objects/image_presentation");
const line_item_1 = require("./objects/line_item");
const link_1 = require("./objects/link");
const linklist_1 = require("./objects/linklist");
const localization_1 = require("./objects/localization");
const product_1 = require("./objects/product");
const liquidObjects = {
    address: address_1.default,
    article: article_1.default,
    block: block_1.default,
    blog: blog_1.default,
    cart: cart_1.default,
    collection: collection_1.default,
    color: color_1.default,
    comment: comment_1.default,
    company_address: company_address_1.default,
    company_location: company_location_1.default,
    country: country_1.default,
    currency: currency_1.default,
    customer: customer_1.default,
    discount_allocation: discount_allocation_1.default,
    discount_application: discount_application_1.default,
    external_video: external_video_1.default,
    filter: filter_1.default,
    filter_value: filter_value_1.default,
    focal_point: focal_point_1.default,
    font: font_1.default,
    forloop: forloop_1.default,
    form: form_1.default,
    form_errors: form_errors_1.default,
    fufillment: fufillment_1.default,
    generic_file: generic_file_1.default,
    gift_card: gift_card_1.default,
    group: group_1.default,
    image: image_1.default,
    image_presentation: image_presentation_1.default,
    line_item: line_item_1.default,
    link: link_1.default,
    linklist: linklist_1.default,
    localization: localization_1.default,
    product: product_1.default,
};
function activate(context) {
    const keys = Object.keys(liquidObjects);
    /* Use the key names to loop through and assign the CompletionItems */
    keys.forEach((key) => {
        const liquidObject = vscode.languages.registerCompletionItemProvider("liquid", {
            provideCompletionItems(document, position, token, context) {
                const properties = liquidObjects[key];
                const string = properties.toString();
                const snippetCompletion = new vscode.CompletionItem(key);
                snippetCompletion.insertText = new vscode.SnippetString(`${key}.\${1|${properties}|}`);
                return [snippetCompletion];
            },
        });
        context.subscriptions.push(liquidObject);
    });
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map