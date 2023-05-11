#!/bin/bash

# $# 获取参数个数    -ne 不等于的情况 && 并且
# [ $# -ne 2 ] && {
[ $# != 2 ] && {
  echo "must be two args"
  exit 119 # 终止程序运行，且返回 119 状态码 提供当前 shell 的 $? 变量，若是在函数里可以用 return 119 用法
}
echo ok