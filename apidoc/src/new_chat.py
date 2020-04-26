

"""
@api {get} /new_chat/:get Select last 10 messages
@apiName GetMessages
@apiGroup Chat

@apiParam {String} username Username of user to retrieve the messages.

@apiSuccess {String} status Successful Select last 10 or less messages to the user or from the user.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok",
    "res": [
        {
            "content": "hellooooo",
            "date_time": 1587868626000,
            "from_user": "testrefugee3",
            "to_user": "testngo4"
        },
        {
            "content": "hellooooo",
            "date_time": 1587868779000,
            "from_user": "testrefugee3",
            "to_user": "testngo4"
        },
        {
            "content": "hellooooo3",
            "date_time": 1587868956000,
            "from_user": "testrefugee3",
            "to_user": "testngo4"
        }
    ]
}
"""

"""
@api {post} /new_chat/:post Create a Message
@apiName PostMessage
@apiGroup Chat

@apiParam {String} username Username of user from whom the message is sent.
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

