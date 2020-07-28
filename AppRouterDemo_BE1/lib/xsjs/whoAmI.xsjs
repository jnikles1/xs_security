/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
/*eslint-env node, es6 */
var connection = $.hdb.getConnection();

var query = `SELECT CURRENT_USER 
					FROM "DUMMY"`;
var rs = connection.executeQuery(query);
var currentUser = rs[0].CURRENT_USER;

query = `SELECT SESSION_CONTEXT('XS_CLIENT') "CLIENT" 
                FROM "DUMMY"`;
rs = connection.executeQuery(query);
var xsclient = rs[0].CLIENT;
query = `SELECT SESSION_CONTEXT('XS_COUNTRY') "COUNTRY" 
                FROM "DUMMY"`;
rs = connection.executeQuery(query);
var xscountry = rs[0].COUNTRY;


var greeting =
	`XS Layer Session User: ${$.session.getUsername()}
    </br>Database Current User: ${currentUser} 
    </br> Client: ${xsclient}
    </br> Country: ${xscountry}`;

$.response.contentType = "text/html; charset=utf-8";
$.response.setBody(greeting);