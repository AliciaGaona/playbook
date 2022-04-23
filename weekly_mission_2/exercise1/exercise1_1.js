const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
   console.log("Ejercicio 1 Repo")
   
   const Issue ={
    title:"Issue one",
    repositoryNameAssociated: "AAA",
    status: "en revisión",
    numberOfComments: "10",
    labels:"hola",
    author: "Alicia",
    dateCreated: "22/04/2022",
    lastUpdated: "22/04/2022",
    getGeneralInfo: function(){
      return  `Tu Issue se llama ${this.title} y fue creado por ${this.author}, en la fecha ${this.dateCreated} `
    }
   }

   console.log("El nombre del autor es: " + Issue.author + " y el titulo" + Issue.title)
   console.log(Issue.getGeneralInfo())

   const PullRequest={
    title:"PullRequest", 
    branchName:"main",
    dateCreated:"22/04/2022",
    status:"en revisión",
    repositoryNameAssociated:"Reposirotio",
    getStatus: function(){
      return `Status: ${this.status} `
    },
    getTitleAndAutor: function(){
      return `Title: ${this.title} and autor ${this.branchName}`
    }
   }

   console.log(PullRequest.getStatus())
   console.log(PullRequest.getTitleAndAutor())

 