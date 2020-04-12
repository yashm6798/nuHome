
"""
@api {get} /comments/:get Select all Comments of a Post
@apiName GetComments
@apiGroup Comments

@apiParam {Number} comment_id Comment's <code>id</code>.

@apiSuccess {String} status Successful Select Comments of a Post.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": [
        {
            "comment_id": 1,
            "username": "sheep",
            "content": "Nice post!",
            "date_time": "2020-01-01 23:50:00 GMT+2"
        },
        {
            "comment_id": 2,
            "username": "wolverine",
            "content": "Very helpful",
            "date_time": "2020-01-01 23:55:00 GMT+2"
        },
        {
            "comment_id": 3,
            "username": "deer",
            "content": "Sounds good, but where should we meet?",
            "date_time": "2020-01-02 12:50:00 GMT+2"
        }
    ]
}
"""

"""
@api {post} /comments/:post Create a Comment
@apiName PostComments
@apiGroup Comments

@apiParam {Number} post_id Post's <code>id</code>.
@apiParam {String} content Comment's content.
@apiParam {String} date_time Comment's date and time.

@apiSuccess {String} status Successful Post a Comment.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "comment_id": 3
    }
}
"""

"""
@api {delete} /comments/:delete Delete a Comment
@apiName DeleteComments
@apiGroup Comments

@apiParam {Number} comment_id Comment's <code>id</code>.

@apiSuccess {String} status Successful Delete a Comment.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "comment_id": 3
    }
}
"""





