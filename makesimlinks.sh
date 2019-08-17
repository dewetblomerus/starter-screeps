#!/bin/bash
############################
# This script creates symlinks from the default branch of all screeps servers to this repo
############################

dir=$(pwd)
cd ~/Library/Application\ Support/screeps/scripts
server_dirs=$(ls -d */)

for server_dir in $server_dirs; do
  printf "Deleting files in $server_dir\n"
  rm -rf $server_dir/*
  printf "Creating symlink in $server_dir\n"
  ln -s $dir $server_dir/default
done
