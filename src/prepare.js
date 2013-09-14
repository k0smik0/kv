/*
Copyleft 2013 Massimiliano Leone - maximilianus@gmail.com .

prepare.js is part of 'kv'.

'kv' is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 3 of the License, or
(at your option) any later version.

'kv' is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU General Public License
along with 'kv'; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301 USA
*/

// this part is for the form field hints to display
// only on the condition that the text input has focus.
// otherwise, it stays hidden.

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

function prepareInputsForHints() {
	var inputs = document.getElementsByTagName("input");
	for (var i=0; i<inputs.length; i++){
		inputs[i].onfocus = function () {
		  this.parentNode.getElementsByTagName("span")[0].style.display = "inline";
		}
		inputs[i].onblur = function () {
		  this.parentNode.getElementsByTagName("span")[0].style.display = "none";
		}
	}
}
//addLoadEvent(prepareInputsForHints);

