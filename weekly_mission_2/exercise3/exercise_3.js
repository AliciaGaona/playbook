//clase twiter
class Twiter{
    constructor(user,trending_topic, hashtag, noticias){
        this.user=user
        this.trending_topic=trending_topic
        this.hashtag
        this.noticias
    }
}
const twiter =new Twiter("Alicia","...","#hi","") //objeto instanciado
console.log(twiter.user)

//clase fb
class FacebookClass{
    constructor(biografia,post, images, amigos){
        this.biografia=biografia
        this.post=post
        this.images=images
        this.amigos=amigos
    }
}
const fb = new FacebookClass("Alicia","...", "AliciaGaona","Juana")
console.log(fb.amigos)


//clase uber
class Uber{
    constructor(profile,travelDestino,travelInicio,precio,formaDePago,correo){
        this.profile=profile
        this.travelDestino=travelDestino
        this.travelInicio=travelInicio
        this.precio=precio
        this.formaDePago=formaDePago
        this.correo=correo
    }

}
const uber = new Uber("Alicia","Casa de Toño", "Casa", "200", "efectivo","soycorreo@gmail.com")
console.log(uber.precio)