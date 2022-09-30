import joi from "joi"

export const updateNoteSchema = joi.object({
    name: joi.string().required(),
    archive: joi.boolean().required(),
    category: joi.string().required(),
    created: joi.date().required(),
    content: joi.string().required(),   
    dates:  joi.string().min(0).required(),  
    picture: joi.string().required()
})