define({ "api": [
  {
    "type": "get",
    "url": "/new_chat/:get",
    "title": "Select last 10 messages",
    "name": "GetMessages",
    "group": "Chat",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful Select last 10 or less messages to the user or from the user.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\",\n    \"res\": [\n        {\n            \"content\": \"hellooooo1\",\n            \"date_time\": \"2020-04-26 02:37:06.193307+00:00\",\n            \"from_user\": \"testrefugee3\",\n            \"to_user\": \"testngo4\"\n        },\n        {\n            \"content\": \"hellooooo2\",\n            \"date_time\": \"2020-04-26 02:39:39.708631+00:00\",\n            \"from_user\": \"testrefugee3\",\n            \"to_user\": \"testngo4\"\n        },\n        {\n            \"content\": \"hellooooo3\",\n            \"date_time\": \"2020-04-26 02:42:36.431740+00:00\",\n            \"from_user\": \"testrefugee1\",\n            \"to_user\": \"testrefugee3\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/new_chat.py",
    "groupTitle": "Chat"
  },
  {
    "type": "post",
    "url": "/new_chat/:post",
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
    "filename": "src/new_chat.py",
    "groupTitle": "Chat"
  },
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
    "version": "0.0.0",
    "filename": "src/comment.py",
    "groupTitle": "Comments"
  },
  {
    "type": "get",
    "url": "/comments/:get",
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
    "filename": "src/comment.py",
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
          },
          {
            "group": "Parameter",
            "type": "String",
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"comment_id\": 3\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/comment.py",
    "groupTitle": "Comments"
  },
  {
    "type": "get",
    "url": "/ngo/:verified_users",
    "title": "Get all verified users assigned to an NGO worker",
    "name": "GetVerifiedUsers",
    "group": "NGO",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Successful getting all verified users.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"usernames\": [\"rabbit\", \"monkey\", \"dolphin\"]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/ngo.py",
    "groupTitle": "NGO"
  },
  {
    "type": "put",
    "url": "/ngo/:verify",
    "title": "Verify a user",
    "name": "VerifyUser",
    "group": "NGO",
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
            "description": "<p>Successful Verify a User.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"username\": \"snake\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/ngo.py",
    "groupTitle": "NGO"
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
    "filename": "src/post.py",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/posts/:get",
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
    "filename": "src/post.py",
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"ok\"\n    \"res\": {\n        \"post_ids\": [8, 10, 13]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/post.py",
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
    "filename": "src/post.py",
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
            "type": "String",
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
    "filename": "src/post.py",
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
    "filename": "src/login.py",
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
    "filename": "src/login.py",
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
    "filename": "src/user_profile.py",
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
    "version": "0.0.0",
    "filename": "src/user_profile.py",
    "groupTitle": "UserProfile"
  },
  {
    "type": "get",
    "url": "/user_profile/:sar",
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
    "filename": "src/user_profile.py",
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
    "version": "0.0.0",
    "filename": "src/user_profile.py",
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
    "filename": "src/login.py",
    "groupTitle": "User"
  }
] });
