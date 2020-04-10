"""
  // "url" : "https://api.example.com",
  // "sampleUrl": "https://apidoc.free.beeceptor.com",
  // "header": {
  //   "title": "Introduction",
  //   "filename": "header.md"
  // },
  // "footer": {
  //   "title": "Best practices",
  //   "filename": "footer.md"
  // },
"""

"""
@api {post} /user/:register Register User Account
@apiName RegisterUser
@apiGroup User

@apiParam {String} username User's username.
@apiParam {String} password User's password.
@apiParam {String} type User's type.
@apiParam {String} region User's region.

@apiSuccess {String} status Successful Registration.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "username": "lion"
    }
}

@apiError {String} UsernameAlreadyTaken The <code>username</code> was already taken.
"""

"""
@api {post} /user/:login User Login
@apiName LoginUser
@apiGroup User

@apiParam {String} username User's username.
@apiParam {String} password User's password.

@apiSuccess {String} status Successful Login.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {}
}

@apiError (Error 401) {String} UserNotFound The <code>username</code> was not found.
"""

"""
@api {post} /user/:logout User Logout
@apiName LogoutUser
@apiGroup User

@apiSuccess {String} status Successful Logout.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {}
}
"""

"""
@api {get} /user_profile/:get Get User Profile
@apiName GetUserProfile
@apiGroup UserProfile

@apiSuccess {String} status Successful Get User Profile.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Refugee-Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "username": "tiger",
        "avatar": 10,
        "bio": "Help me find a life here."
        "region": "Skopje, Macedonia",
        "verification_status": "unverified"
    }
}

@apiSuccessExample {json} NGO-Worker-Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "username": "NGO_cat",
        "avatar": 8,
        "bio": "I wish for wolrd peace"
        "region": "Skopje, Macedonia"
    }
}
"""

"""
@api {post} /user_profile/:post Create User Profile
@apiName PostUserProfile
@apiGroup UserProfile

@apiParam {String} username User's username.
@apiParam {Number} avatar User's avatar index.
@apiParam {String} type User's type.
@apiParam {String} region User's region.

@apiSuccess {String} status Successful Create User Profile.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "username": "giraffe"
    }
}
"""

"""
@api {put} /user_profile/:put Update User Profile
@apiName PutUserProfile
@apiGroup UserProfile

@apiParam {String} username User's username.
@apiParam {Number} avatar User's avatar index.
@apiParam {String} type User's type.
@apiParam {String} region User's region.

@apiSuccess {String} status Successful Update User Profile.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "username": "horse"
    }
}
"""

"""
@api {delete} /user_profile/:delete Delete User Profile
@apiName DeleteUserProfile
@apiGroup UserProfile

@apiSuccess {String} status Successful Delete User Profile.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "username": "duck"
    }
}
"""

"""
@api {get} /posts/:get Select a Post
@apiName GetPost
@apiGroup Posts

@apiParam {Number} post_id Post's <code>id</code>.

@apiSuccess {String} status Successful Select a Post.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "username": "alpaca",
        "post_id": 4,
        "title": "Food resources nearby",
        "content": "Free food distribution for refugees at Frobes Ave!",
        "status": "unverified",
        "category": "living",
        "date_time": "2020-01-01 19:00:00 GMT+2"
    }
}
"""

"""
@api {post} /posts/:post Create a Post
@apiName PostPost
@apiGroup Posts

@apiParam {String} title Post's title.
@apiParam {String} content Post's content.
@apiParam {String} category Post's category.
@apiParam {Time} date_time Post's date and time.

@apiSuccess {String} status Successful Create a Post.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "post_id": 8
    }
}
"""

"""
@api {put} /posts/:put Update a Post
@apiName PutPost
@apiGroup Posts

@apiParam {Number} post_id Post's <code>id</code>.
@apiParam {String} title Post's title.
@apiParam {String} content Post's content.
@apiParam {String} status Post's status.
@apiParam {String} category Post's category.
@apiParam {Time} date_time Post's date and time.

@apiSuccess {String} status Successful Update a Post.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "post_id": 8
    }
}
"""

"""
@api {delete} /posts/:delete Delete a Post
@apiName DeletePost
@apiGroup Posts

@apiParam {Number} post_id Post's <code>id</code>.

@apiSuccess {String} status Successful Delete a Post.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "post_id": 8
    }
}
"""

"""
@api {get} /posts/:notification_change Get notification of post change
@apiName PostNotify
@apiGroup Posts

@apiSuccess {String} status Successful Send Post change notification.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "post_id": 8
    }
}
"""

"""
@api {get} /comments/:get Select a Comment
@apiName GetComments
@apiGroup Comments

@apiParam {Number} post_id Post's <code>id</code>.
@apiParam {Number} comment_id Comment's <code>id</code>.

@apiSuccess {String} status Successful Select Comment of a Post.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "post_id": 8,
        "comment_id": 3,
        "comment_owner": "sheep",
        "comment_content": "Nice post!",
        "date_time": "2020-01-01 19:50:00 GMT+2"
    }
}
"""

"""
@api {post} /comments/:post Create a Comment
@apiName PostComments
@apiGroup Comments

@apiParam {String} content Comment's content.
@apiParam {Time} date_time Comment's date and time.

@apiSuccess {String} status Successful Post a Comment.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "post_id": 8,
        "comment_id": 3
    }
}
"""

"""
@api {delete} /comments/:delete Delete a Comment
@apiName DeleteComments
@apiGroup Comments

@apiParam {Number} post_id Post's <code>id</code>.
@apiParam {Number} comment_id Comment's <code>id</code>.

@apiSuccess {String} status Successful Delete a Comment.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {}
}
"""





