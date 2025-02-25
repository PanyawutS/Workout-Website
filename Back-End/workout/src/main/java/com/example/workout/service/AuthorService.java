package com.example.workout.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.workout.entity.Author;
import com.example.workout.repo.AuthorRepository;

@Service
public class AuthorService {

    @Autowired
    private AuthorRepository authorRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Author register(String username, String password, String email) {
        if (authorRepository.findByUsername(username) != null) {
            throw new RuntimeException("Username already exists!");
        }
        
        if (authorRepository.findByEmail(email) != null) {
            throw new RuntimeException("Email already registered!");
        }
    
        String hashedPassword = passwordEncoder.encode(password);
    
        Author newAuthor = new Author();
        newAuthor.setUsername(username);
        newAuthor.setPassword(hashedPassword);
        newAuthor.setEmail(email);
    
        return authorRepository.save(newAuthor);
    }



    public Author login(String username, String password){
        Author user = authorRepository.findByUsername(username);
        if(user != null && passwordEncoder.matches(password, user.getPassword())){
            return user;
        }

        return null;
    }

    
}
