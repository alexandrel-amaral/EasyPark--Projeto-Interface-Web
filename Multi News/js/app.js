const API_KEY = 'd527d4a9b8734075a1219811a42a6359';


//GATILHO
window.onload = function Inicio (){
    let pr = new XMLHttpRequest ();
    pr.onload = exibirPrimeira;
    pr.open ('GET', `http://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`);
    pr.send ();
    let se = new XMLHttpRequest ();
    se.onload = exibirSegunda;
    se.open ('GET', `http://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`);
    se.send ();
    let ter= new XMLHttpRequest ();
    ter.onload = exibirTerceira;
    ter.open ('GET', `http://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`);
    ter.send ();
    let ini = new XMLHttpRequest ();
    ini.onload = exibirInicio;
    ini.open ('GET', `http://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`);
    ini.send ();
    
}


//PRINCIPAIS
//PRIMEIRA
function exibirPrimeira (){
    let divPrimeira = document.getElementById('primeira');
    let prim ='';

    let dados = JSON.parse (this.responseText);
for (i=0; i<1; i++) {
    let prime = dados.articles[i];
    let data = new Date (prime.publishedAt);
    prim = prim + `
    <div class="left-side">
                     <div class="masonry-box post-media">
						 <img src="${prime.urlToImage}" alt="" class="img-fluid">
						 <div class="shadoweffect">
							<div class="shadow-desc">
								<div class="blog-meta">
									<h4><a href="${prime.url}" target="_blank" title="">${prime.title}</a></h4>
									<small><a href="${prime.url}" target="_blank" title="">${data.toLocaleDateString ()}</a></small>
									<small><a href="${prime.url}" target="_blank" title="">por ${prime.author}</a></small>
								</div><!-- end meta -->
							</div><!-- end shadow-desc -->
						</div><!-- end shadow -->
                    </div><!-- end post-media -->
    </div>                      
        `;
}
divPrimeira.innerHTML = prim;

}

//SECUNDA
function exibirSegunda (){
    let divSegunda = document.getElementById('segunda');
    let segun ='';

    let dados = JSON.parse (this.responseText);
for (i=1; i<2; i++) {
    let segund = dados.articles[i];
    let data = new Date (segund.publishedAt);
    segun = segun + `
    <div class="center-side">
                     <div class="masonry-box post-media">
						 <img src="${segund.urlToImage}" alt="" class="img-fluid">
						 <div class="shadoweffect">
							<div class="shadow-desc">
								<div class="blog-meta">
									<h4><a href="${segund.url}" target="_blank" title="">${segund.title}</a></h4>
									<small><a href="${segund.url}" target="_blank" title="">${data.toLocaleDateString ()}</a></small>
									<small><a href="${segund.url}" target="_blank" title="">por ${segund.author}</a></small>
								</div><!-- end meta -->
							</div><!-- end shadow-desc -->
						</div><!-- end shadow -->
                    </div><!-- end post-media -->
    </div>                      
        `;
}
divSegunda.innerHTML = segun;

}

//TERCEIRA

function exibirTerceira (){
    let divTerceira = document.getElementById('terceira');
    let terc ='';

    let dados = JSON.parse (this.responseText);
for (i=2; i<3; i++) {
    let tercei = dados.articles[i];
    let data = new Date (tercei.publishedAt);
    terc = terc + `
    <div class="right-side hidden-md-down">
                     <div class="masonry-box post-media">
						 <img src="${tercei.urlToImage}" alt="" class="img-fluid">
						 <div class="shadoweffect">
							<div class="shadow-desc">
								<div class="blog-meta">
									<h4><a target="_blank" href="${tercei.url}" title="">${tercei.title}</a></h4>
									<small><a target="_blank" href="${tercei.url}" title="">${data.toLocaleDateString ()}</a></small>
									<small><a target="_blank" href="${tercei.url}" title="">por ${tercei.author}</a></small>
								</div><!-- end meta -->
							</div><!-- end shadow-desc -->
						</div><!-- end shadow -->
                    </div><!-- end post-media -->
    </div>                      
        `;
}
divTerceira.innerHTML = terc;

}

//NOTICIAS

function exibirInicio (){
    let divTela = document.getElementById('tela');
    let inic ='';

    let dados = JSON.parse (this.responseText);


for (i=4; i<dados.articles.length; i++) {
    let inico = dados.articles[i];
    let data = new Date (inico.publishedAt);
    inic = inic + `

    <div class="blog-box row">
								<div class="col-md-4">
									<div class="post-media">
										<a href="${inico.url}" target="_blank" title="">
											<img src="${inico.urlToImage}" alt="" class="img-fluid">
											<div class="hovereffect"></div>
										</a>
									</div><!-- end media -->
								</div><!-- end col -->

								<div class="blog-meta big-meta col-md-8">
									<h4><a href="${inico.url}" target="_blank" title="">${inico.title}</a></h4>
									<p>${inico.description}</p>
									<small><a href="${inico.url}" target="_blank" title="">${data.toLocaleDateString ()}</a></small>
									<small><a href="${inico.url}" target="_blank" title="">Por ${inico.author}</a></small>
								</div><!-- end meta -->
							</div><!-- end blog-box -->

							<hr class="invis">
        `;
}
divTela.innerHTML = inic;

}




