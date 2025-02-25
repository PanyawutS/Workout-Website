package com.example.workout.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.core.Authentication;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.workout.entity.User;
import com.example.workout.repo.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    // Method to validate the password
    
    // private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public boolean login(String email, String rawPassword) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return passwordEncoder.matches(rawPassword, user.getPassword());
        }
        
        return false;
    }

    public void register(String username, String rawPassword, String email) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(rawPassword)); // Hash password before saving
        user.setEmail(email);
        userRepository.save(user);
    }

    // public boolean login(String email, String password) {
    //     Optional<User> user = userRepository.findByEmailAndPassword(email, password);
    //     return user.isPresent(); // returns true if user is found, otherwise false
    // }

    // Register a new user
    // public Optional<User> registerUser(User user) {
    //     // Check if username or email is already taken
    //     Optional<User> existingUsername = userRepository.findByUsername(user.getUsername());
    //     Optional<User> existingEmail = userRepository.findByEmail(user.getEmail());

    //     if (existingUsername.isPresent()) {
    //         throw new IllegalStateException("Username already taken");
    //     }
        
    //     if (existingEmail.isPresent()) {
    //         throw new IllegalStateException("Email already in use");
    //     }
    //     // Hash the password before saving the user
    //     user.setPassword(passwordEncoder.encode(user.getPassword()));

    //     // Save the new user if both username and email are unique
    //     return Optional.of(userRepository.save(user));
    // }
    

    public List<User> getAllusers(){
        return userRepository.findAll();
    }

    public Optional<User> getUserById(int id) {
        return userRepository.findById(id);
    }

    public Optional<User> getUserByEmail(String email){
        return userRepository.findByEmail(email);
    }


}
