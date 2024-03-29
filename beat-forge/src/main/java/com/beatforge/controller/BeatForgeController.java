package com.beatforge.controller;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.beatforge.model.FormData;
import com.beatforge.service.OpenAIService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:5173", "https://d9orjv72fo7gq.cloudfront.net", "https://www.beatforgeai.com"})
public class BeatForgeController {
    private final OpenAIService openAIService;

    // Create a Logger instance
    private static final Logger logger = LoggerFactory.getLogger(BeatForgeController.class);

    public BeatForgeController(OpenAIService openAIService) {
        this.openAIService = openAIService;
    }

    @PostMapping("/generations")
    public ResponseEntity<String> generateBeat(@RequestBody FormData body) {
        try {
            logger.info("Received reque to generate beat: {}", body);
            String result = openAIService.callOpenAI(body);
            logger.info("Generated beat: {}", result);
            return ResponseEntity.ok(result);
        } catch (IOException e) {
            logger.error("Error calling OpenAI API", e);
            return ResponseEntity.status(500).body("Error calling OpenAI API");
        }
    }

    @GetMapping("/")
    public String helloWorld() {
        logger.info("Receive request forr hello world");
        return "Hello World!";
    }
}
