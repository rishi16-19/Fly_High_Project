package com.flight.server.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.flight.server.entity.Flight;

@Repository
public interface FlightRepo extends MongoRepository<Flight, Integer> {

}
