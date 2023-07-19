package com.beatforge.controller;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.beatforge.model.FormData;
import com.beatforge.service.OpenAIService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class BeatForgeController {
    private final OpenAIService openAIService;

    public BeatForgeController(OpenAIService openAIService) {
        this.openAIService = openAIService;
    }

    @PostMapping("/generations")
    public ResponseEntity<String> generateBeat(@RequestBody FormData body) {
        try {
            String result = openAIService.callOpenAI(body);
            return ResponseEntity.ok(result);
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Error calling OpenAI API");
        }
    }

    @GetMapping("/")
    public String helloWorld() {
        return "Hello World!";
    }
}
