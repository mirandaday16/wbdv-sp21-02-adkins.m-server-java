import User from "../../java/models/User.java"

(function () {

    var $username, $password;
    var $firstName, $lastName, $role;
    var $removeBtn, $editBtn, $createBtn;
    var $rowTemplate, $tbody;
    var userService = new AdminUserServiceClient();

    jQuery(main);

    function main() {
        $rowTemplate = jQuery('.mda-template');
        $tbody = jQuery('tbody');
        userService
            .findAllUsers
            .then(renderUsers)
    }

    function renderUsers(users) {
        for (const u in users) {
            const user = users[u]
            const rowClone = $rowTemplate.clone();
            rowClone.removeClass('mda-hidden');
            rowClone.find('.mda-username').html(user.username)
            rowClone.find('.mda-first-name').html(user.firstName)
            rowClone.find('.mda-last-name').html(user.lastName)
            rowClone.find('.mda-role').html(user.role)
            $tbody.append(rowClone);
        }
    }

    function createUser(user) {
        userService.createUser(user);
    }

    function deleteUser(userId) {
        userService.deleteUser(userId)
    }

    function selectUser() {
        // TODO: Implement
    }

    function updateUser(userId, user) {
        userService.updateUser(userId, user)
    }

    function findAllUsers() { // optional - might not need this
        // TODO: Implement
    }

    function findUserById(userId) { // optional - might not need this
        userService.findUserById(userId)
    }

})();
