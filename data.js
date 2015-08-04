var data = {
    "id": 1,
    "uuid": 1,
    "name": "App",
    "properties": {
        "width": 275,
        "height": 567
    },
    "scenes": [{
        "id": "3233",
        "uuid": "3233",
        "name": "场景",
        "type": "Scene",
        "parent": 1,
        "properties": {
            "position": "absolute",
            "left": 0,
            "top": 0,
            "background-image": "http://y1.ifengimg.com/a/2015/0527/b0edce8d1f87ea8size138_w402_h600.jpg"
        }
    }, {
        "id": "9382",
        "uuid": "9382",
        "name": "场景",
        "type": "Scene",
        "parent": 1,
        "properties": {
            "position": "absolute",
            "left": 0,
            "top": 0,
            "background-image": "http://y1.ifengimg.com/a/2015/0527/0c52d9c08f5c1bbsize72_w462_h675.jpg"
        }
    }],
    "components": [{
        "id": "25085",
        "uuid": "25085",
        "name": "Text Component",
        "type": "TextComponent",
        "parent": "3233",
        "properties": {
            "left": 0,
            "top": 400,
            "width": 275,
            "height": 132,
            "display": "block",
            "background": "#ffffff",
            "position": "absolute",
            "cursor": "move",
            "text": "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;钢铁侠，酷炫的毒舌矮富帅的典型是“斯塔克工业”的董事长，创造了MK谢列机动装甲，成为钢铁侠。特点：壕，毒舌，装备十分炫酷<br>",
            "opacity": 0.79,
            "scale": 1
        }
    }, {
        "id": "31314",
        "uuid": "31314",
        "name": "Image Component",
        "type": "ImageComponent",
        "parent": "3233",
        "properties": {
            "left": 1,
            "top": 198,
            "width": 164,
            "height": 150,
            "display": "block",
            "background": "red",
            "position": "absolute",
            "cursor": "move",
            "image": "http://y1.ifengimg.com/a/2015/0527/b4388cc8df6c5a0size60_w675_h668.jpg"
        }
    }, {
        "id": "35027",
        "uuid": "35027",
        "name": "Image Component",
        "type": "ImageComponent",
        "parent": "3233",
        "properties": {
            "left": 128,
            "top": 541,
            "width": 24,
            "height": 14,
            "display": "block",
            "position": "absolute",
            "cursor": "move",
            "image": "http://y1.ifengimg.com/a/2015/0527/9a4b80945bcb6ebsize2_w50_h29.png"
        }
    }, {
        "id": "74834",
        "uuid": "74834",
        "name": "Text Component",
        "type": "TextComponent",
        "parent": "3233",
        "properties": {
            "left": 4,
            "top": 497,
            "width": 269,
            "height": 22,
            "display": "block",
            "background": "#ffffff",
            "position": "absolute",
            "cursor": "move",
            "text": "ufan福利价：34元 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 点击购买",
            "opacity": "0.72",
            "fontSize": 17,
            "color": "#ff8000"
        }
    }],
    "events": [{
        "id": "w5Wxyhq4BkoNzDEV",
        "uuid": "w5Wxyhq4BkoNzDEV",
        "name": "Event",
        "parentId": "35027",
        "eventType": "click",
        "targets": [{
            "id": "rgolQy5uocZffoP7",
            "targetId": "1",
            "actionType": "action",
            "value": {
                "method": "swithSceneNext",
                "params": {}
            }
        }]
    }, {
        "id": "66adIIHZwln7RSEV",
        "uuid": "66adIIHZwln7RSEV",
        "name": "Event",
        "parentId": "3233",
        "eventType": "sceneEnter",
        "targets": [{
            "id": "emaqIA5s9koq3mEG",
            "targetId": "33",
            "actionType": "action",
            "value": {
                "method": "start",
                "params": {}
            }
        }]
    }],
    "timelineContainers": [{
        "properties": {
            "iteration_count": 1,
            "direction": "normal"
        },
        "components": [{
            "eid": "25085",
            "properties": [{
                "pname": "scale",
                "timeline": {
                    "id": "934PUFvhE088mYfC",
                    "keyframes": [{
                        "id": "qa8Zbq8cfFnXNQZl",
                        "time": 0,
                        "value": 0.5,
                        "effect": ""
                    }, {
                        "id": "AhAExl4VAoZ9P0ms",
                        "time": 2000,
                        "value": 1,
                        "effect": "Linear.None"
                    }]
                }
            }, {
                "pname": "opacity",
                "timeline": {
                    "id": "hJXXyRQhblGv7cOT",
                    "keyframes": [{
                        "id": "yVqbJW9psHwRk3EC",
                        "time": 0,
                        "value": "0.00",
                        "effect": ""
                    }, {
                        "id": "4fjluc2gFKfoHcOX",
                        "time": 2000,
                        "value": "0.79",
                        "effect": "Linear.None"
                    }]
                }
            }]
        }, {
            "eid": "31314",
            "properties": [{
                "pname": "left",
                "timeline": {
                    "id": "qCbk5HOtMUUTB59j",
                    "keyframes": [{
                        "id": "uXx1E6m9T7dyQm0O",
                        "time": 0,
                        "value": -166,
                        "effect": ""
                    }, {
                        "id": "uXVxGitPzlkIIXSj",
                        "time": 2000,
                        "value": 1,
                        "effect": "Linear.None"
                    }]
                }
            }]
        }],
        "id": 33,
        "uuid": 33,
        "name": "dadasdasd",
        "parent": "3233"
    }],
    "effects": []
};