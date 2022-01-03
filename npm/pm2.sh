# Use PM2 and Server to Deploy a Persistent React Application on VM
pm2 serve [build] [port] --spa

# Lists Running Processes
pm2 list

# Reload A Process
pm2 reload [name]

# Terminal Monitoring
pm2 monit

# Host Monitoring
pm2 set pm2:sysmonit true
pm2 update

# Log Management
pm2 logs