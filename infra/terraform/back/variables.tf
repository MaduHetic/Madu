variable "back_instance_type" {
  type = string
  default = "t2.micro"
  description = "Instance type to use for back instances"
}

variable "back_instance_count" {
  type = number
  default = 1
  description = "Number of instances to create for the back"
}

variable "back_ami" {
  type = string
  description = "Image to use for back instances (e.g. Ubuntu, Debian)"
}

variable "back_key_name" {
  type = string
  description = "AWS Key name (SSH) to use for the back instances"
}

variable "stage" {
  type = string
  default = "staging"
  description = "application stage"
}

variable "username" {
  type = string
  default = "user"
  description = "database username"
}

variable "password" {
  type = string
  default = "rootroot"
  description = "database password"
}

variable "name" {
  type = string
  default = "madu"
  description = "database name"
}
