#!/bin/bash

# # if [ `expr "$1" ":" ".*\.jpg"` ]
# if expr "$1" ":" ".*\.jpg"
#   then 
#     echo "这是 .jpg 结尾"
# else 
#   echo "这不是 .jpg 结尾"
# fi

echo `expr length 111`
echo `expr 111 \.1`
for str1 in I am zs, I am a teacher.
  do
    if [ `expr length ${str1}` -lt 5 ] 
      then
        echo $str1
    fi
done