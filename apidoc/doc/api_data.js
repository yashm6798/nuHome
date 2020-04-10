define({ "api": [
  {
    "type": "delete",
    "url": "/comments/:delete",
    "title": "Delete a Comment",
    "name": "DeleteComments",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "post_id",
            "description": "<p>Post's <code>id</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "comment_id",
            "description": "<p>Comment's <code>id</code>.</p>"
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
            "description": "<p>Successful Delete a Comment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs.py",
    "groupTitle": "Comments"
  },
  {
    "type": "get",
    "url": "/comments/:get",
    "title": "Select a Comment",
    "name": "GetComments",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "post_id",
            "description": "<p>Post's <code>id</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "comment_id",
            "description": "<p>Comment's <code>id</code>.</p>"
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
            "description": "<p>Successful Select Comment of a Post.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"post_id\": 8,\n        \"comment_id\": 3,\n        \"comment_owner\": \"sheep\",\n        \"comment_content\": \"Nice post!\",\n        \"date_time\": \"2020-01-01 19:50:00 GMT+2\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs.py",
    "groupTitle": "Comments"
  },
  {
    "type": "post",
    "url": "/comments/:post",
    "title": "Create a Comment",
    "name": "PostComments",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
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
            "description": "<p>Successful Post a Comment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"post_id\": 8,\n        \"comment_id\": 3\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs.py",
    "groupTitle": "Comments"
  },
  {
    "type": "delete",
    "url": "/posts/:delete",
    "title": "Delete a Post",
    "name": "DeletePost",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "post_id",
            "description": "<p>Post's <code>id</code>.</p>"
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
            "description": "<p>Successful Delete a Post.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "res",
            "description": "<p>Return contents.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"post_id\": 8\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs.py",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/posts/:get",
    "title": "Select a Post",
    "name": "GetPost",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "post_id",
            "description": "<p>Post's <code>id</code>.</p>"
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
            "description": "<p>Successful Select a Post.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "res",
            "description": "<p>Return contents.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"username\": \"alpaca\",\n        \"post_id\": 4,\n        \"title\": \"Food resources nearby\",\n        \"content\": \"Free food distribution for refugees at Frobes Ave!\",\n        \"status\": \"unverified\",\n        \"category\": \"living\",\n        \"date_time\": \"2020-01-01 19:00:00 GMT+2\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs.py",
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
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "res",
            "description": "<p>Return contents.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"post_id\": 8\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs.py",
    "groupTitle": "Posts"
  },
  {
    "type": "post",
    "url": "/posts/:post",
    "title": "Create a Post",
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
            "description": "<p>Successful Create a Post.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "res",
            "description": "<p>Return contents.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"post_id\": 8\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs.py",
    "groupTitle": "Posts"
  },
  {
    "type": "put",
    "url": "/posts/:put",
    "title": "Update a Post",
    "name": "PutPost",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "post_id",
            "description": "<p>Post's <code>id</code>.</p>"
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
            "description": "<p>Successful Update a Post.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "res",
            "description": "<p>Return contents.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"post_id\": 8\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs.py",
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
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "res",
            "description": "<p>Return contents.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>username</code> was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/docs.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/:logout",
    "title": "User Logout",
    "name": "LogoutUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Logout.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "res",
            "description": "<p>Return contents.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs.py",
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
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "res",
            "description": "<p>Return contents.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"username\": \"duck\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs.py",
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
            "type": "JSON",
            "optional": false,
            "field": "res",
            "description": "<p>Return contents.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Refugee-Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"username\": \"tiger\",\n        \"avatar\": 10,\n        \"bio\": \"Help me find a life here.\"\n        \"region\": \"Skopje, Macedonia\",\n        \"verification_status\": \"unverified\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "NGO-Worker-Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"username\": \"NGO_cat\",\n        \"avatar\": 8,\n        \"bio\": \"I wish for wolrd peace\"\n        \"region\": \"Skopje, Macedonia\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs.py",
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
            "type": "Number",
            "optional": false,
            "field": "avatar",
            "description": "<p>User's avatar index.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>User's type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>User's region.</p>"
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
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "res",
            "description": "<p>Return contents.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"username\": \"giraffe\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs.py",
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
            "type": "Number",
            "optional": false,
            "field": "avatar",
            "description": "<p>User's avatar index.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>User's type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>User's region.</p>"
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
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "res",
            "description": "<p>Return contents.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"username\": \"horse\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs.py",
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
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>User's type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>User's region.</p>"
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
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "res",
            "description": "<p>Return contents.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"username\": \"lion\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "UsernameAlreadyTaken",
            "description": "<p>The <code>username</code> was already taken.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/docs.py",
    "groupTitle": "User"
  }
] });
