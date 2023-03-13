package com.javatechie.spring.mongo.api.resource;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResetController;
import com.javatechie.spring.mongo.api.model.Student;
import com.javatechie.spring.mongo.api.repository.StudentRepository;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")

@ResetController
public class StudentController{
    @Autowired
    private StudentRepository repository;

    @PostMapping("/addStudent")
    public String savestudent(@RequestBody Student student) {
        repository.save(student);
        return "Added student with id:"+student.getId();

    }
    @GetMapping("/findAllStudents")
    public List<Student> getSudent(){
        return repository.findAll();
    }
    @GetMapping("/findAllStudents/{id}")
    public Optional<student> getSudent(@PathVariable int id){
        return repository.findById(id);
    }
    @RequestMapping("/updateStudent")
    public String savestudent(@RequestBody Student student){
        repository.save(student);
        return "Update Student with id:"+student.getId();
    }
    @DeleteMapping("/delete/{id}")
    public String deleteStudent(@PathVariable int id){
        repository.deleteById(id);
        return "Student deleted with id: "+id;
    }


}
