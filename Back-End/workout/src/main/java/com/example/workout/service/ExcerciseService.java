package com.example.workout.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.workout.entity.Exercise;
import com.example.workout.repo.ExerciseRepository;

@Service
public class ExcerciseService {
    @Autowired
    private ExerciseRepository exerciseRepository;

    public List<Exercise> getAllExercises() {
        return exerciseRepository.findAll();
    }

    public Exercise getExerciseById(int id) {
        return exerciseRepository.findById(id).orElse(null);
    }
}
