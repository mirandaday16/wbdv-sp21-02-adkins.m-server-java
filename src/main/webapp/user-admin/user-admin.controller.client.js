var $username, $password;
var $firstName, $lastName, $role;
var $updateBtn,  $createBtn;
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
                    <button  class="mda-transparent-btn"><i id="${user._id}" class="fa fa-pencil mda-edit"></i></button>
              </div>
          </td>
      </tr>
      `)
    }
    $(".mda-remove").click(deleteUser)
    $(".mda-edit").click(selectUser)

    $username.val("")
    $password.val("")
    $firstName.val("")
    $lastName.val("")
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

var selectedUser = null
function selectUser(event) {
    var selectBtn = $(event.target)
    var userId = selectBtn.attr("id")
    selectedUser = users.find(user => user._id === userId)
    $username.val(selectedUser.username)
    $firstName.val(selectedUser.firstName)
    $lastName.val(selectedUser.lastName)
    $role.val(selectedUser.role)
}

function updateUser() {
    selectedUser.username = $username.val()
    selectedUser.firstName = $firstName.val()
    selectedUser.lastName = $lastName.val()
    selectedUser.role = $role.val()
    userService.updateUser(selectedUser._id, selectedUser)
        .then(function (status) {
            var index = users.findIndex(user => user._id === selectedUser._id)
            users[index] = selectedUser
            renderUsers(users)
        })
}

function main() {
    $rowTemplate = $('.mda-template')
    $tbody = $('tbody')
    $username = $('#usernameFld')
    $password = $('#passwordFld')
    $firstName = $('#firstNameFld')
    $lastName = $('#lastNameFld')
    $role = $('#roleFld')

    $createBtn = $(".mda-create")
    $createBtn.click(createUser);

    $updateBtn = $(".mda-update")
    $updateBtn.click(updateUser);

    userService
        .findAllUsers()
        .then(function (usersFromServer) {
            users = usersFromServer
            renderUsers(users)
        })
}

$(main)