package controller;

import models.User;

import java.util.ArrayList;
import java.util.List;

public class UserController {
    static List<User> users = new ArrayList<User>();
    static {
        users.add(new User(123, "alice", "Alice"));
        users.add(new User(456, "bailey", "Bailey"));
        users.add(new User(789, "charlie", "Charlie"));
        users.add(new User(135, "dan", "Dan"));
    }
}
