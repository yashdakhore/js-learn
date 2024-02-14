# Projects Related to DOM

## Project Link

[Click Here](https://stackblitz.com/~/github.com/yashdakhore/dom-project-Learningjavascript-usgpbm)

## Project 1

``` javascript 
console.log("Yash")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'bule'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    // if(e.target.id === 'purple'){
    //   body.style.backgroundColor = e.target.id;
    // }
    
  })
});
```