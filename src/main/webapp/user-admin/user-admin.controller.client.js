// (function () {



    var rowTemplate;
    var tbody;

    jQuery(main);

    function main() {
        rowTemplate = jQuery('.mda-template');
        tbody = jQuery('tbody');
        renderUsers(users);
    }

    function renderUsers(users) {
        for (var u in users) {
            const user = users[u]
            const rowClone = rowTemplate.clone();
            rowClone.removeClass('mda-hidden');
            rowClone.find('.mda-username').html(user.username)
            rowClone.find('.mda-first-name').html(user.firstName)
            rowClone.find('.mda-last-name').html(user.lastName)
            rowClone.find('.mda-role').html(user.role)
            tbody.append(rowClone);
        }
    }

    // var $usernameFld, $passwordFld;
    // var $firstNameFld, $lastNameFld, $roleFld;
    // var $removeBtn, $editBtn, $createBtn;
    // var $userRowTemplate, $tbody;
    // var userService = new AdminUserServiceClient();
    // $(main);
    //
    // function main() {
    //     // TODO: Implement
    // }
    // function createUser() {
    //     // TODO: Implement
    // }
    // function deleteUser() {
    //     // TODO: Implement
    // }
    // function selectUser() {
    //     // TODO: Implement
    // }
    // function updateUser() {
    //     // TODO: Implement
    // }
    // function renderUsers(users) {
    //     // TODO: Implement
    // }
    // function findAllUsers() { // optional - might not need this
    //     // TODO: Implement
    // }
    // function findUserById() { // optional - might not need this
    //     // TODO: Implement
    // }
// })();
