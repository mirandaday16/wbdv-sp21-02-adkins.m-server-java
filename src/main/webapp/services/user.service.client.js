function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers();
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;

    const self = this;
    const url = 'https://wbdv-generic-server.herokuapp.com/api/001367581/users';

    function createUser(user) {
        fetch(url, {
            method: 'POST',
            body: user
        })
            .then(function(response) {
                return response.json()
            })
        }

    function findAllUsers() {
        fetch(url, {
            method: 'GET'
        })
            .then(function(response) {
            return response.json()
        });
    }

    function findUserById(userId) {
        fetch(url + userId, {
            method: 'GET'
        })
            .then(function(response) {
                return response.json()
            });
    }

    function updateUser(userId, user) {
        fetch(url + userId, {
            method: 'PUT',
            body: user
        })
            .then(function(response) {
                return response.json()
            })
    }


    function deleteUser(userId) {
        fetch(url + userId, {
            method: 'DELETE',
        })
            .then(function(response) {
                return response.json()
            })    }
}
