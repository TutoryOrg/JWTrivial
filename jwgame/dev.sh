#!/bin/bash

gnome-terminal -- /bin/zsh -c "npm run mock:api"
gnome-terminal -- /bin/zsh -c "npm run start"
adb reverse tcp:3001 tcp:3001
