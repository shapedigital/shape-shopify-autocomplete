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
import company_address from "./objects/company_address";
import company_location from "./objects/company_location";
import country from "./objects/country";
import currency from "./objects/currency";
import customer from "./objects/customer";
import discount_allocation from "./objects/discount_allocation";
import discount_application from "./objects/discount_application";
import external_video from "./objects/external_video";
import filter from "./objects/filter";
import filter_value from "./objects/filter_value";
import focal_point from "./objects/focal_point";
import font from "./objects/font";
import forloop from "./objects/forloop";
import form from "./objects/form";
import form_errors from "./objects/form_errors";
import fufillment from "./objects/fufillment";
import generic_file from "./objects/generic_file";
import gift_card from "./objects/gift_card";
import group from "./objects/group";
import image from "./objects/image";
import image_presentation from "./objects/image_presentation";
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
  company_address: company_address,
  company_location: company_location,
  country: country,
  currency: currency,
  customer: customer,
  discount_allocation: discount_allocation,
  discount_application: discount_application,
  external_video: external_video,
  filter: filter,
  filter_value: filter_value,
  focal_point: focal_point,
  font: font,
  forloop: forloop,
  form: form,
  form_errors: form_errors,
  fufillment: fufillment,
  generic_file: generic_file,
  gift_card: gift_card,
  group: group,
  image: image,
  image_presentation: image_presentation,

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
