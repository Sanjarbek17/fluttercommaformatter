import { ExtensionContext, SnippetString, commands, window } from "vscode";
import { getSelectedText } from "./getSelectedText"; // Adjust the import path as needed

const interpolatedVarRegExp = /[\{\}\(\)]/g;

export function activate(context: ExtensionContext) {
  console.log("Extension is now active.");

  let disposable = commands.registerCommand("extension.processSelectedWidget", async () => {
    const editor = window.activeTextEditor;

    if (!editor) {
      return;
    }

    const selection = getSelectedText(editor);

    // Do something with the selected text range
    const text = editor.document.getText(selection);
    const hasComma = /,\s*[\)}]$/.test(text);
    
    let widget = text;
    if (hasComma) {
      widget = text.replace(/,\s*\)$/, ')').replace(/,\s*}$/, '}');


    } else {
      const lastParenthesisIndex = text.lastIndexOf(')');
      widget =
        text.slice(0, lastParenthesisIndex) +
        ',' +
        text.slice(lastParenthesisIndex);
    }
    if (text.length <= 1 || !interpolatedVarRegExp.test(text)) {
      return;
    }
    editor.insertSnippet(new SnippetString('$1' + widget), selection);
    await commands.executeCommand("editor.action.formatDocument");
  });

  context.subscriptions.push(disposable);
}

export function deactivate() { }
