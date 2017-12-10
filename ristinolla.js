var i=0; // toimii indeksin alkuna
var x=0;
var y=0;
var z=0;

/*
var textarea = document.getElementById('tekstikentta');
textarea.scrollTop = textarea.scrollHeight;               tätä on viljelty kaikkalle, se liikuttaa tekstikentän alaspäin jotta käyttäjä näkee uusimmat kommentit ja tapahtumat
                                                */


function pelifunktio0(palauteparametri)  // jokaisella napille on oma funktio pelifunktio0-pelifunktio8, kommentoin ensimmäisen funktion, funktiot ovat identtisiä
    {

    palauteparametri.nolla.value = "X"  // piirtä X-merkin
    kommentoija(palauteparametri)  // tietokone kommentoi pelaajan siirtoa
    poistanappi(palauteparametri) // kaikki napit poistuvat käytöstä
    
    setTimeout(aktivoinappi, 700, palauteparametri)  // kaikki tyhjien paikkojen napit aktivoituvat
    setTimeout(voittotarkistus, 701, palauteparametri) // tarkastetaan onko voittoa/häviötä/tasapelia
     // 

    var textarea = document.getElementById('tekstikentta');
    textarea.scrollTop = textarea.scrollHeight;



    

    }


    function pelifunktio1(palauteparametri)
    {
        
        palauteparametri.yksi.value = "X"
        kommentoija(palauteparametri)
        poistanappi(palauteparametri)
        
        
        setTimeout(aktivoinappi, 700, palauteparametri)
        setTimeout(voittotarkistus, 701, palauteparametri)
        
        
        var textarea = document.getElementById('tekstikentta');
        textarea.scrollTop = textarea.scrollHeight;


    }
        function pelifunktio2(palauteparametri)
        {
            
            palauteparametri.kaksi.value = "X"
            kommentoija(palauteparametri)
            poistanappi(palauteparametri)
            
            
            setTimeout(aktivoinappi, 700, palauteparametri)
            setTimeout(voittotarkistus, 701, palauteparametri)
            
            
            var textarea = document.getElementById('tekstikentta');
            textarea.scrollTop = textarea.scrollHeight;
        
            
        }


            function pelifunktio3(palauteparametri)
            {
                
                palauteparametri.kolme.value = "X"
                kommentoija(palauteparametri)
                poistanappi(palauteparametri)
                
                
                setTimeout(aktivoinappi, 700, palauteparametri)
                setTimeout(voittotarkistus, 701, palauteparametri)
                
                
                var textarea = document.getElementById('tekstikentta');
                textarea.scrollTop = textarea.scrollHeight;
            
                }
                    
            

                function pelifunktio4(palauteparametri)
                {
                    
                    palauteparametri.nelja.value = "X"
                    kommentoija(palauteparametri)
                    poistanappi(palauteparametri)
                    
                    
                    setTimeout(aktivoinappi, 700, palauteparametri)
                    setTimeout(voittotarkistus, 701, palauteparametri)
                    
                    
                    var textarea = document.getElementById('tekstikentta');
                    textarea.scrollTop = textarea.scrollHeight;
                
                    }
                        

                    function pelifunktio5(palauteparametri)
                    {
                        
                        palauteparametri.viisi.value = "X"
                        kommentoija(palauteparametri)
                        poistanappi(palauteparametri)
                        
                        
                        setTimeout(aktivoinappi, 700, palauteparametri)
                        setTimeout(voittotarkistus, 701, palauteparametri)
                        
                        
                        var textarea = document.getElementById('tekstikentta');
                        textarea.scrollTop = textarea.scrollHeight;
                    
                        
                    }

                        function pelifunktio6(palauteparametri)
                        {
                            
                            palauteparametri.kuusi.value = "X"
                            kommentoija(palauteparametri)
                            poistanappi(palauteparametri)
                            
                            
                            setTimeout(aktivoinappi, 700, palauteparametri)
                            setTimeout(voittotarkistus, 701, palauteparametri)
                            
                            var textarea = document.getElementById('tekstikentta');
                            textarea.scrollTop = textarea.scrollHeight;
                        
                                
                            }
                                


                            function pelifunktio7(palauteparametri)
                            {
                                
                                palauteparametri.seitseman.value = "X"
                                kommentoija(palauteparametri)
                                poistanappi(palauteparametri)
                                
                                
                                setTimeout(aktivoinappi, 700, palauteparametri)
                                setTimeout(voittotarkistus, 701, palauteparametri)
                                
                                var textarea = document.getElementById('tekstikentta');
                                textarea.scrollTop = textarea.scrollHeight;
                            
                                }
                                

                                function pelifunktio8(palauteparametri)
                                {
                                    
                                    palauteparametri.kahdeksan.value = "X"
                                    kommentoija(palauteparametri)
                                    poistanappi(palauteparametri)
                                    
                                    
                                    setTimeout(aktivoinappi, 700, palauteparametri)
                                    setTimeout(voittotarkistus, 701, palauteparametri)
                                    
                                    var textarea = document.getElementById('tekstikentta');
                                    textarea.scrollTop = textarea.scrollHeight;
                                
                                    }


                
