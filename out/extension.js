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
const cart_1 = require("./objects/cart");
const collection_1 = require("./objects/collection");
const product_1 = require("./objects/product");
const liquidObjects = {
    'address': address_1.default,
    'article': article_1.default,
    'cart': cart_1.default,
    'collection': collection_1.default,
    'product': product_1.default
};
function activate(context) {
    const keys = Object.keys(liquidObjects);
    /* Use the key names to loop through and assign the CompletionItems */
    keys.forEach(key => {
        const liquidObject = vscode.languages.registerCompletionItemProvider('liquid', {
            provideCompletionItems(document, position, token, context) {
                const properties = liquidObjects[key];
                const string = properties.toString();
                const snippetCompletion = new vscode.CompletionItem(key);
                snippetCompletion.insertText = new vscode.SnippetString(`${key}.\${1|${properties}|}`);
                return [
                    snippetCompletion
                ];
            }
        });
        context.subscriptions.push(liquidObject);
    });
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map