
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
        "verification_status": false
    }
}

@apiSuccessExample {json} NGO-Worker-Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "username": "NGO_cat",
        "avatar": 8,
        "bio": "I wish for world peace."
        "region": "Skopje, Macedonia"
    }
}

@apiSuccessExample {json} NGO-Admin-Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "username": "NGO_elephant",
        "avatar": 4,
        "bio": ""
        "region": ""
    }
}
"""

"""
@api {put} /user_profile/:put Update User Profile
@apiName PutUserProfile
@apiGroup UserProfile

@apiParam {Number} avatar User's avatar index.
@apiParam {String} bio User's bio.

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
@api {get} /user_profile/:avatar Get user avatar
@apiName GetUserAvatar
@apiGroup UserProfile

@apiSuccess {String} status Successful Get user avatar.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "avatar": 2
    }
}
"""

"""
@api {get} /user_profile/:sar Request SAR file
@apiName GetUserSAR
@apiGroup UserProfile

@apiSuccess {String} status Successful Request SAR file.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "url": "/tmp/sample_file.pdf"
    }
}
"""


