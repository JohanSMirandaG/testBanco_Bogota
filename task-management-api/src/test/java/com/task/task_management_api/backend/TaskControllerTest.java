package com.task.task_management_api.backend;


import com.task.task_management_api.controller.TaskController;
import com.task.task_management_api.model.Task;
import com.task.task_management_api.service.TaskService;
import com.task.task_management_api.dto.TaskResponseDTO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class TaskControllerTest {

    private MockMvc mockMvc;

    @Mock
    private TaskService taskService;

    @InjectMocks
    private TaskController taskController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(taskController).build();
    }

    @Test
    void testCreateTask() throws Exception {
        // Crear tarea utilizando el constructor con id
        Task task = new Task(1L, "Test Task", "This is a test task");
        when(taskService.createTask(any(Task.class))).thenReturn(task);

        mockMvc.perform(post("/tasks")
                        .contentType("application/json")
                        .content("{\"title\":\"Test Task\",\"description\":\"This is a test task\"}"))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.title").value("Test Task"))
                .andExpect(jsonPath("$.description").value("This is a test task"));
    }

    @Test
    void testGetAllTasks() throws Exception {
        // Crear algunas tareas
        Task task1 = new Task(1L, "Task 1", "Description 1");
        Task task2 = new Task(2L, "Task 2", "Description 2");
        List<Task> tasks = Arrays.asList(task1, task2);
        when(taskService.getAllTasks()).thenReturn(tasks);

        mockMvc.perform(get("/tasks"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.tasks[0].id").value(1))
                .andExpect(jsonPath("$.tasks[1].id").value(2));
    }

    @Test
    void testDeleteTask() throws Exception {
        // Simula que el servicio elimina la tarea
        doNothing().when(taskService).deleteTask(1L);

        mockMvc.perform(delete("/tasks/1"))
                .andExpect(status().isNoContent());

        verify(taskService, times(1)).deleteTask(1L);
    }
}