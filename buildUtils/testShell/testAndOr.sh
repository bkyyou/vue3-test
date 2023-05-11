#!/bin/bash

read -p "Please input a number: " var1

[ "$var1" -eq "1" ] && {
  echo "输入了一个1"
  exit 0
}

[ "$var1" -eq "2" ] && {
  echo "输入了一个2"
  exit 0
}

[ "$var1" -ne "2" -a "$var1" -ne "1" ] && {
  echo "输入了1或者2"
  exit 1
}