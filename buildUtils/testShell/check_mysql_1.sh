#!/bin/bash

# 没测试过，可能有问题
echo "----方法1"

if [ `netstat -tunlp | grep 端口号 | wc -l` -gt "1" ] ;then
  echo "netstat MySQL is running."
else
  echo "MySQL is stopped"
  # systemctl start mariadb
fi

echo "----方法2"

if [ `ss -tunlp | grep 端口号 | wc -l` -gt "1" ] ;then
  echo "ss MySQL is running."
else
  echo "MySQL is stopped"
  # systemctl start mariadb
fi

echo "----方法3"

if [ `lsof -i tcp:端口号 | wc -l` -gt "1" ] ;then
  echo "ss MySQL is running."
else
  echo "MySQL is stopped"
  # systemctl start mariadb
fi

# php node 开发脚本
# node /shell_program/test_scripts/check_mysql_1.js

# if [ "$?" -eq ] ;then
#   echo "ss MySQL is running."
# else
#   echo "MySQL is stopped"
#   # systemctl start mariadb
# fi