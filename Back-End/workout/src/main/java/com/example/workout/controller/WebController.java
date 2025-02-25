package com.example.workout.controller;



import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.workout.dto.LoginRequest;
import com.example.workout.dto.RegisterRequest;
import com.example.workout.entity.Exercise;
import com.example.workout.entity.User;
import com.example.workout.entity.UserGoal;
import com.example.workout.entity.WorkoutProgram;
import com.example.workout.service.ExcerciseService;
import com.example.workout.service.UserGoalService;
import com.example.workout.service.UserService;
import com.example.workout.service.WorkoutProgramService;

// import jakarta.websocket.server.PathParam;


@CrossOrigin(origins = "http://localhost:3000") 
@RestController
@RequestMapping("/api/workoutprograms")
public class WebController {

    @Autowired
    private WorkoutProgramService workoutProgramService;

    @Autowired
    private UserService userService;

    @Autowired
    private UserGoalService userGoalService;

    @Autowired
    private ExcerciseService exerciseService;

    // Get workout program by program name
    @CrossOrigin(origins = "http://localhost:3000") 
    @GetMapping("/workouts/{id}")
    public ResponseEntity<WorkoutProgram> getProgramById(@PathVariable int id) {
        Optional<WorkoutProgram> program = workoutProgramService.getProgramById(id);
        if (program.isPresent()) {
            return ResponseEntity.ok(program.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/exercise/{id}")
    public ResponseEntity<Exercise> getExerciseById(@PathVariable int id) {
        Exercise exercise = exerciseService.getExerciseById(id);
        if (exercise != null) {
            return ResponseEntity.ok(exercise);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // GET endpoint to retrieve all workout programs
    @CrossOrigin(origins = "http://localhost:3000") 
    @GetMapping("/workouts/all")
    public ResponseEntity<List<WorkoutProgram>> getAllWorkoutPrograms() {
        List<WorkoutProgram> programs = workoutProgramService.getAllPrograms();
        return ResponseEntity.ok(programs);
    }
    
    @CrossOrigin(origins = "http://localhost:3000") 
    @GetMapping("/login")
    public ModelAndView login() {
        ModelAndView mav = new ModelAndView("login");
        mav.addObject("user", new User());
        return mav;
    }

    @CrossOrigin(origins = "http://localhost:3000") 
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody LoginRequest loginRequest) {
        boolean isAuthenticated = userService.login(loginRequest.getEmail(), loginRequest.getPassword());

        Map<String, String> response = new HashMap<>();

        if (isAuthenticated) {
            // Get the user from the service using email
            Optional<User> userOptional = userService.getUserByEmail(loginRequest.getEmail());
    
            if (userOptional.isPresent()) {
                User user = userOptional.get(); // Now you can safely retrieve the User object
    
                // Add message and username to the response
                response.put("message", "Login successful");
                response.put("username", user.getUsername()); // Send username back
                return ResponseEntity.ok(response);
            } else {
                response.put("message", "User not found");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        } else {
            // Case where authentication fails
            response.put("message", "Invalid email or password");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }
    // public ResponseEntity<Map<String, String>> login(@RequestBody LoginRequest loginRequest) {
    // boolean isAuthenticated = userService.login(loginRequest.getEmail(), loginRequest.getPassword());

    // Map<String, String> response = new HashMap<>();

    // if (isAuthenticated) {
    //     response.put("message", "Login successful");
    //     return ResponseEntity.ok(response);
    // } else {
    //     response.put("message", "Invalid email or password");
    //     return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
    // }
    // }

    @CrossOrigin(origins = "http://localhost:3000") 
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest registerRequest) {
        userService.register(registerRequest.getUsername(), registerRequest.getPassword(), registerRequest.getEmail());
        return ResponseEntity.ok("Registration successful");
    }


    // GET endpoint to retrieve all users
    @CrossOrigin(origins = "http://localhost:3000") 
    @GetMapping("/users/all")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllusers();
        return ResponseEntity.ok(users);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserByUserId(@PathVariable int id) {
        Optional<User> userOptional = userService.getUserById(id); // Assuming you have a service to get the user by ID
    
        if (userOptional.isPresent()) {
            return new ResponseEntity<>(userOptional.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    // POST endpoint to add a new user goal
    @CrossOrigin(origins = "http://localhost:3000") 
    @PostMapping("/addGoal")
    public ResponseEntity<UserGoal> addGoal(@RequestBody UserGoal userGoal) {
        try {
            UserGoal savedGoal = userGoalService.addGoal(userGoal);
            return ResponseEntity.ok(savedGoal);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null); // Handle exceptions accordingly
        }
    }

    // GET endpoint to retrieve a user goal by ID
    @CrossOrigin(origins = "http://localhost:3000") 
    @GetMapping("/GET/goal")
    public ResponseEntity<UserGoal> getGoalById(@RequestParam int goalId) {
        Optional<UserGoal> userGoal = userGoalService.getGoalById(goalId);
        if (userGoal.isPresent()) {
            return ResponseEntity.ok(userGoal.get());
        } else {
            return ResponseEntity.notFound().build(); // Return 404 if goal is not found
        }
    }

     // GET endpoint to retrieve all user goals
     @CrossOrigin(origins = "http://localhost:3000") 
     @GetMapping("/goals/all")
     public ResponseEntity<List<UserGoal>> getAllGoals() {
         List<UserGoal> goals = userGoalService.getAllGoals();
         return ResponseEntity.ok(goals);
     }

     @DeleteMapping("/delete/usergoal/{goalId}")
     public ResponseEntity<String> deleteUserGoal(@PathVariable int goalId){
        try{
            userGoalService.deleteUserGoalById(goalId);
            return ResponseEntity.ok("Usergoal " + goalId + " has been deleted.");
        }catch (Exception e) {
            return ResponseEntity.status(404).body("Employee not found with ID: " + goalId);
        }
     }
}
