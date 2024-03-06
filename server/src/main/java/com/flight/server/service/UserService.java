package com.flight.server.service;

import java.util.List;

import com.flight.server.entity.User;


public interface UserService {
	List<User> findAll();
	boolean authenticateUser(User user);
	User findById(int id);
	void save(User user);
	void put(User user);
	void deleteById(int id);
	
}
