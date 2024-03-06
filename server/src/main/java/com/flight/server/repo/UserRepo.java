package com.flight.server.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.flight.server.entity.User;


@Repository
public interface UserRepo extends MongoRepository<User, Integer> {
	User findByUsername(String username);
}
