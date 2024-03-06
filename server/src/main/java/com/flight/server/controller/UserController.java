package com.flight.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.flight.server.entity.User;
import com.flight.server.service.UserService;

@RestController
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@GetMapping("/users")
	List<User> getAllUser(){
		return userService.findAll();
	}
	
	@PostMapping("/users")
	void saveuser(@RequestBody User user) {
		userService.save(user);
	}
	
	@PostMapping("/login")
	ResponseEntity<User> checkLogin(@RequestBody User user){
		if(userService.authenticateUser(user)) {
			return ResponseEntity.status(HttpStatus.OK).body(user);
		}
		else {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
		}
	}
	
	
}
