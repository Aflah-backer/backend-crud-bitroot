import Contact from "../model/ContactModel.js";
import converter from "json-2-csv";
import fs from "fs";

//create Contact
export const createContact = async (req, res, next) => {
  const newContact = new Contact(req.body);
  try {
    const savedContact = await newContact.save();
    res.status(200).json({mesage:"Contact has been saved succcessfully",savedContact});
  } catch (error) {
    next(error);
  }
};


//get all contact
export const getAllContacts = async (req, res, next) => {
  try {
    const getAllContacts = await Contact.find({});
    res.status(200).json({message:"All conatcts have been fetched successfully",getAllContacts});
  } catch (error) {
    next(error);
  }
};

//get single contact
export const getSingleContact = async (req, res, next) => {
  const name = req.params.name;
  try {
    const getSingleContact = await Contact.findOne({ name });
    if (!getSingleContact) {
      res.status(401).json({ message: "Contact is not exist in this name" });
    }
    res
      .status(200)
      .json({ message: "Conatct fetched successfull", getSingleContact });
  } catch (error) {
    next(error);
  }
};


//update Contact
export const updateContact = async (req, res, next) => {
  try {
    const updateContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({messaage:"contact has been upadted successfully",updateContact});
  } catch (error) {
    next(error);
  }
};


//delete
export const deleteContact = async (req, res, next) => {
  try {
    const deleteContact = await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({message:"Contact has been deleted successfully",deleteContact});
  } catch (error) {
    next(error);
  }
};



//converting to csv
export const convertingToCsv = async (req, res, next) => {
  try {
    const data = await Contact.find();
    console.log(data, "hello csv");
    (async () => {
      try {
        const csv = await converter.json2csvAsync(data);
        // write CSV to a file
        res.status(201).send(csv)
      } catch (err) {
        console.log(err);
      }
    })();
  } catch (error) {
    next(error);
  }
};
