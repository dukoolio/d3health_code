package com.d3health.restsvs;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.jdo.PersistenceManager;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;


@Path("/d3healthapi")
public class endpoints {

	private static final Logger LOG = Logger
			.getLogger(endpoints.class.getName());
	
	// The Java method will process HTTP GET requests
	@GET
	// The Java method will produce content identified by the MIME Media
	// type "text/plain"
	@Produces("text/plain")
	@Path("/helloworld")
	public String getClichedMessage() {
		LOG.log(Level.INFO,
				"Logger Called");
		//http://127.0.0.1:8888/resources/d3healthapi/helloworld
		// Return some cliched textual content
		return "Hello World, ";
	}
	

}
