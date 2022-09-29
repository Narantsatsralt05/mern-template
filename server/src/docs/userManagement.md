# User Management Function/API usage Guide

**Note:** 
Use always ```tokenCheck``` method before using ```checkPermission```!!!

## checkPermission method usage:

```
// This will check whether tokenized user is permitted to do update action on users

checkPermission({ module: "users", action: "update" })
```

## Update User Guide
- To add user to a group (example request)
```
# note that you need to provide Bearer Token with token
{
    "userId": "62e893a5784f8957b14a8887",   # user id that you want to do an operation
    "groupId": "62f079cb7d09e5aa9cb5588e",  # group id that you want to remove or add
    "action":"push"                         # use "pull" to remove from group 
}
```
- To update some certain part of user information (other than groups)
```
# note that you need to NOT provide "action" proporty in the request body
{
    "userId": "62e893a5784f8957b14a8887",   # user id that you want to do an operation
    "update": {                             # new information that you want to update
      "email": "test2@gmail.com"
    },  
}
```
