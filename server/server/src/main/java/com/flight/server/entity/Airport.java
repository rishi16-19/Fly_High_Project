package com.flight.server.entity;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document
public class Airport {
	
	@Field("src_code")
	String srcCode;
	
	@Field("src_name")
	String srcName;
	
}
