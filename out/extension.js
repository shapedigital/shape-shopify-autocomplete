"use strict";
/*
reference:
https://code.visualstudio.com/api/references/vscode-api#languages.registerCompletionItemProvider
https://github.com/microsoft/vscode-extension-samples/blob/main/completions-sample/src/extension.ts
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
/* This is gross and could do with DRY'ing up. Works okay as POC. */
const vscode = require("vscode");
const article_1 = require("./objects/article");
const collection_1 = require("./objects/collection");
const product_1 = require("./objects/product");
function activate(context) {
    const articleObject = vscode.languages.registerCompletionItemProvider('liquid', {
        provideCompletionItems(document, position, token, context) {
            const properties = article_1.default;
            const string = properties.toString();
            const snippetCompletion = new vscode.CompletionItem('article');
            snippetCompletion.insertText = new vscode.SnippetString(`article.\${1|${properties}|}`);
            return [
                snippetCompletion
            ];
        }
    });
    const collectionObject = vscode.languages.registerCompletionItemProvider('liquid', {
        provideCompletionItems(document, position, token, context) {
            const properties = collection_1.default;
            const string = properties.toString();
            const snippetCompletion = new vscode.CompletionItem('collection');
            snippetCompletion.insertText = new vscode.SnippetString(`collection.\${1|${properties}|}`);
            return [
                snippetCompletion
            ];
        }
    });
    const productObject = vscode.languages.registerCompletionItemProvider('liquid', {
        provideCompletionItems(document, position, token, context) {
            const properties = product_1.default;
            const string = properties.toString();
            const snippetCompletion = new vscode.CompletionItem('product');
            snippetCompletion.insertText = new vscode.SnippetString(`product.\${1|${properties}|}`);
            return [
                snippetCompletion
            ];
        }
    });
    context.subscriptions.push(articleObject, collectionObject, productObject);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map