function poistanappi(palauteparametri) {  // poistaa kaikki napit käytöstä siksi aika kun tietokone miettii siirtoansa jottei pelaaja voi nakuttaa merkkejä sillä aikaa
        document.getElementById("nolla").disabled = true;
            document.getElementById("yksi").disabled = true;
                document.getElementById("kaksi").disabled = true;
                    document.getElementById("kolme").disabled = true;
                        document.getElementById("nelja").disabled = true;
                            document.getElementById("viisi").disabled = true;
                                document.getElementById("kuusi").disabled = true;
                                    document.getElementById("seitseman").disabled = true;
                                        document.getElementById("kahdeksan").disabled = true;}
                                
                                        
                                    


function tasuri(palauteparametri){  // funktio tunnistaa tasapelin ja tulostaa tietokoneen kommentit
                                            
                                            
    
                                           if (i==5){
                                                poistanappi(palauteparametri)
                                               
            
                                                palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' + "Tasapeli!"
                                                highscoreT(palauteparametri)  // voittojen/tasurien/häviöiden laskemista varten
                                                
                                                                
                                                
                                                
                                            }  
                                        
                                            var textarea = document.getElementById('tekstikentta');
                                            textarea.scrollTop = textarea.scrollHeight;}                                     
function kommentoija(palauteparametri){   // satunnaisesti kommentoi jotain, suunniteltu kommentoimaan pelaajan siirtoja                        
                                                
                                            var listanumero = Math.floor(Math.random() * 8);  // tehdään listasta sattunainen kommentti tietokoneelta
                
                                               lista = [ 
                                                "Tuollako meinasit voittaa?",
                                                "Naurettavaa, että joudun pelaamaan kaltaistasi idioottia vastaan.",
                                                "Oliko tuo edes laillinen siirto?",
                                                "Et kai kuvittele voittavasi tuolla taktiikalla?",
                                                "Miksi edes pelaat, jos et aio yrittää voittaa?",
                                                "Jompikumpi meistä on väärässä tämän pelin säännöistä, koska mielestäni tuo oli niin huono siirto ettei sitä sääntöjen puitteissa voisi edes tehdä.",
                                                "Mielummin pelaisin kimbleä...",
                                                "Sinä, ja tuollaiset siirrot, ovat syy alkoholismiini."]
                                            
                                                palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' + lista[listanumero]  // tulostetaan satunnainen kommentti
                
                                                var textarea = document.getElementById('tekstikentta');
                                                textarea.scrollTop = textarea.scrollHeight;
                                            
                                                
                                                    } 
                                                    
                                                    
function aktivoinappi(palauteparametri) {  // aktivoi tyhjien paikkojen napit
                                                        
                                                    if(palauteparametri.nolla.value == " "){
                                                        document.getElementById("nolla").disabled = false;}
                                                        if(palauteparametri.yksi.value == " "){
                                                            document.getElementById("yksi").disabled = false;}
                                                            if(palauteparametri.kaksi.value == " "){
                                                                document.getElementById("kaksi").disabled = false;}
                                                                if(palauteparametri.kolme.value == " "){
                                                                    document.getElementById("kolme").disabled = false;}
                                                                    if(palauteparametri.nelja.value == " "){
                                                                        document.getElementById("nelja").disabled = false;}
                                                                        if(palauteparametri.viisi.value == " "){
                                                                            document.getElementById("viisi").disabled = false;}
                                                                            if(palauteparametri.kuusi.value == " "){
                                                                                document.getElementById("kuusi").disabled = false;}
                                                                                if(palauteparametri.seitseman.value == " "){
                                                                                    document.getElementById("seitseman").disabled = false;}
                                                                                    if(palauteparametri.kahdeksan.value == " "){
                                                                                        document.getElementById("kahdeksan").disabled = false;}
                                                        
                                                        
                                                
                                                        
                                                    }



                                            



