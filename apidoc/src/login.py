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
