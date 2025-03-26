## Task-01 Implement the topology given below on cisco packet tracer:
![task1](https://github.com/user-attachments/assets/35fb1878-309f-4b37-becb-7b18f324244a)

Do the following:
- Assign IP to the computers/Laptops. The Network should like this XX.XX.YY.0. i.e. your roll number like 3879(38.79.1.0) and for all other networks Y should be replaced by 2, 3 and so on.
- Ping the server from any computer.
- Verify the telnet connection from all switches nearest to the computer.
- Do change the IP of Switch2 from PC user Nadeem using its command prompt.

## Task-02 Implement the topology given below on cisco packet tracer:
![task2](https://github.com/user-attachments/assets/aee1e22f-a028-4914-9e7e-93d29f3568d1)

Do the following:
- The IPs should be assigned to the computer using static method and to the router using CLI. The Network on one side of FastEthernet should like this XX.XX.YY.0 i.e. your roll number like 3879(38.79.1.0) and on another side it should be 3880(38.80.2.0).
- Run command of show run on Switch0 and Switch1 and take screenshot of it.
- Verify SSH and do assign IP to another interface of Router. It should be done through laptop0. Take screen shot of it.

## Task-03
Muhammad Nadeem Ghouri, a networking instructor at FAST University, assigned two hands-on tasks to his students to reinforce their skills in SSH and Telnet configurations on Cisco routers and switches. In the first task, students need to configure Telnet on a Cisco switch in Lab 08, where the university's networking team requires remote access for maintenance. They must enable VTY lines, set a login password, and verify Telnet access from a PC using command-line utilities. 
In the second task, students are required to configure SSH on a Cisco router in Lab 09 to ensure secure remote access for the university’s IT administrators. They need to enable SSH version 2, generate RSA keys, create a local user account, and restrict remote access to SSH only. After completing the configuration, they must test the setup by connecting remotely from a PC using an SSH client.

## Task-04
Muhammad Nadeem Ghouri, the network administrator of Tech Innovators Software House, is tasked with setting up remote access for the IT team to manage network devices securely. The software house has two departments: Development and IT Support, with a total of four PCs, one router, and one switch for internal connectivity. The IT Support team requires SSH access for secure remote management, while the Development team needs Telnet access for basic troubleshooting.

**Network Setup:**
- 1 Cisco Router (Router1)
- 1 Cisco Switch (Switch1)
- 4 PCs
- PC1 & PC2 (Development Team) – Require Telnet access to Switch1
- PC3 & PC4 (IT Support Team) – Require SSH access to Router1

**Task Instructions:**
- Configure Telnet on Switch1
- Assign a hostname: Switch1
- Set an enable password: cisco123
- Set up VTY lines (0-4) with a password for Telnet.
- Allow only Telnet access on VTY lines.
- Verify Telnet access from PC1 or PC2 using the telnet command.
- Configure SSH on Router1

- Assign a hostname: Router1
- Set an enable secret: admin@123
- Create a local user with privilege 15: Username: admin | Password: sshsecure
- Generate RSA keys (1024-bit or higher) for SSH.
- Enable SSH version 2 and restrict remote login to SSH only.
- Verify SSH access from PC3 or PC4 using an SSH client (ssh admin@Router1).

**Final Verification:**
- Ensure that PC1 & PC2 can connect to Switch1 using Telnet.
- Ensure that PC3 & PC4 can securely connect to Router1 using SSH.
- Use the show users and show ip ssh commands to verify active sessions.
