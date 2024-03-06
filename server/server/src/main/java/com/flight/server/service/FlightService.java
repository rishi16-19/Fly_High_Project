package com.flight.server.service;

import java.util.List;

import org.bson.BsonTimestamp;

import com.flight.server.entity.Flight;

public interface FlightService {
	
	List<Flight> getAllFlights();
	void save(Flight flight);
	public List<List<Flight>> getOneStopFlights(String src_code, String dest_code);
	List<Flight> getSourceFlights(String src_code);
	List<Flight> getSourceAndDestFlights(String src_code,String dest_code);
	List<Flight> getSourceAndDestAndDateFlights(String src_code,String dest_code,int date);
	List<Flight> getDateFlights(int date);
	List<Flight> getSourceAndDestAndDateAndTimeFlights(String src_code,String dest_code,int date,long time);
	

}
