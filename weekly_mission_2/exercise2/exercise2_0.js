const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "CDMX",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   console.log(explorers)

   console.log("Ejercicio2, punto1")
   explorers.forEach(explorer=> console.log(explorer.name))

   console.log("Ejercicio2, punto2")
   explorers.forEach(item=> console.log(item.stack))

   console.log("Ejercicio2, punto3")
   const miListaExplorers_staks= explorers.map(miListaDeExplorers => miListaDeExplorers.stack)
   console.log(miListaExplorers_staks)

   console.log("Ejercicio2, punto4")
   const miListaExplorers_staksConJs= explorers.filter(miListaDeExplorers => miListaDeExplorers.stack.includes("js"))
   console.log(miListaExplorers_staksConJs)

   console.log("Ejercicio2, punto5")
   const explorerCDMX= explorers.find(miListaDeExplorers => miListaDeExplorers.city=="CDMX")
   console.log(explorerCDMX)

   console.log("Ejercicio2, punto6")
   const all_exercises_completed= explorers.reduce((a, explorers) => a + explorers.exercises_completed, 0)
   console.log(all_exercises_completed)

  console.log("Ejercicio2, punto7")
  //creo una nueva lista usando map de los exercisesFinished
  const exercisesFinished_true_existsm= explorers.map(miListaDeExplorers => miListaDeExplorers.missions.frontend.exercisesFinished)
  //console.log(exercisesFinished_true_existsm)
  //resultado =>> [ true, false, false ]
  //sobre esa nueva lista aplico el some para ver si al gun explorer tiene la propiedad exercisesFinished como true
   const exercisesFinished_true_exists= exercisesFinished_true_existsm.some((s) => s==true)  
   console.log(exercisesFinished_true_exists)

   console.log("Ejercicio2, punto8")
   const isFinished_onboarding_exists= explorers.map(miListaIsFinished => miListaIsFinished.missions.onboarding.isFinished)
   const isFinished_onboarding_exists_true = isFinished_onboarding_exists.every((s)=>s==true)
   console.log(isFinished_onboarding_exists_true)
  