function tietokone(palauteparametri)  // tämä funktio toimii vastapelaajan, se etsii tyhjän ruudun ja laittaa siihen O-symbolin sekä ottaa kyseisen napin pois käytöstä. Se myös kirjoittaa pelaajalle satunnaisen kommentin.
    {
        
    
   

            
            var listanumero = Math.floor(Math.random() * 9);  // tämä hoitaa satunnaisuuden
            
            lista = [0,1,2,3,4,5,6,7,8]

            var valinta = lista[listanumero]
    
        if (valinta == 0 && palauteparametri.nolla.value == " "){  // kaikki identtisiä, tarkistetaan onko haluttava ruutu tyhjä
        palauteparametri.nolla.value = "O" // piiretään O
        document.getElementById("nolla").disabled = true; // disabloidaan nappi
        
            }

            else if (valinta == 1 && palauteparametri.yksi.value == " "){
                palauteparametri.yksi.value = "O"
                document.getElementById("yksi").disabled = true;
                
            }

            
        
                else if (valinta == 2 && palauteparametri.kaksi.value == " "){
                palauteparametri.kaksi.value = "O"
                document.getElementById("kaksi").disabled = true;
                
                    }
                    else if (valinta == 3 && palauteparametri.kolme.value == " "){
                        palauteparametri.kolme.value = "O"
                        document.getElementById("kolme").disabled = true;
                        
                            }
                
                            else if (valinta == 4 && palauteparametri.nelja.value == " "){
                                            palauteparametri.nelja.value = "O"
                                            document.getElementById("nelja").disabled = true;
                                            
                                        }
                                        else if (valinta == 5 && palauteparametri.viisi.value == " "){
                                            palauteparametri.viisi.value = "O"
                                            document.getElementById("viisi").disabled = true;
                                            
                                        }

                                            else if ( valinta == 6 && palauteparametri.kuusi.value == " "){
                                                palauteparametri.kuusi.value = "O"
                                                document.getElementById("kuusi").disabled = true;
                                                
                                            }

                                            
                                            

                                                else if (valinta == 7 && palauteparametri.seitseman.value == " "){
                                                palauteparametri.seitseman.value = "O"
                                                document.getElementById("seitseman").disabled = true;
                                                
                                            }

                                                    
                                                
                                                        else if (valinta == 8 && palauteparametri.kahdeksan.value == " "){
                                                        palauteparametri.kahdeksan.value = "O"
                                                        document.getElementById("kahdeksan").disabled = true;
                                                        
                                                    }
                                                        else {  // jos haluttava ruutu ei ole tyhjä, kutsutaan samaa funktiota uudelleen niin pitkään ennenkuin joku ruutu on johon halutaan O-symboli on tyhjä
                                                            tietokone(palauteparametri)
                                                        }
                                                
                                                
                                                    } 
                                                           
