/*
References: 
https://code.visualstudio.com/api/references/vscode-api#languages.registerCompletionItemProvider
https://github.com/microsoft/vscode-extension-samples/blob/main/completions-sample/src/extension.ts
https://shopify.dev/api/liquid/objects
*/

import * as vscode from "vscode";

import address from "./objects/address";
import article from "./objects/article";
import block from "./objects/block";
import blog from "./objects/blog";
import cart from "./objects/cart";
import collection from "./objects/collection";
import color from "./objects/color";
import comment from "./objects/comment";
import company from "./objects/company";
import companyAddress from "./objects/companyAddress";
import companyLocation from "./objects/companyLocation";
import country from "./objects/country";
import currency from "./objects/currency";
import customer from "./objects/customer";
import discountAllocation from "./objects/discountAllocation";
import discountApplication from "./objects/discountApplication";
import externalVideo from "./objects/externalVideo";
import filter from "./objects/filter";
import product from "./objects/product";

const liquidObjects = {
  address: address,
  article: article,
  block: block,
  blog: blog,
  cart: cart,
  collection: collection,
  color: color,
  comment: comment,
  companyAddress: companyAddress,
  companyLocation: companyLocation,
  country: country,
  currency: currency,
  customer: customer,
  discountAllocation: discountAllocation,
  discountApplication: discountApplication,
  externalVideo: externalVideo,
  filter: filter,
  product: product,
};

export function activate(context: vscode.ExtensionContext) {
  const keys = Object.keys(liquidObjects);

  /* Use the key names to loop through and assign the CompletionItems */
  keys.forEach((key) => {
    const liquidObject = vscode.languages.registerCompletionItemProvider(
      "liquid",
      {
        provideCompletionItems(
          document: vscode.TextDocument,
          position: vscode.Position,
          token: vscode.CancellationToken,
          context: vscode.CompletionContext
        ) {
          const properties = liquidObjects[key as keyof typeof liquidObjects];
          const string = properties.toString();

          const snippetCompletion = new vscode.CompletionItem(key);
          snippetCompletion.insertText = new vscode.SnippetString(
            `${key}.\${1|${properties}|}`
          );

          return [snippetCompletion];
        },
      }
    );

    context.subscriptions.push(liquidObject);
  });
}
