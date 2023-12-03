export default function printMe() {
  console.log('I get called from print.js!');
  const hello = document.querySelector('h1')
  hello.classList.add('hello')
}