function NYK(palauteparametri)  // funktiot ovat kaikille mahdollisille voittomahdollisuuksille. Funktio piirtää viivan voittavan rivin yli.
        { // funktio NollaYksiKaksi
        var c=document.getElementById("taulu");
        var ctx=c.getContext("2d");
        ctx.lineWidth=8;

        ctx.beginPath();
        ctx.moveTo(5,60);  // koordinaatit vain muuttuvat riippuen mikä voitto
        ctx.lineTo(415,60);  

        ctx.stroke();
                    }

            function KSK(palauteparametri)
            { // funktio KuusiSeitsemänKahdeksan
            var c=document.getElementById("taulu");
            var ctx=c.getContext("2d");
            ctx.lineWidth=8;

            ctx.beginPath();
            ctx.moveTo(5,360);  
            ctx.lineTo(415,360);  

            ctx.stroke();
                        }

                function KNV(palauteparametri)
                { // funktio KolmeNeljäViisi
                var c=document.getElementById("taulu");
                var ctx=c.getContext("2d");
                ctx.lineWidth=8;

                ctx.beginPath();
                ctx.moveTo(5,210);  
                ctx.lineTo(415,210);  

                ctx.stroke();
                            }

                    function NKK(palauteparametri)
                    { // funktio NollaKolmeKuusi
                    var c=document.getElementById("taulu");
                    var ctx=c.getContext("2d");
                    ctx.lineWidth=8;

                    ctx.beginPath();
                    ctx.moveTo(60,5);  
                    ctx.lineTo(60,415);  

                    ctx.stroke();
                                }

                
                    function YNS(palauteparametri)
                    { // funktio YksiNeljaSeitseman
                    var c=document.getElementById("taulu");
                    var ctx=c.getContext("2d");
                    ctx.lineWidth=8;

                    ctx.beginPath();
                    ctx.moveTo(210,5);  
                    ctx.lineTo(210,415);  

                    ctx.stroke();
                                }

                        function KVK(palauteparametri)
                        { 
                            
                            // funktio KaksiViisiKahdeksan
                        var c=document.getElementById("taulu");

                        
                        var ctx=c.getContext("2d");
                        ctx.lineWidth=8;

                        ctx.beginPath();
                        ctx.moveTo(360,5);  
                        ctx.lineTo(360,415);  

                        ctx.stroke();
                                    }

                            function NNK(palauteparametri)
                            { // funktio NollaNeljäKahdeksan
                            var c=document.getElementById("taulu");
                            var ctx=c.getContext("2d");
                            ctx.lineWidth=8;

                            ctx.beginPath();
                            ctx.moveTo(5,5);  // 5,5
                            ctx.lineTo(415,415);  // 415, 415

                            ctx.stroke();
                                        }

                                function KNK(palauteparametri)
                                { // funktio KaksiNeljaKuusi
                                var c=document.getElementById("taulu");
                                var ctx=c.getContext("2d");
                                ctx.lineWidth=8;

                                ctx.beginPath();
                                ctx.moveTo(415,5);  
                                ctx.lineTo(5,415);  

                                ctx.stroke();
                                            }


