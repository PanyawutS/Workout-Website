package com.example.workout.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "workoutprograms")
public class WorkoutProgram {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int programId; // Primary key

    @Column(nullable = false)
    private String programName;

    private String description;

    @Column(nullable = false)
    private String targetMuscle;

    private String workoutProgramscol;

    // @Column(nullable = false)
    // private LocalDateTime createdAt;

    // @Column(nullable = false)
    // private LocalDateTime updatedAt;

    private String videoUrl;

    @ManyToMany
    @JoinTable(
        name = "programExercises", 
        joinColumns = @JoinColumn(name = "program_id"), 
        inverseJoinColumns = @JoinColumn(name = "exercise_id")
    )
    @JsonManagedReference
    private List<Exercise> exercises;

    // @Override
    // public String toString() {
    //     return "WorkoutProgram [programId=" + programId + ", programName=" + programName + ", description="
    //             + description + ", targetMuscle=" + targetMuscle + ", workoutProgramscol=" + workoutProgramscol
    //             + ", videoUrl=" + videoUrl + "]";
    // }

    public int getProgramId() {
        return programId;
    }

    public void setProgramId(int programId) {
        this.programId = programId;
    }

    public String getProgramName() {
        return programName;
    }

    public void setProgramName(String programName) {
        this.programName = programName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTargetMuscle() {
        return targetMuscle;
    }

    public void setTargetMuscle(String targetMuscle) {
        this.targetMuscle = targetMuscle;
    }

    public String getWorkoutProgramscol() {
        return workoutProgramscol;
    }

    public void setWorkoutProgramscol(String workoutProgramscol) {
        this.workoutProgramscol = workoutProgramscol;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public List<Exercise> getExercises() {
        return exercises;
    }

    public void setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
    }

    // Getters and Setters
}
