#!/bin/bash

# 显示登录时间和用户

# echo "The time and date are: "
# date
# echo ""
# echo "let's see who's logged in the system: "
# who

# 显示你的用户个人信息

echo "User info for username: ${USER}"
echo "User UID is: $UID"
echo "User Home is:" $HOME

printf_usage() {
  printf "Please enter an inter\n"
  # 给脚本的执行结果，赋予一个状态码，退出码
  exit 1
}

# read -p "提示信息"   接收用户输入的变量
read -p "Please input your number: " firstnum

# 对用户的输入进行判断 if 语句
# 限制用户必须输入数字
# 中括号前后必须有一个空格，是固定语法
# -n 是if的语句，对字符串进行判断，如果字符串为空，条件就不成立，如果字符串不为空，条件成立
# sed 的作用就是把字符串, 假如是 "qwer123" 进行替换，把所有的数字都替换为空，那么就剩下其他非数字的内容
if [ -n "`echo $firstnum|sed 's/[0-9]//g'`" ]
  then 
    printf_usage
fi

# 输入运算符号
read -p "Please input your operator: " operator

# 对符号进行判断 限制为 + - * /
if [ "${operator}" != "+" ] && [ "${operator}" != "-" ] && [ "${operator}" != "*" ] && [ "${operator}" != "/" ]
  then
    echo "只允许输入 + = * /"
    exit 2
fi

read -p "Please input your number: " secondnum

if [ -n "`echo $secondnum|sed 's/[0-9]//g'`" ]
  then 
    printf_usage
fi

# shell 中 * 号 要加 \ 还没试，不知道说的对不对
echo "${firstnum}${operator}${secondnum}结果是: $((${firstnum}${operator}${secondnum}))"
