## Spec Tests

### Description: placesToSee(input)
*Test:* "It should create a constructor with properties for each object."
*Code:* function placesToSee("France", ["Eiffel Tower", "Louvre"], "Spring", "Lorem Ipsum", ["Baguette", "Croissant", "Cheese", "Wine"])
*Expected output:* {Location: "France", Landmarks: ["Eiffel Tower", "Louvre"], TimeofYear: "Spring", Notes: "Lorem Ipsum", Food: ["Baguette", "Croissant", "Cheese", "Wine"]}

### Description: placesList(input)
*Test:* "It should create a new function to capture all places in a repository."
*Code:* placesList()
*Expected output:* {places: "", currentId: 0}

*Test:* "It should create a new, unique id for each place added."
*Code:* placesList(place)
*Expected output:* currentId: 1

