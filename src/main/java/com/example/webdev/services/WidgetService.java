package com.example.webdev.services;

import com.example.webdev.models.Widget;
import com.example.webdev.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WidgetService {

    @Autowired
    WidgetRepository repository;

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
        Widget originalWidget = repository.findById(widgetId).get();

        if (widget.getText() != null) {
            originalWidget.setText(widget.getText());
        }
        if (widget.getTopicId() != null) {
            originalWidget.setTopicId(widget.getTopicId());
        }
        if (widget.getWidth() != null) {
            originalWidget.setWidth(widget.getWidth());
        }
        if (widget.getHeight() != null) {
            originalWidget.setHeight(widget.getHeight());
        }
        if (widget.getSize() != null) {
            originalWidget.setSize(widget.getSize());
        }
        if (widget.getType() != null) {
            originalWidget.setType(widget.getType());
        }
        if (widget.getSrc() != null) {
            originalWidget.setSrc(widget.getSrc());
        }
        if (widget.getOrdered() != null) {
            originalWidget.setOrdered(widget.getOrdered());
        }

        repository.save(originalWidget);

        return 1;
    }


}
