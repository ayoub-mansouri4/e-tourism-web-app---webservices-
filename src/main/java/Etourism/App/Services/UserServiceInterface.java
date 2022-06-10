package Etourism.App.Services;

import Etourism.App.entities.User;

public interface UserServiceInterface {
        public User findByEmailAndPassword(String email,String password);
        public User getUser(Long id);
        public User saveUser(User user);
}
