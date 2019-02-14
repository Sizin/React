This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## React
Discovering react



### Prerequired
NodeJS
NPM v6.7.0
  sudo apt install npm
IDE Front: VSCode, Sublime Text, ...


### Général

REACT = React.js = Reactjs
Developped by Facebook
JavaScript libraries
Single page application
Using components

### Component

Declaration :

```
import React, { Component } from 'react';

class MyComponent extends Component {
	render(){
		return(
			<span>{this.props.text}</span>
		)
	}
}
```

Usage : 

```
<MyComponent text="Hello"/>
```

### Props

Props are arugments provided by the calling component.
They are similar to HTML tags but are personalizable

```
<MyComponent 
    text="Hello" 
    data={["Sinan", "nanis", "World"]} 
    component={MyComponent2}
/>
```

Here we can add as many parameters we want, even arrays

### State

Initialization: 

State is the current state of the component.
It can only be modified by the component itself.
A state change result in calling render() method seen eralier

```
class MyComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "Sinan" };
}
```

```
class MyComponent extends Component {
		state = {
			name:"Raca"		
		}

		render() {
			return(<span> Hello {this.state.name} </span> )		
		}
	}
}
```

Modification:

```
class MyComponent extends Component {
	componentChange(){
		this.setState({data: [{id: 0}, {id: 1}]})
	}
}
```

### Variables
 
*let*: Scope : Block 	Reassignable : No
*const*:	Scope : Block 	Reassignable : No
*var*: 	Scope : Function 	Reassignable : Yes


### Truthy/Falsy

All elements can be casted into a boolen

Rules on logical operation :
false : false, 0, "", null, undefinded, NaN
(undefined is a var that points nothin, not even null)
true : The rest

### Condition Structure

```
<div>
    { false && <MyComponent/>}
</div>

<div>
    <MyComponent/>
</div>
```

```
let data = this.props.data || []

<MyComponent data={[{id : 1}, {id :2}]}/>

data = [{id : 1}, {id :2}]
```

```
<div>
    {false 
        ? <MyComponent/>
        : this.props.data[0].id
    }
</div>

<div>
   1
</div>
```


### Loops

For loops:

```
for(const interator of object) { ... }

for(let index = 0; index < limit; index++){ ... }
```

Array loops:

```
array.map(item => { ... }) : List<Any>

array.map(item => {
    return <div key={item.id}>{item.name}</div>
})
```

### Functions

```
const myFunction = function(...args)(: ReturnType) { ... }

myFunction(...args){ ... }

myFunction = (...args) => { ... }
```
JavaScript allows us to use functions that returns function

```myFunction = (...args) => (...args) => { ... }

const myFunction = function(...args)(: ReturnType) { function(...args) { ... } }
```


### Binding

```
myObj.method()

const myMethod = myObj.method
myMethod()
```


Those two method calls are different
In the first case method() is called on myObj
In the second case, it is called on this

### Installation

    NPM : sudo apt install npm
    NPX : sudo npm i -g npm
    npx create-react-app <nom du projet>
    cd <nom du projet> ; npm start

### Step 1

    Installation de reactstrap:
        npm install bootstrap --save   #to install bootstrap
        npm install --save reactstrap react react-dom
    Ajouter dans le fichier index.js :
        import 'bootstrap/dist/css/bootstrap.min.css';
    Récupérer le mock des données sur le dépôt Git


### Life cycle 

http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

### React-md

https://github.com/mlaursen/react-md/tree/64077b92d42c65bfcf140a37d9eb403bb581dc73/examples/with-create-react-app

