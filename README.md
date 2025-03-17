# fluttercommaformatter README

This is Flutter comma formatter extension for Visual Studio Code. It will format your code with comma at the end of each line.

This Flutter comma formatter extension is for widgets or maps by checking for trailing commas inside closing parentheses ) or curly braces }. It performs two main tasks:

Removing Trailing Comma: If there is an unnecessary comma right before the closing parenthesis or curly brace, the function removes it. This helps avoid formatting issues where commas should not be present, like in single-line widget declarations or small maps.

Adding Trailing Comma: If a closing parenthesis ) or curly brace } does not have a comma before it (in cases where Flutter style encourages it, such as for better readability in multi-line code), the function adds a comma.

Reformatting the Code: After adding or removing the comma, the function re-formats the code to adhere to Flutter's formatting conventions. This is especially useful in cases where adding a trailing comma leads to better formatting, as Flutter automatically adds proper indentation and line breaks when commas are present in multi-line widgets.

## Features

This extension formats your code with comma at the end of each function call. It works only these brackets `()` , `{}` for now.

This function helps you automatically remove or add commas and format your Flutter code.

# Steps to Use:
* Place your cursor on:

> The function name (e.g., Column, Row), or Right before the opening bracket (( or {).

# Use the shortcut:

* Ctrl + I

The function will:

> Remove unnecessary commas before ) or }. Add missing commas in multi-line code. Format your code to match Flutter's style.

## Requirements

There is no requirements for this extension.

## Extension Settings

None

## Known Issues

There is no known issues for this extension. If you find any issues please report it on [Github](https://github.com/Sanjarbek17/fluttercommaformatter)

### 1.0.0

Initial release of fluttercommaformatter


**Enjoy!**
