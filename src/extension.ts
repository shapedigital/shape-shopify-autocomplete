/*
References: 
https://code.visualstudio.com/api/references/vscode-api#languages.registerCompletionItemProvider
https://github.com/microsoft/vscode-extension-samples/blob/main/completions-sample/src/extension.ts
https://shopify.dev/api/liquid/objects
*/

import * as vscode from 'vscode';

import address from './objects/address';
import article from './objects/article';
import cart from './objects/cart';
import collection from './objects/collection';
import product from './objects/product';

const liquidObjects = {
	'address': address,
	'article': article,
	'cart': cart,
	'collection': collection,
	'product': product
};

export function activate(context: vscode.ExtensionContext) {

	const keys = Object.keys(liquidObjects);

	/* Use the key names to loop through and assign the CompletionItems */
	keys.forEach(key => {

		const liquidObject = vscode.languages.registerCompletionItemProvider('liquid', {

			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
	
				const properties = liquidObjects[key as keyof typeof liquidObjects];
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
