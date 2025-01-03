package com.task.task_management_api.dto;

import com.task.task_management_api.model.Task;

import java.util.List;

public class TaskResponseDTO {
    private List<Task> tasks;

    public TaskResponseDTO(List<Task> tasks) {
        this.tasks = tasks;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }
}
