import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  postTitle: string = "";
  postImageUrl: string = "";
  postDescription: string = "";
  postDate: string = "";
  arrPosts: any[] = [];
  postList: string = "";

  constructor() {
    
    // Posts Iniciales

    let firstPost: Post = {
      title: 'EEUU Derriva Supuesto Ovni en Frontera de Alaska con Montana',
      imageURL: 'https://www.eluniversal.com.co/binrepository/1200x670/0c0/0d0/none/13704/NBNU/ovni-derribado-en-alaska_7363922_20230211130333.jpg',
      description: 'El gobierno de los Estados Unidos ha confirmado que los aviones militares derribaron un OVNI cerca de la costa de Alaska el sábado 11 de febrero a la 1:15 pm. Por su parte, la Ministra de Defensa de Canadá, Anita Anand, acaba de informar que el objeto volador no identificado que fue derribado en su espacio aéreo parece ser un cilindro pequeño y de color plata. Sin embargo, no se tienen más detalles.',
      date: '2023/02/12'
    }

    let secondPost: Post = {
      title: '¿Que esta pasando en el espacio aereo norteamericano?',
      imageURL: 'https://services.meteored.com/img/article/globos-ovnis-y-misterio-que-esta-pasando-en-los-cielos-del-norte-1676162534454_1024.jpg',
      description: 'Un F-22 Raptor de la Fuerza Aérea de los Estados Unidos derribó un OVNI sobre Canadá el sábado por la tarde, según informó el Primer Ministro de Canadá, Justin Trudeau, a través de Twitter. Este incidente ocurrió después de que el Comando de Defensa Aeroespacial de América del Norte (NORAD) alertara sobre un objeto volador de gran altura que sobrevolaba el norte de Canadá.',
      date: '2023/02/15'
    }

    this.arrPosts = [firstPost, secondPost];

    this.arrPosts.forEach(post => {
      this.postList += `<div class="col">   
                          <article class="card shadow-sm">
                            <figure>
                              <img class="bd-placeholder-img card-img-top" src="${post.imageURL}" alt="${post.title}">
                            </figure>
                            <div class="post-info">
                              <h3>${post.title}</h3>
                              <p class="post-content">${post.description}</p>
                              <p class="publish-date">Fecha de publicación: ${post.date}</p>
                            </div>
                          </article>
                        </div>    
                        `
    })

    console.log(this.arrPosts);
  }

  // Método Publica Post
  savePost(): void {
    let post: Post = {
      title: this.postTitle,
      imageURL: this.postImageUrl,
      description: this.postDescription,
      date: this.postDate
    }

    if (post.title == "" || post.imageURL == "" || post.description == "" || post.date == "") {
      alert('Por favor llena todos los campos para publicar la noticia, faltan datos en uno o más campos');
    } else {
      this.arrPosts.unshift(post);
      this.printPost();
      alert('La noticia ha sido publicada satisfactoriamente');

      // Vaciar Datos del Formulario despues de Postear
      this.postTitle = "";
      this.postImageUrl = "";
      this.postDescription = "";
      this.postDate = "";
    }

  }

  // Método Imprime nuevos Posts
  printPost(): void {
    this.postList = "";
    this.arrPosts.forEach(post => {
      this.postList += `<div class="col">   
                          <article class="card shadow-sm">
                            <figure>
                              <img class="bd-placeholder-img card-img-top" src="${post.imageURL}" alt="${post.title}">
                            </figure>
                            <div class="post-info">
                              <h3>${post.title}</h3>
                              <p class="post-content">${post.description}</p>
                              <p class="publish-date">Fecha de publicación: ${post.date}</p>
                            </div>
                          </article>
                        </div> 
                       `
    })
    console.log(this.arrPosts);
  }

}
