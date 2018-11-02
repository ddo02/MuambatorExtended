var url = window.location.href;

// PO123456789BR
var regExp = /[a-zA-Z]{2}\d{9}[a-zA-Z]{2}/;
var rast = regExp.exec(url);

if(rast != null) {
	
	var codeCol = $(".pacote-header");
	
	$(`<form style="display:inline" method="POST" target="_blank" action="https://www2.correios.com.br/sistemas/rastreamento/resultado_semcontent.cfm">
		<input type="hidden" name="Objetos" value="` + rast + `">
		<input class="icone-categoria" style="margin-bottom:-5px" type="image" value=" " src=` + chrome.extension.getURL("img/correios_icon.jpg") + `>
	</form>`).prependTo(codeCol);
}
