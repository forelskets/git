export const rules = (field, rule) => {
    console.log("ssssss",field)
    console.log("ssssss",rule)
    let message = ""
    if (field === "") {
        message = rule.fieldName + " is Required!"
    }
    return message
}  