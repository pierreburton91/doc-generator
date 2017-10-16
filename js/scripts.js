var textarea = document.querySelector('#exported'),
	exportContainer = document.querySelector('.export-container'),
	closeModal = document.querySelector('.modal__button'),
	simplemde = new SimpleMDE({
	autofocus: true,
	spellChecker: false,
	toolbar: ["bold", "italic", "heading", "|", "quote", "unordered-list", "ordered-list", "|", "link", "image", "table", "|", {
		name: "Export",
		action: function exportContent(editor) {
			var preview = document.querySelector("[class^='editor-preview']"),
				content = preview.innerHTML;
			if (!content) {
				var snackbar = document.createElement("div"),
		    		snackText = document.createTextNode("Veuillez d'abord encoder du contenu.");
		    	snackbar.classList.add("snackbar");
		    	snackbar.appendChild(snackText);
				document.querySelector('body').appendChild(snackbar);
				setTimeout(function() {document.querySelector('body').removeChild(snackbar)}, 2200);
			}
			else {
				exportContainer.style.display = "block";
				textarea.value = content;
			}
		},
		className: "fa fa-clipboard export",
		title: "Export",
	}, "|", "guide", "preview", "side-by-side", "fullscreen"]}).toggleSideBySide();

closeModal.addEventListener('click', function() {
	exportContainer.style.display = "none";
});

var previewIcon = document.querySelector('.fa-eye'),
	sideBySideIcon = document.querySelector('.fa-columns'),
	fullscreenIcon = document.querySelector('.fa-arrows-alt'),
	windowControls = [previewIcon, sideBySideIcon, fullscreenIcon];

windowControls.forEach(function(button) {
	button.classList.add("hide");
});

var toolbar = document.querySelector(".editor-toolbar"),
	node = document.createElement("h1"),
	textnode = document.createTextNode("Doc Generator");

node.appendChild(textnode);
toolbar.appendChild(node);