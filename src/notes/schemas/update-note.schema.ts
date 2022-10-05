import joi from "joi"

export const updateNoteSchema = joi.object({
    name: joi.string().empty(),
    archive: joi.boolean().empty(),
    category: joi.string().empty(),
    created: joi.date().empty(),
    content: joi.string().empty(),   
    dates:  joi.string().min(0).empty(),  
    picture: joi.string().empty()
})