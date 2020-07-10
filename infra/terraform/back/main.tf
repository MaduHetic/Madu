
resource "aws_instance" "back" {
  ami = var.back_ami
  instance_type = var.back_instance_type
  count = var.back_instance_count
  key_name = var.back_key_name

  security_groups = [aws_security_group.back.name]

  tags = {
    Name = "${var.stage}-back"
    component = "back"
    stage = var.stage
  }
}

resource "aws_security_group" "back" {
  name = "${var.stage}-back"

  ingress {
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port = 3000
    to_port = 3000
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.stage}-back"
  }
}

resource "aws_elb" "back" {
  name = "${var.stage}-back-elb"
  availability_zones = ["eu-west-2a"]

  listener {
    instance_port = 3000
    instance_protocol = "http"
    lb_port = 80
    lb_protocol = "http"
  }

  health_check {
    healthy_threshold   = 2
    unhealthy_threshold = 2
    timeout             = 3
    target              = "HTTP:3000/"
    interval            = 30
  }

  instances                   = aws_instance.back.*.id
  cross_zone_load_balancing   = true
  idle_timeout                = 400
  connection_draining         = true
  connection_draining_timeout = 400

  tags = {
    Name = "${var.stage}-elb"
  }
}

resource "aws_db_instance" "mysql" {
  allocated_storage = 50
  instance_class = "db.t2.micro"
  engine = "mysql"
  engine_version = "5.7"
  username = var.username
  password = var.password
  name = var.name
  vpc_security_group_ids = [aws_security_group.mysql.id]
  skip_final_snapshot = false
}

resource "aws_security_group" "mysql" {
  name  = "${var.stage}-mysql"

  ingress {
    from_port = 3306
    to_port = 3306
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    security_groups = [aws_security_group.back.id]
  }

  egress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.stage}-back"
  }
}
