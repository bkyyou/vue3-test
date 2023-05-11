#!/bin/bash

FreeMem=`free -m |awk 'NR==2 {print $NF}'`
CHARS="Current memory is $FreeMem"
targetFile="/tmp/messages.txt"

if [ "$FreeMem" -lt "2100" ] ;then
  echo $CHARS|tee $targetFile
  # mail -s "主题" 收件人 < 内容
  # mail -s "`date +%F-%T`$CHARS" 596737739@qq.com < $targetFile
  echo "内存不足，抓紧维护服务器"
fi