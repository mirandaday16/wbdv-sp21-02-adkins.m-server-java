var $username, $password;
var $firstName, $lastName, $role;
var $removeBtn, $editBtn, $createBtn;
var $rowTemplate, $tbody;
var userService = new AdminUserServiceClient();

var users = [];

function renderUsers(users) {
    $tbody.empty()
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        $tbody.prepend(`
      <tr>
          <td>${user.username}</td>
          <td></td>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.role}</td>
          <td class="mda-actions">
              <div class="btn-group">
                    <button class="mda-transparent-btn"><i id="${i}" class="fa fa-times mda-remove"></i></button>
                    <button id="${user._id}" class="mda-transparent-btn mda-edit"><i class="fa fa-pencil"></i></button>
              </div>
          </td>
      </tr>
      `)
    }
    $(".mda-remove").click(deleteUser)
}

function createUser() {
    var newUser = {
        username: $username.val(),
        password: $password.val(),
        firstName: $firstName.val(),
        lastName: $lastName.val(),
        role: $role.val()
    }

    userService.createUser(newUser)
        .then(function (userFromServer) {
            users.push(userFromServer);
            renderUsers(users)

            $username.val("")
            $password.val("")
            $firstName.val("")
            $lastName.val("")
        })
}

function deleteUser(event) {
    var deleteBtn = jQuery(event.target)
    var index = deleteBtn.attr("id")
    var userId = users[index]._id

    userService.deleteUser(userId)
        .then(function (status) {
            users.splice(index, 1)
            renderUsers(users)
        })
}

function selectUser() {
    // TODO: Implement
}

function updateUser(userId, user) {
    // userService.updateUser(userId, user)
}

function findAllUsers() { // optional - might not need this
    // TODO: Implement
}

function findUserById(userId) { // optional - might not need this
    // userService.findUserById(userId)
}

function main() {
    $rowTemplate = $('.mda-template')
    $tbody = $('tbody')
    $username = $('#usernameFld')
    $password = $('#passwordFld')
    $firstName = $('#firstNameFld')
    $lastName = $('#lastNameFld')
    $role = $('#roleFld')

    // $removeBtn = $(".mda-remove")
    // $editBtn = $(".mda-edit")
    $createBtn = $(".mda-create")

    // $removeBtn.click(deleteUser);
    // $editBtn.click(updateUser);
    $createBtn.click(createUser);

    userService
        .findAllUsers()
        .then(function (usersFromServer) {
            users = usersFromServer
            renderUsers(users)
        })
}

$(main)