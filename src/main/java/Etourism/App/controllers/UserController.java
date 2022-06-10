package Etourism.App.controllers;

import Etourism.App.Services.UserService;
import Etourism.App.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.logging.Logger;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4201")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        return new ResponseEntity<User>(userService.findByEmailAndPassword(user.getEmail(), user.getPassword()), HttpStatus.OK);
    }


    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user){
        return new ResponseEntity<User>(userService.saveUser(user),HttpStatus.CREATED);
    }

    @GetMapping("/getUser/{id}")
    public ResponseEntity<User> getUser(@PathVariable("id") Long id){
        return new ResponseEntity<User>(userService.getUser(id),HttpStatus.OK);
    }

}
