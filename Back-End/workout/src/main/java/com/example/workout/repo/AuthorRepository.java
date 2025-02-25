package com.example.workout.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.workout.entity.Author;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Integer>{
    Author findByUsername(String username);
    Author findByEmail(String email);
    
}
