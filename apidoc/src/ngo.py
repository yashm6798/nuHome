
"""
@api {get} /ngo/:verified_users Get all verified users assigned to an NGO worker
@apiName GetVerifiedUsers
@apiGroup NGO

@apiSuccess {String} status Successful getting all verified users.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "usernames": ["rabbit", "monkey", "dolphin"]
    }
}
"""

"""
@api {put} /ngo/:verify Verify a user
@apiName VerifyUser
@apiGroup NGO

@apiParam {String} username User's username.

@apiSuccess {String} status Successful Verify a User.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "username": "snake"
    }
}
"""

