#!/usr/bin/env bash

PROTO_FILES_DIR_PATH='./proto'
JS_OUTPUT_DIR_NAME='proto'

# Create output dir if not exist
if [ ! -d ./$JS_OUTPUT_DIR_NAME ]; then
  mkdir -p ./$JS_OUTPUT_DIR_NAME
fi

# Generate static modules from *.proc files (including rpc services)
# "proc" and "protoc-gen-grpc-web" should be in the $PATH
node_modules/.bin/grpc_tools_node_protoc \
  -I $PROTO_FILES_DIR_PATH $PROTO_FILES_DIR_PATH/*.proto \
  --js_out=import_style=commonjs,binary:./$JS_OUTPUT_DIR_NAME \
  --grpc_out=grpc_js:./$JS_OUTPUT_DIR_NAME \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./$JS_OUTPUT_DIR_NAME

echo "Gen *.proto files done $(date)"
