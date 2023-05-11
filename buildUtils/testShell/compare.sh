#!/bin/bash

a="$1"
b="$2"

# expr $a + $b &> /dev/null
expr $a + $b

[ $? -ne 0 ] && {
  echo "Argument must be a number"
  exit 1
}

if test -z "$a" ; then 
  echo "请输入两个参数"
  exit 1
fi

if [ -z "$b" ] ; then 
  echo "请输入第二个参数"
  exit 1
fi


if [ "$a" -gt "$b" ] ; then
  echo "a greater then b"
  exit 0
elif [ "$a" -eq "$b" ] ; then
  echo "a equal b"
  exit 0
else
  echo "a less then b"
  exit 0
fi
