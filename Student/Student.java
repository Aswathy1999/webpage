package com.javatechie.spring.mongo.api.model;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.id;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;



@Getter
@Setter
@ToString
@Document(collection ="student")
public class Student
{
    @id
    Private int id;
    Privare String name;
    Private Date date;
    Private String class;
    Private String division;
    Private String gender;



}

