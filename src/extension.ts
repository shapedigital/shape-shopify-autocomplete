/*
reference: 
https://code.visualstudio.com/api/references/vscode-api#languages.registerCompletionItemProvider
https://github.com/microsoft/vscode-extension-samples/blob/main/completions-sample/src/extension.ts
*/

/* This is gross and could do with DRY'ing up. Works okay as POC. */

import * as vscode from 'vscode';

import product from './objects/product';
import collection from './objects/collection';

export function activate(context: vscode.ExtensionContext) {

	const productObject = vscode.languages.registerCompletionItemProvider('liquid', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			const properties = product;
			const string = properties.toString();

			const snippetCompletion = new vscode.CompletionItem('product');
			snippetCompletion.insertText = new vscode.SnippetString(`product.\${1|${properties}|}`);

			return [
				snippetCompletion
			];
		}
	});

	const collectionObject = vscode.languages.registerCompletionItemProvider('liquid', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			const properties = collection;
			const string = properties.toString();

			const snippetCompletion = new vscode.CompletionItem('collection');
			snippetCompletion.insertText = new vscode.SnippetString(`collection.\${1|${properties}|}`);

			return [
				snippetCompletion
			];
		}
	});

	context.subscriptions.push(productObject, collectionObject);
}
