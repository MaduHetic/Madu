# Build project

## Requirements

- Install python3
- Install [Terraform](https://www.terraform.io/downloads.html)
- Install [Ansbile](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)

exporter 

## Terraform

- Instance ec2 ubuntu 18.04 pour le back (api) avec security group sur le 3000 et un elastic load balancer
- Instance ec2 ubuntu 18.04 pour le front avec security group sur le 80 et 22 et un elastic load balancer
- Instance RDS Mysql


Il faut générer une clef ssh dans le fichier .ssh 

```
ssh-keygen -t rsa -b 4096
/Users/name_users/key_madu
```

exporter les credentials de l'IAM user

```
export AWS_SECRET_ACCESS_KEY=<your-secret-key>
export AWS_ACCESS_KEY_ID=<your-access-key>
```
Ensuite lancer terraform
```
Terraform init
Terraform plan
Terraform apply
```

## Ansible

Installer les dépendances pour l'inventaire dynamique

```
pip install -r requi.txt
```

Pour les rôles :
- Le rôle python install python pour le rôle gerlingguy.docker
- Le rôle gerlingguy.docker install docker sur le server aws
- Le rôle back copie le docker-compose et l'execute sur le server aws
- Le rôle web copie le docker-compose et l'execute sur le server aws

Aller chercher sur aws rds le endpoint de la database puis le copie coller dans tag_component_back.yml.
Ensuite aller mettre l'ip du back dans tag_component_web.yml
Commande pour lancer ansible
```
 ansible-playbook -i inventory/ec2.py playbook.yml --user ubuntu --become --key ~/.ssh/key_madu
```
