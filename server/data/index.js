import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const mentor = [
    {
        _id: userIds[0],
        firstName: "Joe",
        lastName: "Biden",
        age: 75,
        qualification: "President",
        description: "senior at the Softserve IT - company C# and C++ developer international students group",
        email: "aaaaaaa@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        country: "USA",
        city: "Washington"
    },
    {
        _id: userIds[1],
        firstName: "Ivan",
        lastName: "Petro",
        age: 75,
        qualification: "Backend",
        description: "I`m only human",
        email: "aagfgfbfgaaaaa@gmail.com",
        password: "$3b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        country: "Ukraine",
        city: "Lviv"
    },
    {
        _id: userIds[2],
        firstName: "Maksym",
        lastName: "Idk",
        age: 37,
        qualification: "Fullstack",
        description: "Some description",
        email: "aagfgfbfgaaa5546aa@gmail.com",
        password: "$4b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        country: "France",
        city: "Lviv"
    },
    {
        _id: userIds[3],
        firstName: "Ivan",
        lastName: "Fjfkdg",
        age: 37,
        qualification: "Fullstack",
        description: "Another description here",
        email: "aagfgfb3213fgaaa5546aa@gmail.com",
        password: "$5b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        country: "France",
        city: "Lviv"
    }
]

export const review = [
    {
        firstName: "Sanya",
        lastName: "Pggfh",
        text: "The best design ever"
    },
    {
        firstName: "Sanya",
        lastName: "Pggfh",
        text: "The best platform what i ever seen"
    },
    {
        firstName: "Jan",
        lastName: "Falk",
        text: "Våvinde. E-demokrati. Sudoku. Den nya ekonomin. Monoligt. Sust. "
    },
    {
        firstName: "Annika",
        lastName: "Lind",
        text: "Just text"
    }
]
