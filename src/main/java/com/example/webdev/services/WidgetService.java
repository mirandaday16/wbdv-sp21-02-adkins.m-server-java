package com.example.webdev.services;

import com.example.webdev.models.Widget;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WidgetService {
    private List<Widget> widgets = new ArrayList<Widget>();

    public List<Widget> findAllWidgets() {
        return widgets;
    }

    public List<Widget> findWidgetsForTopic(String topicId) {
        List<Widget> widgetList = new ArrayList<Widget>();
        for (Widget w: widgets) {
            if(w.getTopicId().equals(topicId)) {
                widgetList.add(w);
            }
        }
        return widgetList;
    }

    public Widget createWidget(String topicId, Widget widget) {
        widget.setTopicId(topicId);
        widget.setId((new Date()).getTime());
        widgets.add(widget);
        return widget;
    }

    public Integer deleteWidget (long widgetId) {
        int index;
        for (int i=0; i<widgets.size(); i++) {
            if (widgets.get(i).getId() == widgetId) {
                index = i;
                widgets.remove(index);
                return 1;
            }
        }
        return -1;
    }


}
