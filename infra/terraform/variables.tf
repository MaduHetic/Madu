variable "ssh_public_key" {
  type = string
}

variable "key_name" {
  type = string
  default = "key_madu"
}

variable "region" {
  type = string
  default = "eu-west-2"
}
