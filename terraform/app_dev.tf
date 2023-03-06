resource "aws_security_group" "allow_all" {
  name        = "allow_all"
  description = "Allow all inbound traffic"

  ingress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "web" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.small"
  key_name      = "aws-interview-buddy"

  vpc_security_group_ids = [aws_security_group.allow_all.id]

  user_data = <<-EOF
  #!/bin/bash

  sudo apt update -y
  sudo apt upgrade -y

  # Clone the repository to /home/ubuntu/stackit-sdk-nestjs
  cd /home/ubuntu/
  git clone https://github.com/stackitgroup/stackit-sdk-nestjs.git

  # Install nvm
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

  # Load nvm
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  
  # This loads nvm bash_completion

  # Install Node
  nvm install 19.7.0

  # Enable yarn
  corepack enable

  # PM2
  yarn add pm2 --global

  # Change sshd_config file to allow password authentication
  sudo sed -i 's/^PasswordAuthentication no/PasswordAuthentication yes/' /etc/ssh/sshd_config

  # Set password for ubuntu user
  echo 'ubuntu:angelpass' | chpasswd

  # Restart ssh service
  sudo service ssh restart
 EOF

  tags = {
    Name = "MyEC2Instance"
  }
}


data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"] // Canonical
}