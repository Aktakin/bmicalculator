var akt = document.getElementById('hello')
var hi = document.getElementsByClassName('hi')[0]
var jk = document.getElementsByTagName('p')[0]

jk.innerHTML = 'A random text'
jk.style.cssText = 'color:red'
hi.innerHTML = 'goodbye'
hi.style.cssText = 'color:blue'
akt.style.cssText = 'color:red; font-size: 60px; text-transform: uppercase'