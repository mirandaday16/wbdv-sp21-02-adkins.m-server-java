package com.example.webdev.controllers;

import com.example.webdev.models.Widget;
import com.example.webdev.services.WidgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class WidgetController {
    @Autowired
    WidgetService service;

    @GetMapping("/api/widgets")
    public List<Widget> findAllWidgets() {
        return service.findAllWidgets();
    }

    @GetMapping("/api/topics/{topicId}/widgets")
    public List<Widget> findWidgetsForTopic(
            @PathVariable("topicId") String topicId) {
        return service.findWidgetsForTopic(topicId);
    }

    @PostMapping("/api/topics/{topicId}/widgets")
    public  Widget createWidgetForTopic(
            @PathVariable("topicId") String topicId,
            @RequestBody Widget widget
    ) {
        return service.createWidget(topicId, widget);
    }

}
