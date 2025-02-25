package com.example.workout.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "exercises")
public class Exercise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int exerciseId; // Primary key

    @Column(nullable = false)
    private String exerciseName;

    @Column(nullable = false)
    private String targetMuscle;

    private String description;

    private String videoUrl;
    
    @ManyToMany(mappedBy = "exercises")
    @JsonBackReference
    private List<WorkoutProgram> workoutPrograms;

    // @Override
    // public String toString() {
    //     return "Exercise [exerciseId=" + exerciseId + ", exerciseName=" + exerciseName + ", targetMuscle="
    //             + targetMuscle + ", description=" + description + ", videoUrl=" + videoUrl + "]";
    // }

    public int getExerciseId() {
        return exerciseId;
    }

    public void setExerciseId(int exerciseId) {
        this.exerciseId = exerciseId;
    }

    public String getExerciseName() {
        return exerciseName;
    }

    public void setExerciseName(String exerciseName) {
        this.exerciseName = exerciseName;
    }

    public String getTargetMuscle() {
        return targetMuscle;
    }

    public void setTargetMuscle(String targetMuscle) {
        this.targetMuscle = targetMuscle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public List<WorkoutProgram> getWorkoutPrograms() {
        return workoutPrograms;
    }

    public void setWorkoutPrograms(List<WorkoutProgram> workoutPrograms) {
        this.workoutPrograms = workoutPrograms;
    }

    // @Column(nullable = false)
    // private LocalDateTime createdAt;

    // @Column(nullable = false)
    // private LocalDateTime updatedAt;

    
}
