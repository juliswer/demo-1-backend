data "aws_availability_zones" "available" {}

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "2.77.0"

  name                 = "stackit"
  cidr                 = "10.0.0.0/16"
  azs                  = data.aws_availability_zones.available.names
  public_subnets       = ["10.0.4.0/24", "10.0.5.0/24", "10.0.6.0/24"]
  enable_dns_hostnames = true
  enable_dns_support   = true
}

resource "aws_db_subnet_group" "stackit" {
  name       = "stackit"
  subnet_ids = module.vpc.public_subnets

  tags = {
    Name = "stackit"
  }
}

resource "aws_security_group" "rds" {
  name   = "stackit_rds"
  vpc_id = module.vpc.vpc_id

  ingress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "stackit_rds"
  }
}

resource "aws_db_parameter_group" "stackit" {
  name   = "stackit"
  family = "postgres14"

  parameter {
    name  = "log_connections"
    value = "1"
  }
}

resource "aws_db_instance" "stackit" {
  identifier             = "stackitsdk"
  instance_class         = "db.t3.micro"
  allocated_storage      = 20
  engine                 = "postgres"
  engine_version         = "14.1"
  username               = "postgres"
  db_name                = "postgres"
  password               = "132Barbarbarbarbar3w$"
  db_subnet_group_name   = aws_db_subnet_group.stackit.name
  vpc_security_group_ids = [aws_security_group.rds.id]
  parameter_group_name   = aws_db_parameter_group.stackit.name
  publicly_accessible    = true
  skip_final_snapshot    = true
  storage_encrypted      = true
  max_allocated_storage  = 1000
}

# Terraform to create a database using RDS from AWS with public access and using the DEV template