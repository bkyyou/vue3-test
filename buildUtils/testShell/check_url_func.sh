#!/bin/bash

if [ "$#" -ne 1 ] ;then
  echo "Usage: $0 url"
  exit 1
fi

# 利用 wget 命令测试 url 是否正常
wget --spider -q -o /dev/null --tries=1 -T 5 $1

# 对状态码判断，网站是否正常
if [ "$?" -eq 0 ] ;then
  echo "$1 is running..."
else 
  echo "$1 is down..."
fi