

```
## ▶ Backend (Spring Boot)

### Requisitos
- Java 17+
- MySQL
- Maven

### Configuración

1. Crear base de datos en MySQL:
```sql id="db_create"
CREATE DATABASE peliculas_bd;
```
Configurar aplication properties
spring.datasource.url=jdbc:mysql://localhost:3306/nombre_de_tu_bd
spring.datasource.username=root
spring.datasource.password=tu_password


```
en xampp inicializo mysql para que mysql workbrench pueda funcionar y en mi sql uso mi base de datos creada y entonces en neatbeans en el metodo main le doy run file para que el backend pueda correr y visualizo que funcione en postman.

El backend corre en:


http://localhost:8080

FRONTED:

Creo  una carpeta llamada Fronted la abro en visual studio code y abro la terminal y entonces
ejecuto npm create vite@lates para crear  la carpeta llamada fronted_peliculas donde trabajaremos todo el fronted y luego ejecuto npm run dev que ejecutara el fronted en el navegador con http://localhost:5173 donde se mostrara como el backend y fronted se enlazan.

```
