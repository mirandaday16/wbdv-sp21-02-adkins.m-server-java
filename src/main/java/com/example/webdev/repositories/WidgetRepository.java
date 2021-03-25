package com.example.webdev.repositories;

import com.example.webdev.models.Widget;
import org.springframework.data.repository.CrudRepository;

public interface WidgetRepository
        extends CrudRepository<Widget, Long> {

}
