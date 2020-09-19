///*eslint-env browser*/ ---> that annoying document not defined error

function createElement(tagName, attributes, content){
	var _element = document.createElement(tagName);
	
	for (var key in attributes){
		_element.setAttribute(key, attributes[key]);
	}
	
//	if (Array.isArray(content)){
//		for (var i=0; content.length; i++){
//			_element.appendChild(content[i]);
//		}
//	}
	if(typeof content !== "undefined"){
		if (content instanceof HTMLElement){
				_element.appendChild(content);
		} else {
				_element.innerText = content;
		}
	}
//	if(typeof content !== "undefined"){
//		
//	}
	
	return _element;
}