#!/bin/bash

curl -X POST -H "Content-type: application/json" -d '{"name":"Do Stuff", "priority":"000000000000000000000001", "due":"new Date()", "isComplete":"false", "tags":"[stuff, things]"}' localhost:3002/tasks

