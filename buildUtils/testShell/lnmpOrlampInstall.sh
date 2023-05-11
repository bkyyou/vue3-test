#!/bin/bash

path=/shell-program/test_scripts/

[ ! -d "$path" ] && mkdir $path -p

cat <<END
  1.:[install lamp]
  2.:[install lnmp]
  3.:[exit]
  pls input the num you want:
END

read num

expr $num + 1 &> /dev/null

[ $? -ne 0 ] && {
  echo "Ten num must is {1|2|3}"
  exit 1
}

[ "$num" -eq "1" ] && {
  echo "start installing ... lamp"
  sleep 2;

  # 判断是否有可执行权限，有就执行，没有提示
  # [ -x "$path/lamp.sh"  ] || {
  #   echo "The file is error..."
  #   exit 1
  # }
  # $path/lamp.sh

  # 运行脚本，直接运行不好么？？？
  source $path/lamp.sh
  exit $?
}

[ "$num" -eq "2" ] && {
  echo "start installing ... lnmp"
  sleep 2;

  # 判断是否有可执行权限，有就执行，没有提示
  # [ -x "$path/lnmp.sh"  ] || {
  #   echo "The file is error..."
  #   exit 1
  # }
  # $path/lnmp.sh

  # 运行脚本，直接运行不好么？？？
  source $path/lnmp.sh
  exit $?
}

[ "$num" -eq "3" ] && {
  echo "byebye"
}