//Pesquisa

function exibeNoticias () {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText);
    for (i=0; i< dados.articles.length; i++) {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        texto = texto + `

        <div class="blog-box row">
        <div class="col-md-4">
            <div class="post-media">
                <a href="${noticia.url}" target="_blank" title="">
                    <img src="${noticia.urlToImage}" alt="" class="img-fluid">
                    <div class="hovereffect"></div>
                </a>
            </div><!-- end media -->
        </div><!-- end col -->

        <div class="blog-meta big-meta col-md-8">
            <h4><a href="${noticia.url}" target="_blank" title="">${noticia.title}</a></h4>
            <p>${noticia.description}</p>
            <small><a href="${noticia.url}" target="_blank" title="">${data.toLocaleDateString ()}</a></small>
            <small><a href="${noticia.url}" target="_blank" title="">Por ${noticia.author}</a></small>
        </div><!-- end meta -->
    </div><!-- end blog-box -->

    <hr class="invis">   
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function executaPesquisa () {
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send ();
}

document.getElementById ('btnPesquisa').addEventListener ('click', executaPesquisa);

// ENTRETERIMENTO


function exibirEntre (){
    let divTela = document.getElementById('tela');
    let entr ='';

    let dados = JSON.parse (this.responseText);
for (i=0; i<10; i++) {
    let entreni = dados.articles[i];
    let data = new Date (entreni.publishedAt);
    entr = entr + `

    <div class="blog-box row">
    <div class="col-md-4">
        <div class="post-media">
            <a href="${entreni.url}" target="_blank" title="">
                <img src="${entreni.urlToImage}" alt="" class="img-fluid">
                <div class="hovereffect"></div>
            </a>
        </div><!-- end media -->
    </div><!-- end col -->

    <div class="blog-meta big-meta col-md-8">
        <h4><a href="${entreni.url}" target="_blank" title="">${entreni.title}</a></h4>
        <p>${entreni.description} </p>
        <small><a href="${entreni.url}" target="_blank" title="">${data.toLocaleDateString ()}</a></small>
        <small><a href="${entreni.url}" target="_blank" title="">Por ${entreni.author}</a></small>
    </div><!-- end meta -->
</div><!-- end blog-box -->

<hr class="invis">   
    
        `;
}
divTela.innerHTML = entr;

}

function Entreterimento (){
    let entret = new XMLHttpRequest ();
    entret.onload = exibirEntre;
    entret.open ('GET', `http://newsapi.org/v2/top-headlines?country=br&category=entertainment&apiKey=${API_KEY}`);
    entret.send ();
}
document.getElementById ('Entreterimento').addEventListener ('click', Entreterimento);

//SAUDE

function exibirSaude (){
    let divTela = document.getElementById('tela');
    let sau ='';

    let dados = JSON.parse (this.responseText);
for (i=0; i<10; i++) {
    let saud = dados.articles[i];
    let data = new Date (saud.publishedAt);
    sau = sau + `

    <div class="blog-box row">
    <div class="col-md-4">
        <div class="post-media">
            <a href="${saud.url}" target="_blank" title="">
                <img src="${saud.urlToImage}" alt="" class="img-fluid">
                <div class="hovereffect"></div>
            </a>
        </div><!-- end media -->
    </div><!-- end col -->

    <div class="blog-meta big-meta col-md-8">
        <h4><a href="${saud.url}" target="_blank" title="">${saud.title}</a></h4>
        <p>${saud.description} </p>
        <small><a href="${saud.url}" target="_blank" title="">${data.toLocaleDateString ()}</a></small>
        <small><a href="${saud.url}" target="_blank" title="">Por ${saud.author}</a></small>
    </div><!-- end meta -->
</div><!-- end blog-box -->

<hr class="invis">   

        `;
}
divTela.innerHTML = sau;

}

function Saude (){
    let Sa = new XMLHttpRequest ();
    Sa.onload = exibirSaude;
    Sa.open ('GET', `http://newsapi.org/v2/top-headlines?country=br&category=health&apiKey=${API_KEY}`);
    Sa.send ();
}
document.getElementById ('Saude').addEventListener ('click', Saude);



//Negocios

function exibirNegocios (){
    let divTela = document.getElementById('tela');
    let Neg ='';

    let dados = JSON.parse (this.responseText);
for (i=0; i<10; i++) {
    let negoci = dados.articles[i];
    let data = new Date (negoci.publishedAt);
    Neg = Neg + `

    <div class="blog-box row">
    <div class="col-md-4">
        <div class="post-media">
            <a href="${negoci.url}" target="_blank" title="">
                <img src="${negoci.urlToImage}" alt="" class="img-fluid">
                <div class="hovereffect"></div>
            </a>
        </div><!-- end media -->
    </div><!-- end col -->

    <div class="blog-meta big-meta col-md-8">
        <h4><a href="${negoci.url}" target="_blank" title="">${negoci.title}</a></h4>
        <p>${negoci.description} </p>
        <small><a href="${negoci.url}" target="_blank" title="">${data.toLocaleDateString ()}</a></small>
        <small><a href="${negoci.url}" target="_blank" title="">Por ${negoci.author}</a></small>
    </div><!-- end meta -->
</div><!-- end blog-box -->

<hr class="invis">   

        `;
}
divTela.innerHTML = Neg;

}

