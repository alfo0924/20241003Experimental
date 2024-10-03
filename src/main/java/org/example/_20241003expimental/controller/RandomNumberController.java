package org.example._20241003expimental.controller;

import org.example._20241003expimental.model.RandomNumber;
import org.example._20241003expimental.repository.RandomNumberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/random")
public class RandomNumberController {

    @Autowired
    private RandomNumberRepository repository;

    @PostMapping
    public ResponseEntity<RandomNumber> saveRandomNumber(@RequestBody RandomNumber randomNumber) {
        RandomNumber savedNumber = repository.save(randomNumber);
        return ResponseEntity.ok(savedNumber);
    }

    @GetMapping
    public ResponseEntity<List<RandomNumber>> getAllRandomNumbers() {
        List<RandomNumber> numbers = repository.findAll();
        return ResponseEntity.ok(numbers);
    }
}