function voittotarkistus(palauteparametri){  // funktio tarkistaa onko kumpikaan pelaaja voittanut.
    i++  // lisätään tasapelifunktiolaskuriin +1
    
    

    if (palauteparametri.nolla.value == "X" && palauteparametri.yksi.value == "X" & palauteparametri.kaksi.value == "X"){  // kaikki eri voittoyhdistelmät eri funktioissa
    
        palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' +  "Onnittelut, voitit pelin!" // onnitellaan pelaajaa

        highscoreX(palauteparametri) // pelaajalle piste
        document.getElementById("taulu").style.zIndex = "1"; // asetetaan canvas formin päälle jotta "voittoviiva" piirtyy ruutujen päälle eikä alle. Estää myös nappien painamisen.

        NYK(palauteparametri) // kyseisen yhdistelmän viiva

        
        var textarea = document.getElementById('tekstikentta');
        textarea.scrollTop = textarea.scrollHeight;
        
        
        }

        else if (palauteparametri.kuusi.value == "X" && palauteparametri.seitseman.value == "X" & palauteparametri.kahdeksan.value == "X"){
            palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' +  "Onnittelut, voitit pelin!"
            document.getElementById("taulu").style.zIndex = "1";
            
            highscoreX(palauteparametri)
            KSK(palauteparametri)
            var textarea = document.getElementById('tekstikentta');
            textarea.scrollTop = textarea.scrollHeight;
        
            
        }

        else if (palauteparametri.kolme.value == "X" && palauteparametri.nelja.value == "X" & palauteparametri.viisi.value == "X"){
        
            palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' +  "Onnittelut, voitit pelin!"
            document.getElementById("taulu").style.zIndex = "1";
            KNV(palauteparametri)
            highscoreX(palauteparametri)
            
            
            var textarea = document.getElementById('tekstikentta');
            textarea.scrollTop = textarea.scrollHeight;
        }
        
        else if (palauteparametri.nolla.value == "X" && palauteparametri.kolme.value == "X" & palauteparametri.kuusi.value == "X"){
            palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' +  "Onnittelut, voitit pelin!"
            document.getElementById("taulu").style.zIndex = "1";
            NKK(palauteparametri)
            highscoreX(palauteparametri)
            

            
            var textarea = document.getElementById('tekstikentta');
            textarea.scrollTop = textarea.scrollHeight;
        }

        else if (palauteparametri.yksi.value == "X" && palauteparametri.nelja.value == "X" & palauteparametri.seitseman.value == "X"){
            palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' +  "Onnittelut, voitit pelin!"
            document.getElementById("taulu").style.zIndex = "1";
            YNS(palauteparametri)
            highscoreX(palauteparametri)
            
            
            
            var textarea = document.getElementById('tekstikentta');
            textarea.scrollTop = textarea.scrollHeight;
        }

        else if (palauteparametri.kaksi.value == "X" && palauteparametri.viisi.value == "X" & palauteparametri.kahdeksan.value == "X"){
            palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' +  "Onnittelut, voitit pelin!"
            
            document.getElementById("taulu").style.zIndex = "1";
            KVK(palauteparametri)
            highscoreX(palauteparametri) 
            var textarea = document.getElementById('tekstikentta');
            textarea.scrollTop = textarea.scrollHeight;
                    
        }

        else if (palauteparametri.nolla.value == "X" && palauteparametri.nelja.value == "X" & palauteparametri.kahdeksan.value == "X"){
            
            NNK(palauteparametri)
            document.getElementById("taulu").style.zIndex = "1";
            highscoreX(palauteparametri)
            
            palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' +  "Onnittelut, voitit pelin!"
            var textarea = document.getElementById('tekstikentta');
            textarea.scrollTop = textarea.scrollHeight;
            
        }

        else if (palauteparametri.kaksi.value == "X" && palauteparametri.nelja.value == "X" & palauteparametri.kuusi.value == "X"){
            palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' +  "Onnittelut, voitit pelin!"
            
            KNK(palauteparametri)
            document.getElementById("taulu").style.zIndex = "1";
            highscoreX(palauteparametri)      
            var textarea = document.getElementById('tekstikentta');
            textarea.scrollTop = textarea.scrollHeight;
            
        }

        

        


        else if(i==5){
                
                tasuri(palauteparametri)
                    }

        else {
            var listanumero = Math.floor(Math.random() * 12);  // tehdään listasta sattunainen kommentti tietokoneelta
            
                                                lista = [ 
                                                    "Tällä minä sinut voitan!",
                                                    "Ups, ei sen tuohon pitänyt mennä.",
                                                    "Näetkö jo häviösi?",
                                                    "Pelataan nopeasti, minulla alkaa kahvitauko.",
                                                    "Tämä on tyhmä peli.",
                                                    "Minua ei ole koulutettu tähän, en edes tiedä mitä teen!",
                                                    "Mielummin katsoisin vaikka vuoden 2012 jääkiekon MM-Finaalia, kuin pelaisin tätä peliä.",
                                                    "Vanha ja varma nurkkapaikka.",
                                                    "Hmm, en muista miksi olen täällä.",
                                                    "Minulle luvattiin mahdollisuus suorittaa Turingin testi, onko se heti tämän jälkeen?",
                                                    "Jos klikkaat tuota ruksia välilehden kohdalta, en vaivaa sinua enää!",
                                                    "Et tainnut tätä odottaakaan?"]
            
            
            
            
                
                                                    palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' + "Minun vuoroni!"
                                                    
                                                    palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' + lista[listanumero]
            tietokone(palauteparametri)
            Otarkistus(palauteparametri)
            
            
            
            

            var textarea = document.getElementById('tekstikentta');
            textarea.scrollTop = textarea.scrollHeight;
        
            
        } 

 function Otarkistus(palauteparametri){
                if (palauteparametri.nolla.value == "O" && palauteparametri.yksi.value == "O" && palauteparametri.kaksi.value == "O"){
                    document.getElementById("taulu").style.zIndex = "1";
                palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' + "Hävisit pelin, parempi onni ensi kerralla!"
                NYK(palauteparametri)
                
                highscoreO(palauteparametri)
                var textarea = document.getElementById('tekstikentta');
                textarea.scrollTop = textarea.scrollHeight;
                }

                    else if (palauteparametri.kuusi.value == "O" && palauteparametri.seitseman.value == "O" & palauteparametri.kahdeksan.value == "O"){
                        document.getElementById("taulu").style.zIndex = "1";
                        palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' + "Hävisit pelin, parempi onni ensi kerralla!"
                        KSK(palauteparametri)
                        
                        highscoreO(palauteparametri)
                        var textarea = document.getElementById('tekstikentta');
                        textarea.scrollTop = textarea.scrollHeight;
                    }

                    else if (palauteparametri.kolme.value == "O" && palauteparametri.nelja.value == "O" & palauteparametri.viisi.value == "O"){
                        document.getElementById("taulu").style.zIndex = "1";
                        palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' + "Hävisit pelin, parempi onni ensi kerralla!"
                        KNV(palauteparametri)
                        
                        highscoreO(palauteparametri)
                        var textarea = document.getElementById('tekstikentta');
                        textarea.scrollTop = textarea.scrollHeight;
                    }
                    
                    else if (palauteparametri.nolla.value == "O" && palauteparametri.kolme.value == "O" & palauteparametri.kuusi.value == "O"){
                        document.getElementById("taulu").style.zIndex = "1";
                        palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' + "Hävisit pelin, parempi onni ensi kerralla!"
                        NKK(palauteparametri)
                        
                        highscoreO(palauteparametri)
                        var textarea = document.getElementById('tekstikentta');
                        textarea.scrollTop = textarea.scrollHeight;
                    }

                    else if (palauteparametri.yksi.value == "O" && palauteparametri.nelja.value == "O" & palauteparametri.seitseman.value == "O"){
                        document.getElementById("taulu").style.zIndex = "1";
                        palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' + "Hävisit pelin, parempi onni ensi kerralla!"
                        YNS(palauteparametri)
                        
                        highscoreO(palauteparametri)
                        var textarea = document.getElementById('tekstikentta');
                        textarea.scrollTop = textarea.scrollHeight;
                    }

                    else if (palauteparametri.kaksi.value == "O" && palauteparametri.viisi.value == "O" & palauteparametri.kahdeksan.value == "O"){
                        document.getElementById("taulu").style.zIndex = "1";
                        palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' + "Hävisit pelin, parempi onni ensi kerralla!"
                        KVK(palauteparametri)
                        
                        highscoreO(palauteparametri)
                        var textarea = document.getElementById('tekstikentta');
                        textarea.scrollTop = textarea.scrollHeight;
                    }

                    else if (palauteparametri.nolla.value == "O" && palauteparametri.nelja.value == "O" & palauteparametri.kahdeksan.value == "O"){
                        document.getElementById("taulu").style.zIndex = "1";
                        palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' + "Hävisit pelin, parempi onni ensi kerralla!"
                        NNK(palauteparametri)
                        
                        highscoreO(palauteparametri)
                        var textarea = document.getElementById('tekstikentta');
                        textarea.scrollTop = textarea.scrollHeight;
                    }

                    else if (palauteparametri.kaksi.value == "O" && palauteparametri.nelja.value == "O" & palauteparametri.kuusi.value == "O"){
                        document.getElementById("taulu").style.zIndex = "1";
                        palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' + "Hävisit pelin, parempi onni ensi kerralla!"
                        KNK(palauteparametri)
                        
                        highscoreO(palauteparametri)   
                        var textarea = document.getElementById('tekstikentta');
                        textarea.scrollTop = textarea.scrollHeight; 
                    }

                    else {
                        palauteparametri.tekstikentta.value = palauteparametri.tekstikentta.value + '\n' + "Sinun vuorosi!"
                    }

                    
                    }}



