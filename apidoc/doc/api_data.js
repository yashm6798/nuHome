define({ "api": [
  {
    "type": "get",
    "url": "/get_unverified_users/",
    "title": "Get Unverified Users",
    "name": "GetUnverifiedUsers",
    "group": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Get.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\",\n    \"res\": {\n        \"unverified_refugees\": [\n            {\n                \"username\": \"testrefugee3\",\n                \"document\": true\n            },\n            {\n                \"username\": \"testrefugee5\",\n                \"document\": false\n            },\n            {\n                \"username\": \"testrefugee7\",\n                \"document\": false\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "UserAccess",
            "description": "<p>User is not verified as ngo.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../nuHome_app/authentication.py",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/login/",
    "title": "User Login",
    "name": "LoginUser",
    "group": "Authentication",
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\",\n    \"res\": {\n        \"username\": \"testngo4\",\n        \"region\": \"region4\",\n        \"bio\": \"\",\n        \"avatar\": \"\",\n        \"user_type\": \"ngo_worker\"\n    }\n}",
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
    "filename": "../nuHome_app/authentication.py",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/logout/",
    "title": "User Logout",
    "name": "LogoutUser",
    "group": "Authentication",
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
    "filename": "../nuHome_app/authentication.py",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/ngo_registration/",
    "title": "Register NGO worker Account",
    "name": "RegisterNGO",
    "group": "Authentication",
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\",\n    \"res\": {\n        \"username\": \"testngo7\",\n        \"region\": \"region4\",\n        \"bio\": \"\",\n        \"avatar\": \"\",\n        \"user_type\": \"ngo_worker\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "UsernameAlreadyTaken",
            "description": "<p>The <code>username</code> was already taken.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../nuHome_app/authentication.py",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/ngo_admin_registration/",
    "title": "Register NGO worker Account",
    "name": "RegisterNGOAdmin",
    "group": "Authentication",
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\",\n    \"res\": {\n        \"username\": \"testadmin7\",\n        \"region\": \"region4\",\n        \"user_type\": \"ngo_admin\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "UsernameAlreadyTaken",
            "description": "<p>The <code>username</code> was already taken.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../nuHome_app/authentication.py",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/registration/",
    "title": "Register User Account",
    "name": "RegisterRefugee",
    "group": "Authentication",
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\",\n    \"res\": {\n        \"username\": \"testrefugee7\",\n        \"region\": \"region4\",\n        \"bio\": \"\",\n        \"avatar\": 2,\n        \"user_type\": \"refugee\",\n        \"isVerified\": false,\n        \"assigned_ngo\": \"testngo4\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "UsernameAlreadyTaken",
            "description": "<p>The <code>username</code> was already taken.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../nuHome_app/authentication.py",
    "groupTitle": "Authentication"
  },
  {
    "type": "put",
    "url": "/upload_document/",
    "title": "Upload Document",
    "name": "UploadDocument",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>File to Upload.</p>"
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
            "description": "<p>Successful Upload Document.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\",\n    \"res\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "NoFileFound",
            "description": "<p>No file found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../nuHome_app/authentication.py",
    "groupTitle": "Authentication"
  },
  {
    "type": "put",
    "url": "/verify_user/",
    "title": "Verify User",
    "name": "VerifyUser",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User-to-verify's username.</p>"
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
            "description": "<p>Successful Verify.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\",\n    \"res\": {\n        \"username\": \"testrefugee3\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "UserAccess",
            "description": "<p>User is not verified as ngo.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../nuHome_app/authentication.py",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/get_messages/",
    "title": "Select messages",
    "name": "GetMessages",
    "group": "Chat",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of user to retrieve the messages.</p>"
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
            "description": "<p>Successful Select messages to the user or from the user, ordered by time.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\",\n    \"res\": [\n        {\n            \"content\": \"hellooooo\",\n            \"date_time\": 1587868626000,\n            \"from_user\": \"testrefugee3\",\n            \"to_user\": \"testngo4\"\n        },\n        {\n            \"content\": \"hellooooo\",\n            \"date_time\": 1587868779000,\n            \"from_user\": \"testrefugee3\",\n            \"to_user\": \"testngo4\"\n        },\n        {\n            \"content\": \"hellooooo3\",\n            \"date_time\": 1587868956000,\n            \"from_user\": \"testrefugee3\",\n            \"to_user\": \"testngo4\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../nuHome_app/new_chat.py",
    "groupTitle": "Chat"
  },
  {
    "type": "post",
    "url": "/new_message/",
    "title": "Create a Message",
    "name": "PostMessage",
    "group": "Chat",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of user from whom the message is sent.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "to_user",
            "description": "<p>Username of user to whom the message is sent.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Message's content.</p>"
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
            "description": "<p>Successful Create a Message.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"from_user\": \"testrefugee3\",\n        \"to_user\": \"testngo4\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../nuHome_app/new_chat.py",
    "groupTitle": "Chat"
  },
  {
    "type": "delete",
    "url": "/delete_comment/",
    "title": "Delete a Comment",
    "name": "DeleteComment",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"comment_id\": 3\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "NoCommentFound",
            "description": "<p>No comment found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../nuHome_app/comments.py",
    "groupTitle": "Comments"
  },
  {
    "type": "get",
    "url": "/get_comments/",
    "title": "Select all Comments of a Post",
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
            "description": "<p>Successful Select Comments of a Post.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": [\n        {\n            \"comment_id\": 1,\n            \"username\": \"sheep\",\n            \"content\": \"Nice post!\",\n            \"date_time\": \"2020-01-01 23:50:00 GMT+2\"\n        },\n        {\n            \"comment_id\": 2,\n            \"username\": \"wolverine\",\n            \"content\": \"Very helpful\",\n            \"date_time\": \"2020-01-01 23:55:00 GMT+2\"\n        },\n        {\n            \"comment_id\": 3,\n            \"username\": \"deer\",\n            \"content\": \"Sounds good, but where should we meet?\",\n            \"date_time\": \"2020-01-02 12:50:00 GMT+2\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../nuHome_app/comments.py",
    "groupTitle": "Comments"
  },
  {
    "type": "post",
    "url": "/new_comment/",
    "title": "Create a Comment",
    "name": "PostComments",
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
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Comment's content.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"comment_id\": 10,\n        \"post_id\": 5\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../nuHome_app/comments.py",
    "groupTitle": "Comments"
  },
  {
    "type": "delete",
    "url": "/delete_post/",
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
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "NoPostFound",
            "description": "<p>No post found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../nuHome_app/posts.py",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/get_all_posts/",
    "title": "Select all Posts",
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
            "description": "<p>Successful Select all Posts.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": [\n        {\n            \"username\": \"alpaca\",\n            \"post_id\": 1,\n            \"title\": \"Food Resources Nearby\",\n            \"content\": \"Free food distribution for refugees at Frobes Ave!\",\n            \"status\": \"unverified\",\n            \"category\": \"living\",\n            \"date_time\": \"2020-01-01 19:00:00 GMT+2\"\n        },\n        {\n            \"username\": \"goat\",\n            \"post_id\": 2,\n            \"title\": \"Job Opportunities!\",\n            \"content\": \"Come get a job as a banker.\",\n            \"status\": \"verified\",\n            \"category\": \"living\",\n            \"date_time\": \"2020-01-01 19:58:00 GMT+2\"\n        },\n        {\n            \"username\": \"bear\",\n            \"post_id\": 3,\n            \"title\": \"New Gathering\",\n            \"content\": \"Gathering at Murray Ave!\",\n            \"status\": \"false\",\n            \"category\": \"social\",\n            \"date_time\": \"2020-01-01 22:00:00 GMT+2\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../nuHome_app/posts.py",
    "groupTitle": "Posts"
  },
  {
    "type": "post",
    "url": "/new_post/",
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
    "filename": "../nuHome_app/posts.py",
    "groupTitle": "Posts"
  },
  {
    "type": "put",
    "url": "/update_post_status/",
    "title": "Update Post Status",
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
            "field": "status",
            "description": "<p>Post's status.</p>"
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
            "description": "<p>Successful Update Post Status.</p>"
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
    "filename": "../nuHome_app/posts.py",
    "groupTitle": "Posts"
  },
  {
    "type": "delete",
    "url": "/delete_user_profile/",
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
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "NoProfileFound",
            "description": "<p>No valid user profile.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../nuHome_app/profile.py",
    "groupTitle": "UserProfile"
  },
  {
    "type": "get",
    "url": "/get_avatar/",
    "title": "Get User Avatar",
    "name": "GetUserAvatar",
    "group": "UserProfile",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Get user avatar.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"avatar\": 2\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "NoProfileFound",
            "description": "<p>No valid user profile.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../nuHome_app/profile.py",
    "groupTitle": "UserProfile"
  },
  {
    "type": "get",
    "url": "/get_user_profile/",
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"username\": \"tiger\",\n        \"avatar\": 10,\n        \"bio\": \"Help me find a life here.\"\n        \"region\": \"Skopje, Macedonia\",\n        \"verification_status\": false\n    }\n}",
          "type": "json"
        },
        {
          "title": "NGO-Worker-Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"username\": \"NGO_cat\",\n        \"avatar\": 8,\n        \"bio\": \"I wish for world peace.\"\n        \"region\": \"Skopje, Macedonia\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "NGO-Admin-Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"username\": \"NGO_elephant\",\n        \"avatar\": 4,\n        \"bio\": \"\"\n        \"region\": \"\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "NoProfileFound",
            "description": "<p>No valid user profile.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../nuHome_app/profile.py",
    "groupTitle": "UserProfile"
  },
  {
    "type": "get",
    "url": "/get_sar",
    "title": "Request SAR file",
    "name": "GetUserSAR",
    "group": "UserProfile",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Request SAR file.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"url\": \"/tmp/sample_file.pdf\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../nuHome_app/sar.py",
    "groupTitle": "UserProfile"
  },
  {
    "type": "put",
    "url": "/update_user_profile/",
    "title": "Update User Profile",
    "name": "PutUserProfile",
    "group": "UserProfile",
    "parameter": {
      "fields": {
        "Parameter": [
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
            "field": "bio",
            "description": "<p>User's bio.</p>"
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
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "NoProfileFound",
            "description": "<p>No valid user profile.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../nuHome_app/profile.py",
    "groupTitle": "UserProfile"
  }
] });
