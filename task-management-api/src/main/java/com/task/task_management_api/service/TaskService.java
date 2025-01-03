package com.task.task_management_api.service;

import com.task.task_management_api.model.Task;
import com.task.task_management_api.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    // Constructor que acepta un TaskRepository
    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    // Crear una tarea
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    // Obtener todas las tareas
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    // Eliminar una tarea por ID
    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}
