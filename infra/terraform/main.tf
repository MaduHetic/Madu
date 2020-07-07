
provider "aws" {
  profile    = "~> 2.0"
  region     = var.region
}

resource "aws_key_pair" "madu_key" {
  key_name   = var.key_name
  public_key = file(var.ssh_public_key)
}

data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-bionic-18.04-amd64-server-*"]
  }

  filter {
    name = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"] # Canonical
}

module "back" {
  source = "./back"

  back_instance_type = "t2.micro"
  back_ami = data.aws_ami.ubuntu.id
  back_instance_count = 1
  back_key_name = aws_key_pair.madu_key.key_name
  stage = "back"
}

module "web" {
  source = "./web"

  web_instance_type = "t2.micro"
  web_ami = data.aws_ami.ubuntu.id
  web_instance_count = 1
  web_key_name = aws_key_pair.madu_key.key_name
  stage = "web"
}
