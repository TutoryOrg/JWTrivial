#!/bin/bash

gnome-terminal -- /bin/zsh -c "npm run mock:api"
gnome-terminal -- /bin/zsh -c "npm run start"
gnome-terminal -- /bin/zsh -c "emulator -avd MyDevice"
sleep 5
npm run adb:setup
