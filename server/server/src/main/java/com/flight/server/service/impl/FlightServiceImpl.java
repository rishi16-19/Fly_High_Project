package com.flight.server.service.impl;

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
