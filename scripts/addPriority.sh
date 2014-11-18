#!/bin/bash

curl -X POST  -H "Content-type: application/json" -d '{"name":"Oscar", "color":"green"}' localhost:3002/priorities
