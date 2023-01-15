# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Terminal
The terminal used in this lambda interpreter is built using the folowing template [Terminal](https://www.npmjs.com/package/react-terminal)

Note: Currenty, copy-paste in firefox browser is not supported by the Terminal. (You may use chrome or other browser if you want to use copy-paste function)

# Link
This Lambda Interperet is deployed on [railway](https://railway.app/).

Lambda interpreter [link](https://lambdainterpreterfrontend-production-42ea.up.railway.app/)

# Lambda Evaluation Process
Want to know more how evaluation is done? [link](https://github.com/aaaa-qw/lambda_interpreter_backend)

# Lambda Interpreter Guides

## Available Commands

* help <br/>
show all available commands in lambda calculus interpreter

* clear <br/>
clear terminal output

* show <br/>
show all variables that is saved in session storage

* del [VARIABLE_NAME] <br/>
delete [VARIABLE_NAME] from session storage

* clearall <br/>
delete all variables

* eval [LAMBDA_EXPRESSION] <br/>
evaluate [LAMBDA_EXPRESSION]

* define [VARIABLE_NAME] [LAMBDA_EXPRESSION] <br/>
bind [VARIABLE_NAME] to [LAMBDA_EXPRESSION]

## [LAMBDA_EXPRESSION]
Inside [LAMBDA_EXPRESSION] you can define lambda function and/or variable.

example:

* (lambda a.a b) c
* gh (\ab cd.ab def) cd

## [VARIABLE_NAME]
[VARIABLE_NAME] in this lambda interpreter has the following format:

> [a-zA-Z][a-zA-Z0-9]*
>

You need to start [VARIABLE_NAME] using a letter followed by letter(s) and/or digit(s)

example:
* z
* aacsj12
* Aba12

## Lambda function
You can create a lambda function using the following format:

> (lambda [parameter list] . [function body]) 
>
or
> (\ [parameter list] . [function body])

Note: don't forget the parenthesis to avoid unexpected evaluation

### [parameter list]
You need to at least defined one variable in parameter list

### [function body]
You can define another lambda expression and/or lambda function inside [function body]

Example:

*   (lambda a b.a b)

    Lambda function with parameter **a** and **b**, function body **a b**. You can also define the above lambda function as:

    > (\a b.a b)

*   (\a b.a (\c d.c) b)   

    Lambda function with another function in its function body


## How to define variable
In this lambda calculus interpreter thera are 2 type of variables: bounded and unbounded. 

* Unbounded variable is a variable that is not defined in function parameter/define using **define [VARIABLE_NAME] [LAMBDA_EXPRESSION]** command.

    example: <code>(lambda a b.a c d)</code>
    
    on the above expression c and d is unbounded variable.

* bounded variable is a variable that already defined in function parameter or define using **define [VARIABLE_NAME] [LAMBDA_EXPRESSION]** command.

    in previous example a (inside function body) is bounded variable because a is already defined in function paremeter.

**TIPS**: to avoid unexpected substitution use different format for bounded variable defined using **define command** and bounded variable because variable is alredy defined in parameter list. 

example:
*   **CamelCase** for bounded variable defined using **define command**
*   **camelCase** for unbounded variable and bounded variable defined using function parameters.

# React Guide

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

This lambda interpreter is deployed using [railway](https://railway.app/)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# License
Distributed under the MIT License. See [LICENSE](https://github.com/aaaa-qw/lambda_interpreter_frontend/blob/master/LICENSE) for more information.
