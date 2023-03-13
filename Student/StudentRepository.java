package com.javatechie.spring.mongo.api.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.javatechie.spring.mongo.api.model.Student;

public interface StudentRepository extends MongoRepository<student,Integer>{

}