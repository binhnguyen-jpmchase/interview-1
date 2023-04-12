# INTRO

We have created a basic project for you which consist of:

- public/index.html - main HTML file for the project.
- src/sytles.css - basic CSS file that is imported into the index.html
- src/index.js - main javascript (that consist also the basic react logic).

The aim for this excerise is to complete below challenges.

# CHALLENGES

## Challenge 1

Looks like the application is currently not compiling, could you please resolve the 'Invariant Violation' error.

## Challenge 2

Please update the header component in components/header.js to output/render a <header>Welcome to JPMC!</header> HTML node.

> Note: Your index.js already has the placeholder import as well as component reference, for it.

## Challenge 3

Please update the page styles to make the header and .App container center aligned and in 'Verdana' font.

## Challenge 4

We have a basic JS object located in index.js called transactionsData. Please convert this Object into dynamically generated unordered (ul) list that will display individual transaction items such as example below:

```html
<ul>
  <li>
    <span>[dynamic transaction name]</span>
    <span>[dynamic transaction amount]</span>
  </li>
  <li>
    <span>[dynamic transaction name]</span>
    <span>[dynamic transaction amount]</span>
  </li>
</ul>
```

## Challenge 5

### 5.1 Seems like increment button does not work. Please fix it.

### 5.2 Looks like our custom component (<Item prop={data} />) is currently not displaying please fix it.

### 5.3 Looks like our props are not displaying, please correct it so our "Welcome to JPMC!" appears correctly on the screen from within the <Item prop={data} />.

## Challenge 6

### 6.1 Create 'delete' experience whereby your list contains a button that will delete the transaction and pushes into archived transaction array (archived) (src/index.js).

### 6.2 Display the archived as a seperate component that dynamically renders the data.

## Challenge 7

Refactor your code to pass all the provided Unit tests.
