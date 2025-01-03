package com.task.task_management_api.repository;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.task.task_management_api.model.Task;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class TaskRepository {

    // Lista en memoria que almacena las tareas
    private final List<Task> tasks = new ArrayList<>();
    private Long idCounter = 1L;

    // Metodo para guardar una nueva tarea
    public Task save(Task task) {
        task.setId(idCounter++);
        tasks.add(task);
        return task;
    }

    // Metodo para obtener todas las tareas
    public List<Task> findAll() {
        return tasks;
    }

    // Metodo para encontrar una tarea por ID
    public Optional<Task> findById(Long id) {
        return tasks.stream().filter(task -> task.getId().equals(id)).findFirst();
    }

    // Metodo para eliminar una tarea por ID
    public void deleteById(Long id) {
        tasks.removeIf(task -> task.getId().equals(id));
    }
}