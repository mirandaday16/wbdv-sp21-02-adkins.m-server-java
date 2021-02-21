function AdminUserServiceClient() {
    const self = this;

    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;

    this.url = 'https://wbdv-generic-server.herokuapp.com/api/001367581/users';

    function findAllUsers() {
        return fetch(self.url)
            .then(function (response) {
                return response.json()
            });
    }

    function createUser(user) {
        return fetch(self.url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(function (response) {
                return response.json()
            })
    }

    function findUserById(userId) {
        fetch(`${self.url}/${userId}`, {
            method: 'GET'
        })
            .then(function (response) {
                return response.json()
            });
    }

    function updateUser(userId, user) {
        fetch(`${self.url}/${userId}`, {
            method: 'PUT',
            body: user
        })
            .then(function (response) {
                return response.json()
            })
    }


    function deleteUser(userId) {
        return fetch(`${self.url}/${userId}`, {
            method: 'DELETE'
        })
            .then(function (response) {
                return response.json()
            })
    }
}
