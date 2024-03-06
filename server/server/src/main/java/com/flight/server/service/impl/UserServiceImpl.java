package com.flight.server.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.flight.server.controller.FlightController;
import com.flight.server.entity.User;
import com.flight.server.repo.UserRepo;
import com.flight.server.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepo userRepo;
	
	Logger logger = LoggerFactory.getLogger(FlightController.class);
	
	@Autowired
    private PasswordEncoder passwordEncoder;

	@Override
	public List<User> findAll() {
		
		return userRepo.findAll();
	}

	@Override
	public User findById(int id) {
		// TODO Auto-generated method stub
		return userRepo.findById(id).get();
	}

	@Override
	public void save(User user) {
		String username=user.getUsername();
		String password=user.getPassword();
		
		logger.info(user.toString());
		
        String encodedPassword = passwordEncoder.encode(password);
        User userEncrypt = new User();
        userEncrypt.setUsername(username);
        userEncrypt.setPassword(encodedPassword);
        userRepo.save(userEncrypt);
    }
	
	
	@Override
	public void put(User user) {
		userRepo.save(user);

	}

	@Override
	public void deleteById(int id) {
		userRepo.deleteById(id);

	}

	@Override
	public boolean authenticateUser(User user) {
		String username=user.getUsername();
		String rawPassword=user.getPassword();
		
		User userAuthenticate = userRepo.findByUsername(username);
	    if (userAuthenticate != null) {
	        return passwordEncoder.matches(rawPassword, userAuthenticate.getPassword());
	    }
	    return false;
	}

}
