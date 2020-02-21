# Build project

## Terraform

Installer terraform [Terraform](https://www.terraform.io/downloads.html)

- Instance ec2 ubuntu 18.04
- Security group qui autorise le port 22 pour ssh 80 pour l'app et 3000 pour l'api

Aller dans le dossier Terraform

Il faut générer une clef ssh dans le fichier .ssh avec comme nom "admin_madu"

```
ssh-keygen -t rsa -b 4096
/Users/name_users/admin_madu
```

Aller dans le fichier terraform et lancer la commande 

```
cd terraform
Terraform init
```

puis ensuite 

```
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
- Le rôle back copy le docker-compose et l'execute sur le server aws

Commande pour lancer ansible
```
 ansible-playbook -i inventory/ec2.py playbook.yml --key ~/.ssh/admin_madu
```
