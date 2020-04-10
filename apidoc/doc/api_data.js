define({ "api": [
  {
    "type": "delete",
    "url": "/comments/:delete",
    "title": "Delete User Post",
    "name": "DeleteComments",
    "group": "Comments",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Post Comment.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "test/docs.py",
    "groupTitle": "Comments"
  },
  {
    "type": "get",
    "url": "/comments/:get",
    "title": "Select Comment",
    "name": "GetComments",
    "group": "Comments",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Select Comment.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "test/docs.py",
    "groupTitle": "Comments"
  },
  {
    "type": "post",
    "url": "/comments/:post",
    "title": "Create User Post",
    "name": "PostComments",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Post's title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Comment's content.</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "date_time",
            "description": "<p>Comment's date and time.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Post Comment.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "test/docs.py",
    "groupTitle": "Comments"
  },
  {
    "type": "put",
    "url": "/comments/:put",
    "title": "Put User Post",
    "name": "PutComments",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Post's title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Comment's content.</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "date_time",
            "description": "<p>Comment's date and time.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Post Comment.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "test/docs.py",
    "groupTitle": "Comments"
  },
  {
    "type": "delete",
    "url": "/posts/:delete",
    "title": "Delete User Post",
    "name": "DeletePost",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Delete User Post.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "test/docs.py",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/posts/:get",
    "title": "Select User Post",
    "name": "GetPost",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Select User Post.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Post's title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Post's content.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Post's category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "date_time",
            "description": "<p>Post's date and time.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "test/docs.py",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/posts/:notification_change",
    "title": "Get notification of post change",
    "name": "PostNotify",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Send Post change notification.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Post's title.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "test/docs.py",
    "groupTitle": "Posts"
  },
  {
    "type": "post",
    "url": "/posts/:post",
    "title": "Create User Post",
    "name": "PostPost",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Post's title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Post's content.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Post's status.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Post's category.</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "date_time",
            "description": "<p>Post's date and time.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Create User Post.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "test/docs.py",
    "groupTitle": "Posts"
  },
  {
    "type": "put",
    "url": "/posts/:put",
    "title": "Update User Post",
    "name": "PutPost",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Post's title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Post's content.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Post's status.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Post's category.</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "date_time",
            "description": "<p>Post's date and time.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Update User Post.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "test/docs.py",
    "groupTitle": "Posts"
  },
  {
    "type": "post",
    "url": "/user/:login",
    "title": "User Login",
    "name": "LoginUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Login.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 302": [
          {
            "group": "Error 302",
            "type": "String",
            "optional": false,
            "field": "UserNotVerified",
            "description": "<p>The <code>id</code> of the User was not verified.</p>"
          }
        ],
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "test/docs.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/:logout",
    "title": "User Logout",
    "name": "LogoutUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Logout.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "test/docs.py",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user_profile/:delete",
    "title": "Delete User Profile",
    "name": "DeleteUserProfile",
    "group": "UserProfile",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Delete User Profile.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "test/docs.py",
    "groupTitle": "UserProfile"
  },
  {
    "type": "get",
    "url": "/user_profile/:get",
    "title": "Get User Profile",
    "name": "GetUserProfile",
    "group": "UserProfile",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Get User Profile.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "avatar",
            "description": "<p>User's avatar URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>User's bio.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>User's region</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "verification_status",
            "description": "<p>User's verification status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "test/docs.py",
    "groupTitle": "UserProfile"
  },
  {
    "type": "post",
    "url": "/user_profile/:post",
    "title": "Create User Profile",
    "name": "PostUserProfile",
    "group": "UserProfile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "avatar",
            "description": "<p>User's avatar URL.</p>"
          },
          {
            "group": "Parameter",
            "type": "UserType",
            "optional": false,
            "field": "type",
            "description": "<p>User's type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>User's originated region.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Create User Profile.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "test/docs.py",
    "groupTitle": "UserProfile"
  },
  {
    "type": "put",
    "url": "/user_profile/:put",
    "title": "Update User Profile",
    "name": "PutUserProfile",
    "group": "UserProfile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "avatar",
            "description": "<p>User's avatar URL.</p>"
          },
          {
            "group": "Parameter",
            "type": "UserType",
            "optional": false,
            "field": "type",
            "description": "<p>User's type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>User's originated region.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Update User Profile.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "test/docs.py",
    "groupTitle": "UserProfile"
  },
  {
    "type": "post",
    "url": "/user/:register",
    "title": "Register User Account",
    "name": "RegisterUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "UserType",
            "optional": false,
            "field": "type",
            "description": "<p>User's type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>User's originated region.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Registration.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "UsernameAlreadyTaken",
            "description": "<p>The <code>id</code> of the User was taken.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "test/docs.py",
    "groupTitle": "User"
  }
] });
