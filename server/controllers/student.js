import Student from "../models/Student.js";

export const createNewUser = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            city,
            email,
            password
        } = req.body;

        const newUser = new Student({
            firstName,
            lastName,
            city,
            email,
            password
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(501).json({error: err.message});
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Student.findOne({email: email });
        if (!user) return res.status(400).json({msg: "User does not exist"});

        const isMatch = await Student.findOne({password: password});
        if (!isMatch) return res.status(400).json({msg: "Invadil credentials"});


        res.status(200).json({ user });

    } catch (err) {
        res.status(500).json({error: err.message});
    }
}
