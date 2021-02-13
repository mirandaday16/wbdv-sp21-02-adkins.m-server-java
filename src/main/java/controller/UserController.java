package controller;

import models.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {
    static List<User> users = new ArrayList<>();
    static {
        users.add(new User(123, "alice", "Alice"));
        users.add(new User(456, "bailey", "Bailey"));
        users.add(new User(789, "charlie", "Charlie"));
        users.add(new User(135, "dan", "Dan"));
    }

    @GetMapping("/users")
    public List<User> findAllUsers() {
        return users;
    }
}
