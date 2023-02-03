
// Validation for POST
const validateBlogData = (newBlog)=>{
    if (typeof(newBlog.title) !== "string"){
        return{
            isValid: false,
            message: "Title is required and it must be a string"
        }
    } else if (newBlog.title.length >= 40){
        return{
            isValid: false,
            message: "Title length should be no more than 40 characters"
        }
    } else if (typeof(newBlog.text) !== "string"){
        return{
            isValid: false,
            message: "Text is required and it must be a string"
        }
    } else if (typeof(newBlog.author) !== "string"){
        return{
            isValid: false,
            message: "Author is required and it must be a string"
        }
    }else if (newBlog.author.length >= 40){
        return{
            isValid: false,
            message: "Author length should be no more than 40 characters"
        }
    }

    return{
        isValid: true
    }
}


// Validation for PUT
const validateUpdatedBlogData = (updatedBlog)=>{
    if (typeof(updatedBlog.title) !== "string"){
        return{
            isValid: false,
            message: "Title is required and it must be a string"
        }
    } else if (updatedBlog.title.length >= 40){
        return{
            isValid: false,
            message: "Title length should be no more than 40 characters"
        }
    } else if (typeof(updatedBlog.text) !== "string"){
        return{
            isValid: false,
            message: "Text is required and it must be a string"
        }
    } else if (typeof(updatedBlog.author) !== "string"){
        return{
            isValid: false,
            message: "Author is required and it must be a string"
        }
    }else if (updatedBlog.author >= 40){
        return{
            isValid: false,
            message: "Author length should be no more than 40 characters"
        }
    }

    return{
        isValid: true
    }
}





module.exports = {
    validateBlogData,
    validateUpdatedBlogData
}