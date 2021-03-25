package com.example.webdev.services;

import com.example.webdev.models.Widget;
import com.example.webdev.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WidgetService {

    @Autowired
    WidgetRepository repository;

    private List<Widget> widgets = new ArrayList<Widget>();

    public List<Widget> findAllWidgets() {
        return (List<Widget>) repository.findAll();
    }

    public List<Widget> findWidgetsForTopic(String topicId) {
        return repository.findWidgetsForTopic(topicId);
    }

    public Widget createWidget(String topicId, Widget widget) {
        widget.setTopicId(topicId);
        return repository.save(widget);
    }

    public Integer deleteWidget (long widgetId) {
        repository.deleteById(widgetId);
        return 1;
    }

    public Integer updateWidget (long widgetId, Widget widget) {
        for (int i=0; i<widgets.size(); i++) {
            if (widgets.get(i).getId() == widgetId) {
                widgets.set(i, widget);
                return 1;
            }
        }
        return -1;
    }


}
