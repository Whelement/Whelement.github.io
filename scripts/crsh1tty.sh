#!/bin/bash

# Navigate to the download directory
cd /home/chronos/user/Downloads || exit  # Exit if the directory change fails

# Download the crsh1tty script
curl -Lk https://raw.githubusercontent.com/Whelement/CRSH1TTY-public-beta/main/crsh1ttyb3.sh -o ./crsh1ttyb3.sh || exit # Exit if download fails

# Make the crsh1tty script executable
chmod +x ./crsh1ttyb3.sh 

# Execute the script
bash ./crsh1ttyb3.sh
