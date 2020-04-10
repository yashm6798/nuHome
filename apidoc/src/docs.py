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
@apiParam {UserType} type User's type.
@apiParam {String} region User's originated region.

@apiSuccess {String} status Successful Registration.

@apiError {String} UsernameAlreadyTaken The <code>id</code> of the User was taken.
"""

"""
@api {post} /user/:login User Login
@apiName LoginUser
@apiGroup User

@apiParam {String} username User's username.
@apiParam {String} password User's password.

@apiSuccess {String} status Successful Login.

@apiError (Error 302) {String} UserNotVerified The <code>id</code> of the User was not verified.
@apiError (Error 401) {String} UserNotFound The <code>id</code> of the User was not found.
"""

"""
@api {post} /user/:logout User Logout
@apiName LogoutUser
@apiGroup User

@apiParam {String} username User's username.

@apiSuccess {String} status Successful Logout.
"""

"""
@api {get} /user_profile/:get Get User Profile
@apiName GetUserProfile
@apiGroup UserProfile

@apiSuccess {String} status Successful Get User Profile.
@apiSuccess {String} username User's username.
@apiSuccess {URL} avatar User's avatar URL.
@apiSuccess {String} bio User's bio.
@apiSuccess {String} region User's region
@apiSuccess {String} verification_status User's verification status.
"""

"""
@api {post} /user_profile/:post Create User Profile
@apiName PostUserProfile
@apiGroup UserProfile

@apiParam {String} username User's username.
@apiParam {URL} avatar User's avatar URL.
@apiParam {UserType} type User's type.
@apiParam {String} region User's originated region.

@apiSuccess {String} status Successful Create User Profile.
"""

"""
@api {put} /user_profile/:put Update User Profile
@apiName PutUserProfile
@apiGroup UserProfile

@apiParam {String} username User's username.
@apiParam {URL} avatar User's avatar URL.
@apiParam {UserType} type User's type.
@apiParam {String} region User's originated region.

@apiSuccess {String} status Successful Update User Profile.
"""

"""
@api {delete} /user_profile/:delete Delete User Profile
@apiName DeleteUserProfile
@apiGroup UserProfile

@apiSuccess {String} status Successful Delete User Profile.
"""

"""
@api {get} /posts/:get Select User Post
@apiName GetPost
@apiGroup Posts

@apiSuccess {String} status Successful Select User Post.
@apiSuccess {String} username User's username.
@apiSuccess {String} title Post's title.
@apiSuccess {String} content Post's content.
@apiSuccess {String} status Post's status.
@apiSuccess {String} category Post's category.
@apiSuccess {Time} date_time Post's date and time.
"""

"""
@api {post} /posts/:post Create User Post
@apiName PostPost
@apiGroup Posts

@apiParam {String} title Post's title.
@apiParam {String} content Post's content.
@apiParam {String} status Post's status.
@apiParam {String} category Post's category.
@apiParam {Time} date_time Post's date and time.

@apiSuccess {String} status Successful Create User Post.
"""

"""
@api {put} /posts/:put Update User Post
@apiName PutPost
@apiGroup Posts

@apiParam {String} title Post's title.
@apiParam {String} content Post's content.
@apiParam {String} status Post's status.
@apiParam {String} category Post's category.
@apiParam {Time} date_time Post's date and time.

@apiSuccess {String} status Successful Update User Post.
"""

"""
@api {delete} /posts/:delete Delete User Post
@apiName DeletePost
@apiGroup Posts

@apiSuccess {String} status Successful Delete User Post.
"""

"""
@api {get} /posts/:notification_change Get notification of post change
@apiName PostNotify
@apiGroup Posts

@apiSuccess {String} status Successful Send Post change notification.
@apiParam {String} title Post's title.
"""

"""
@api {get} /comments/:get Select Comment
@apiName GetComments
@apiGroup Comments

@apiSuccess {String} status Successful Select Comment.
"""

"""
@api {post} /comments/:post Create User Post
@apiName PostComments
@apiGroup Comments

@apiParam {String} username User's username.
@apiParam {String} title Post's title.
@apiParam {String} content Comment's content.
@apiParam {Time} date_time Comment's date and time.

@apiSuccess {String} status Successful Post Comment.
"""

"""
@api {put} /comments/:put Put User Post
@apiName PutComments
@apiGroup Comments

@apiParam {String} username User's username.
@apiParam {String} title Post's title.
@apiParam {String} content Comment's content.
@apiParam {Time} date_time Comment's date and time.

@apiSuccess {String} status Successful Post Comment.
"""

"""
@api {delete} /comments/:delete Delete User Post
@apiName DeleteComments
@apiGroup Comments

@apiSuccess {String} status Successful Post Comment.
"""





