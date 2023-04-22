import Notes from "../models/Notes.js";
import Student from "../models/Student.js";

export const createNewNote = async(req, res) => {
    try {
        const { userId, text } = req.body;
        const user = await Student.findById(userId);
        const newNote = new Notes({
          userId,
          firstName: user.firstName,
          lastName: user.lastName,
          text
        });
        const note = await newNote.save();


        res.status(201).json(note);
      } catch (err) {
        res.status(409).json({ message: err.message });
      }
}

export const deleteNote = async (req, res) => {
  const { noteId, text } = req.body
  const notes = await Notes.findByIdAndDelete( noteId , {
      new: true,
      runValidators: true
  });

  res.status(200).json({success: true, note: notes});
}
