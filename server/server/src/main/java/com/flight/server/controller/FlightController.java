package com.flight.server.controller;

import java.text.ParseException;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.flight.server.entity.Flight;
import com.flight.server.repo.FlightRepo;
import com.flight.server.service.FlightService;

@RestController
@CrossOrigin("*")
public class FlightController {
	
	
	
	
	Logger logger = LoggerFactory.getLogger(FlightController.class);
	
	@Autowired
	FlightService flightService;
	
	
	@GetMapping("/flight")
	List<Flight> getAllFlights(){
		logger.info("inside method");
		return flightService.getAllFlights();
	}
	
	@PostMapping("/flight")
	void saveFlight(@RequestBody Flight flight) {
		flightService.save(flight);
	}
	
	@GetMapping("/flight/{src_code}/{dest_code}")
	List<List<Flight>> getSourceFlights(@PathVariable String src_code,@PathVariable String dest_code){
		logger.info(src_code+" "+dest_code);
		List<Flight> directFlight=flightService.getSourceAndDestFlights(src_code, dest_code);
		List<List<Flight>> allFlights= flightService.getOneStopFlights(src_code,dest_code);
		
		allFlights.add(directFlight);
		return allFlights;
	
	}
	
	
	@GetMapping("flight/{src_code}/{dest_code}/{date}")
	List<List<Flight>> getSourceAndDestAndDateFlights(@PathVariable String src_code,@PathVariable String dest_code
			,@PathVariable int date){
		
		logger.info("Inside the get mapping of src and dates");
		
		List<Flight> directFlight=flightService.getSourceAndDestAndDateFlights(src_code, dest_code,date);
		List<List<Flight>> allFlights= flightService.getOneStopFlights(src_code,dest_code,date);
		
		allFlights.add(directFlight);
		return allFlights;
	}
	
	@GetMapping("/flight/{date}")
	List<Flight> getSourceFlights(@PathVariable int date){
		return flightService.getDateFlights(date);
	}
	
	@GetMapping("flight/{src_code}/{dest_code}/{date}/{time}")
	List<Flight> getSourceAndDateAndTimeFlights(@PathVariable String src_code,@PathVariable String dest_code
			,@PathVariable int date, @PathVariable String time) throws ParseException{
		
		LocalTime timemilli = LocalTime.parse(time);
        
        // Calculate milliseconds since the start of the day
        long epoch = timemilli.toSecondOfDay();
		
//		long epoch = new java.text.SimpleDateFormat("HH:mm:ss").parse(time).getTime() / 1000;
		
		logger.info("Inside the get mapping of src and dates "+epoch);
		
		return flightService.getSourceAndDestAndDateAndTimeFlights(src_code,dest_code, date,epoch);
	}
	
	
	
}
