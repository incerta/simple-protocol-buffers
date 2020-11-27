#!/bin/bash
protoc --proto_path=proto --js_out=library=simpleservice,binary:js_autogen proto/simple.proto