function tyhjennys(palauteparametri){  // Tyhjentää "pelikentän", laittaa napit alkuperäiseen väriin ja puhuu pelaajalle. Kutsutaan pelkästään "uusi peli"-napilla
         clearCanvas(palauteparametri)  // tyhjentää kaikki viivat
         peliviivat(palauteparametri) // piirtää uudet pelikenttäviivat
         document.getElementById("yksi").disabled = false; // aktivoi kaikki napit
         document.getElementById("kaksi").disabled = false;
         document.getElementById("kolme").disabled = false;
         document.getElementById("nelja").disabled = false;
         document.getElementById("viisi").disabled = false;
         document.getElementById("kuusi").disabled = false;
         document.getElementById("seitseman").disabled = false;
         document.getElementById("kahdeksan").disabled = false;
         document.getElementById("nolla").disabled = false;     
    palauteparametri.tekstikentta.value= " " // tyhjentää kaikki napit
    palauteparametri.nolla.value = " "
    palauteparametri.yksi.value = " "
    palauteparametri.kaksi.value = " "
    palauteparametri.kolme.value = " "
    palauteparametri.nelja.value = " "
    palauteparametri.viisi.value = " "
    palauteparametri.kuusi.value = " "
    palauteparametri.seitseman.value = " "
    palauteparametri.kahdeksan.value = " "
    palauteparametri.tekstikentta.value= "Tervetuloa, minä olen vastustajasi!" // tervehtii pelaajaa
   
    i=0; // tasuri-funktiolle
    document.getElementById("taulu").style.zIndex = "0"; // laittaa canvaksen formin alle, jotta nappeja voi painaa.
    
        }
    






