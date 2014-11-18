#!/bin/bash

curl -X PUT -H "Content-type: application/json" -d '{"name":"Do Stuff", "priority":"000000000000000000000001", "due":"9/20/87", "isComplete":"false", "tags":["stuff", "things"]}' localhost:3002/tasks/000000000000000000000002

