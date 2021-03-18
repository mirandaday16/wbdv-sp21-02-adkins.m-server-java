package com.example.webdev.services;

import com.example.webdev.models.Widget;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WidgetService {
    private List<Widget> widgets = new ArrayList<Widget>();
    {
        Widget widget1 = new Widget(123L, "ABC1", "HEADING", 1, "Widgets for Topic 1!");
        Widget widget2 = new Widget(234L, "ABC1", "PARAGRAPH", 1, "Lorem Ipsum 1");
        Widget widget3 = new Widget(345L, "ABC2", "HEADING", 2, "Widgets for Topic 2!");
        Widget widget4 = new Widget(456L, "ABC2", "PARAGRAPH", 1, "Lorem Ipsum 2");
        Widget widget5 = new Widget(567L, "ABC2", "PARAGRAPH", 1, "Lorem Ipsum 3");

        widgets.add(widget1);
        widgets.add(widget2);
        widgets.add(widget3);
        widgets.add(widget4);
        widgets.add(widget5);
    }

    public List<Widget> findAllWidgets() {
        return widgets;
    }


}
