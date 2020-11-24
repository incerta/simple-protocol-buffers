#!/bin/bash
protoc --js_out=import_style=commonjs,binary:./serializers ./proto/*.proto