function Negocios (){
    let Ne = new XMLHttpRequest ();
    Ne.onload = exibirNegocios;
    Ne.open ('GET', `http://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=${API_KEY}`);
    Ne.send ();
}
document.getElementById ('Negocios').addEventListener ('click', Negocios);


//Esportes

function exibirEsportes (){
    let divTela = document.getElementById('tela');
    let Es ='';

    let dados = JSON.parse (this.responseText);
for (i=0; i<10; i++) {
    let Espor = dados.articles[i];
    let data = new Date (Espor.publishedAt);
    Es = Es + `


    <div class="blog-box row">
    <div class="col-md-4">
        <div class="post-media">
            <a href="${Espor.url}" target="_blank" title="">
                <img src="${Espor.urlToImage}" alt="" class="img-fluid">
                <div class="hovereffect"></div>
            </a>
        </div><!-- end media -->
    </div><!-- end col -->

    <div class="blog-meta big-meta col-md-8">
        <h4><a href="${Espor.url}" target="_blank" title="">${Espor.title}</a></h4>
        <p>${Espor.description} </p>
        <small><a href="${Espor.url}" target="_blank" title="">${data.toLocaleDateString ()}</a></small>
        <small><a href="${Espor.url}" target="_blank" title="">Por ${Espor.author}</a></small>
    </div><!-- end meta -->
</div><!-- end blog-box -->

<hr class="invis">   

        `;
}
divTela.innerHTML = Es;

}

function Esportes (){
    let Esp = new XMLHttpRequest ();
    Esp.onload = exibirEsportes;
    Esp.open ('GET', `http://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=${API_KEY}`);
    Esp.send ();
}
document.getElementById ('Esportes').addEventListener ('click', Esportes);


//Tecnologia

function exibirTecnologia (){
    let divTela = document.getElementById('tela');
    let Tec ='';

    let dados = JSON.parse (this.responseText);
for (i=0; i<10; i++) {
    let Tecno = dados.articles[i];
    let data = new Date (Tecno.publishedAt);
    Tec = Tec + `


    <div class="blog-box row">
    <div class="col-md-4">
        <div class="post-media">
            <a href="${Tecno.url}" target="_blank" title="">
                <img src="${Tecno.urlToImage}" alt="" class="img-fluid">
                <div class="hovereffect"></div>
            </a>
        </div><!-- end media -->
    </div><!-- end col -->

    <div class="blog-meta big-meta col-md-8">
        <h4><a href="${Tecno.url}" target="_blank" title="">${Tecno.title}</a></h4>
        <p>${Tecno.description} </p>
        <small><a href="${Tecno.url}" target="_blank" title="">${data.toLocaleDateString ()}</a></small>
        <small><a href="${Tecno.url}" target="_blank" title="">Por ${Tecno.author}</a></small>
    </div><!-- end meta -->
</div><!-- end blog-box -->

<hr class="invis">   
    
        `;
}
divTela.innerHTML = Tec;

}

function Tecnologia (){
    let Te = new XMLHttpRequest ();
    Te.onload = exibirTecnologia;
    Te.open ('GET', `http://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=${API_KEY}`);
    Te.send ();
}
document.getElementById ('Tecnologia').addEventListener ('click', Tecnologia);

//Ciencia

function exibirCiencia (){
    let divTela = document.getElementById('tela');
    let Cie ='';

    let dados = JSON.parse (this.responseText);
for (i=0; i<10; i++) {
    let Cien = dados.articles[i];
    let data = new Date (Cien.publishedAt);
    Cie = Cie + `

    <div class="blog-box row">
    <div class="col-md-4">
        <div class="post-media">
            <a href="${Cien.url}" target="_blank" title="">
                <img src="${Cien.urlToImage}" alt="" class="img-fluid">
                <div class="hovereffect"></div>
            </a>
        </div><!-- end media -->
    </div><!-- end col -->

    <div class="blog-meta big-meta col-md-8">
        <h4><a href="${Cien.url}" target="_blank" title="">${Cien.title}</a></h4>
        <p>${Cien.description} </p>
        <small><a href="${Cien.url}" target="_blank" title="">${data.toLocaleDateString ()}</a></small>
        <small><a href="${Cien.url}" target="_blank" title="">Por ${Cien.author}</a></small>
    </div><!-- end meta -->
</div><!-- end blog-box -->

<hr class="invis">   

        `;
}
divTela.innerHTML = Cie;

}

function Ciencia (){
    let Ci = new XMLHttpRequest ();
    Ci.onload = exibirCiencia;
    Ci.open ('GET', `http://newsapi.org/v2/top-headlines?country=br&category=science&apiKey=${API_KEY}`);
    Ci.send ();
}
document.getElementById ('Ciencia').addEventListener ('click', Ciencia);







