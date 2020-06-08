const NK = require( "nk-node" );
const DB = "IPs";

NK.xpr.load();

NK.xpr.add( "get", "/user/:id", ( res, ip, requestedDATA, cookieOrSession, filesPosted, hostname ) => {
	//the res item is the same as always
	//ip is the Source IP of the request
	//requestedDATA is the paramaters, already formatted, in the request, in this example you can use requestedDATA.id the data is auto formatted to an object regardless or source
	//cookieOrSession is the object of the cookie or override session function
	//filesPosted is the object of the files posted from the request
	//hostname is the name of the host in the request. this is useful when using virtual hosts in the same node core
	if( parseInt( requestedDATA.id ) > 0 ) {
		res.json( { user: "valid" } );
	} else {
		res.status( 400 ).json( { user: "invalid" } );
	}
});

NK.xpr.start( 1443, () => NK.start( DB, null, null, () => {
	console.log( "loaded" );
})); 