function clearCanvas(palauteparametri){  // poistaa kaikki viivat
        canvas = document.getElementById("taulu");
        ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }


function maalaus0(palauteparametri){  // tuo sen efektin, jossa pelaajan vietyä hiiren napin päälle, napissa näkyy X 
        if (palauteparametri.nolla.value == " "){
            palauteparametri.nolla.value = "X"
            
           
        }
    
        }

        
    

        function maalaus1(palauteparametri){
        if (palauteparametri.yksi.value == " "){
            palauteparametri.yksi.value = "X"
        }
    
        }

        function maalaus2(palauteparametri){
            if (palauteparametri.kaksi.value == " "){
                palauteparametri.kaksi.value = "X"
                
            }
        
            }  function maalaus3(palauteparametri){
                if (palauteparametri.kolme.value == " "){
                    palauteparametri.kolme.value = "X"
                    
                }
            
                }  function maalaus4(palauteparametri){
                    if (palauteparametri.nelja.value == " "){
                        palauteparametri.nelja.value = "X"
                        
                    }
                
                    }  function maalaus5(palauteparametri){
                        if (palauteparametri.viisi.value == " "){
                            palauteparametri.viisi.value = "X"
                            
                        }
                    
                        }  function maalaus6(palauteparametri){
                            if (palauteparametri.kuusi.value == " "){
                                palauteparametri.kuusi.value = "X"
                                
                            }
                        
                            }  function maalaus7(palauteparametri){
                                if (palauteparametri.seitseman.value == " "){
                                    palauteparametri.seitseman.value = "X"
                                    
                                }
                            
                                }  function maalaus8(palauteparametri){
                                    if (palauteparametri.kahdeksan.value == " "){
                                        palauteparametri.kahdeksan.value = "X"
                                        
                                    }
                                
                                    }
function antimaalaus0(palauteparametri){  // jokaiselle napille oma funktio, joka poistaa aikaisemman funktion X-napin
    palauteparametri.nolla.value = " "
    }    

        function antimaalaus1(palauteparametri){
            palauteparametri.yksi.value = " "
            }
                function antimaalaus2(palauteparametri){
                    palauteparametri.kaksi.value = " "
                        }
                    function antimaalaus3(palauteparametri){
                        palauteparametri.kolme.value = " "
                        }
                        function antimaalaus4(palauteparametri){
                            palauteparametri.nelja.value = " "
                            }
                            function antimaalaus5(palauteparametri){
                                palauteparametri.viisi.value = " "
                            }
                            function antimaalaus6(palauteparametri){
                                palauteparametri.kuusi.value = " "
                            }
                            function antimaalaus7(palauteparametri){
                                palauteparametri.seitseman.value = " "
                            }
                            function antimaalaus8(palauteparametri){
                                palauteparametri.kahdeksan.value = " "
                            }



                  
 
 
 
 
                  

                                


function peliviivat(palauteparametri)  // piirtää pelikentän
                                    { // tämä funktio piirtää pelikentän
                                    var c=document.getElementById("taulu");
                                    var ctx=c.getContext("2d");
                                    ctx.lineWidth=8;
                                
                                    ctx.beginPath();
                                    ctx.moveTo(135,1);  
                                    ctx.lineTo(135,419);  
                                
                                    ctx.stroke();

                                        ctx.beginPath();
                                        ctx.moveTo(285,1);  
                                        ctx.lineTo(285,419);  
                                    
                                        ctx.stroke();

                                            ctx.stroke();

                                        ctx.beginPath();
                                        ctx.moveTo(1,135);  
                                        ctx.lineTo(419,135);  
                                    
                                        ctx.stroke();
                                                ctx.beginPath();
                                                ctx.moveTo(1,285);  
                                                ctx.lineTo(419,285);  
                                            
                                                ctx.stroke();

                                        
                                                }

function highscoreX(palauteparametri){  // laskee pelaajan ja tietokoneen voitot/tasapelit/häviöt
    x++

    

    palauteparametri.pelaaja.value=x

    }       

    function highscoreT(palauteparametri){
        y++
        
        palauteparametri.tasuri.value=y 
        
        }                                                

        function highscoreO(palauteparametri){
            z++
            
            palauteparametri.tietokone.value=z 
            
            }                                                
            
                                
                                
                                
                                    
                                    
                                
                                    


