function performMultiply(){
    var body = '';
	var n1 = $.request.parameters.get('num1');
	var n2 = $.request.parameters.get('num2');
	var answer;
	var ans;
	answer = n1 * n2;
	
	body = answer.toString();
	
	$.response.setBody(body);
	$.response.status = $.net.http.OK;
}

var a = $.request.parameters.get('cmd');
switch (a) {
case "multiply":
	performMultiply();
	break;
default:
	$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	$.response.setBody('Invalid Command: '+a);
}
