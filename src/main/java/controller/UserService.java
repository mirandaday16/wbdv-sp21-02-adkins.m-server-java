package controller;

import models.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    private ArrayList<User> users = initList();

    private ArrayList<User> initList() {
        ArrayList<User> result = new ArrayList<>();
        result.add(new User(123, "alice", "Alice"));
        result.add(new User(456, "bailey", "Bailey"));
        result.add(new User(789, "charlie", "Charlie"));
        result.add(new User(135, "dan", "Dan"));
        return result;
    }

    public List<User> getAll()
    {
        ArrayList<User> result = new ArrayList<>();
        result.addAll(users);
        return result;
    }
}
