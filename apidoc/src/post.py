

"""
@api {get} /posts/:get Select all Posts 
@apiName GetPost
@apiGroup Posts

@apiSuccess {String} status Successful Select all Posts.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": [
        {
            "username": "alpaca",
            "post_id": 1,
            "title": "Food Resources Nearby",
            "content": "Free food distribution for refugees at Frobes Ave!",
            "status": "unverified",
            "category": "living",
            "date_time": "2020-01-01 19:00:00 GMT+2"
        },
        {
            "username": "goat",
            "post_id": 2,
            "title": "Job Opportunities!",
            "content": "Come get a job as a banker.",
            "status": "verified",
            "category": "living",
            "date_time": "2020-01-01 19:58:00 GMT+2"
        },
        {
            "username": "bear",
            "post_id": 3,
            "title": "New Gathering",
            "content": "Gathering at Murray Ave!",
            "status": "false",
            "category": "social",
            "date_time": "2020-01-01 22:00:00 GMT+2"
        }
    ]
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
@apiParam {String} date_time Post's date and time.

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
        "post_ids": [8, 10, 13]
    }
}
"""
