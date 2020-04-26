

"""
@api {get} /new_chat/:get Select last 10 messages
@apiName GetMessages
@apiGroup Chat

@apiSuccess {String} status Successful Select last 10 or less messages to the user or from the user.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok",
    "res": [
        {
            "content": "hellooooo1",
            "date_time": "2020-04-26 02:37:06.193307+00:00",
            "from_user": "testrefugee3",
            "to_user": "testngo4"
        },
        {
            "content": "hellooooo2",
            "date_time": "2020-04-26 02:39:39.708631+00:00",
            "from_user": "testrefugee3",
            "to_user": "testngo4"
        },
        {
            "content": "hellooooo3",
            "date_time": "2020-04-26 02:42:36.431740+00:00",
            "from_user": "testrefugee1",
            "to_user": "testrefugee3"
        }
    ]
}
"""

"""
@api {post} /new_chat/:post Create a Message
@apiName PostMessage
@apiGroup Chat

@apiParam {String} to_user Username of user to whom the message is sent.
@apiParam {String} content Message's content.

@apiSuccess {String} status Successful Create a Message.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "from_user": "testrefugee3",
        "to_user": "testngo4"
    }
}
"""

