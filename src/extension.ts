/*
reference: https://code.visualstudio.com/api/references/vscode-api#languages.registerCompletionItemProvider
*/

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const productObject = vscode.languages.registerCompletionItemProvider('liquid', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			const properties = [
				'available',
				'collections',
				'compare_at_price',
				'compare_at_price_max',
				'compare_at_price_min',
				'compare_at_price_varies',
				'content',
				'created_at',
				'description',
				'featured_image',
				'featured_media',
				'first_available_variant',
				'gift_card',
				'handle',
				'has_only_default_variant',
				'id',
				'images',
				'media',
				'metafields',
				'options',
				'options_by_name',
				'options_with_values',
				'price',
				'price_max',
				'price_min',
				'price_varies',
				'published_at',
				'requires_selling_plan',
				'selected_or_first_available_variant',
				'selected_selling_plan',
				'selected_selling_plan_allocation',
				'selected_variant',
				'selling_plan_groups',
				'tags',
				'template_suffix',
				'title',
				'type',
			];

			const string = properties.toString();

			const snippetCompletion = new vscode.CompletionItem('product');
			snippetCompletion.insertText = new vscode.SnippetString(`product.\${1|${properties}|}`);

			return [
				snippetCompletion
			];
		}
	});



	context.subscriptions.push(productObject);
}
