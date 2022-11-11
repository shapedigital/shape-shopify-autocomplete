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
const companyAddress_1 = require("./objects/companyAddress");
const companyLocation_1 = require("./objects/companyLocation");
const country_1 = require("./objects/country");
const currency_1 = require("./objects/currency");
const customer_1 = require("./objects/customer");
const discountAllocation_1 = require("./objects/discountAllocation");
const discountApplication_1 = require("./objects/discountApplication");
const externalVideo_1 = require("./objects/externalVideo");
const filter_1 = require("./objects/filter");
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
    companyAddress: companyAddress_1.default,
    companyLocation: companyLocation_1.default,
    country: country_1.default,
    currency: currency_1.default,
    customer: customer_1.default,
    discountAllocation: discountAllocation_1.default,
    discountApplication: discountApplication_1.default,
    externalVideo: externalVideo_1.default,
    filter: filter_1.default,
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