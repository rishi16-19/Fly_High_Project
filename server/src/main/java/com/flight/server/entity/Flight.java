package com.flight.server.entity;

import org.bson.BsonTimestamp;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document("flights")
public class Flight {
	
	@Id
	String flightCode;
	
	@Field("src_code")
	String srcCode;
	
	@Field("dest_code")
	String destCode;
	
	@Field("flight_name")
	String flightName;
	
	@Field("date")
	int date;
	
	@Field("src_time")
	BsonTimestamp srcTime;
	
	@Field("dest_time")
	BsonTimestamp destTime;
	
	@Field("price")
	double price;

	public String getFlightCode() {
		return flightCode;
	}

	public void setFlightCode(String flightCode) {
		this.flightCode = flightCode;
	}

	public String getSrcCode() {
		return srcCode;
	}

	public void setSrcCode(String srcCode) {
		this.srcCode = srcCode;
	}

	public String getDestCode() {
		return destCode;
	}

	public void setDestCode(String destCode) {
		this.destCode = destCode;
	}

	public String getFlightName() {
		return flightName;
	}

	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}

	public int getDate() {
		return date;
	}

	public void setDate(int date) {
		this.date = date;
	}

	public BsonTimestamp getSrcTime() {
		return srcTime;
	}

	public void setSrcTime(BsonTimestamp srcTime) {
		this.srcTime = srcTime;
	}

	public BsonTimestamp getDestTime() {
		return destTime;
	}

	public void setDestTime(BsonTimestamp destTime) {
		this.destTime = destTime;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Flight(String flightCode, String srcCode, String destCode, String flightName, int date,
			BsonTimestamp srcTime, BsonTimestamp destTime, double price) {
		super();
		this.flightCode = flightCode;
		this.srcCode = srcCode;
		this.destCode = destCode;
		this.flightName = flightName;
		this.date = date;
		this.srcTime = srcTime;
		this.destTime = destTime;
		this.price = price;
	}

	public Flight() {
		super();
	}

	@Override
	public String toString() {
		return "Flight [flightCode=" + flightCode + ", srcCode=" + srcCode + ", destCode=" + destCode + ", flightName="
				+ flightName + ", date=" + date + ", srcTime=" + srcTime + ", destTime=" + destTime + ", price=" + price
				+ "]";
	}
	
	
	
	
}








