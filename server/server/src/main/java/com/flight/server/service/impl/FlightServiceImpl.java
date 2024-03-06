package com.flight.server.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.bson.BsonTimestamp;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.flight.server.controller.FlightController;
import com.flight.server.entity.Flight;
import com.flight.server.repo.FlightRepo;
import com.flight.server.service.FlightService;

@Service
public class FlightServiceImpl implements FlightService {
	
	Logger logger = LoggerFactory.getLogger(FlightController.class);
	
	@Autowired
	FlightRepo flightRepo;
	
	private final MongoTemplate mongoTemplate;

    @Autowired
    public FlightServiceImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

	@Override
	public List<Flight> getAllFlights() {
		return flightRepo.findAll();
	}

	@Override
	public void save(Flight flight) {
		flightRepo.save(flight);
	}

	@Override
	 public List<Flight> getSourceFlights(String src_code) {
        Query query = new Query();
        query.addCriteria(Criteria.where("src_code").is(src_code));
        List<Flight> flights = null;
        try {
            flights = mongoTemplate.find(query, Flight.class);
        } catch (Exception e) {
            // Handle the exception as per your requirement
            e.printStackTrace();
        }
        return flights;
    }

	@Override
	public List<Flight> getSourceAndDestAndDateFlights(String src_code,String dest_code, int date) {
		Query query = new Query();
		
		logger.info(src_code+" "+date);
		
		query.addCriteria(Criteria.where("src_code").is(src_code)
				.and("dest_code").is(dest_code)
				.and("date").is(date));
		List<Flight> flights = null;
        try {
            flights = mongoTemplate.find(query, Flight.class);
        } catch (Exception e) {
            // Handle the exception as per your requirement
            e.printStackTrace();
        }
        return flights;
	}

	@Override
	public List<Flight> getDateFlights(int date) {
		Query query = new Query();
        query.addCriteria(Criteria.where("date").is(date));
        List<Flight> flights = null;
        try {
            flights = mongoTemplate.find(query, Flight.class);
        } catch (Exception e) {
            // Handle the exception as per your requirement
            e.printStackTrace();
        }
        return flights;
	}

//	@Override
//	public List<Flight> getSourceAndDestAndDateAndTimeFlights(String src_code, String dest_code, int date, long time) {
//		Query query = new Query();
//	    
//	    logger.info(src_code + " " + date + " " + time);
//
//	    // Add criteria for src_code, date, and time greater than or equal to the specified time
//	    query.addCriteria(Criteria.where("src_code").is(src_code)
//	            .and("date").is(date)
//	            .and("src_time").gte(time)); // Assuming you want to filter based on src_time
//
//	    List<Flight> flights = null;
//	    try {
//	        flights = mongoTemplate.find(query, Flight.class);
//	    } catch (Exception e) {
//	        // Handle the exception as per your requirement
//	        e.printStackTrace();
//	    }
//	    return flights;
//	}

	@Override
	public List<Flight> getSourceAndDestFlights(String src_code, String dest_code) {
		
		Query query = new Query();
		
		logger.info(src_code+" "+dest_code);
		
		query.addCriteria(Criteria.where("src_code").is(src_code)
				.and("dest_code").is(dest_code));
		List<Flight> flights = null;
        try {
            flights = mongoTemplate.find(query, Flight.class);
        } catch (Exception e) {
            // Handle the exception as per your requirement
            e.printStackTrace();
        }
        
        
        return flights;
		
	}
	
	@Override
	public List<List<Flight>> getOneStopFlights(String src_code, String dest_code,int date) {
	    List<List<Flight>> oneStopFlights = new ArrayList<>();

	    // Find all flights leaving from src_code
	    Query querySrc = new Query();
	    querySrc.addCriteria(Criteria.where("src_code").is(src_code)
	    		.and("date").is(date));
	    List<Flight> sourceFlights = mongoTemplate.find(querySrc, Flight.class);

	    // Find all flights going to dest_code
	    Query queryDest = new Query();
	    queryDest.addCriteria(Criteria.where("dest_code").is(dest_code)
	    		.and("date").is(date));
	    List<Flight> destinationFlights = mongoTemplate.find(queryDest, Flight.class);

	    // Loop through all source flights and destination flights to find matching one-stop flights
	    for (Flight srcFlight : sourceFlights) {
	        for (Flight destFlight : destinationFlights) {
	            // Check if the destination of the first flight matches the source of the second
	            // And if the arrival time of the first is before the departure of the second
	            if (srcFlight.getDestCode().equals(destFlight.getSrcCode()) && srcFlight.getDestTime().compareTo(destFlight.getSrcTime()) < 0 && srcFlight.getDate()==destFlight.getDate()) {
	                List<Flight> oneStopFlightPair = new ArrayList<>();
	                
	                logger.info(srcFlight.toString()+"  "+destFlight.toString());
	                
	                oneStopFlightPair.add(srcFlight);
	                oneStopFlightPair.add(destFlight);
	                oneStopFlights.add(oneStopFlightPair);
	            }
	        }
	    }

	    return oneStopFlights;
	}


	@Override
	public List<Flight> getSourceAndDestAndDateAndTimeFlights(String src_code, String dest_code, int date, long time) {
		Query query = new Query();
	    
	    logger.info(src_code + " " + dest_code+" "+date + " " + time);

	    // Add criteria for src_code, date, and time greater than or equal to the specified time
	    query.addCriteria(Criteria.where("src_code").is(src_code)
	    		.and("dest_code").is(dest_code)
	            .and("date").is(date)
	            .and("src_time").gte(time)); // Assuming you want to filter based on src_time

	    List<Flight> flights = null;
	    try {
	        flights = mongoTemplate.find(query, Flight.class);
	    } catch (Exception e) {
	        // Handle the exception as per your requirement
	        e.printStackTrace();
	    }
	    return flights;

	}


}
